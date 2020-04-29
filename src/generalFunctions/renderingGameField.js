/* eslint-disable no-lone-blocks */
import mineImage1 from '../assets/mine_image1.jpg';
import mineImage2 from '../assets/mine_image2.png';
import mineImage3 from '../assets/mine_image3.png';
import checkImage from '../assets/check.png';
export const renderingGameField = (rows,columns,closedCellColor,emptyCellColor,canvas,arrayField,mineImageAtProps) =>{
        let cellSize=25;
        let widthCanvas=columns*cellSize;
        let heightCanvas=rows*cellSize;
        canvas.setAttribute('width',widthCanvas);
        canvas.setAttribute('height',heightCanvas);
        let ctx=canvas.getContext('2d');
        let mineImage = new Image();
        let checker = new Image();
        checker.src=checkImage;
        switch (mineImageAtProps){
            case 'image1':{
                mineImage.src=mineImage1;
            }
            break;
            case 'image2':{
                mineImage.src=mineImage2;
            }
            break;
            case 'image3':{
                mineImage.src=mineImage3;
            }
            break;
            default: {}
        }
        for(let i = 0; i<rows;i++){
            for(let j = 0; j<columns; j++){
                ctx.beginPath();
                ctx.lineWidth=1;
                ctx.rect(j*cellSize,i*cellSize,cellSize,cellSize);
                let color = arrayField[i][j].closed ? closedCellColor : emptyCellColor;
                ctx.fillStyle= color;
                ctx.fill();
                ctx.strokeStyle='white';
                ctx.stroke();
                if(arrayField[i][j].minned && !arrayField[i][j].closed){
                    ctx.beginPath();
                    ctx.drawImage(mineImage,j*cellSize,i*cellSize,cellSize,cellSize);
                    ctx.stroke();
                }
                if(arrayField[i][j].minesAroundQuantity!==null && !arrayField[i][j].closed){
                    ctx.beginPath();
                    ctx.font='12pt serif';
                    ctx.fillStyle='black';
                    ctx.fillText(`${arrayField[i][j].minesAroundQuantity}`,j*cellSize+6,(i+1)*cellSize-6);
                }
                if(arrayField[i][j].marked){
                    ctx.beginPath();
                    ctx.drawImage(checker,j*cellSize,i*cellSize,cellSize,cellSize);
                    ctx.stroke();
                }
            }
        }
}