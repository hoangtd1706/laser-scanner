import { InputNumber, Slider } from "antd";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  maxValue: number;
};

const Item = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #8a8a8a;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const CardItemText = styled.div``;

const CardItemMax = styled.div`
  width: fit-content;
  padding: 3px 6px;
  color: #1890ff;
  font-size: 12px;
  font-weight: bold;
  background: #e6f7ff;
  border-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const SlideWrap = styled.div`
  display: block;
  display: block;
  flex: 0 0 78%;
  max-width: 78%;
`;

export default function Item2({ name, maxValue }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<number | null>(null);

  const onChange = (newValue: number | null) => {
    setInputValue(newValue);
  };

  return (
    <Item>
      <Header>
        <CardItemText>{name}</CardItemText>
        <CardItemMax>
          <span>Max: {maxValue}</span>
        </CardItemMax>
      </Header>
      <Content>
        <SlideWrap>
          <Slider
            min={0}
            max={maxValue}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </SlideWrap>
        <InputNumber
          size="small"
          min={0}
          max={maxValue}
          value={inputValue}
          onChange={onChange}
        />
      </Content>
    </Item>
  );
}
