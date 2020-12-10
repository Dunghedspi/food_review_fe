import { makeStyles } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/SideBar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flexFlow: "column nowrap",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    marginTop: "64px",
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}));

const UserLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
