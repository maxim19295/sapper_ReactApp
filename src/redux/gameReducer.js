let arrayField = [];
for(let i=0;i<20;i++){
    let arr_temp = [];
    for(let j=0;j<24;j++){
        arr_temp.push(true);
    }
    arrayField.push(arr_temp);
}
arrayField[6][3]=false;
const initState = {
        leftMinesQuantity: 17,
        unblockedQuantity: 480,
        arrayField,
        score: 0,
        sparedTime: 0
}
const gameReducer = (state=initState) =>{
    return state;
}
export default gameReducer;