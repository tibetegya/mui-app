import React from 'react'
import Image from 'next/image'
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

/** local import */
import styles from './login.module.scss'
const data = {
  logo: 'https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png',
  background: 'https://images.unsplash.com/photo-1637406305183-ff6d191b5880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80'
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
        <Image src={background} layout='fill' objectFit="cover" objectPosition="left" />
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image src={logo} layout='fill' objectFit="contain" />
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
              <Link href="/fotgot-password" >
                <Typography variant="body2" gutterBottom component="div" className={styles.link}>
                  Forgot Password?
                </Typography>
              </Link>
            </div>
            <div>
              <Typography variant="body2" gutterBottom component="span">
                Don't have an account? {' '}
              </Typography>
              <Link href="/fotgot-password">
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

export async function getServerSideProps(context) {
  console.log('---->', context.req)
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Login
