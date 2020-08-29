import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    const onHomeClick = ()=>{
        history.push("/");
    };

    return (
        <div className="header">
            <img onClick={onHomeClick} src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
            alt="Home" className="header__icon"/>
            <div className="header__searchbox">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <Button style={{textTransform: 'inherit'}}>Become a host</Button>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
