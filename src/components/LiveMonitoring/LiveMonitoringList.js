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
} from '../../actions/Actions'


class LiveMonitoringList extends Component {

  onDialogClose = () => {
    this.props.toggleBeatObjectDialog(-1)
  }

  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]

  Row = ({index, style}) => (
    <ListItem 
      style={style} 
      onClick={() => this.props.toggleBeatObjectDialog(index)}
    >
      <ListItemGraphic graphic={<span style={{backgroundColor: this.lookupColor(this.props.beatObjects[index]["log_level"])}} />} />
      <ListItemText
        primaryText={this.props.beatObjects[index].log_message}
        secondaryText={this.props.beatObjects[index]["@timestamp"]}
      />
    </ListItem>
  );

  render() {
    return(
      <div>
        <List twoLine dense>
          <FixedSizeList
            height={500}
            style={{width:"100vw", height: "74vh", fontSize:"10pt"}}
            itemCount={this.props.beatObjects.length}
            itemSize={70}
          >
            {this.Row}
          </FixedSizeList>
        </List>
        <Dialog  open={this.props.displayBeatObjectDialog} onClose={this.onDialogClose}>
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
  beatObjects: state.liveMonitoring.beatObjects,
  displayBeatObjectDialog: state.liveMonitoring.displayBeatObjectDialog,
  selectedIndex: state.liveMonitoring.selectedIndex,
  colorLookupTable: state.liveMonitoring.colorLookupTable,
});

const mapDispatchToProps = dispatch => ({
  toggleBeatObjectDialog: (index) => dispatch(toggleBeatObjectDialog(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveMonitoringList)