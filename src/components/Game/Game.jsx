import React from 'react';
import g from './Game.module.css';
import { connect } from 'react-redux';
class Game extends React.Component{
    componentDidMount(){
        let rows=this.props.gameSettings.fieldSize.rows;
        let columns=this.props.gameSettings.fieldSize.columns;
        let cellSize=25;
        let closedCellColor = this.props.gameSettings.colorClosedCells;
        let emptyCellColor = this.props.gameSettings.colorOpenCells;
        let canvas = document.querySelector('canvas');
        let widthCanvas=columns*cellSize;
        let heightCanvas=rows*cellSize;
        canvas.setAttribute('width',widthCanvas);
        canvas.setAttribute('height',heightCanvas);
        let ctx=canvas.getContext('2d');
        
        for(let i = 0; i<rows;i++){
            for(let j = 0; j<columns; j++){
                ctx.beginPath();
                ctx.lineWidth=3;
                ctx.rect(j*cellSize,i*cellSize,cellSize,cellSize);
                let color = this.props.currentGameParams.arrayField[i][j] ? closedCellColor : emptyCellColor;
                ctx.fillStyle= color;
                ctx.fill();
                ctx.strokeStyle='white';
                ctx.stroke();
            }
        }
        canvas.addEventListener('click',(e)=>{
            let coords = e.target.getBoundingClientRect();
            alert(`[${Math.ceil((e.clientY-coords.top)/cellSize-1)};${Math.ceil((e.clientX-coords.left)/cellSize-1)}]`);
        })
    }
    render(){return <div className={g.gameBlock}>
        <canvas/>
        <div>
            <div>Left mines: <span>{this.props.currentGameParams.leftMinesQuantity}</span></div>
            <div>Unblocked mines: <span>{this.props.currentGameParams.unblockedQuantity}</span></div>
        </div>
        <div>
            <div>Score: <span>{this.props.currentGameParams.score}</span></div>
<div>Time of playing: <span>{this.props.currentGameParams.sparedTime}</span></div>
        </div>
    </div>}
}
let mapStateToProps = (state) =>{
    return {
        gameSettings: state.gameSettings,
        currentGameParams: state.game
    }
}
export default connect(mapStateToProps)(Game);