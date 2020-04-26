import React from 'react';
import gs from './GameSettings.module.css';
import mine_image1 from '../../assets/mine_image1.jpg';
import mine_image2 from '../../assets/mine_image2.png';
import mine_image3 from '../../assets/mine_image3.png';
const GameSettings = () =>{
    return <div className={gs.mainBlock}>
        <div><label>Name of player</label><input type='text'/></div>
        <div><label>Quantity mines</label><input type='number' min={10} max={50}/></div>
        <div><label>Quantity rows</label><input type='number' min={10} max={50}/>
        <label>Quantity columns</label><input type='number' min={10} max={50}/></div>
        <div><label>Color of closed cells</label>
            <span className={gs.chooseParam}>
            <input id='darkblue' type='radio' name='colorClosedCell' value="darkblue"/><label htmlFor='darkblue'><div style={{width: 40, height: 40, backgroundColor: 'darkblue', display: 'inline-block'}}></div></label>
            <input id='red' type='radio' name='colorClosedCell' value='red'/><label htmlFor='red'><div style={{width: 40, height: 40, backgroundColor: 'red', display: 'inline-block'}}></div></label>
            <input id='green' type='radio' name='colorClosedCell' value='green'/><label htmlFor='green'><div style={{width: 40, height: 40, backgroundColor: 'green', display: 'inline-block'}}></div></label>
            </span>
        </div>
        <div><label>Color of empty cells</label>
        <span className={gs.chooseParam}>
            <input id='lightblue' type='radio' name='colorOpenCell' value="blue"/><label htmlFor='lightblue'><div style={{width: 40, height: 40, backgroundColor: 'lightblue', display: 'inline-block'}}></div></label>
            <input id='pink' type='radio' name='colorOpenCell' value='pink'/><label htmlFor='pink'><div style={{width: 40, height: 40, backgroundColor: 'pink', display: 'inline-block'}}></div></label>
            <input id='lightgreen' type='radio' name='colorOpenCell' value='lightgreen'/><label htmlFor='lightgreen'><div style={{width: 40, height: 40, backgroundColor: 'lightgreen', display: 'inline-block'}}></div></label>
        </span>
        </div>
        <div><label>Mine image</label>
            <span className={gs.chooseParam}>
                <input id='image1' type='radio' name='mine_image' value="image1"/><label htmlFor='image1'><img src={mine_image1} width={40} alt='image1'/></label>
                <input id='image2' type='radio' name='mine_image' value='image2'/><label htmlFor='image2'><img src={mine_image2} width={40} alt='image2'/></label>
                <input id='image3' type='radio' name='mine_image' value='image3'/><label htmlFor='image3'><img src={mine_image3} width={40} alt='image3'/></label>
            </span>
        </div>
        <button>Save it and go play</button>
    </div>
}
export default GameSettings;