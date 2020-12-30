// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Page from "components/page";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
const useStyles = makeStyles(styles);

export default function LandingPage() {
  React.useEffect(() => {
    const handleChangeSize = () => {
      if (window.matchMedia("(max-width: 650px)").matches) {
        document
          .getElementById("productHome")
          .classList.remove(classes.mainRaised);
      } else {
        document
          .getElementById("productHome")
          .classList.add(classes.mainRaised);
      }
    };
    window.addEventListener("resize", handleChangeSize);
    return window.removeEventListener("resize", () => {});
  }, []);
  const [foods] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]);
  const classes = useStyles();
  return (
    <Page title="Home Page" className={classes.root}>
      <Parallax filter image={require("assets/img/sidebar-5.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        id={"productHome"}
      >
        <div className={classes.container}>
          <ProductSection title={"Food Trending"} foods={foods} />
        </div>
      </div>
    </Page>
  );
}
