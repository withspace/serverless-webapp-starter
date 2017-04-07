import React from "react";
import {Link} from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import {Card, CardActions, CardText, CardTitle} from "material-ui/Card";

const SignIn = ({auth, ...rest}) => (
  <Card>
    <CardTitle
      title="Sign In"
    />
    <CardText>
      <h1>Sign In</h1>
      <TextField
        hintText="E-mail Address"
        floatingLabelText="E-mail Address"
      /><br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
      /><br />
    </CardText>
    <CardActions>
      <RaisedButton label="Sign in" primary={true} onTouchTap={auth.handleSignIn}/>
      <FlatButton label="Register" containerElement={<Link to="/profile/register"/>}/>
    </CardActions>
  </Card>
);

export default SignIn;