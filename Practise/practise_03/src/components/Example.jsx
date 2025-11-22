import {useState} from "react";
import {EXAMPLES} from "../data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

export default function Example() {
    const [selectedButton, setSelectedButton] = useState();
    let tabContent = <p>Please select a topic.</p>;

    function handleButtonClick(selectedButton) {
        setSelectedButton(selectedButton);
    }

    if (selectedButton) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title}</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
        </div>);
    }

    return (<Section title="Examples" id="examples">
        <Tabs buttonsContainer="menu"
              buttons={
                  <>
                      <TabButton isSelected={selectedButton === 'components'}
                                 onClick={() => handleButtonClick('components')}>
                          Components
                      </TabButton>
                      <TabButton isSelected={selectedButton === 'jsx'}
                                 onClick={() => handleButtonClick('jsx')}>
                          JSX
                      </TabButton>

                      <TabButton isSelected={selectedButton === 'props'}
                                 onClick={() => handleButtonClick('props')}>
                          Props
                      </TabButton>

                      <TabButton isSelected={selectedButton === 'state'}
                                 onClick={() => handleButtonClick('state')}>
                          State
                      </TabButton>
                  </>
              }>
            {tabContent}
        </Tabs>
    </Section>);
}