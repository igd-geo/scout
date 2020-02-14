import React, {Component} from 'react';
import {connect} from "react-redux";
import List, {ListItem, ListItemGraphic, ListItemText, ListItemMeta} from '@material/react-list';
import './Menu.css'
import {
    changeLoglevelVisibility
  } from '../../../actions/LiveMonitoring/Actions'



class InformationDialog extends Component {
    lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]
    lookupVisibility = (loglevel) => this.props.visibilityLogLevel[loglevel]

    render () {
        return (
            <div className="main_menu">
                <List>
                    {Object.keys(this.props.colorLookupTable).map((logLevel, index) => 
                    <ListItem key={"infoItem"+index} onClick={()=> this.props.changeLoglevelVisibility(logLevel)}>
                        <ListItemGraphic graphic={
                            <span style={{
                                backgroundColor: (this.lookupVisibility(logLevel)) ? this.lookupColor(logLevel) : "",
                                border: (this.lookupVisibility(logLevel)) ? "" : "3px #CCC solid",
                                boxSizing: "border-box",
                            }} />
                        } />
                        <ListItemText primaryText={logLevel}></ListItemText>
                        <ListItemMeta meta={<i className="material-icons">{(this.lookupVisibility(logLevel)) ? "visibility" : "visibility_off" }</i>}></ListItemMeta>
                    </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colorLookupTable: state.liveMonitoring.colorLookupTable,
    visibilityLogLevel: state.liveMonitoring.visibilityLogLevel,
  });
  
  const mapDispatchToProps = dispatch => ({
    changeLoglevelVisibility: (logLevel) => dispatch(changeLoglevelVisibility(logLevel)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(InformationDialog)