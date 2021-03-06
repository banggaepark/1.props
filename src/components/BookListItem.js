import React, { Component } from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    image: {
        width: 126,
        height: 162,
    },
    textArea : {
        width : 388
    },
}

//git 테스트 이번에는 mini에서 수정
class BookListItem extends Component {
    render() {
        const { book, classes } = this.props;

        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.image} src={book.imgUrl} />
                    </Grid>
                    <Grid item className={classes.textArea}>
                        <Typography container='h5' variant='h5'>
                            {book.tithle}
                        </Typography>
                        <Typography gutterBottom>
                            {book.author}
                        </Typography>
                        <Typography color='textSecondary'>
                            {book.introduce}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(BookListItem);