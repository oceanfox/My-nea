//const white = #000000;
// const ReactDOM = require('react-dom');
// const React = require('react');
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

// const initialPiecePositions = [
//     ['bR','bN','bB','bQ','bK','bB','bN','bR'],
//     ['bP','bP','bP','bP','bP','bP','bP','bP'],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['wP','wP','wP','wP','wP','wP','wP','wP'],
//     ['wR','wN','wB','wQ','wK','wB','wN','wR']
// ]

const boardColours = [
     ['w','b','w','b','w','b','w','b'],
     ['b','w','b','w','b','w','b','w'],
     ['w','b','w','b','w','b','w','b'],
     ['b','w','b','w','b','w','b','w'],
     ['w','b','w','b','w','b','w','b'],
     ['b','w','b','w','b','w','b','w'],
     ['w','b','w','b','w','b','w','b'],
     ['b','w','b','w','b','w','b','w'],
 ]

class CanvasComponent extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        var xPos = 0;
        var yPos = 0;
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                if (boardColours[i][j] === 'w'){
                    ctx.fillStyle= '#000000'
                    ctx.fillRect(xPos,yPos,100,100);
                }
                else {
                    ctx.fillStyle = '#d8d5b1'
                    ctx.fillRect(xPos,yPos,100,100)
                }
                xPos+=100;
            }
            yPos+=100;
        }
        
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        )
    }
}

export default CanvasComponent;
// ReactDOM.render(<CanvasComponent/>,
// document.getElementById('container'));