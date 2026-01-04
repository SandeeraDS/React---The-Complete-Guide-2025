export default function List() {
  const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Coconut",
    "Pineapple",
    "Grapes",
    "Pears",
    "Kiwi",
  ];
  const listItems = fruits.map((f) => <li key={f}> {f}</li>);

  const fruitsWithCalories = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
    { id: 6, name: "Grapes", calories: 50 },
    { id: 7, name: "Pears", calories: 90 },
    { id: 9, name: "Kiwi", calories: 30 },
  ];

  fruitsWithCalories.sort((a, b) => a.name.localeCompare(b.name));

  const lowCaloryFruits = fruitsWithCalories.filter(
    (fruit) => fruit.calories < 100
  );
  lowCaloryFruits.sort((a, b) => a.calories - b.calories);

  return (
    <>
      <div>Fruits list</div>
      <ul>{listItems}</ul>
      <div>Fruits list with calories</div>
      <ul>
        {fruitsWithCalories.map((f) => (
          <li key={f.id}>
            {f.name}:&nbsp;<b>{f.calories}</b>
          </li>
        ))}
      </ul>
      <div>Low calories fruites</div>
      <ul>
        {lowCaloryFruits.map((f) => (
          <li key={f.id}>
            {f.name}:&nbsp;<b>{f.calories}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
