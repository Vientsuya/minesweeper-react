import { useState } from "react";

function App() {
  const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(0)));

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-[42rem] w-[42rem]">
        <div className="w-full h-full grid grid-cols-10">
          {grid.map((row, i) => {
            return row.map((cell, j) => (
              <div
                className={
                  i % 2 === 0
                    ? j % 2 == 0
                      ? "bg-slate-700"
                      : "bg-slate-800"
                    : j % 2 == 1
                    ? "bg-slate-700"
                    : "bg-slate-800"
                }
              ></div>
            ));
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
