// @material-ui/core components
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";

const useStyles = makeStyles(() => ({
  reset: {
    margin: 0,
  },
  btnGroup: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
  },
  center: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
  },
  root: {
    padding: "20px 10px",
  },
}));

export default function NewComment() {
  const classes = useStyles();
  return (
    <GridContainer className={classes.root}>
      <GridItem xs={12} md={12} className={classes.center}>
        <h4 className={classes.reset}>Bánh Mì Pew Pew</h4>
      </GridItem>
      <GridItem xs={12} md={12}>
        <GridContainer>
          <GridItem xs={1} md={1}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          </GridItem>
          <GridItem xs={10} md={10}>
            <GridContainer>
              <GridItem xs={12} md={12}>
                <h3 className={classes.reset}>Dung Nguyen</h3>
              </GridItem>
              <GridItem md={12}>
                <Rating name="rating" value={2} />
              </GridItem>
              <GridItem xs={12} md={12}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "Nhận xét",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem xs={12} md={12} className={classes.btnGroup}>
        <Button variant="outlined" style={{ marginRight: "5px" }}>
          Hủy
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#1873E8" }}>
          Đăng
        </Button>
      </GridItem>
    </GridContainer>
  );
}
