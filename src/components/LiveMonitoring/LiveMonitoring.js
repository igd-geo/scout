import React, {Component} from 'react';
import {connect} from "react-redux";
import store from '../../store'
import './LiveMonitoring.css'
import TextField, {
  Input,
} from '@material/react-text-field';
import Button from '@material/react-button';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import LiveMonitoringList from './LiveMonitoringList'
import Dialog, {DialogTitle, DialogContent} from '@material/react-dialog';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import {
  startLiveMonitoring,
  stopLiveMonitoring,
  addBeatObject,
  changeBeatHostInput,
  clearBeatObjects,
  toggleInfoDialog,
} from '../../actions/Actions'

const onclickFunction = function (msg) {
  store.dispatch(addBeatObject(JSON.parse(msg.data)))
}

class LiveMonitoring extends Component {

  renderDialogContent() {
    return JSON.stringify(this.props.beatObjects[this.props.selectedIndex], null, 2)
  }
  
  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]

  render () {
    return (
      <div>
        <Grid align="left" className="layoutGrid">
          <Row>
            <Cell columns={11}>
              <TextField
                  label='Host'
                  fullWidth="true"
                ><Input
                  value={this.props.beatHostInput}
                  onChange={(e) => this.props.changeBeatHostInput(e.currentTarget.value)} 
                />
              </TextField>
            </Cell>
            <Cell columns={1} align="middle">
              <Button raised="true" onClick={(this.props.connected === false) ? () => this.props.startLiveMonitoring(onclickFunction) : () => this.props.stopLiveMonitoring()} >
                {(this.props.connected === false) ? "Connect" : "Disconnect"}
              </Button>
            </Cell>
            </Row>
          <Row>
            <Cell columns={1} align="middle" className="utilityButton">
              <Button raised="true" onClick={()=> this.props.clearBeatObjects()}>
                Clear
              </Button>
            </Cell>
            <Cell columns={1} align="middle" className="utilityButton">
              <Button raised="true" onClick={()=> this.props.toggleInfoDialog()}> 
                Info
              </Button>
              <Dialog 
                open={this.props.displayInfoDialog} 
                onClose={()=> this.props.toggleInfoDialog()}>
                <DialogTitle className="heading">Loglevel coloring</DialogTitle>
                <DialogContent>
                  <List>
                    {Object.keys(this.props.colorLookupTable).map((logLevel, index) => 
                      <ListItem key={"infoItem"+index} >
                        <ListItemGraphic graphic={<span style={{backgroundColor: this.lookupColor(logLevel)}} />} />
                        <ListItemText primaryText={logLevel} />
                      </ListItem>
                    )}
                  </List>
                </DialogContent>
              </Dialog>
            </Cell>
          </Row>
        </Grid>
        <LiveMonitoringList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  beatObjects: state.liveMonitoring.beatObjects,
  displayInfoDialog: state.liveMonitoring.displayInfoDialog,
  selectedIndex: state.liveMonitoring.selectedIndex,
  beatHostInput: state.liveMonitoring.beatHostInput,
  connected: state.liveMonitoring.connected,
  colorLookupTable: state.liveMonitoring.colorLookupTable,
});

const mapDispatchToProps = dispatch => ({
  startLiveMonitoring: (onclickFunction) => dispatch(startLiveMonitoring(onclickFunction)),
  stopLiveMonitoring: () => dispatch(stopLiveMonitoring()),
  addBeatObject: (newBeatObject) => dispatch(addBeatObject(newBeatObject)),
  changeBeatHostInput: (newBeatHostInput) => dispatch(changeBeatHostInput(newBeatHostInput)),
  clearBeatObjects: () => dispatch(clearBeatObjects()),
  toggleInfoDialog: () => dispatch(toggleInfoDialog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveMonitoring)