/* eslint-disable import/no-absolute-path */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-restricted-syntax */
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, makeStyles, Slide
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import productsImage from 'src/assets/static/images/products/product_3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '3% 3%',
  },
  productDetail: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  imgBox: {
    width: '50%',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  description: {
    flex: '50%',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '0 0 0 5%',
  },
  titleBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  context: {
    marginTop: '2%',
  },
  // title: {
  //     "&>h1": {
  //         fontSize: "20px"
  //     },
  // },
  '@media(max-width:800px)': {
    nextBtn: {
      width: '40px',
    },
    prevBtn: {
      width: '40px',
    },
  },
  '@media(max-width:600px)': {
    slider: {
      display: 'grid',
      gridTemplateColumns:
				'repeat( 12, calc(100% - var(--grid-gap,16px)) )',
      gridGap: 'var(--grid-gap,16px)',
      transition: 'all 350ms ease-in-out 0s',
    },
  },
  reset: {
    margin: 0,
    fontWeight: 300,
  },
  btnGroup: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  btnDelete: {
    backgroundColor: 'red',
    marginLeft: '10px',
  },
  linkOrder: {
    color: '#3B8BF1',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ProductDetail() {
  const classes = useStyles();
  const renderProperty = () => {
    const list = [];
    // for (const key in property) {
    //   if (property.hasOwnProperty(key)) {
    //     list.push(<h4 key={key} className={classes.reset}>{`${key}: ${property[key]}`}</h4>);
    //   }
    // }
    return list;
  };
  const [openDiaLog, setOpenDiaLog] = React.useState(false);

  const handleClickOpenDiaLog = () => {
    setOpenDiaLog(true);
  };

  const handleCloseDiaLog = () => {
    setOpenDiaLog(false);
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openDiaLog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDiaLog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Confirm?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Xác nhận xóa sản phẩm
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDiaLog} color="primary">
            Disagree
          </Button>
          <Button onClick={handleCloseDiaLog} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.productDetail}>
        <div className={classes.imgBox}>
          <img
            alt="productDetail"
            src={productsImage}
            className={classes.img}
          />
        </div>
        <div className={classes.description}>
          <div className={classes.titleBox}>
            <div className={classes.title}>
              <h1 className={classes.reset}>Nike Air Zoom</h1>
            </div>
            <div className={classes.price}>
              <h4>¥33,000</h4>
            </div>
          </div>
          <Divider />
          <div className={classes.context}>
            {renderProperty({ 1: 1, 2: 2, 3: 3, })}
          </div>
        </div>
      </div>
      <div className={classes.btnGroup}>
        <div className={classes.left}>
          <Link to="" className={classes.linkOrder}>
            {'<< Quay lại danh sách sản phẩm'}
          </Link>
        </div>
        <div className={classes.right}>
          <Button
            variant="outlined"
            className={classes.btnEdit}
            startIcon={<EditOutlinedIcon />}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            className={classes.btnDelete}
            startIcon={<DeleteOutlineIcon />}
            onClick={handleClickOpenDiaLog}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
