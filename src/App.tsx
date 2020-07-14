import React, {ReactElement} from 'react';
import logo from './logo.svg';
import './App.css';
import { useArbitraryState } from "./UseArbitraryStateHook";

function App() {
    const backgroundColorStates = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' }
    ];
    const allColorStates = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' },
        { color: 'white' },
        { color: 'black' },
    ];

    const [defaultState, setArbitraryState] = useArbitraryState<{
        color: string
    }>(backgroundColorStates, { color: "red" });

    return (
        <div className="App" style={{backgroundColor: defaultState.color}}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {allColorStates.map(({ color }): ReactElement => (
                    <div key={color} className="input-wrapper">
                        <input
                            id={color}
                            type="radio"
                            checked={color === defaultState.color}
                            onChange={() => setArbitraryState({ color })}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
