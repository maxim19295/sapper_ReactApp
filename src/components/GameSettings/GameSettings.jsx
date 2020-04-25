import React from 'react';
const GameSettings = () =>{
    return <>
        <label>Quantity mines</label><input type='number' min={10} max={50}/>
        <label>Quantity rows</label><input type='number' min={10} max={50}/>
        <label>Quantity columns</label><input type='number' min={10} max={50}/>
        <label>Color of closed cells</label>
        <select>
            <option value="darkblue">darkblue</option>
            <option value='red'>red</option>
            <option value='green'>green</option>
        </select>
        <label>Color of empty cells</label>
        <select>
            <option value="blue">blue</option>
            <option value='pink'>pink</option>
            <option value='lightgreen'>lightgreen</option>
        </select>
        <label>Mine image</label>
        <select>
            <option value="path">path</option>
            <option value='other_path'>other_path</option>
            <option value='other path too'>other path too</option>
        </select>
        <button>Save it and go play</button>
    </>
}
export default GameSettings;