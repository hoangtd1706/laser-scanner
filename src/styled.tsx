import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuSideWidth = 300;

export const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .SplitterGutter {
    padding: 0 1px;
    flex-direction: column;
    background: #616161;
  }
`;

export const WrapHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 42px;
  width: 100%;
  border-bottom: 1px solid #818181;
`;

export const Brand = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 34px;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: calc(100% - 42px);
  overflow: hidden;
`;

export const WrapLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: ${MenuSideWidth}px;
  height: 100%;
  border-right: 1px solid #818181;
`;

export const WrapRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - ${MenuSideWidth}px);
  height: 100%;
`;

export const WrapMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WrapMenuBar = styled.div`
  position: relative;
  width: 26px;
  height: 100%;
  border-right: 1px solid #818181;
  overflow: hidden;
`;

export const MenuBar = styled.div`
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: auto;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #555555;
  }

  &.active {
    background: #616161;
  }
`;

export const MenuText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`;

export const HeaderLeft = styled.div`
  width: ${MenuSideWidth}px;
  height: 100%;
  border-right: 1px solid #818181;
`;

export const HeaderRight = styled.div`
  width: calc(100% - ${MenuSideWidth}px);
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 6px;
  width: fit-content;
  height: 100%;
`;

export const HeaderContentItem = styled.div`
  font-size: 12px;
  color: #fff;
`;

export const HeaderActionArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 6px;
  border-left: 1px solid #818181;
`;

export const MainContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SmartBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GraphArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ToolBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 6px;
  width: 100%;
  height: 100%;
  padding: 6px;
  overflow: hidden;
  overflow-y: auto;
`;
