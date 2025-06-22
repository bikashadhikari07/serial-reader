// import React from "react";

// const ParameterBox = ({ label, value, unit = "" }) => (
//   <div
//     style={{
//       flex: 1,
//       minWidth: 120,
//       background: "#1e1e1e",
//       color: "#0f0",
//       borderRadius: 10,
//       padding: 15,
//       margin: 10,
//       textAlign: "center",
//       boxShadow: "0 0 10px rgba(0,255,0,0.2)",
//     }}
//   >
//     <h4 style={{ margin: 5 }}>{label}</h4>
//     <p style={{ fontSize: 24, margin: 0 }}>
//       {value !== undefined && value !== null ? value : "--"} {unit}
//     </p>
//   </div>
// );

// const MilkAnalyzer = ({ parsedData }) => {
//   if (!parsedData) return null;

//   const { fat, snf, protein, density, addedWater, milkType, lactose, salt } =
//     parsedData;

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         padding: 20,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <ParameterBox label="FAT" value={fat} unit="%" />
//       <ParameterBox label="SNF" value={snf} unit="%" />
//       <ParameterBox label="Protein" value={protein} unit="%" />
//       <ParameterBox label="Density" value={density} />
//       <ParameterBox label="Added Water" value={addedWater} unit="%" />
//       <ParameterBox label="Milk Type" value={milkType} />
//       <ParameterBox label="Lactose" value={lactose} unit="%" />
//       <ParameterBox label="Salt" value={salt} unit="%" />
//     </div>
//   );
// };

// export default MilkAnalyzer;

///two col style
import React from "react";

const ParameterBox = ({ label, value, unit = "" }) => (
  <div
    style={{
      flex: "1 1 45%",
      background: "#222",
      color: "#0f0",
      borderRadius: 6,
      padding: 10,
      margin: 5,
      boxSizing: "border-box",
      textAlign: "center",
      minWidth: 140,
    }}
  >
    <div style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>
      {label}
    </div>
    <div style={{ fontSize: 22, fontWeight: "bold" }}>
      {value !== null && value !== undefined ? value : "--"} {unit}
    </div>
  </div>
);

const MilkAnalyzer = ({ parsedData }) => {
  if (!parsedData) return null;

  const { fat, snf, protein, density, addedWater, milkType, lactose, salt } =
    parsedData;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: 400,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <ParameterBox label="Fat" value={fat} unit="%" />
      <ParameterBox label="SNF" value={snf} unit="%" />

      <ParameterBox label="Protein" value={protein} unit="%" />
      <ParameterBox label="Density" value={density} />

      <ParameterBox label="Added Water" value={addedWater} unit="%" />
      <ParameterBox label="Milk Type" value={milkType} />

      <ParameterBox label="Lactose" value={lactose} unit="%" />
      <ParameterBox label="Salt" value={salt} unit="%" />
    </div>
  );
};

export default MilkAnalyzer;
