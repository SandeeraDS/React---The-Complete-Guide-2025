import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';


export default function Header() {
    const reactDescriptions = ["Fundamentals", "Crucial", "Core"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}