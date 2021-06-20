import React, {Component} from 'react';

import {List, ListItem} from '@material-ui/core';
import Books from '../static_data/Books';


class BookList extends Component{
    render(){
        const { books } = this.props;
        return(
            <List>
                <ListItem>
                  { books[0].title }
                </ListItem>
                <ListItem>
                { books[0].title }
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
