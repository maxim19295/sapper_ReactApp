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
const gameSettingsReducer = (state=initState) =>{
    return state;
}
export default gameSettingsReducer;