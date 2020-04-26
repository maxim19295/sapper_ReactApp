import React from 'react';
import h from './History.module.css';
const History = () =>{
    return <div className={h.historyBlock}>
        {/*table, include player name, score, fieldSize, result*/}
        <table>
            <tr>
                <th>Number</th>
                <th>Player</th>
                <th>Score</th>
                <th>fieldSize</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Maxiksx</td>
                <td>228</td>
                <td>10 X 13</td>
                <td><span style={{color: 'green', fontWeight: 'bold', textTransform: 'uppercase'}}>Win</span></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Andrey</td>
                <td>227</td>
                <td>20 X 13</td>
                <td><span style={{color: 'red', fontWeight: 'bold', textTransform: 'uppercase'}}>lose</span></td>
            </tr>
        </table>
    </div>
}
export default History;