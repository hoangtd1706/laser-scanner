import Card from "../components/Card";
import Item2 from "../components/Item2";
import Item from "../components/item";
import { ToolBox } from "../styled";

export default function Trigger(): JSX.Element {
  return (
    <ToolBox>
      <Card name="Stream">
        <Item name="Double frame rate" />
        <Item2 name="Frames per second" maxValue={450} />
        <Item name="Frames per second" />
        <Item2 name="Frames per second" maxValue={450} />
      </Card>
    </ToolBox>
  );
}
