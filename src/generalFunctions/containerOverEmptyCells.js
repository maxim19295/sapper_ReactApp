export const containerOverEmptyCells = (arr, i, j) =>{
    let newArr = [...arr];
    newArr[i][j].closed=false;
    for(let r=-1;r<=1;r++){
        for(let c=-1;c<=1;c++){
            if(r!==0 || c!==0){
                if(((i+r>=0)&&(i+r<newArr.length)) && ((j+c>=0)&&(j+c<newArr[i].length))){
                    if(newArr[i+r][j+c].closed===true){
                        if(newArr[i+r][j+c].minesAroundQuantity!==0){
                            newArr[i+r][j+c].closed=false;
                        }
                        else{
                            newArr=[...containerOverEmptyCells(newArr,i+r,j+c)];
                        }
                        
                    }

                }
            }
        }
    }
    return newArr;
}