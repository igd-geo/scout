import React, {Component} from 'react';
import {connect} from "react-redux";
import './LiveMonitoringList.css'
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';
import { 
  FixedSizeList 
} from 'react-window';
import JsonViewer from './JsonViewer'
import {
  toggleBeatObjectDialog,
} from '../../actions/LiveMonitoring/Actions'


class LiveMonitoringList extends Component {

  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]
  lookupVisibility = (loglevel) => this.props.visibilityLogLevel[loglevel]

  Row = ({index, style}) => (
    <ListItem 
      style={style}
      onClick={() => this.props.toggleBeatObjectDialog(index)}
    >
      <ListItemGraphic graphic={<span style={{backgroundColor: this.lookupColor(this.props.filteredBeatObjects[index]["log_level"])}} />}/>
      <ListItemText
        primaryText={this.props.filteredBeatObjects[index].log_message}
        secondaryText={this.props.filteredBeatObjects[index]["@timestamp"]}
      />
    </ListItem>
  );

  render() {
    return(
      <div>
        <List twoLine dense style={{paddingTop:"0px", height: "50vh"}}>
          <div className="default-list-title" style={{display: (this.props.filteredBeatObjects.length === 0) ? "inherit" : "none"}}>
            <p>{(this.props.sse !== null && this.props.sse.readyState === 1) ? "No logs to display yet." : "Please connect to a Host."}</p>
          </div>
          <FixedSizeList
            height={3000}
            style={{width: "100%", height: "50vh", fontSize:"10pt", backgroundColor:"whitesmoke", display: (this.props.filteredBeatObjects.length === 0) ? "none" : "inherit"}}
            itemCount={this.props.filteredBeatObjects.length}
            itemSize={70}
          >
            {this.Row}
          </FixedSizeList>
        </List>
        <Dialog  open={this.props.displayBeatObjectDialog} onClose={() => this.props.toggleBeatObjectDialog(-1)}>
          <DialogTitle className="heading">Entry #{this.props.selectedIndex+1}</DialogTitle>
          <DialogContent>
            <JsonViewer/>
          </DialogContent>
          <DialogFooter>
            <DialogButton action='accept' isDefault>Ok</DialogButton>
          </DialogFooter>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filteredBeatObjects: state.liveMonitoring.filteredBeatObjects,
  displayBeatObjectDialog: state.liveMonitoring.displayBeatObjectDialog,
  selectedIndex: state.liveMonitoring.selectedIndex,
  sse: state.liveMonitoring.sseClient,
  colorLookupTable: state.liveMonitoring.colorLookupTable,
  visibilityLogLevel: state.liveMonitoring.visibilityLogLevel,
});

const mapDispatchToProps = dispatch => ({
  toggleBeatObjectDialog: (index) => dispatch(toggleBeatObjectDialog(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveMonitoringList)