import React, { useState } from "react";
import classes from "../components/form.module.css"
export default function Form() {
   
  const [values, setvalues] = useState({
    username: "",
    password: "",
    email: ""
  });
  
  const [submited, setsubmit] = useState(false);
  const [valid, isvalid] = useState(false);
  const formhandler = (e) => {
    e.preventDefault();
    setsubmit(true);
    if(values.username && values.password && values.email){
      isvalid(true)
    }

  }

  const usernamehandler = (event) => {
    setvalues(values => ({
      ...values,
      username: event.target.value
    }))
  }

  const passowrdhandler = (event) => {
    setvalues(values => ({
      ...values,
      password: event.target.value
    }))
  }

  const emailhandler = (event) => {
    setvalues(values => ({
      ...values,
      email: event.target.value
    }))
  }

  const navigatetogamequiz = () =>{
   window.location.replace("./userslist.jsx")

  }
  return (
    <div className={classes.box} id="wholpage">
      <h3 className={classes.title}>please create account to login and do our quiz</h3>

      <form className={classes.form} onSubmit={formhandler}>
        <label>Username :</label>
        <input type="text" placeholder="please enter your user name"
          onChange={usernamehandler} value={values.username}>
        </input>
        {submited && !values.username ? <span className={classes.red}>please enter your username </span> : ""}
        <label className={classes.passswordl}>password :</label>
        <input type="text" placeholder="please enter your password"
          value={values.password} onChange={passowrdhandler}>
        </input>
        {submited && !values.password ? <span className={classes.red}>please enter your passowrd</span> : ""}
        <label className={classes.passswordl}>Email :</label>
        <input type="email" placeholder="please enter your email"
          value={values.email} onChange={emailhandler}></input>
        {submited && !values.email ? <span className={classes.red}>please enter your email</span> : ""}
        <button onClick={navigatetogamequiz} className={classes.submitbtn} type="submit"
        >click to submit</button>
      </form>

      {submited && valid ? <p className="success-message">success ! thanks for registering</p> : ""}
      <div>

      </div>

    </div>
  )
}