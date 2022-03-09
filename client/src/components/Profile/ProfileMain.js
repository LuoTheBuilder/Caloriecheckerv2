import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "@mui/material";
import Cardm from "../UI/Card";
import Entry from "./Entry";
import classes from "./ProfileMain.module.css";
import { getPrefs, updatePrefs } from "../../actions/prefs";

const ProfileMain = () => {
  const dispatch = useDispatch();
  const prefs = useSelector((state) => state.prefs);
  const user = useSelector((state) => state.users.data);
  const [updatedPrefs, setUpdatedPrefs] = useState(prefs[0]);

  const changeHandler = (e) => {
    setUpdatedPrefs({ ...updatedPrefs, target: e.target.value });
  };

  const submitHandler = (e) => {
    dispatch(updatePrefs(user?._id, updatedPrefs));
    // dispatch(getPrefs(user._id));
  };
  return (
    <Container>
      <Cardm title="Update Profile">
        <div className={classes.mainWrapper}>
          <div className={classes.leftWrapper}>
            <Entry title="First Name" value={user?.name} type="text" />
            <Entry title="Last Name" value={user?.givenName} type="text" />
            <Entry title="Email Address" value={user?.email} type="email" />
            <Entry title="Password" value="*********" type="password" />
          </div>
          <div className={classes.rightWrapper}>
            <Entry
              title="Daily Calorie Target"
              value={updatedPrefs?.target}
              type="nummber"
              onChange={changeHandler}
            />
            <center>
              <Button onClick={submitHandler}>Update</Button>
            </center>
          </div>
        </div>
      </Cardm>
    </Container>
  );
};

export default ProfileMain;
