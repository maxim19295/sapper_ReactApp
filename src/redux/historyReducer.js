const initState = {
    historyList: [
        {
            number: 1, 
            playerName: 'maxiksx',
            score: 228,
            fieldSize: {
                rows: 10,
                columns: 13
            },
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
            result: false
        }
    ]
}
const historyReducer = (state=initState) =>{
    return state;
}
export default historyReducer;