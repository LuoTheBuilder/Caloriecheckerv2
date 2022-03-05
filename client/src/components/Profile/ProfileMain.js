import { useState } from "react";
import { Button, Container } from "@mui/material";
import Cardm from "../UI/Card";
import Entry from "./Entry";
import classes from "./ProfileMain.module.css";

const ProfileMain = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  return (
    <Container>
      <Cardm title="Update Profile">
        <div className={classes.mainWrapper}>
          <div className={classes.leftWrapper}>
            <Entry title="First Name" value={user.name} type="text" />
            <Entry title="Last Name" value={user.givenName} type="text" />
            <Entry title="Email Address" value={user.email} type="email" />
            <Entry title="Password" value="*********" type="password" />
            <Button>Update</Button>
          </div>
          <div className={classes.rightWrapper}>
            <Entry
              title="Daily Calorie Target"
              value={user.target}
              type="nummber"
            />
          </div>
        </div>
      </Cardm>
    </Container>
  );
};

export default ProfileMain;
