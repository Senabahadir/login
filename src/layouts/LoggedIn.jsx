import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function LoggedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1527521140025004040/NAcUvv_f_400x400.jpg" />
                <Dropdown pointing="top left" text="Vestel">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.loginOut} text="Çıkış Yap" icon="sign out" as={NavLink} to="/login" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
