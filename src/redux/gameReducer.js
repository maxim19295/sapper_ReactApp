/* eslint-disable no-fallthrough */
import { settingMinesAtField } from "../generalFunctions/settingMinesAtField";
import { containerOverEmptyCells } from "../generalFunctions/containerOverEmptyCells";
const CELL_OPENNING = 'CELL_OPENNING';
const CELL_MARKING = 'CELL_MARKING';
const SET_PARAMS_FOR_GAME = 'SET_PARAMS_FOR_GAME';
const UPDATE_TIME='UPDATE_TIME';
const STOP_TIME = 'STOP_TIME';
const initState = {
        leftMinesQuantity: null,
        closedQuantity: null,
        arrayField: [],
        score: 0,
        sparedTime: 0,
        gameStatus: 'process' 
}
const gameReducer = (state=initState,action) =>{
    switch(action.type){
        case CELL_OPENNING:{
            if(state.gameStatus==='process'){
            let arrayField = [...state.arrayField];
            if(arrayField[action.cell.row][action.cell.column].closed && !arrayField[action.cell.row][action.cell.column].marked) 
            {
                let delta=0;
                let deltaBefore=0;
                let deltaAfter=0;
                for(let i=0;i<arrayField.length;i++){
                    for(let j=0;j<arrayField[i].length;j++){
                        if(!arrayField[i][j].closed){
                            deltaBefore++;
                        }
                    }
                }
                if(arrayField[action.cell.row][action.cell.column].minesAroundQuantity===0){
                    arrayField = [...containerOverEmptyCells(arrayField,action.cell.row,action.cell.column)];
                }
                else{
                    arrayField[action.cell.row][action.cell.column].closed=false;
                }
                for(let i=0;i<arrayField.length;i++){
                    for(let j=0;j<arrayField[i].length;j++){
                        if(!arrayField[i][j].closed){
                            deltaAfter++;
                        }
                    }
                }
                delta=Math.abs(deltaAfter-deltaBefore);
                if(arrayField.some((element=>(element.some(subelement=>subelement.closed && !subelement.minned))))){
                if(!arrayField[action.cell.row][action.cell.column].minned)
                {
                    return {...state, 
                    arrayField: [...arrayField],
                    score: state.score+delta,
                    closedQuantity: state.closedQuantity-delta
                    };
                }
                else{
                    return {...state,
                        arrayField: state.arrayField.map(a=>{
                            return a.map(sub_a=>{
                                if(sub_a.minned) {return {...sub_a, closed: false}}
                                else return sub_a;
                            })
                        }), 
                        closedQuantity: state.closedQuantity-delta,
                        gameStatus: 'defeat'
                        };
                }}
                else{
                    return {...state,
                        arrayField: state.arrayField.map(a=>{
                            return a.map(sub_a=>{
                                if(sub_a.minned) {return {...sub_a, closed: false}}
                                else return sub_a;
                            })
                        }), 
                        closedQuantity: state.closedQuantity-delta,
                        score: state.score+delta,
                        gameStatus: 'victory'}
                }
            }
            else return state;
        }
            else return state;
        }
        case CELL_MARKING:{
            if(state.gameStatus==='process'){
                let arrayField=[...state.arrayField];
                let leftMinesQuantity=state.leftMinesQuantity;
                arrayField = arrayField.map((a,index)=>{
                    if(index===action.cell.row){
                        return a.map((sub_a,index)=>{
                            if(index===action.cell.column){
                                if(sub_a.closed){
                                    if(!sub_a.marked) leftMinesQuantity--;
                                    else leftMinesQuantity++;
                                    return {...sub_a, marked: !sub_a.marked}
                                }
                                else return sub_a;
                            }
                            else return sub_a;
                        });
                    }
                    else return a;
                });
                return {
                    ...state,
                    arrayField: [...arrayField],
                    leftMinesQuantity
                };}
            else return state;
        }
        case SET_PARAMS_FOR_GAME:{
            let arrayField = [];
            let minesArray = settingMinesAtField(action.params.minesQuantity,action.params.fieldSize.rows*action.params.fieldSize.columns);
            let checkingNumber = 0;
            for(let i=0;i<action.params.fieldSize.rows;i++){
                let arrayFieldTemp = [];
                for(let j=0;j<action.params.fieldSize.columns;j++){
                    let isMinned = minesArray.some((element=>element===checkingNumber)) ? true : false;
                    let cell = {closed: true, minned: isMinned, marked: false, minesAroundQuantity: null}
                    arrayFieldTemp.push(cell);
                    checkingNumber++;
                }
                arrayField.push(arrayFieldTemp);
            }
            let minesAroundQuantity;
            for(let i=0;i<action.params.fieldSize.rows;i++){
                for(let j=0;j<action.params.fieldSize.columns;j++){
                    if(!arrayField[i][j].minned){
                        minesAroundQuantity=0;
                        for(let row=-1; row<=1; row++){
                            for(let column=-1;column<=1; column++){
                                if(row!==0 || column!==0){
                                    if((i+row>=0 && j+column>=0) && (i+row<action.params.fieldSize.rows && j+column<action.params.fieldSize.columns)){
                                        if(arrayField[i+row][j+column].minned){
                                            minesAroundQuantity++;
                                        }
                                    }
                                }
                            }
                        }
                        arrayField[i][j].minesAroundQuantity=minesAroundQuantity;
                    }
                }
            }
            return {...state,
                leftMinesQuantity: action.params.minesQuantity,
                closedQuantity: action.params.fieldSize.rows*action.params.fieldSize.columns,
                arrayField: [...arrayField],
                gameStatus: 'process'
            };
        }
        case UPDATE_TIME:{
            let sparedTime = state.sparedTime+1;
            return {...state, sparedTime}
        }
        case STOP_TIME:{
            return state;
        }
        default: return state;
    }
}
export const openToCell = (cell, callback) =>({type: CELL_OPENNING, cell: {...cell}});
export const markToCell = (cell) =>({type: CELL_MARKING, cell: {...cell}});
export const setParamsForGame = (params) =>(
    {type: SET_PARAMS_FOR_GAME, 
    params: {...params, 
        fieldSize: {...params.fieldSize}
            }
    });
export const updateTime = () => ({type: UPDATE_TIME});
export default gameReducer;