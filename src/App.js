// import React from "react";
// import SerialReader from "./components/SerialReader";

// function App() {
//   return (
//     <div className="App">
//       <SerialReader />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import SerialReader from "./components/SerialReader";
// import MilkAnalyzer from "./components/MilkAnalyzer";

// // Parsing function for milk data
// const parseMilkData = (input) => {
//   const extract = (label) => {
//     const match = input.match(new RegExp(label + ".*?(\\d+\\.?\\d*)%?"));
//     return match ? parseFloat(match[1]) : null;
//   };

//   const fat = extract("Fat");
//   const snf = extract("SNF");
//   const density = parseFloat(
//     (input.match(/Density.*?(\\d+\\.?\\d*)/) || [])[1]
//   );
//   const protein = extract("Protein");
//   const addedWater = extract("Added water");

//   let milkType = "Unknown";
//   if (fat != null) {
//     milkType = fat >= 4.5 ? "Buffalo" : fat >= 0.1 ? "Cow" : "Unknown";
//   }

//   const lactose = milkType === "Buffalo" ? snf * 0.45 : snf * 0.55;
//   const salt = milkType === "Buffalo" ? snf * 0.075 : snf * 0.083;

//   return {
//     fat,
//     snf,
//     density,
//     protein,
//     addedWater,
//     milkType,
//     lactose: parseFloat(lactose?.toFixed(2)),
//     salt: parseFloat(salt?.toFixed(2)),
//   };
// };

// function App() {
//   const [serialData, setSerialData] = useState("");

//   const parsedData = parseMilkData(serialData);

//   return (
//     <div className="App">
//       <SerialReader onData={setSerialData} />
//       <MilkAnalyzer rawData={serialData} parsedData={parsedData} />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import SerialReader from "./components/SerialReader";
// import MilkAnalyzer from "./components/MilkAnalyzer";

// // Parsing function for milk data
// const parseMilkData = (input) => {
//   const extract = (label) => {
//     const match = input.match(new RegExp(label + "[.s:]*?(d+.?d*)%?"));
//     return match ? parseFloat(match[1]) : null;
//   };

//   const fat = extract("Fat");
//   const snf = extract("SNF");
//   const density = parseFloat((input.match(/Density.*?(\d+\.?\d*)/) || [])[1]);
//   const protein = extract("Protein");
//   const addedWater = extract("Added water");

//   let milkType = "Unknown";
//   if (fat != null) {
//     milkType = fat >= 4.5 ? "Buffalo" : fat >= 0.1 ? "Cow" : "Unknown";
//   }

//   const lactose = milkType === "Buffalo" ? snf * 0.45 : snf * 0.55;
//   const salt = milkType === "Buffalo" ? snf * 0.075 : snf * 0.083;

//   return {
//     fat,
//     snf,
//     density,
//     protein,
//     addedWater,
//     milkType,
//     lactose: parseFloat(lactose?.toFixed(2)),
//     salt: parseFloat(salt?.toFixed(2)),
//   };
// };

// function App() {
//   const [serialData, setSerialData] = useState("");
//   const parsedData = parseMilkData(serialData);

//   return (
//     <div
//       className="App"
//       style={{ padding: 10, fontFamily: "Arial, sans-serif" }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "1.5rem",
//           marginBottom: "1rem",
//         }}
//       >
//         Milk Analyzer
//       </h1>
//       <SerialReader onData={setSerialData} />
//       <div style={{ maxWidth: 800, margin: "0 auto" }}>
//         <MilkAnalyzer parsedData={parsedData} />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import SerialReader from "./components/SerialReader";
import MilkAnalyzer from "./components/MilkAnalyzer";

// Parsing function for milk data
const parseMilkData = (input) => {
  const extract = (label) => {
    const match = input.match(new RegExp(label + "[.s:]*?(d+.?d*)%?"));
    return match ? parseFloat(match[1]) : null;
  };

  const fat = extract("Fat");
  const snf = extract("SNF");
  const density = parseFloat((input.match(/Density.*?(\d+\.?\d*)/) || [])[1]);
  const protein = extract("Protein");
  const addedWater = extract("Added water");

  let milkType = "Unknown";
  if (fat != null) {
    milkType = fat >= 4.5 ? "Buffalo" : fat >= 0.1 ? "Cow" : "Unknown";
  }

  const lactose = milkType === "Buffalo" ? snf * 0.45 : snf * 0.55;
  const salt = milkType === "Buffalo" ? snf * 0.075 : snf * 0.083;

  return {
    fat,
    snf,
    density,
    protein,
    addedWater,
    milkType,
    lactose: parseFloat(lactose?.toFixed(2)),
    salt: parseFloat(salt?.toFixed(2)),
  };
};

function App() {
  const [serialData, setSerialData] = useState("");
  const [connected, setConnected] = useState(false);
  const [config, setConfig] = useState(null);

  const parsedData = parseMilkData(serialData);

  const handleConnect = (data, config) => {
    setSerialData(data);
    setConfig(config);
    setConnected(true);
  };

  const handleDisconnect = () => {
    setSerialData("");
    setConfig(null);
    setConnected(false);
  };

  return (
    <div
      className="App"
      style={{ padding: 10, fontFamily: "Arial, sans-serif" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        Milk Analyzer
      </h1>

      {!connected ? (
        <SerialReader
          onData={(data) => handleConnect(data, null)}
          onConfig={(config) => setConfig(config)}
        />
      ) : (
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            Connected to USB device at{" "}
            <strong>{config?.baudRate || 9600} bps</strong>
          </p>
          <MilkAnalyzer parsedData={parsedData} />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              onClick={handleDisconnect}
              style={{ padding: "10px 20px", fontSize: "1rem" }}
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
