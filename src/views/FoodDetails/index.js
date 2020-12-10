// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DirectionsIcon from "@material-ui/icons/Directions";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Page from "components/page";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import {
  Avatar,
  Backdrop,
  Button,
  Divider,
  Fade,
  Modal,
  Tooltip,
} from "@material-ui/core";
import food from "assets/img/faces/food.jpg";
import Rating from "@material-ui/lab/Rating";
import PersonIcon from "@material-ui/icons/Person";
import SectionsCarousel from "views/Components/Sections/SectionCarousel";
import classnames from "classnames";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Rleated from "./Sections/Rleated";
import NewComment from "./Sections/NewComment";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  foodImage: {
    width: "75%",
    height: "auto",
  },
  img: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
  },
  reset: {
    margin: 0,
  },
  description: {
    marginTop: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RenderList = (ratings) => {
  const classes = makeStyles(() => ({
    item: {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "center",
    },
    rating: {
      minHeight: "10px",
      backgroundColor: "#203e6e",
    },
  }))();
  return (
    <GridContainer>
      {ratings.map((item, index) => {
        return (
          <GridItem xl={12} md={12} key={index}>
            <GridContainer className={classes.item}>
              <GridItem xl={1} md={1}>
                <span>5</span>
              </GridItem>
              <GridItem xl={11} md={11} style={{ padding: 0 }}>
                <div
                  className={classes.rating}
                  style={{ maxWidth: "75%" }}
                ></div>
              </GridItem>
            </GridContainer>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};
const renderListComment = (comments) => {
  const classes = makeStyles(() => ({
    item: {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    rating: {
      minHeight: "10px",
      backgroundColor: "#203e6e",
    },
    root: {
      marginTop: "20px",
    },
  }))();
  return (
    <GridContainer className={classes.root}>
      {comments.map((item, index) => {
        return (
          <GridItem xl={12} md={12} key={index}>
            <GridContainer className={classes.item}>
              <GridItem xl={1} md={1}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              </GridItem>
              <GridItem xl={9} md={9}>
                <span style={{ fontWeight: 500 }}>Nguyễn Văn Dũng</span>
                <GridContainer>
                  <GridItem xl={2} md={2}>
                    <Rating
                      name="size-small"
                      defaultValue={2}
                      size="small"
                      precision={0.5}
                      readOnly
                    />
                  </GridItem>
                  <GridItem xl={8} md={8}>
                    <span>29/12/2016</span>
                  </GridItem>
                </GridContainer>
                <p>Món này ngon vl anh em ơi</p>
              </GridItem>
              <GridItem xl={1} md={1} className={classes.item}>
                <Tooltip title={"Hữu ích"} arrow>
                  <IconButton>
                    <ThumbUpIcon />
                  </IconButton>
                </Tooltip>
                <span>12</span>
              </GridItem>
            </GridContainer>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};
const item = [
  { 5: "50%" },
  { 4: "10%" },
  { 3: "15%" },
  { 2: "15%" },
  { 1: "10%" },
];
export default function LandingPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Page title="ProductDetails" className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <NewComment />
          </div>
        </Fade>
      </Modal>
      <GridContainer>
        <GridItem xs={12} md={8}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xl={12} md={12} className={classes.expand}>
                  <Tooltip title="Chỉ Đường" arrow>
                    <IconButton>
                      <DirectionsIcon />
                    </IconButton>
                  </Tooltip>
                </GridItem>
                <GridItem xl={12} md={12}>
                  <GridContainer>
                    <GridItem xl={6} md={6} className={classes.img}>
                      <img
                        alt="food"
                        src={food}
                        className={classes.foodImage}
                      />
                    </GridItem>
                    <GridItem xl={6} md={6}>
                      <GridContainer>
                        <GridItem xl={12} md={12}>
                          <h4 className={classes.reset}>
                            Penny & Flo: Finding Home
                          </h4>
                        </GridItem>
                        <GridItem xl={12} md={12} className={classes.expand}>
                          <Rating
                            name="size-small"
                            defaultValue={2}
                            size="small"
                            precision={0.1}
                            readOnly
                          />
                          <span style={{ margin: "0 5px 0 5px" }}>19200</span>
                          <PersonIcon />
                        </GridItem>
                        <GridItem xl={12} md={12}></GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xl={12} md={12} className={classes.description}>
                  <SectionsCarousel />
                </GridItem>
                <GridItem xl={12} md={12} className={classes.description}>
                  <p>
                    Love? Friendship? Mansion? Puzzles? YES! Penny & Flo:
                    Finding Home has it all. Renovate the mansion and solve
                    challenging puzzles with this new relaxing and fun FREE
                    match-3 game! Help Penny and Flo renovate the mansion of a
                    former Hollywood actress to its former glory and match
                    pieces to solve challenging puzzles. Dig into a story full
                    of twists and turns as Penny and Flo make friends with a
                    cast of colorful characters. Match pieces & start your
                    mansion makeover – play with themed boosters & renovate the
                    mansion rooms with dozens of customization options! Discover
                    hidden mansion areas and choose among hundreds of pieces of
                    furniture for your mansion decoration project! Sit down,
                    relax and enjoy this puzzle game enriched with a great
                    story! Start your makeover now!
                  </p>
                </GridItem>
              </GridContainer>
              <Divider />
              <GridContainer className={classes.description}>
                <GridItem xl={12} md={12}>
                  <GridContainer>
                    <GridItem xl={12} md={12}>
                      <h4 className={classes.reset}>Đánh giá</h4>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xl={12} md={12}>
                  <GridContainer>
                    <GridItem xl={4} md={4}>
                      <GridContainer justify="center">
                        <GridItem xl={12} md={12} className={classes.img}>
                          <h2 className={classes.reset}>4.8</h2>
                        </GridItem>
                        <GridItem xl={12} md={12} className={classes.img}>
                          <Rating
                            name="size"
                            defaultValue={4.4}
                            precision={0.1}
                            readOnly
                          />
                        </GridItem>
                        <GridItem
                          xl={12}
                          md={12}
                          className={classnames(
                            classes.img,
                            classes.description
                          )}
                        >
                          <PersonIcon />
                          <span>{` Tổng  12700`}</span>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xl={8} md={8}>
                      {RenderList(item)}
                    </GridItem>
                    <GridItem xl={12} md={12}>
                      {renderListComment(item)}
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                variant="outlined"
                startIcon={<CreateOutlinedIcon />}
                onClick={handleOpen}
              >
                Viết bài đánh giá
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} md={4}>
          <GridContainer>
            <GridItem xs={12} md={12}>
              <h3>Món ăn tương tự</h3>
            </GridItem>
            <GridItem xs={12} md={12}>
              <Rleated />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </Page>
  );
}
