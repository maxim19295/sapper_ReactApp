const CHANGE_DIALOG = 'CHANGE_DIALOG';
const initState = {
    currentDialog: 'settings'
}
const dialogReducer = (state=initState,action) =>{
    switch(action.type){
        case CHANGE_DIALOG:{
            return {...state, currentDialog: action.currentDialog}
        }
        default: return state;}
}
export const changeDialog = (currentDialog) =>({type: CHANGE_DIALOG, currentDialog});
export default dialogReducer;