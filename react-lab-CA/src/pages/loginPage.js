import { Button, TextField } from "@mui/material";
import React, { memo, useState } from "react";
import { fetchLogin, getFavoriteMovie, signup } from "../api/tmdb-api";
import { useNavigate } from "react-router-dom";
export default memo(() => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate= useNavigate()

  const handleLogin = async() => {
    let res = await fetchLogin(name,password)
    // let fav = await getFavoriteMovie(name)
    // console.log(fav,'fav')
    console.log(res,'res')
    if (res.success) {
      navigate("/");
      localStorage.setItem("token", res.token)
      localStorage.setItem("username", name)
      alert("Login Success")
    }
  }
  const handleSignup = async() => {
    let res = await signup(name,password)
  
    if (res.success) {
      alert("Signup Success")
    }
  }
  
  return (
    <>
      <TextField
        id="filled-name"
        label="name"
        variant="filled"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="filled-Password"
        label="Password"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleSignup}>setup</Button>
    </>
  );
}, []);
