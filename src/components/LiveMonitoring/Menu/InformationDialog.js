import React, {Component} from 'react';
import {connect} from "react-redux";
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import './Menu.css'



class InformationDialog extends Component {
    lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]

    render () {
        return (
            <div className="main_menu">
                <List>
                    {Object.keys(this.props.colorLookupTable).map((logLevel, index) => 
                    <ListItem key={"infoItem"+index} >
                        <ListItemGraphic graphic={<span style={{backgroundColor: this.lookupColor(logLevel)}} />} />
                        <ListItemText primaryText={logLevel} />
                    </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colorLookupTable: state.liveMonitoring.colorLookupTable,
  });
  
  const mapDispatchToProps = dispatch => ({
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(InformationDialog)