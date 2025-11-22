import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Header() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;