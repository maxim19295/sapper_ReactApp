export const settingMinesAtField = (minesQuantity,cellsQuantity) =>{
    let minesArray = [];
    let number;
    for(let i = 0; i<minesQuantity; i++){
        number=Math.floor(Math.random()*cellsQuantity);
        while(minesArray.some(elem=>elem===number)){
            number=Math.floor(Math.random()*cellsQuantity);
        }
        minesArray.push(number);
    }
    return minesArray;
}