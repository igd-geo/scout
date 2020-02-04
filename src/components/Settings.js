import React, {Component} from 'react';
import {Headline4}  from '@material/react-typography';


class Settings extends Component {
  render () {
    return (
      <Headline4 className="heading" style={{textAlign:"left", marginLeft:"20px"}}>
        <i className="material-icons title-icons">settings</i>
        Settings
      </Headline4>
    );
  }
}

export default Settings