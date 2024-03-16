import {
  DownloadOutlined,
  ReloadOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const MenuSideWidth = 300;

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WrapHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 42px;
  width: 100%;
  border-bottom: 1px solid #818181;
`;

const Brand = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 34px;
`;

const WrapContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: calc(100% - 42px);
  overflow: hidden;
`;

const WrapLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: ${MenuSideWidth}px;
  height: 100%;
  border-right: 1px solid #818181;
`;

const WrapRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - ${MenuSideWidth}px);
  height: 100%;
`;

const WrapMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WrapMenuBar = styled.div`
  position: relative;
  width: 26px;
  height: 100%;
  border-right: 1px solid #818181;
  overflow: hidden;
`;

const MenuBar = styled.div`
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: auto;
  background: ${({ active }) => (active ? "#616161" : "transparent")};
  cursor: pointer;
  &:hover {
    background: #555555;
  }
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`;

const HeaderLeft = styled.div`
  width: ${MenuSideWidth}px;
  height: 100%;
  border-right: 1px solid #818181;
`;

const HeaderRight = styled.div`
  width: calc(100% - ${MenuSideWidth}px);
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 6px;
  width: fit-content;
  height: 100%;
`;

const HeaderContentItem = styled.div`
  font-size: 12px;
  color: #fff;
`;

const HeaderActionArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 6px;
  border-left: 1px solid #818181;
`;

function App() {
  return (
    <Wrap>
      <WrapHeader>
        <HeaderLeft>
          <Brand>Brand name</Brand>
        </HeaderLeft>
        <HeaderRight>
          <HeaderContent>
            <HeaderContentItem>
              <span>Model: </span>
              <span>Laser scanner</span>
            </HeaderContentItem>
            <HeaderContentItem>
              <span>S/N: </span>
              <span>12345</span>
            </HeaderContentItem>
            <HeaderContentItem>
              <span>Ver: </span>
              <span>1.2.1</span>
            </HeaderContentItem>
            <HeaderContentItem>
              <span>Range: </span>
              <span>70/130 - 40/86</span>
            </HeaderContentItem>
          </HeaderContent>
          <HeaderContent>
            <HeaderActionArea>
              <HeaderContentItem>
                <span>04:00:30. </span>
                <span>Read file result ok</span>
              </HeaderContentItem>
            </HeaderActionArea>
            <HeaderActionArea>
              <Button size="small" icon={<SaveOutlined />} type="primary" />
              <Button size="small" icon={<DownloadOutlined />} type="primary" />
              <Button size="small" icon={<ReloadOutlined />} type="primary" />
            </HeaderActionArea>
          </HeaderContent>
        </HeaderRight>
      </WrapHeader>
      <WrapContent>
        <WrapLeft>
          <WrapMenu>
            <WrapMenuBar>
              <MenuBar>
                <MenuItem active={true}>
                  <MenuText>General</MenuText>
                </MenuItem>
                <MenuItem active={false}>
                  <MenuText>Processing</MenuText>
                </MenuItem>
                <MenuItem active={false}>
                  <MenuText>Trigger</MenuText>
                </MenuItem>
                <MenuItem active={false}>
                  <MenuText>Smart</MenuText>
                </MenuItem>
                <MenuItem active={false}>
                  <MenuText>Network</MenuText>
                </MenuItem>
              </MenuBar>
            </WrapMenuBar>
          </WrapMenu>
        </WrapLeft>
        <WrapRight></WrapRight>
      </WrapContent>
    </Wrap>
  );
}

export default App;
