import { useState } from 'react';
import './sidebar.css'
import { IconButton } from '@mui/material';
import * as fiIcon from 'react-icons/fi';
import navIcons from './navIcons';
import { NavLink } from 'react-router-dom';

function navLi(params) {
    const { id, name, icon, path } = params;
    return (
        <li key={id}>
            <NavLink exact="true" activeclassname="active" to={path}>
                {icon}
                <p>{name}</p>
            </NavLink>
        </li>
    )
}

function Sidebar() {
    const [show, setShow] = useState(true);
    const isNav = () => {
        setShow(!show);
    }

    return (
        <div className={!show ? "sidebar showSidebar" : "sidebar hideSidebar"}>
            <div className="logo_details">
                <img src="https://i.ibb.co/s6NCmyM/REPL.png" alt="logo" onClick={() => setShow(false)} />
                <IconButton color={'default'} onClick={isNav}>{
                    !show ?
                        <fiIcon.FiArrowLeft color="#e6747d" />
                        : <fiIcon.FiArrowRight color="#e6747d" />
                }
                </IconButton>
            </div>
            <div className="all_nav">
                <nav className="nav">
                    <ul>
                        {navIcons.map(navLi)}
                    </ul>
                </nav>

                <div className="userSide mt-3">
                    <p title="Log out">Arghadeep Mallick</p>
                    <IconButton color="primary">
                        <fiIcon.FiLogOut />
                    </IconButton>
                </div>
            </div>


        </div>
    )
}

export default Sidebar
