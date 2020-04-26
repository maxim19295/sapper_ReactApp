import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import Game from '../Game/Game';
import History from '../History/History';
import c from './Content.module.css';
const Content = () =>{
    return <>
        <GameSettings/>
        <Game/>
        <History/>
    </>
}
export default Content;