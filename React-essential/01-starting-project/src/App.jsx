import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";


function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (<div id="tab-content">

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                           <code>{EXAMPLES[selectedTopic].code}</code>
                       </pre>
        </div>);
    }

    function clickHandler(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {
                            CORE_CONCEPTS.map((item) => (<CoreConcept key = {item.title} {...item} />))
                        }

                        {/*<CoreConcept*/}
                        {/*    title={CORE_CONCEPTS[0].title}*/}
                        {/*    description={CORE_CONCEPTS[0].description}*/}
                        {/*    image={CORE_CONCEPTS[0].image}*/}
                        {/*/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[1]} />*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[2]} />*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[3]} />*/}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => clickHandler("components")}
                                   isSelected={selectedTopic === "components"}>Components</TabButton>
                        <TabButton onSelect={() => clickHandler("jsx")}
                                   isSelected={selectedTopic === "jsx"}>JSX</TabButton>
                        <TabButton onSelect={() => clickHandler("props")}
                                   isSelected={selectedTopic === "props"}>Props</TabButton>
                        <TabButton onSelect={() => clickHandler("state")}
                                   isSelected={selectedTopic === "state"}>State</TabButton>
                    </menu>

                    {/*{!selectedTopic ? (<p>Please select a topic.</p>) : (*/}
                    {/*    <div id="tab-content">*/}

                    {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*        <pre>*/}
                    {/*       <code>{EXAMPLES[selectedTopic].code}</code>*/}
                    {/*   </pre>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {/*----------------2nd method-----------------------*/}

                    {/*{!selectedTopic && (<p>Please select a topic.</p>)}*/}
                    {/*{selectedTopic && (*/}
                    {/*    <div id="tab-content">*/}

                    {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*        <pre>*/}
                    {/*       <code>{EXAMPLES[selectedTopic].code}</code>*/}
                    {/*   </pre>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {tabContent}

                </section>
            </main>
        </div>
    );
}

export default App;
