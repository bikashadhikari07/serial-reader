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
//   const [connected, setConnected] = useState(false);
//   const [config, setConfig] = useState(null);

//   const parsedData = parseMilkData(serialData);

//   const handleConnect = (data, config) => {
//     setSerialData(data);
//     setConfig(config);
//     setConnected(true);
//   };

//   const handleDisconnect = () => {
//     setSerialData("");
//     setConfig(null);
//     setConnected(false);
//   };

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

//       {!connected ? (
//         <SerialReader
//           onData={(data) => handleConnect(data, null)}
//           onConfig={(config) => setConfig(config)}
//         />
//       ) : (
//         <div style={{ maxWidth: 500, margin: "0 auto" }}>
//           <p
//             style={{
//               textAlign: "center",
//               fontSize: "1rem",
//               marginBottom: "1rem",
//             }}
//           >
//             Connected to USB device at{" "}
//             <strong>{config?.baudRate || 9600} bps</strong>
//           </p>
//           <MilkAnalyzer parsedData={parsedData} />
//           <div style={{ textAlign: "center", marginTop: 20 }}>
//             <button
//               onClick={handleDisconnect}
//               style={{ padding: "10px 20px", fontSize: "1rem" }}
//             >
//               Disconnect
//             </button>
//           </div>
//         </div>
//       )}
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
//     const match = input.match(new RegExp(label + "[.\\s:]*?(\\d+\\.?\\d*)%?"));
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
//   const [connected, setConnected] = useState(false);
//   const [config, setConfig] = useState(null);

//   const parsedData = parseMilkData(serialData);

//   const handleConnect = (data, config) => {
//     setSerialData(data);
//     setConfig(config);
//     setConnected(true);
//   };

//   const handleDisconnect = () => {
//     setSerialData("");
//     setConfig(null);
//     setConnected(false);
//   };

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

//       {!connected ? (
//         <SerialReader
//           onData={(data) => handleConnect(data, null)}
//           onConfig={(config) => setConfig(config)}
//         />
//       ) : (
//         <div style={{ maxWidth: 500, margin: "0 auto" }}>
//           <p
//             style={{
//               textAlign: "center",
//               fontSize: "1rem",
//               marginBottom: "1rem",
//             }}
//           >
//             Connected to USB device at{" "}
//             <strong>{config?.baudRate || 9600} bps</strong>
//           </p>
//           <MilkAnalyzer parsedData={parsedData} />
//           <div style={{ textAlign: "center", marginTop: 20 }}>
//             <button
//               onClick={handleDisconnect}
//               style={{ padding: "10px 20px", fontSize: "1rem" }}
//             >
//               Disconnect
//             </button>
//           </div>
//         </div>
//       )}
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
//     const match = input.match(new RegExp(label + "[.\\s:]*?(\\d+\\.?\\d*)%?"));
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
//   const [config, setConfig] = useState({
//     baudRate: 9600,
//     dataBits: 8,
//     stopBits: 1,
//     parity: "none",
//   });

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

//       <SerialReader
//         config={config}
//         setConfig={setConfig}
//         onData={(data) => setSerialData(data)}
//       />

//       <div style={{ maxWidth: 500, margin: "0 auto", marginTop: 20 }}>
//         <MilkAnalyzer parsedData={parsedData} />
//       </div>
//     </div>
//   );
// }

// export default App;

//was working

///new
import React, { useState, useEffect } from "react";
import SerialReader from "./components/SerialReader";

// Parsing function for milk data
const parseMilkData = (input) => {
  const extract = (label) => {
    const match = input.match(new RegExp(label + "[.\\s:]*?(\\d+\\.?\\d*)%?"));
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
  const [config, setConfig] = useState({
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
  });
  const [showTerminal, setShowTerminal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const parsedData = parseMilkData(serialData);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar or nothing on mobile */}
      {!isMobile && (
        <aside
          style={{
            flexShrink: 0,
            width: 280,
            padding: 20,
            borderRight: "1px solid #ccc",
            boxSizing: "border-box",
            backgroundColor: "#f8f8f8",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Config</h2>
          <SerialReader
            config={config}
            setConfig={setConfig}
            onData={(data) => setSerialData(data)}
            showTerminal={showTerminal}
            hideTerminalToggle
          />
        </aside>
      )}

      {/* Main Content */}
      <main
        style={{
          flexGrow: 1,
          marginLeft: !isMobile ? 280 : 0,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        {/* Mobile: Show config button */}
        {isMobile && (
          <button
            onClick={() => setShowConfigModal(true)}
            style={{
              marginBottom: 15,
              padding: "8px 12px",
              fontSize: "1rem",
              alignSelf: "flex-start",
            }}
            aria-label="Open Config"
          >
            ⚙️ Config
          </button>
        )}

        {/* Parsed Data Table */}
        <div style={{ overflowX: "auto", marginBottom: 15 }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <tbody>
              {parsedData &&
                Object.entries(parsedData).map(([key, value]) => (
                  <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                    <td
                      style={{
                        padding: "8px 12px",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        backgroundColor: "#f0f0f0",
                        width: "40%",
                      }}
                    >
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td style={{ padding: "8px 12px" }}>
                      {value !== null && value !== undefined ? value : "--"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Terminal Toggle Button */}
        <div style={{ marginBottom: 10, textAlign: "right" }}>
          <button onClick={() => setShowTerminal(!showTerminal)}>
            {showTerminal ? "Hide Terminal" : "Show Terminal"}
          </button>
        </div>

        {/* Terminal */}
        {showTerminal && (
          <div
            style={{
              backgroundColor: "#111",
              color: "#0f0",
              padding: 10,
              height: 150,
              overflowY: "scroll",
              fontFamily: "monospace",
              borderRadius: 4,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <pre>{serialData}</pre>
          </div>
        )}
      </main>

      {/* Modal for config on mobile */}
      {isMobile && showConfigModal && (
        <>
          <div
            onClick={() => setShowConfigModal(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1000,
            }}
          />
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              width: "90vw",
              maxWidth: 320,
              zIndex: 1001,
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Config</h2>
            <SerialReader
              config={config}
              setConfig={setConfig}
              onData={(data) => setSerialData(data)}
              showTerminal={showTerminal}
              hideTerminalToggle
            />
            <button
              onClick={() => setShowConfigModal(false)}
              style={{
                marginTop: 15,
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
