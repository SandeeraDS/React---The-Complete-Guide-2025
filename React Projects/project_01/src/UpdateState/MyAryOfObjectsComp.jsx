import { useState } from "react";

export default function MyAryOfObjectsComp() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    if (isBlank(carYear)) {
      alert("Invalid Car Year!");
      return;
    }

    if (isBlank(carMake)) {
      alert("Invalid Car Make!");
      return;
    }

    if (isBlank(carModel)) {
      alert("Invalid Car Model!");
      return;
    }
    let car = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, car]);
    setInputValuesToDefault();
  };

  const isBlank = (value) => {
    return value == null || /^\s*$/.test(value);
  };

  const setInputValuesToDefault = () => {
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };

  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>List Of Cars</h2>
      <ul>
        {cars.map((c, index) => (
          <li key={index} onClick={()=>handleRemoveCar(index)}>
            Model : {c.model}, Make : {c.make}, Year : {c.year}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
