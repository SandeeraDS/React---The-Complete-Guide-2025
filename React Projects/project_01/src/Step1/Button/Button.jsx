import styles1 from "./Button.module.css";

export default function Button() {
  const style2 = {
    backgroundColor: "hsla(349, 83%, 51%, 1.00)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border:"none"
  };

  const styleDiv = {
    padding: "5px",
  };

  return (
    <>
      <div style={styleDiv}>
        <button className={styles1.button}>Click Me1</button>
      </div>
      <div style={styleDiv}>
        <button style={style2}>Click Me2</button>
      </div>
    </>
  );
}
