import { useEffect, useState } from 'react';
import { Avatar, AvatarGroup, IconButton, Badge } from '@mui/material';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import User from './user';
import * as fiIcon from 'react-icons/fi';
import * as faIcon from 'react-icons/fa';
import SettingPop from './SettingPop';
import Notify from './Notify';


function Nav({ message }) {
    const [isDark, setIsDark] = useState(false)
    const [setting, setSetting] = useState(false)
    const [notify, setNotify] = useState(false)


    const userAvater = (params) => {
        const { id, link } = params;
        return (
            <Avatar key={id} alt="Remy Sharp" src={link} />
        )
    }


    const settingClick = (event) => {
        setSetting(event.currentTarget);
    };
    const settingClose = () => {
        setSetting(null);
    };
    const openSetting = Boolean(setting);
    const settingId = openSetting ? 'simple-popover' : undefined;

    const notifyClick = (event) => {
        setNotify(event.currentTarget);
    }
    const notifyClose = () => {
        setNotify(null)
    }
    const openNotify = Boolean(notify);
    const notifyId = openNotify ? 'simple - popover' : undefined

    useEffect(() => {
        if (isDark) {
            message()
        }
    }, [isDark, message])

    return (
        <Row className="align-items-start">

            <Col lg={4} sm={12} className="col-12">
                <h4 className="heading">Let's Play with Quiz</h4>
                <p className="para">And be the first one
                    <IconButton size="small" color="warning">
                    <faIcon.FaRegSmileWink />
                    </IconButton>
                </p>
            </Col>
            <Col lg={4} className="box">
                <InputGroup>
                    <FormControl
                        placeholder="Search Here ..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text id="basic-addon1">
                        <fiIcon.FiSearch />
                    </InputGroup.Text>
                </InputGroup>
            </Col>
            <Col lg={2} className="d-flex justify-content-center align-items-center navIcon">
                <IconButton onClick={notifyClick}>
                    <Badge badgeContent={4} color="info" >
                        <fiIcon.FiBell color="#f55777" />
                    </Badge>
                </IconButton>
                <Notify id={notifyId} open={openNotify} notify={notify} notifyClose={notifyClose} />

                <IconButton color="success">
                    <Badge badgeContent={2} color={"primary"}>
                        <fiIcon.FiAward />
                    </Badge>
                </IconButton>

                <IconButton
                    onClick={() => setIsDark(!isDark)}
                >
                    {!isDark ?
                        <fiIcon.FiSun color="#ff9800" /> :
                        <fiIcon.FiMoon />}
                </IconButton>

                <IconButton color="primary" onClick={settingClick}>
                    <fiIcon.FiSettings />
                </IconButton>
                <SettingPop id={settingId} open={openSetting} setting={setting} settingClose={settingClose} />

            </Col>
            <Col lg={2} sm={12}>
                <AvatarGroup max={6} variant={"circular"}>
                    {
                        User.map(userAvater)
                    }
                </AvatarGroup>
            </Col>
        </Row>
    )
}

export default Nav
