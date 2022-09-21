import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material'
/* import { GoogleLogin } from 'react-google-login' */
import { GoogleLogin } from '@moeindana/google-oauth';
import { useNavigate } from 'react-router-dom';
import Icon from './icon'
import { AUTH } from '../../constants/actionTypes';
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined'
import useStyles from './styles'
import Input from './Input'

export const Auth = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    handleShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const result = res //?.special operator will not throw an error
    const token = res.credential
    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log('Google Sign In was unsuccessful. Try Again Later')
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                  <Input name='lastName' label='Last Name' handleChange={handleChange} half />

                </>
              )
            }
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

          </Grid>
          <Button type="submit" fullWith variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            //clientId="217761154938-2o94b5kes8cgm95plp4s2dtm7dhbjrrh.apps.googleusercontent.com"


            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWith
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify='flex-end' >
            <Grid item>
              <Button onClick={switchMode}>
                {
                  isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"
                }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
