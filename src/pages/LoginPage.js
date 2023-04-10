import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { auth } from '../firebase';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Container>
        <Typography variant="h4" align="center">Login</Typography>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  };
  
  export default LoginPage;
  