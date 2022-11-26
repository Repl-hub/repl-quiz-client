import { Popover } from '@mui/material'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function SettingPop({ id, open, setting, settingClose }) {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={setting}
            onClose={settingClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </Popover>
    )
}

export default SettingPop
