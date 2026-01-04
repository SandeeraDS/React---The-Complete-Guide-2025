export default function UserGreeting(props) {
  let greeting = <h2 className="login-prompt">Please log in to continue...</h2>;

  if (props.isLoggedIn) {
    greeting = <h2 className="welcome-message">Welcome {props.userName}</h2>;
  }
  return greeting;
}
