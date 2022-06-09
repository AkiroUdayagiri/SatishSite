import "./plurality.css";
import {
  createContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory";
import Nav from "../Nav";

function Plurality() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = [
    { x: new Date(1982, 1, 1), y: 125 },
    { x: new Date(1987, 1, 1), y: 257 },
    { x: new Date(1993, 1, 1), y: 345 },
    { x: new Date(1997, 1, 1), y: 515 },
    { x: new Date(2001, 1, 1), y: 132 },
    { x: new Date(2005, 1, 1), y: 305 },
  ];
  const VictoryZoomCursorContainer = createContainer("zoom", "cursor");
  return (
    <div className="App">
      <Nav />
      <div className="chart">
        <VictoryChart
          width={600}
          height={300}
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryZoomCursorContainer
              allowZoom={true}
              allowPan={true}
              zoomDimension="x"
              cursorLabel={({ datum }) =>
                `Date: ${`${
                  months[datum.x.getMonth()]
                } ${datum.x.getDate()}`}, Price: ${Math.round(datum.y)}`
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
