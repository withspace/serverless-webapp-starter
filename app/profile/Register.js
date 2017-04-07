import React from "react";
import {Link} from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import {Card, CardActions, CardText, CardTitle} from "material-ui/Card";

const Register = (user, auth, ...rest) => (
  <Card>
    <CardText>
      <h1>Register</h1>
      <TextField
        hintText="E-mail Address"
        floatingLabelText="E-mail Address"
      /><br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
      /><br />
      <TextField
        hintText="Repeat Password"
        floatingLabelText="Repeat Password"
        type="password"
      /><br />
    </CardText>
    <CardActions>
      <RaisedButton label="Register" primary={true} onTouchTap={auth.handleSignIn}/>
      <FlatButton label="Sign In" containerElement={<Link to="/profile/sign-in"/>}/>
    </CardActions>
  </Card>
);

export default Register;