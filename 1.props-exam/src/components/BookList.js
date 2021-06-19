import React, {Component} from 'react';

import {List, ListItem} from '@material-ui/core';
import Books from '../static_data/Books';


class BookList extends Component{

    const { book } = this.props;
    render(){
        return(
            <List>
                <ListItem>
                    Item01
                </ListItem>
                <ListItem>
                    Item02
                </ListItem>
                <ListItem>
                    Item03
                </ListItem>
            </List>
        )
    }
}

export default BookList;
