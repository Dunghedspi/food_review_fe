// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import food from "assets/img/faces/food.jpg";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
// Sections for this page

const useStyles = makeStyles();
const renderRelatedFood = (foods) => {
  const classes = makeStyles(() => ({
    img: {
      width: "100%",
      height: "auto",
    },
    item: {
      paddingRight: "30px",
      "&>div": {
        marginBottom: "7px",
        marginTop: "0px",
      },
    },
    imgBox: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignItems: "center",
    },
  }))();
  return foods.map((item, index) => {
    return (
      <GridItem xs={12} sm={12} md={12} key={index} className={classes.item}>
        <Card>
          <CardBody>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <GridItem xs={5} md={5} className={classes.imgBox}>
                  <img alt="food" src={food} className={classes.img} />
                </GridItem>
                <GridItem xs={7} md={7}>
                  <GridContainer>
                    <GridItem xs={12} md={12}>
                      <h4>Bánh mì</h4>
                    </GridItem>
                    <GridItem xs={12} md={12}>
                      <span>shop: Van Dung</span>
                    </GridItem>
                    <GridItem xs={12} md={12}>
                      <Rating
                        name="size-small"
                        defaultValue={2}
                        size="small"
                        precision={0.1}
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </CardBody>
        </Card>
      </GridItem>
    );
  });
};
export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer>{renderRelatedFood([1, 2, 3, 4, 5, 6])}</GridContainer>
    </div>
  );
}
