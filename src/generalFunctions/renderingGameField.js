export const renderingGameField = (rows,columns,closedCellColor,emptyCellColor,canvas,arrayField) =>{
    /*let rows=this.props.gameSettings.fieldSize.rows;
        let columns=this.props.gameSettings.fieldSize.columns;
        let cellSize=25;
        let closedCellColor = this.props.gameSettings.colorClosedCells;
        let emptyCellColor = this.props.gameSettings.colorOpenCells;
        let canvas = document.querySelector('canvas');*/
        let cellSize=25;
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
                let color = arrayField[i][j].closed ? closedCellColor : emptyCellColor;
                ctx.fillStyle= color;
                ctx.fill();
                ctx.strokeStyle='white';
                ctx.stroke();
            }
        }
}