import { Switch } from "antd";
import { useState } from "react";
import styled from "styled-components";

const CardItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #8a8a8a;
`;

const CardItemText = styled.div`
  cursor: pointer;
`;

type Props = {
  name: string;
};

export default function Item({ name }: Props): JSX.Element {
  const [value, setValue] = useState(false);

  return (
    <CardItem>
      <CardItemText onClick={() => setValue(!value)}>{name}</CardItemText>
      <Switch
        size="small"
        value={value}
        onChange={(checked: boolean) => setValue(checked)}
      />
    </CardItem>
  );
}
