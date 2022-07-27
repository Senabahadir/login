import React, {useState} from 'react'
import { Menu, Container } from 'semantic-ui-react'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleLoggedOut(params) {
    setIsAuthenticated(false)
  }

  function handleLoggedIn(params) {
    setIsAuthenticated(true)
  }

  return (
    <Menu inverted fixed="top">
    <Container>
        <Menu.Item name='Home'/>

        <Menu.Menu position='right'>

          {isAuthenticated?<LoggedIn loginOut={handleLoggedOut} bişey="1" />
          :<LoggedOut loginIn={handleLoggedIn} />}
            
        </Menu.Menu>
    </Container>
</Menu>
  )
}
