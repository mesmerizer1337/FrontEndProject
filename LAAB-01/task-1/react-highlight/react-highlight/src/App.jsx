import { useState } from "react";
import "./App.css";

function App() {
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
        <div>
            <button onClick={() => setIsHighlighted(!isHighlighted)}>
                Toggle Highlight
            </button>

            <p className={isHighlighted ? "highlight" : ""}>
                This paragraph can be highlighted.
            </p>
        </div>
    );
}

export default App;
