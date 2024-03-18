import { CaretRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import Item2 from "./Item2";
import Item from "./item";

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 6px;
  background: #616161;
  border-radius: 3px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`;

const HeaderRight = styled.div``;

const Content = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-flow: column nowrap;
  height: ${({ open }) => (open ? "fit-content" : 0)};
  margin-top: 12px;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
`;

type Props = {
  name: string;
  children: JSX.Element | JSX.Element[];
};

export default function Card({ name, children }: Props): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <Wrap>
      <Header>
        <HeaderLeft onClick={toggle}>
          <CaretRightOutlined rotate={open ? 90 : 0} />
          <span>{name}</span>
        </HeaderLeft>
        <HeaderRight>
          <InfoCircleOutlined />
        </HeaderRight>
      </Header>
      <Content open={open}>{children}</Content>
    </Wrap>
  );
}
