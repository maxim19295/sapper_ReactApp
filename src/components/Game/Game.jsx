import React from 'react';
import g from './Game.module.css';
class Game extends React.Component{
    componentDidMount(){
        let rows=20;
        let columns=20;
        let arr = [];
        for(let i=0; i<rows; i++){
            let arr_temp = [];
            for(let j=0;j<columns;j++){
                arr_temp.push(true);
            }
            arr.push(arr_temp);
        }
        let cellSize=30;
        let closedCellColor = 'blue';
        let emptyCellColor = 'lightskyblue';
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
                let color = arr[i][j] ? closedCellColor : emptyCellColor;
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
            <div>Left mines: <span>16</span></div>
            <div>Unblocked mines: <span>148</span></div>
        </div>
        <div>
            <div>Score: <span>228</span></div>
            <div>Time of playing: <span>0:48</span></div>
        </div>
    </div>}
}
export default Game;