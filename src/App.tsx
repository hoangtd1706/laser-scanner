import {
  DownloadOutlined,
  ReloadOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  Brand,
  GraphArea,
  HeaderActionArea,
  HeaderContent,
  HeaderContentItem,
  HeaderLeft,
  HeaderRight,
  MainContent,
  MenuBar,
  MenuItem,
  MenuText,
  SmartBlock,
  Wrap,
  WrapContent,
  WrapHeader,
  WrapLeft,
  WrapMenu,
  WrapMenuBar,
  WrapRight,
} from "./styled";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import General from "./pages/general";
import Processing from "./pages/processing";
import Trigger from "./pages/trigger";
import Network from "./pages/network";
import Smart from "./pages/smart";

function App() {
  const location = useLocation();
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
                <MenuItem to={"/"}>
                  <MenuText>General</MenuText>
                </MenuItem>
                <MenuItem to={"/processing"}>
                  <MenuText>Processing</MenuText>
                </MenuItem>
                <MenuItem to={"/trigger"}>
                  <MenuText>Trigger</MenuText>
                </MenuItem>
                <MenuItem to={"/smart"}>
                  <MenuText>Smart</MenuText>
                </MenuItem>
                <MenuItem to={"/network"}>
                  <MenuText>Network</MenuText>
                </MenuItem>
              </MenuBar>
            </WrapMenuBar>
            <Routes>
              <Route path="/" element={<General />} />
              <Route path="/processing" element={<Processing />} />
              <Route path="/trigger" element={<Trigger />} />
              <Route path="/smart" element={<Smart />} />
              <Route path="/network" element={<Network />} />
            </Routes>
          </WrapMenu>
        </WrapLeft>
        <WrapRight>
          <MainContent>
            {location.pathname === "/smart" && (
              <SmartBlock>Smart block</SmartBlock>
            )}
            <GraphArea>Graph</GraphArea>
          </MainContent>
        </WrapRight>
      </WrapContent>
    </Wrap>
  );
}

export default App;
