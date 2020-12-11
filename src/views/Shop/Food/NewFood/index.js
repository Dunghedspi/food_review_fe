import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Avatar,
  CardActions,
} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import food from "assets/img/faces/food.jpg";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import { useForm } from "react-hook-form";
const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: "auto",
    width: "100%",
  },
  img: {
    padding: "40px 50px",
    border: "#efefef 3px solid",
    borderRadius: "9px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "#1873E8",
    "&:hover": {
      backgroundColor: "#f2f9f9",
    },
  },
}));

const onSubmit = (data) => {
  console.log(data);
};
const onError = (error) => {
  console.error(error);
};

const NewFood = ({ className, ...rest }) => {
  const classes = useStyles();
  const [foodThumbnail, setFoodThumbnail] = useState(food);
  const [foodImages, setFoodImages] = useState("");
  const { handleSubmit, register } = useForm();

  const RenderImages = async () => {
    // let list = [];
    // for (const index in foodImages) {
    //const url = await getUrl(foodImages);
    //console.log(url);
    return (
      <GridItem xs={2}>
        <Avatar variant="square" className={classes.avatar} src={""} />
      </GridItem>
    );
    // }
  };

  //   const getUrl = (file) => {
  //     const readFile = new FileReader();
  //     readFile.onload = () => {
  //       if (readFile.readyState === 2) {
  //         return readFile.result;
  //       }
  //     };
  //     readFile.readAsDataURL(file[0]);
  //   };

  const handelChangeImage = (e) => {
    const readFile = new FileReader();
    readFile.onload = () => {
      if (readFile.readyState === 2) {
        setFoodThumbnail(readFile.result);
      }
    };
    readFile.readAsDataURL(e.target.files[0]);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <GridContainer>
        <GridItem lg={4} md={6} xs={12}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
              <Box alignItems="center" display="flex" flexDirection="column">
                <Avatar
                  variant="square"
                  className={classes.avatar}
                  src={foodThumbnail}
                />
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
                  Upload Thumbnail Food
                </label>
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem lg={8} md={6} xs={12}>
          <Card>
            <CardHeader subheader="The information new food" title="Food" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Please specify the food name"
                    label="Food Name"
                    name="title"
                    required
                    variant="outlined"
                    inputRef={register}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText="vnd"
                    label="Price"
                    name="price"
                    required
                    variant="outlined"
                    inputRef={register}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Short Description"
                    name="shortdescription"
                    required
                    variant="outlined"
                    inputRef={register}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="content"
                    type="text"
                    variant="outlined"
                    inputRef={register}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <GridContainer>
                    {foodImages ? RenderImages() : ""}
                    <GridItem xs={2}>
                      <input
                        type="file"
                        name="file"
                        hidden={true}
                        id="file"
                        ref={register}
                        onChange={(e) => setFoodImages(e.target.files)}
                      />
                      <label htmlFor="file">
                        <div role="button" className={classes.img}>
                          <AddAPhotoOutlinedIcon />
                        </div>
                      </label>
                    </GridItem>
                  </GridContainer>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button color="primary" variant="contained" type={"submit"}>
                Create New Food
              </Button>
            </Box>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
};

NewFood.propTypes = {
  className: PropTypes.string,
};

export default NewFood;
