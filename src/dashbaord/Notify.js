import { Popover } from '@mui/material'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function Notify({ id, open, notify, notifyClose }) {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={notify}
            onClose={notifyClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <NavDropdown.Item href="#action/3.1">Added a new photo</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">New Examination</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Get Hired</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">1 Person Viewed</NavDropdown.Item>
        </Popover>
    )
}

export default Notify
