import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import Game from '../Game/Game';
import History from '../History/History';
import { connect } from 'react-redux';
const Content = (props) =>{
    switch(props.currentDialog){
        case 'settings': return <GameSettings/>
        case 'game': return <Game/>
        case 'history': return <History/>
        default: return null 
    }
}
let mapStateToProps = (state) =>({
    ...state.dialog
});
export default connect(mapStateToProps)(Content);