import React from 'react';
import hr from './Header.module.css';
import sapperLogo from '../../assets/sapperLogo.png';
const Header = () =>{
    return <div className={hr.header}>
        <div>
            <img src={sapperLogo} alt='sapperLogo'/>
        </div>
        <div>
            <p>Welcome to play Sapper, if you have "Professional" edition of your Windows :)</p>
        </div>
    </div>
}
export default Header;