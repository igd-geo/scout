import React, {Component}from 'react';
import {connect} from "react-redux";
import './NavMenu.css'
import MaterialIcon from '@material/react-material-icon'; 
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import { Link } from "react-router-dom";
import { changeNavIndex } from "../actions/Navigation/Actions";

class MenuContent extends Component {

  render () {
    return (
      <List singleSelection selectedIndex={this.props.navIndex}>
        <Link to="/" className="routing-link" onClick={() => this.props.changeNavIndex(0)}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='home'/>} /> 
            <ListItemText primaryText='Home' />
          </ListItem>
        </Link>
        <Link to="/live-monitoring" className="routing-link" onClick={() => this.props.changeNavIndex(1)}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='dvr'/>} /> 
            <ListItemText primaryText='Live-Monitoring' />
          </ListItem>
        </Link>
        <Link to="/dashboard" className="routing-link" onClick={() => this.props.changeNavIndex(2)}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='dashboard'/>} />
            <ListItemText primaryText='Aggregation' />
          </ListItem>
        </Link>
        <Link to="/settings" className="routing-link" onClick={() => this.props.changeNavIndex(3)}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='settings'/>} />
            <ListItemText primaryText='Settings' />
          </ListItem>
        </Link>
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  navIndex: state.navMenu.navIndex
});

const mapDispatchToProps = dispatch => ({
  changeNavIndex: (newNavIndex) => dispatch(changeNavIndex(newNavIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContent);