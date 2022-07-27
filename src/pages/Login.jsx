import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <Segment placeholder >
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary as={NavLink} to="/login/vestel" />        {/* GİRİŞ YAP*/}
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  )
}
