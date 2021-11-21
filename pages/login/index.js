import React from 'react'
import Image from 'next/image'
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

/** local import */
import styles from './login.module.scss'
const data = {
  logo: 'https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png',
  background: 'https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
}

const Login = () => {
  const { push } = useRouter()
  const { logo, background } = data
  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value })
    })
    const { data } = await res.json()
    if (data?.token) push('/')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image alt="background" src={background} layout="fill" objectFit="cover" objectPosition="left" />
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image alt="logo" src={logo} layout="fill" objectFit="contain" />
          </div>
          <Typography variant="h4" gutterBottom component="div">
            Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Enter your email address or phone number in order to reset
            your password.
          </Typography>
          <form method="POST" onSubmit={onSubmit}>
            <TextField
              label="Enter username"
              variant="outlined"
              defaultValue="admin"
              name="username"
              className={styles.input}
            />
            <TextField
              label="Enter password"
              variant="outlined"
              name="password"
              className={styles.input}
              type="password"
            />
            <Button variant="contained" disableElevation className={styles.button} type="submit">
              Sign in
            </Button>
            <div className={styles.forgot}>
              <Link href="/login" passHref>
                <Typography variant="body2" gutterBottom component="div" className={styles.link}>
                  Forgot Password?
                </Typography>
              </Link>
            </div>
            <div>
              <Typography variant="body2" gutterBottom component="span">
                Do not have an account? <span style={{ paddingLeft: '10px' }} />
              </Typography>
              <Link href="/login" passHref>
                <Typography variant="body2" gutterBottom component="span" className={styles.link}>
                  Signup
                </Typography>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
