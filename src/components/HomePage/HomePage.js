import React from 'react'
//import components
import { Button, Container, Grid, Typography, Box, Link, Fade } from '@material-ui/core'
//import styles
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setIsShowSearch } from '../../redux/search/search-actions'
import { setIsShowCompare } from '../../redux/compare/compare-actions'

const styles = theme => ({
  hideHomePage: {
    [theme.breakpoints.down('sm')]: {
      display: 'none !important'
    }
  },
  outerBox: {
    height: '100%',
    flex: 1,
    display: 'flex',
    background: `url(https://firebasestorage.googleapis.com/v0/b/telco-comparison.appspot.com/o/HomePage_bg.jpg?alt=media&token=35e5b0a1-37e2-4701-b3c8-fbb6f29d68e7) center`, //todo: resize for different screen sizes
    backgroundSize: 'cover',
    flexFlow: 'column'
  },
  outerContainer: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 10px',
    position: 'relative',
    background: '-moz-linear-gradient(left,  rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)', //FF3.6-15
    background: '-webkit-linear-gradient(left,  rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0) 100%)', //Chrome10-25,Safari5.1-6
    background: 'linear-gradient(to right,  rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0) 100%)', //W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    [theme.breakpoints.only('sm')]: {
      padding: '40px 30px'
    },
    [theme.breakpoints.only('md')]: {
      padding: '40px 50px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '40px 100px'
    }
  },
  mainTitle: {
    color: theme.palette.common.white,
    lineHeight: 1.25,
    marginBottom: '0.6em'
  },
  Button: {
    padding: '14px 28px',
    fontWeight: 'bold',
    marginBottom: '14px'
  },
  buttonLeft: {
    borderRadius: '4px  0 0 4px',
    border: '1px solid ' + theme.palette.primary.main,
    marginRight: '14px'
  },
  buttonRight: {
    color: 'white',
    borderColor: 'white',
    borderRadius: '0 4px 4px 0'
  },
  footnote: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: theme.palette.common.white
  },
  footnoteLink: {
    color: theme.palette.common.white
  }
})

const HomePage = props => {
  const { classes } = props
  console.log(props.isShowSearch)

  return (
    <Fade in={!props.isShowResults} timeout={500} style={{ transitionDelay: !props.isShowResults ? '0s' : '0.5s' }} mountOnEnter unmountOnExit>
      <Box className={clsx(classes.outerBox, props.isShowSearch && classes.hideHomePage)}>
        <Container className={classes.outerContainer} maxWidth={false}>
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={9} lg={7} xl={5}>
                <Typography variant="h2" className={classes.mainTitle}>
                  Finding a good mobile plan doesn't have to be confusing.
                </Typography>
                <Button className={clsx(classes.Button, classes.buttonLeft)} onClick={() => props.setIsShowSearch(true)} variant="contained" size="large" color="primary">
                  Search for a suitable plan
                </Button>
                <Button className={clsx(classes.Button, classes.buttonRight)} onClick={() => props.setIsShowCompare(true)} variant="outlined" size="large">
                  Compare between plans
                </Button>
              </Grid>
            </Grid>
          </Container>
          <Box className={classes.footnote}>
            Data last updated on 31 Oct 2019. Designed by{' '}
            <Link target="_blank" className={classes.footnoteLink} href="https://keanekwa.com">
              Keane Kwa
            </Link>
            .
          </Box>
        </Container>
      </Box>
    </Fade>
  )
}

const mapStateToProps = state => ({
  isShowSearch: state.search.isShowSearch
})

const mapDispatchToProps = dispatch => ({
  setIsShowSearch: isShowSearch => dispatch(setIsShowSearch(isShowSearch)),
  setIsShowCompare: isShowCompare => dispatch(setIsShowCompare(isShowCompare))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage))