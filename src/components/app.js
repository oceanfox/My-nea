import React from 'react';
//import styles from './app.css';
import CanvasComponent from './chessboard.js';

class App extends React.Component{
    render() {
        return (
            <div>
                <CanvasComponent/>
            </div>
        )
    }
}

export default App;