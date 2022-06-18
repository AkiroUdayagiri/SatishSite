import "./plurality.css";
import {
  createContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory";
import Nav from "../Nav";
import { useState } from "react";
import React from "react";
import industries from "./components/industries";

function Plurality() {
  const [data, setData] = useState([]);
  const [industry, setIndustry] = useState("Finance-Publ Inv Fd-Glbl");

  function getData() {
    fetch(`/api/plurality/${encodeURIComponent(industry)}`)
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
      <div className="industry-dropdown">
        <hr />
        <hr />
        <hr />
        <hr />
        <form>
          <label>Industry:</label>
          <select
            onChange={(e) => {
              e.preventDefault();
              setIndustry(e.target.value);
              console.log(e.target.value);
            }}
          >
            {industries.map((industry) => {
              return (
                <option name={industry} value={industry}>
                  {industry}
                </option>
              );
            })}
          </select>
        </form>
      </div>
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
