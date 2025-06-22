// import React, { useState, useRef } from "react";

// const SerialReader = () => {
//   const [data, setData] = useState("");
//   const [isConnected, setIsConnected] = useState(false);
//   const portRef = useRef(null);

//   const [settings, setSettings] = useState({
//     baudRate: 9600,
//     dataBits: 8,
//     stopBits: 1,
//     parity: "none",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSettings({ ...settings, [name]: value });
//   };

//   const connectSerial = async () => {
//     try {
//       const port = await navigator.serial.requestPort();
//       await port.open({
//         baudRate: Number(settings.baudRate),
//         dataBits: Number(settings.dataBits),
//         stopBits: Number(settings.stopBits),
//         parity: settings.parity,
//       });

//       portRef.current = port;
//       setIsConnected(true);

//       const reader = port.readable.getReader();

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;
//         const decoded = new TextDecoder().decode(value);
//         setData((prev) => prev + decoded);
//       }

//       reader.releaseLock();
//     } catch (err) {
//       console.error("Serial connection failed:", err);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Serial Port Reader</h2>

//       <div>
//         <label>Baud Rate: </label>
//         <input
//           name="baudRate"
//           value={settings.baudRate}
//           onChange={handleChange}
//         />

//         <label> Data Bits: </label>
//         <select
//           name="dataBits"
//           value={settings.dataBits}
//           onChange={handleChange}
//         >
//           <option value={7}>7</option>
//           <option value={8}>8</option>
//         </select>

//         <label> Stop Bits: </label>
//         <select
//           name="stopBits"
//           value={settings.stopBits}
//           onChange={handleChange}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//         </select>

//         <label> Parity: </label>
//         <select name="parity" value={settings.parity} onChange={handleChange}>
//           <option value="none">None</option>
//           <option value="even">Even</option>
//           <option value="odd">Odd</option>
//         </select>
//       </div>

//       <button
//         onClick={connectSerial}
//         disabled={isConnected}
//         style={{ marginTop: 10 }}
//       >
//         {isConnected ? "Connected" : "Connect"}
//       </button>

//       <pre
//         style={{
//           marginTop: 20,
//           background: "#111",
//           color: "#0f0",
//           padding: 10,
//           height: 200,
//           overflowY: "scroll",
//         }}
//       >
//         {data}
//       </pre>
//     </div>
//   );
// };

// export default SerialReader;

import React, { useState, useRef } from "react";

const SerialReader = ({ onData, onConfig }) => {
  const [data, setData] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const portRef = useRef(null);

  const [settings, setSettings] = useState({
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const connectSerial = async () => {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({
        baudRate: Number(settings.baudRate),
        dataBits: Number(settings.dataBits),
        stopBits: Number(settings.stopBits),
        parity: settings.parity,
      });

      portRef.current = port;
      setIsConnected(true);
      if (onConfig) onConfig(settings); // report config to App

      const reader = port.readable.getReader();
      let fullData = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const decoded = new TextDecoder().decode(value);
        fullData += decoded;
        setData(fullData);
        if (onData) onData(fullData); // send full data to App
      }

      reader.releaseLock();
    } catch (err) {
      console.error("Serial connection failed:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Configure USB Serial Connection</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label>
          Baud Rate:
          <input
            name="baudRate"
            type="number"
            value={settings.baudRate}
            onChange={handleChange}
          />
        </label>

        <label>
          Data Bits:
          <select
            name="dataBits"
            value={settings.dataBits}
            onChange={handleChange}
          >
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </label>

        <label>
          Stop Bits:
          <select
            name="stopBits"
            value={settings.stopBits}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </label>

        <label>
          Parity:
          <select name="parity" value={settings.parity} onChange={handleChange}>
            <option value="none">None</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </select>
        </label>
      </div>

      <button
        onClick={connectSerial}
        disabled={isConnected}
        style={{ marginTop: 15 }}
      >
        {isConnected ? "Connected" : "Connect"}
      </button>

      <pre
        style={{
          marginTop: 20,
          background: "#111",
          color: "#0f0",
          padding: 10,
          height: 150,
          overflowY: "scroll",
        }}
      >
        {data}
      </pre>
    </div>
  );
};

export default SerialReader;
