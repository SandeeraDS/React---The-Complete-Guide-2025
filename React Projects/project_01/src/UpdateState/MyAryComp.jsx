import { useState } from "react";

export default function MyAryComp() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods((f) => f.filter((_, i) => i != index));
  };

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((f, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {f}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
