import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import {CORE_CONCEPTS, EXAMPLES} from "./data.js";
import TabButtons from "./components/TabButton.jsx";
import {useState} from "react";

export default function App() {
    const [selectedTab, setSelectedTab] = useState();

    function clickHandler(selectedButton) {
        setSelectedTab(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>

    if (selectedTab) {
        tabContent = (<div id="tab-content">

            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
                           <code>{EXAMPLES[selectedTab].code}</code>
                       </pre>
        </div>);
    }

    return (<div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((item, index) => (<CoreConcept key={index} {...item}></CoreConcept>))}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButtons onSelect={() => clickHandler("components")}
                                isActive={selectedTab === "components"}>Components</TabButtons>
                    <TabButtons onSelect={() => clickHandler("jsx")}
                                isActive={selectedTab === "jsx"}>JSX</TabButtons>
                    <TabButtons onSelect={() => clickHandler("props")}
                                isActive={selectedTab === "props"}>Props</TabButtons>
                    <TabButtons onSelect={() => clickHandler("state")}
                                isActive={selectedTab === "state"}>State</TabButtons>
                </menu>
                {tabContent}
            </section>
        </main>
    </div>);
}