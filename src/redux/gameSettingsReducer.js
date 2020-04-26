const EDIT_PLAYER_NAME='EDIT_PLAYER_NAME';
const EDIT_MINES_QUANTITY='EDIT_MINES_QUANTITY';
const EDIT_QUANTITY_ROWS='EDIT_QUANTITY_ROWS';
const EDIT_QUANTITY_COLUMNS='EDIT_QUANTITY_COLUMNS';
const EDIT_COLOR_CLOSED_CELLS='EDIT_COLOR_CLOSED_CELLS';
const EDIT_COLOR_OPEN_CELLS='EDIT_COLOR_OPEN_CELLS';
const EDIT_MINE_IMAGE='EDIT_MINE_IMAGE';
const initState = {
        playerName: 'Player1',
        minesQuantity: 17,
        fieldSize: {
            rows: 20,
            columns: 24
        },
        colorClosedCells: 'red',
        colorOpenCells: 'lightgreen',
        mineImage: 'image1'
}
const gameSettingsReducer = (state=initState,action) =>{
    switch(action.type){
        case EDIT_PLAYER_NAME: {
            return {...state, playerName: action.name};
        }
        case EDIT_MINES_QUANTITY: {
            return {...state, minesQuantity: action.quantity};
        }
        case EDIT_QUANTITY_ROWS: {
            return {...state, fieldSize: {...state.fieldSize, rows: action.number_rows}};
        }
        case EDIT_QUANTITY_COLUMNS:{
            return {...state, fieldSize: {...state.fieldSize, columns: action.number_columns}};
        }
        case EDIT_COLOR_CLOSED_CELLS:{
            return {...state, colorClosedCells: action.color};
        }
        case EDIT_COLOR_OPEN_CELLS:{
            return {...state, colorOpenCells: action.color};
        }
        case EDIT_MINE_IMAGE:{
            return {...state, mineImage: action.image};
        }
        default: return state;
    }
}
export const editPlayerName = (name) =>({type: EDIT_PLAYER_NAME, name});
export const editMinesQuantity = (quantity) =>({type: EDIT_MINES_QUANTITY, quantity});
export const editQuantityRows = (number_rows) =>({type: EDIT_QUANTITY_ROWS, number_rows});
export const editQuantityColumns = (number_columns) =>({type: EDIT_QUANTITY_COLUMNS, number_columns});
export const editColorClosedCells = (color) =>{
    debugger
    return {type: EDIT_COLOR_CLOSED_CELLS, color}};
export const editColorOpenCells = (color) =>({type: EDIT_COLOR_OPEN_CELLS,color});
export const editMineImage = (image) =>({type: EDIT_MINE_IMAGE,image});
export default gameSettingsReducer;