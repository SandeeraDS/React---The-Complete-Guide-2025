import { useState } from "react";

export default function OnChangeComp() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shiping, setShiping] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handlePayment = (event) => {
    setPayment(event.target.value);
  };

  const handleShiping = (event) => {
    setShiping(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name : {name}</p>

      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>Quantity : {quantity}</p>

      <textarea
        value={comment}
        onChange={handleComment}
        placeholder="Enter delivery instructions"
      />
      <p>Comment : {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>payment : {payment}</p>

      <lavel>
        <input
          type="radio"
          value="Pick Up"
          checked={shiping === "Pick Up"}
          onChange={handleShiping}
        />
        Pick Up
      </lavel>
      <br/>
      <lavel>
        <input
          type="radio"
          value="Delivery"
          checked={shiping === "Delivery"}
          onChange={handleShiping}
        />
        Delivery
      </lavel>
      <p>shipping : {shiping}</p>
    </div>
  );
}
