import Card from "../components/Card";
import Item2 from "../components/Item2";
import Item22 from "../components/Item22";
import Item from "../components/item";
import Item3 from "../components/item3";
import { ToolBox } from "../styled";

export default function Processing(): JSX.Element {
  return (
    <ToolBox>
      <Card name="Sensor">
        <Item2 name="Frames per second" maxValue={450} />
        <Item name="Double frame rate" />
        <Item3 name="Exposure control" />
        <Item22 name="Exposure, us:" maxValue={100} />
        <Item3 name="EDR Mode" />
      </Card>
      <Card name="Laser">
        <Item name="Double frame rate" />
        <Item2 name="Frames per second" maxValue={450} />
        <Item name="Frames per second" />
        <Item2 name="Frames per second" maxValue={450} />
      </Card>
    </ToolBox>
  );
}
