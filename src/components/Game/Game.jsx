import React from 'react';
import g from './Game.module.css';
import { connect } from 'react-redux';
import { renderingGameField } from '../../generalFunctions/renderingGameField';
import { openToCell, markToCell, updateTime } from '../../redux/gameReducer';
import { changeDialog } from '../../redux/dialogReducer';
import { addNewGameRow, startOrStopRecordGame } from '../../redux/historyReducer';
class Game extends React.Component{
    timer;
    componentDidMount(){
       this.timer = setInterval(()=>{this.props.updateTime();
        },1000);
        renderingGameField(this.props.gameSettings.fieldSize.rows,
            this.props.gameSettings.fieldSize.columns,
            this.props.gameSettings.colorClosedCells,
            this.props.gameSettings.colorOpenCells,
            document.querySelector('canvas'),this.props.currentGameParams.arrayField,this.props.gameSettings.mineImage.title);
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
            document.querySelector('canvas'),this.props.currentGameParams.arrayField,this.props.gameSettings.mineImage.title);
            if(this.props.currentGameParams.gameStatus!=='process'){
                clearInterval(this.timer);
                this.props.addNewGameRow({
                    playerName: this.props.gameSettings.playerName,
                    score: this.props.currentGameParams.score,
                    fieldSize: {...this.props.gameSettings.fieldSize},
                    sparedTime: this.props.currentGameParams.sparedTime,
                    result: this.props.currentGameParams.gameStatus==='victory' ? true : this.props.currentGameParams.gameStatus==='defeat' ? false : null});
                    this.props.startOrStopRecordGame();
            }
    }
    render(){
        let ResultParagraph = this.props.currentGameParams.gameStatus === 'defeat' ? 
        <div className={g.postGameBlock}>
            <p className={g.loseParagraph}>you lose.</p>
            <button onClick = {()=>{
                this.props.changeDialog('settings');
            }}>Play again</button>
            <button onClick={()=>{
                this.props.changeDialog('history');
            }}>Show history</button>
            </div> : 
            this.props.currentGameParams.gameStatus === 'victory' ? 
            <div className={g.postGameBlock}>
                <p className={g.winParagraph}>you win!</p>
                <button onClick = {()=>{
                this.props.changeDialog('settings');
            }}>Play again</button>
                <button onClick = {()=>{
                this.props.changeDialog('history');
            }}>Show history</button>
                </div> : null;
        return <div className={g.gameBlock}>
            {ResultParagraph}
        <canvas onClick = {(e)=>{
            let coords = e.target.getBoundingClientRect();
            this.props.openToCell(
                {row: Math.ceil((e.clientY-coords.top)/25-1),
                column: Math.ceil((e.clientX-coords.left)/25-1)});
        }}
        onContextMenu = {
            (e)=>{
                e.preventDefault();
                let coords = e.target.getBoundingClientRect();
                this.props.markToCell(
                {row: Math.ceil((e.clientY-coords.top)/25-1),
                column: Math.ceil((e.clientX-coords.left)/25-1)});
            }
        }
        />
        <div>
            <div>Left mines: <span>{this.props.currentGameParams.leftMinesQuantity}</span></div>
            <div>Closed cells: <span>{this.props.currentGameParams.closedQuantity}</span></div>
        </div>
        <div>
            <div>Score: <span>{this.props.currentGameParams.score}</span></div>
<div>Time of playing: <span>{`${Math.floor(this.props.currentGameParams.sparedTime/60)}:${this.props.currentGameParams.sparedTime%60}`}</span></div>
        </div>
    </div>}
}
let mapStateToProps = (state) =>{
    return {
        gameSettings: state.gameSettings,
        currentGameParams: state.game
    }
}
let mapDispatchToProps = {
    openToCell,
    markToCell,
    changeDialog,
    addNewGameRow,
    startOrStopRecordGame,
    updateTime
}
export default connect(mapStateToProps,mapDispatchToProps)(Game);