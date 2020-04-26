import React from 'react';
import gs from './GameSettings.module.css';
import mine_image1 from '../../assets/mine_image1.jpg';
import mine_image2 from '../../assets/mine_image2.png';
import mine_image3 from '../../assets/mine_image3.png';
import { connect } from 'react-redux';
const GameSettings = (props) =>{
    return <div className={gs.mainBlock}>
        <div><label>Name of player</label><input type='text' value={props.playerName}/></div>
        <div><label>Quantity mines</label><input type='number' value={props.minesQuantity} min={10} max={50}/></div>
        <div><label>Quantity rows</label><input type='number' value={props.fieldSize.rows} min={10} max={50}/>
        <label>Quantity columns</label><input type='number' value={props.fieldSize.columns} min={10} max={50}/></div>
        <div><label>Color of closed cells</label>
            <span className={gs.chooseParam}>
            <input id='darkblue' type='radio' name='colorClosedCell' value="darkblue" checked={props.colorClosedCells==='darkblue' ? true : false}/>
            <label htmlFor='darkblue'>
                <div style={{width: 40, height: 40, backgroundColor: 'darkblue', display: 'inline-block'}}></div>
            </label>
            <input id='red' type='radio' name='colorClosedCell' value='red' checked={props.colorClosedCells==='red' ? true : false}/>
            <label htmlFor='red'>
                <div style={{width: 40, height: 40, backgroundColor: 'red', display: 'inline-block'}}></div>
            </label>
            <input id='green' type='radio' name='colorClosedCell' value='green' checked={props.colorClosedCells==='green' ? true : false}/>
            <label htmlFor='green'>
                <div style={{width: 40, height: 40, backgroundColor: 'green', display: 'inline-block'}}></div>
            </label>
            </span>
        </div>
        <div><label>Color of empty cells</label>
        <span className={gs.chooseParam}>
            <input id='lightblue' type='radio' name='colorOpenCell' value="lightblue" checked={props.colorOpenCells==='lightblue' ? true : false}/>
            <label htmlFor='lightblue'>
                <div style={{width: 40, height: 40, backgroundColor: 'lightblue', display: 'inline-block'}}></div>
            </label>
            <input id='pink' type='radio' name='colorOpenCell' value='pink' checked={props.colorOpenCells==='pink' ? true : false}/>
            <label htmlFor='pink'>
                <div style={{width: 40, height: 40, backgroundColor: 'pink', display: 'inline-block'}}></div>
            </label>
            <input id='lightgreen' type='radio' name='colorOpenCell' value='lightgreen' checked={props.colorOpenCells==='lightgreen' ? true : false}/>
            <label htmlFor='lightgreen'>
                <div style={{width: 40, height: 40, backgroundColor: 'lightgreen', display: 'inline-block'}}></div>
            </label>
        </span>
        </div>
        <div><label>Mine image</label>
            <span className={gs.chooseParam}>
                <input id='image1' type='radio' name='mine_image' value="image1" checked={props.mineImage==='image1' ? true : false}/>
                <label htmlFor='image1'><img src={mine_image1} width={40} alt='image1'/></label>
                <input id='image2' type='radio' name='mine_image' value='image2' checked={props.mineImage==='image2' ? true : false}/>
                <label htmlFor='image2'><img src={mine_image2} width={40} alt='image2'/></label>
                <input id='image3' type='radio' name='mine_image' value='image3' checked={props.mineImage==='image3' ? true : false}/>
                <label htmlFor='image3'><img src={mine_image3} width={40} alt='image3'/></label>
            </span>
        </div>
        <button>Save it and go play</button>
    </div>
}
let mapStateToProps = (state) =>{
    return {
        ...state.gameSettings
        }
}
export default connect(mapStateToProps)(GameSettings);