import satData from "./satData";
//import "./styling.css";//

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div>
      {orbitTypes.map((sat, id) => (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;