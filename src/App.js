import { useEffect, useState } from "react";
import createTable from "./utils/createTable";
let limit = 20;
let offset = 0;

function App() {
  const [data, setData] = useState(() => {
    createTable({ limit, offset }).then((result) => {
      setData(result);
    });
  });
  useEffect(() => {
    console.log("useEffect");
    if (!offset) document.getElementById("prev").disabled = "true";
    else document.getElementById("prev").removeAttribute("disabled");
    if (data?.length < limit) document.getElementById("next").disabled = "true";
    else document.getElementById("next").removeAttribute("disabled");
  }, [data]);
  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.mission_name}>
            {item.flight_number} {item.mission_name} {item.rocket_name}
            {item.launch_year}
          </div>
        );
      })}

      <button
        id="prev"
        onClick={() => {
          if (offset) {
            offset -= 20;
            createTable({ limit, offset }).then((result) => {
              setData(result);
            });
          }
        }}
      >
        prev
      </button>
      <button
        id="next"
        onClick={() => {
          offset += 20;
          createTable({ limit, offset }).then((result) => {
            if (result.length) setData(result);
          });
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
