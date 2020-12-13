import React from 'react';

import { createUniqueId } from '@thxrl/scripts';
import { Button } from '@thxrl/components';
import { VerticalSpread } from '@thxrl/components';

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <VerticalSpread
                    top={<div>top</div>}
                    center={<div>center</div>}
                    bottom={<div>bottom</div>} />
                <div>id: { createUniqueId( 'id_' ) }</div>
                <Button label={'llll'}>Button</Button>
                <img src={ logo } className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
