import { settingMinesAtField } from "../generalFunctions/settingMinesAtField";

const CELL_OPENNING = 'CELL_OPENNING';
const CELL_MARKING = 'CELL_MARKING'; 
const SET_PARAMS_FOR_GAME = 'SET_PARAMS_FOR_GAME';
const initState = {
        leftMinesQuantity: null,
        unblockedQuantity: null,
        arrayField: [],
        score: 0,
        sparedTime: 0
}
const gameReducer = (state=initState,action) =>{
    switch(action.type){
        case CELL_OPENNING:{
            return state;
        }
        case CELL_MARKING:{
            return state;
        }
        case SET_PARAMS_FOR_GAME:{
            let arrayField = [];
            let minesArray = settingMinesAtField(action.params.minesQuantity,action.params.fieldSize.rows*action.params.fieldSize.columns);
            let checkingNumber = 0;
            for(let i=0;i<action.params.fieldSize.rows;i++){
                let arrayFieldTemp = [];
                for(let j=0;j<action.params.fieldSize.columns;j++){
                    let isMinned = minesArray.some((element=>element===checkingNumber)) ? true : false;
                    let cell = {closed: true, minned: isMinned}
                    arrayFieldTemp.push(cell);
                    checkingNumber++;
                }
                arrayField.push(arrayFieldTemp);
            }
            return {...state,
                leftMinesQuantity: action.params.minesQuantity,
                unblockedQuantity: action.params.fieldSize.rows*action.params.fieldSize.columns,
                arrayField: [...arrayField]
            };
        }
        default: return state;
    }
}
export const openToCell = (cell) =>({type: CELL_OPENNING, ...cell});
export const markToCell = (cell) =>({type: CELL_MARKING, ...cell});
export const setParamsForGame = (params) =>(
    {type: SET_PARAMS_FOR_GAME, 
    params: {...params, 
        fieldSize: {...params.fieldSize}
            }
    });
export default gameReducer;