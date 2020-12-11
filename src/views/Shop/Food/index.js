/* eslint-disable react/prop-types */
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Page from "components/page";
import data from "./FoodListView/data";
import ProductCard from "./FoodListView/ProductCard";
import ProductDetail from "./FoodDetails/index";
import Toolbar from "./FoodListView/Toolbar";
import NewFood from "./NewFood/index";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));

const RenderProductsList = (props) => {
  const { classes, products } = props;
  return (
    <>
      <Toolbar />
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <ProductCard className={classes.productCard} products={products} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const RenderFoodDetails = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <ProductDetail />
        </Grid>
      </Grid>
    </Box>
  );
};
const RenderNewFood = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <NewFood />
        </Grid>
      </Grid>
    </Box>
  );
};

const ProductList = () => {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <Page className={classes.root} title="Foods">
      <Container maxWidth={false}>
        <Routes>
          <Route
            path="/"
            element={
              <RenderProductsList classes={classes} products={products} />
            }
          />
          <Route path="/token" element={<RenderFoodDetails />} />
          <Route path="/new-food" element={<RenderNewFood />} />
        </Routes>
      </Container>
    </Page>
  );
};

export default ProductList;
