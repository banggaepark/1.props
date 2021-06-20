import React, {Component} from "react";
import BookList from './components/BookList';

import Books from './static_data/Books';




class App extends Component {
  render(){

    const 
    return (
      <BookList books={ Books }/>
    )
  }
  
}

export default App;
