import React from 'react';
import h from './History.module.css';
import { connect } from 'react-redux';
import { changeDialog } from '../../redux/dialogReducer';
const History = (props) =>{
    const LastGames = props.historyList.map(h=><tr>
        <td>{h.number}</td>
    <td>{h.playerName}</td>
    <td>{h.score}</td>
    <td>{`${h.fieldSize.rows} X ${h.fieldSize.columns}`}</td>
    <td>{`${Math.floor(h.sparedTime/60)}:${h.sparedTime%60}`}</td>
    <td><span style={{color: h.result ? 'green' : 'red', fontWeight: 'bold', textTransform: 'uppercase'}}>{h.result ? 'win' : 'lose'}</span></td>
    </tr>);
    return <div className={h.historyBlock}>
        <table>
            <tr>
                <th>Number</th>
                <th>Player</th>
                <th>Score</th>
                <th>fieldSize</th>
                <th>Time</th>
                <th>Result</th>
            </tr>
            {
            LastGames
            }
        </table>
        <button onClick={()=>{
            props.changeDialog('settings');
        }}>Play again</button>
    </div>
}
let mapStateToProps = (state) =>({historyList: state.history.historyList});
let mapDispatchToProps = {
    changeDialog
}
export default connect(mapStateToProps,mapDispatchToProps)(History);