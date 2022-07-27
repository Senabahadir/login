import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function LoggedOut(props) {
    return (
        <MenuItem>
            <Button primary onClick={props.loginIn}>Giriş Yap</Button>  {/*Parametre olarak props yerine fonksiyon adı yazıldıysa direkt fonk. adı yazılabilir. */}
            <Button primary style={{ marginLeft: "0.5em" }} >Kayıt ol</Button>
        </MenuItem>
    )
}
