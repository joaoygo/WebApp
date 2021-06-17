import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import StoreContext from '../Store/Context';
import './styles.css';

function Header() {
    const { setToken, nameUser } = useContext(StoreContext);
    const history = useHistory();

    function exit() {
        console.log('entrei');
        setToken(null);
        history.push('/');
    }
    return (
        <div className="container--header">
            <div className="name">
                <p>Olá, {nameUser}</p>
            </div>

            <div className="area--button">
                <HomeIcon
                    className="btn-icon"
                    onClick={() => history.push('/')}
                />
                <SettingsIcon
                    className="btn-icon"
                    onClick={() => history.push('/cadastro')}
                />
                <ExitToAppIcon className="btn-icon" onClick={() => exit()} />
            </div>
        </div>
    );
}

export default Header;
