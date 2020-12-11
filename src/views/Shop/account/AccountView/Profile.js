import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { useForm } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import avatar from "assets/img/landing.jpg";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: "auto",
    width: "100%",
    marginBottom: "20px",
  },
}));

const onSubmit = (data) => {
  console.log(data);
};
const onError = (error) => {
  console.error(error);
};

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const [avatarThumbnail, setAvatarThumbnail] = useState(avatar);
  const handelChangeImage = (e) => {
    const readFile = new FileReader();
    readFile.onload = () => {
      if (readFile.readyState === 2) {
        setAvatarThumbnail(readFile.result);
      }
    };
    readFile.readAsDataURL(e.target.files[0]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Avatar
              className={classes.avatar}
              variant="square"
              src={avatarThumbnail}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {user.name}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${moment().format("hh:mm A")} ${user.timezone}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <input
            type="file"
            hidden={true}
            id="thumbnail"
            name="thumbnail"
            onChange={handelChangeImage}
            ref={register}
          />
          <Button color="primary" fullWidth variant="text">
            <label
              htmlFor={"thumbnail"}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Upload Thumbnail Shop
            </label>
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
