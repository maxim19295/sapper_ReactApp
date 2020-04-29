const ADD_NEW_GAME_ROW = 'ADD_NEW_GAME_ROW';
const START_OR_STOP_RECORD_GAME = 'START_OR_STOP_RECORD_GAME';
const initState = {
    currentGame: false,
    historyList: [
        {
            number: 1, 
            playerName: 'maxiksx',
            score: 228,
            fieldSize: {
                rows: 10,
                columns: 13
            },
            sparedTime: 25,
            result: true
        },
        {
            number: 2, 
            playerName: 'andrey',
            score: 227,
            fieldSize: {
                rows: 20,
                columns: 13
            },
            sparedTime: 136,
            result: false
        }
    ]
}
const historyReducer = (state=initState,action) =>{
    switch(action.type){
        case ADD_NEW_GAME_ROW:{
            if(state.currentGame){
                return {...state, 
                historyList: 
                [...state.historyList, 
                    {number: state.historyList.length+1, 
                    playerName: action.lastGameData.playerName,
                    score: action.lastGameData.score,
                    fieldSize: {...action.lastGameData.fieldSize},
                    sparedTime: action.lastGameData.sparedTime,
                    result: action.lastGameData.result}]};}
                else return state;
        }
        case START_OR_STOP_RECORD_GAME:{
            return {...state, currentGame: !state.currentGame}
        }
        default: return state;
    }    
}
export const addNewGameRow = (lastGameData) =>({
    type: ADD_NEW_GAME_ROW,
    lastGameData: {...lastGameData}
});
export const startOrStopRecordGame = () =>({
    type: START_OR_STOP_RECORD_GAME
})
export default historyReducer;