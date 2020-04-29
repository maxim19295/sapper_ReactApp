import React from 'react';
import gs from './GameSettings.module.css';
import mine_image1 from '../../assets/mine_image1.jpg';
import mine_image2 from '../../assets/mine_image2.png';
import mine_image3 from '../../assets/mine_image3.png';
import { connect } from 'react-redux';
import { editPlayerName, editMinesQuantity, editQuantityRows, editQuantityColumns, editColorClosedCells, editColorOpenCells, editMineImage } from '../../redux/gameSettingsReducer';
import { setParamsForGame } from '../../redux/gameReducer';
import { changeDialog } from '../../redux/dialogReducer';
import { startOrStopRecordGame } from '../../redux/historyReducer';
const GameSettings = (props) =>{
    return <div className={gs.mainBlock}>
        <div><label>Name of player</label><input type='text' value={props.playerName}
         onChange={(e)=>{
             props.editPlayerName(e.target.value);
         }}/></div>
        <div><label>Quantity mines</label><input type='number' value={props.minesQuantity} min={10} max={50}
        onChange={(e)=>{
            props.editMinesQuantity(e.target.value);
        }}/></div>
        <div><label>Quantity rows</label><input type='number' value={props.fieldSize.rows} min={10} max={50}
        onChange = {(e)=>{
            props.editQuantityRows(e.target.value);
        }}/>
        <label>Quantity columns</label><input type='number' value={props.fieldSize.columns} min={10} max={50}
        onChange = {(e)=>{
            props.editQuantityColumns(e.target.value);
        }}/></div>
        <div><label>Color of closed cells</label>
            <span className={gs.chooseParam}>
            <input id='darkblue' type='radio' name='colorClosedCell' value="darkblue" checked={props.colorClosedCells==='darkblue' ? true : false} onChange={(e)=>{props.editColorClosedCells(e.target.value)}}/>
            <label htmlFor='darkblue'>
                <div style={{width: 40, height: 40, backgroundColor: 'darkblue', display: 'inline-block'}}></div>
            </label>
            <input id='red' type='radio' name='colorClosedCell' value='red' checked={props.colorClosedCells==='red' ? true : false} onChange={(e)=>{props.editColorClosedCells(e.target.value)}}/>
            <label htmlFor='red'>
                <div style={{width: 40, height: 40, backgroundColor: 'red', display: 'inline-block'}}></div>
            </label>
            <input id='green' type='radio' name='colorClosedCell' value='green' checked={props.colorClosedCells==='green' ? true : false} onChange={(e)=>{props.editColorClosedCells(e.target.value)}}/>
            <label htmlFor='green'>
                <div style={{width: 40, height: 40, backgroundColor: 'green', display: 'inline-block'}}></div>
            </label>
            </span>
        </div>
        <div><label>Color of empty cells</label>
        <span className={gs.chooseParam}>
            <input id='lightblue' type='radio' name='colorOpenCell' value="lightblue" checked={props.colorOpenCells==='lightblue' ? true : false} onChange={(e)=>{props.editColorOpenCells(e.target.value)}}/>
            <label htmlFor='lightblue'>
                <div style={{width: 40, height: 40, backgroundColor: 'lightblue', display: 'inline-block'}}></div>
            </label>
            <input id='pink' type='radio' name='colorOpenCell' value='pink' checked={props.colorOpenCells==='pink' ? true : false} onChange={(e)=>{props.editColorOpenCells(e.target.value)}}/>
            <label htmlFor='pink'>
                <div style={{width: 40, height: 40, backgroundColor: 'pink', display: 'inline-block'}}></div>
            </label>
            <input id='lightgreen' type='radio' name='colorOpenCell' value='lightgreen' checked={props.colorOpenCells==='lightgreen' ? true : false} onChange={(e)=>{props.editColorOpenCells(e.target.value)}}/>
            <label htmlFor='lightgreen'>
                <div style={{width: 40, height: 40, backgroundColor: 'lightgreen', display: 'inline-block'}}></div>
            </label>
        </span>
        </div>
        <div><label>Mine image</label>
            <span className={gs.chooseParam}>
                <input id='image1' type='radio' name='mine_image' value="image1" checked={props.mineImage.title==='image1' ? true : false} onChange={(e)=>{props.editMineImage({title: e.target.value, fileName: 'mine_image1.jpg'})}}/>
                <label htmlFor='image1'><img src={mine_image1} width={40} alt='image1'/></label>
                <input id='image2' type='radio' name='mine_image' value='image2' checked={props.mineImage.title==='image2' ? true : false} onChange={(e)=>{props.editMineImage({title: e.target.value, fileName: 'mine_image2.png'})}}/>
                <label htmlFor='image2'><img src={mine_image2} width={40} alt='image2'/></label>
                <input id='image3' type='radio' name='mine_image' value='image3' checked={props.mineImage.title==='image3' ? true : false} onChange={(e)=>{props.editMineImage({title: e.target.value, fileName: 'mine_image3.png'})}}/>
                <label htmlFor='image3'><img src={mine_image3} width={40} alt='image3'/></label>
            </span>
        </div>
        <button onClick={()=>{
            props.setParamsForGame({minesQuantity: props.minesQuantity, fieldSize: {...props.fieldSize}});
            props.changeDialog('game');
            props.startOrStopRecordGame();
            }}>Save it and go play</button>
    </div>
}
let mapStateToProps = (state) =>{
    return {
        ...state.gameSettings
        }
}
let mapDispatchToProps = {
    editPlayerName,
    editMinesQuantity,
    editQuantityRows,
    editQuantityColumns,
    editColorClosedCells,
    editColorOpenCells,
    editMineImage,
    setParamsForGame,
    changeDialog,
    startOrStopRecordGame
}
export default connect(mapStateToProps,mapDispatchToProps)(GameSettings);