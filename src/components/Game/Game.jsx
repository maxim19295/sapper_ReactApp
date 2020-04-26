import React from 'react';
import g from './Game.module.css';
import { connect } from 'react-redux';
import { renderingGameField } from '../../generalFunctions/renderingGameField';
class Game extends React.Component{
    componentDidMount(){
        renderingGameField(this.props.gameSettings.fieldSize.rows,
            this.props.gameSettings.fieldSize.columns,
            this.props.gameSettings.colorClosedCells,
            this.props.gameSettings.colorOpenCells,
            document.querySelector('canvas'),this.props.currentGameParams.arrayField);
        /*canvas.addEventListener('click',(e)=>{
            let coords = e.target.getBoundingClientRect();
            alert(`[${Math.ceil((e.clientY-coords.top)/cellSize-1)};${Math.ceil((e.clientX-coords.left)/cellSize-1)}]`);
        })*/
    }
    componentDidUpdate(){
        renderingGameField(this.props.gameSettings.fieldSize.rows,
            this.props.gameSettings.fieldSize.columns,
            this.props.gameSettings.colorClosedCells,
            this.props.gameSettings.colorOpenCells,
            document.querySelector('canvas'),this.props.currentGameParams.arrayField);
    }
    render(){return <div className={g.gameBlock}>
        <canvas onClick = {(e)=>{
            let coords = e.target.getBoundingClientRect();
            alert(`[${Math.ceil((e.clientY-coords.top)/25-1)};${Math.ceil((e.clientX-coords.left)/25-1)}]`);
        }}
        onContextMenu = {
            (e)=>{
                e.preventDefault();
                alert('rightclick');
            }
        }
        />
        <div>
            <div>Left mines: <span>{this.props.currentGameParams.leftMinesQuantity}</span></div>
            <div>Closed cells: <span>{this.props.currentGameParams.unblockedQuantity}</span></div>
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