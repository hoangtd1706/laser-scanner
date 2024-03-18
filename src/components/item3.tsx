import { Select } from "antd";
import styled from "styled-components";

type Props = {
  name: string;
};

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

export default function Item3({ name }: Props): JSX.Element {
  return (
    <CardItem>
      <CardItemText>{name}</CardItemText>
      <Select
        size="small"
        defaultValue="lucy"
        style={{ width: 80 }}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </CardItem>
  );
}
