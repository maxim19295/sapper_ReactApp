const initState = {
        playerName: '',
        minesQuantity: '',
        fieldSize: {
            rows: '',
            columns: ''
        },
        colorClosedCells: 'blue',
        colorOpenCells: 'lightskyblue',
        mineImage: 'mine_image1.jpg'
}
const gameSettingsReducer = (state=initState) =>{
    return state;
}
export default gameSettingsReducer;