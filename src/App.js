import './App.css';
import LoremIpsum from "./components/LoremIpsum";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <LoremIpsum
                    words={100}
                    paragraphs={5}
                />

            </header>
        </div>
    );
}

export default App;
