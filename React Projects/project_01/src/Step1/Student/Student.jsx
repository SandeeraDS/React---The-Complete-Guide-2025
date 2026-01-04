import moduleStyles from "./Student.module.css";

export default function Student(props) {
  return (
    <div className={moduleStyles.student}>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "Yes" : "No"} </p>
    </div>
  );
}


