import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import ResultsList from './ResultsList'
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/';

const styles = theme => ({
  ExpansionPanel: {
    marginBottom: '8px',
    transition: theme.transitions.create(
      ['margin'],
      { duration: 500 }
    ),
  },
  ExpansionPanelSummaryLeft: {
    float: 'left',
    maxWidth: '70%',
  },
  ExpansionPanelSummaryRight: {
    color: indigo[800],
    float: 'right',
  },
  ExpansionPanelDetails: {
    padding: '1.5rem',
    flexDirection: 'column',
  },
});

const ResultsPage = props => {
  const { classes } = props;

  return (
    <Container className={classes.resultsListContainer} maxWidth='lg'>
      <Grid ontainer spacing={2}>
        <Grid item xs='12'>
          <Typography variant='h4' gutterBottom={true}>Suitable Plans:</Typography><br/>
        </Grid>
        <Grid item xs='12'>
          <ResultsList optionsSelected={this.state.confirmedOptions}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(ResultsPage);