/* eslint-disable consistent-return */
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid, InputLabel, makeStyles,
  Select, TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import * as Yup from 'yup';
import { Book, CD } from './rowForm';

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
}));

const renderCategoryForm = (category) => {
  switch (category) {
    case 1:
      return <Book />;
    case 3:
      return <CD />;
    default:
      break;
  }
};

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState(0);
  const handelChange = (data) => {
    setCategory(parseInt(data.target.value, 10));
  };
  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new product
                  </Typography>
                </Box>
                <Grid
                  container
                >
                  <Grid
                    item
                    lg={8}
                    md={8}
                    xs={8}
                  >
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="Product Name"
                      margin="normal"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={4}
                  >
                    <FormControl className={classes.formControl} variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-age-native-simple" className={classes.title}>Category</InputLabel>
                      <Select native id="outlined-age-native-simple" value={category} onChange={handelChange}>
                        <option aria-label="Category" value="" />
                        <optgroup label="Products Physical">
                          <option value={1}>BOOK</option>
                          <option value={2}>DVD</option>
                          <option value={3}>CD</option>
                          <option value={4}>LP</option>
                        </optgroup>
                        <optgroup label="Products Digital">
                          <option value={5}>BOOK</option>
                          <option value={6}>MOVIES</option>
                          <option value={7}>ALBUM</option>
                        </optgroup>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                {renderCategoryForm(category)}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    CREATE
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
