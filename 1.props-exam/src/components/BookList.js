import React, {Component} from 'react';

import {List, ListItem} from '@material-ui/core';
import Books from '../static_data/Books';
import BookListItem from './BookListItem';

class BookList extends Component{
    render(){
        const { books } = this.props;
        return(
            <List>
                <ListItem>
                    <BookListItem book={books[0]} />
                </ListItem>
                <ListItem>
                    { books[1].title }
                </ListItem>
                <ListItem>   
                    Item03
                </ListItem>
                <ListItem>
                    Item04
                </ListItem>
            </List>
        )
    }
}

export default BookList;
