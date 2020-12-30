import DateFnsUtils from '@date-io/date-fns';
import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField
} from '@material-ui/core';
import {
  KeyboardDatePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'date-fns';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(2),
  },
  title: {
    fontWeight: 300,
    zIndex: 100,
  },
  marginL: {
    marginLeft: theme.spacing(2),
  },
  marginL1: {
    marginLeft: theme.spacing(4),
  },
}));

export const Book = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={8}
          md={8}
          xs={8}
        >
          <TextField
            fullWidth
            label="Author"
            margin="normal"
            name="author"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={4}
        >
          <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
            <Select
              native
              label="Age"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value="paperback">Paperback</option>
              <option value="hardcover">Hardcover</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={8}
          md={8}
          xs={8}
        >
          <TextField
            fullWidth
            label="Publisher"
            margin="normal"
            name="publisher"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={4}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Publication Date"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              className={classes.marginL}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
      >
        <Grid item xl={4} md={4} xs={4}>
          <TextField
            fullWidth
            label="Pages"
            margin="normal"
            name="pages"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} md={4} xs={4}>
          <TextField
            fullWidth
            label="Language"
            margin="normal"
            name="language"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} md={4} xs={4}>
          <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
            <Select
              native
              label="Type"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value="Truyện tranh">Truyện tranh</option>
              <option value="Truyện chữ">Truyện chữ</option>
              <option value="Sách ảnh">Sách ảnh</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={4}
          md={4}
          xs={4}
        >
          <TextField
            fullWidth
            label="Price"
            margin="normal"
            name="price"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          xs={4}
        >
          <TextField
            fullWidth
            label="Value"
            margin="normal"
            name="value"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export const CD = () => {
  return (
    <TextField
      fullWidth
      label="Artists"
      margin="normal"
      name="artists"
      variant="outlined"
    />
  );
};
