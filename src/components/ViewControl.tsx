import { useLocation } from "react-router-dom";
import Splitter, { SplitDirection, GutterTheme } from "@devbookhq/splitter";
import { GraphArea, SmartBlock } from "../styled";

export default function ViewControl(): JSX.Element {
  const location = useLocation();
  return (
    <Splitter
      direction={SplitDirection.Horizontal}
      gutterTheme={GutterTheme.Light}
      gutterClassName="SplitterGutter"
    >
      {location.pathname === "/smart" && <SmartBlock>Smart block</SmartBlock>}
      <GraphArea>Graph</GraphArea>
    </Splitter>
  );
}
