import "./plurality.css";
import {
  createContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory";
import Nav from "../Nav";
import { useState } from "react";

function Plurality() {
  const [data, setData] = useState([]);

  function getData() {
    fetch(
      `/api/plurality/${encodeURIComponent(`${"Auto/Truck-Tires & Misc"}`)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(() => {
          return data.data.map((item) => {
            return {
              x: new Date(item.x),
              y: item.y,
            };
          });
        });
      });
  }

  getData();

  const VictoryZoomCursorContainer = createContainer("zoom", "cursor");
  return (
    <div className="App">
      <Nav />
      <div className="chart">
        <VictoryChart
          width={700}
          height={300}
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryZoomCursorContainer
              allowZoom={true}
              allowPan={true}
              zoomDimension="x"
              cursorLabel={({ datum }) =>
                `Date: ${`${`${datum.x}`
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")} `}, Price: ${Math.round(datum.y)}`
              }
            />
          }
        >
          <VictoryLine width={1000} data={data} />
        </VictoryChart>
      </div>
    </div>
  );
}

export default Plurality;
