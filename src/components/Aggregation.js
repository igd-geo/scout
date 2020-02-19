import React, {Component} from 'react';
import {Headline4}  from '@material/react-typography';


class Home extends Component {
  render () {
    return (
      <Headline4 className="heading" style={{textAlign:"left", marginLeft:"20px"}}>
        <i className="material-icons title-icons">dashboard</i>
        Aggregation
      </Headline4>
    );
  }
}

export default Home