import React, {Component} from 'react';
import {connect} from "react-redux";
import store from '../../store'
import './LiveMonitoring.css'
import TextField, {
  Input, HelperText
} from '@material/react-text-field';
import Button from '@material/react-button';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import LiveMonitoringList from './LiveMonitoringList';
import {
  startLiveMonitoring,
  stopLiveMonitoring,
  addBeatObject,
  changeBeatHostInput,
  clearBeatObjects,
  toggleInfoDialog,
  changeTabToSearch,
  changeTabToFilter,
  changeTabToInfo,
  changeTabToSort,
  changeTabToNothingSelected
} from '../../actions/LiveMonitoring/Actions'
import {Headline4, Headline6}  from '@material/react-typography';
import {
  SEARCH,
  FILTER,
  INFO,
  SORT,
  NOTHING_SELECTED,
  CLEAR_ALL
} from '../../actions/LiveMonitoring/LogTabActions'

const onclickFunction = function (msg) {
  store.dispatch(addBeatObject(JSON.parse(msg.data)))
}

function test() {
  switch(this.props.logTab) {
    case SEARCH: 
      return "hello";
  }
  console.log(this.props.logTab);
}

class LiveMonitoring extends Component {

  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]

  render () {
    return (
      <div>
        <Headline4 className="heading" style={{textAlign:"left", marginLeft:"20px"}}>
          <i className="material-icons title-icons">dvr</i>
          Live Monitoring
        </Headline4>

        <Grid align="left" className="layoutGrid">
          <Row style={{marginBottom:"50px"}}>
            <Cell columns={11}>
              <TextField
                  label='Hostadress'
                  style={{width:"100%"}}
                  helperText={<HelperText>(i.e.: http://localhost:8080)</HelperText>}
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
            <Cell columns={12}>
              <Grid align="left" className="loggrid">
                <Row className="log_pane" style={{gridGap:"0px"}}>
                  <Cell columns={2} className="log_pane_cell">
                    <div className="connection-status">
                      <p>
                        {(this.props.sse !== null && this.props.sse.readyState === 0) ? "Trying to connect. Hold on." : (this.props.sse !== null && this.props.sse.readyState === 1) ? "Connected" : "Disconected"}
                      </p>
                    </div>
                  </Cell>
                  
                  <Cell  columns={10} className="log_pane_cell" style={{textAlign:"right"}}>
                    <Button 
                      onClick={()=> (this.props.logTab === SEARCH) ? this.props.changeTabToNothingSelected() : this.props.changeTabToSearch()} 
                      className="log-toolbar-button" 
                      outlined={this.props.logTab === SEARCH} 
                      title={SEARCH.tooltip}
                    >
                      <i className="material-icons">{SEARCH.iconName}</i>
                    </Button>
                    <Button 
                      onClick={()=> (this.props.logTab === FILTER) ? this.props.changeTabToNothingSelected() : this.props.changeTabToFilter()} 
                      className="log-toolbar-button" 
                      outlined={this.props.logTab === FILTER} 
                      title={FILTER.tooltip}
                    >
                      <i className="material-icons">{FILTER.iconName}</i>
                    </Button>
                    <Button 
                      onClick={()=> (this.props.logTab === SORT) ? this.props.changeTabToNothingSelected() : this.props.changeTabToSort()} 
                      className="log-toolbar-button" 
                      outlined={this.props.logTab === SORT} 
                      title={SORT.tooltip}
                    >
                      <i className="material-icons">{SORT.iconName}</i>
                    </Button>
                    <Button 
                      onClick={()=> {this.props.clearBeatObjects(); this.props.changeTabToNothingSelected()}} 
                      className="log-toolbar-button" 
                      title={CLEAR_ALL.tooltip}
                    >
                      <i className="material-icons">{CLEAR_ALL.iconName}</i>
                    </Button>
                    <Button 
                      onClick={()=> (this.props.logTab === INFO) ? this.props.changeTabToNothingSelected() : this.props.changeTabToInfo()} 
                      className="log-toolbar-button" 
                      outlined={this.props.logTab === INFO} 
                      title={INFO.tooltip}
                    > 
                      <i className="material-icons">{INFO.iconName}</i>
                    </Button>
                  </Cell>
                </Row>

                <Row className="log_pane log_pane_height" style={{marginTop:"0px"}}>
                  <Cell className="log_pane_height" columns={(this.props.logTab === NOTHING_SELECTED) ? 12 : 9}>
                    <LiveMonitoringList />
                  </Cell>

                  <Cell className="log_pane_dialog log_pane_height" columns={(this.props.logTab === NOTHING_SELECTED) ? 0 : 3} style={{display: (this.props.logTab === NOTHING_SELECTED) ? "none" : "flex"}}>
                    <Headline6 className="heading" style={{textAlign:"left", margin:"10px"}}>
                      <i className="material-icons interaction-menu-icon">{this.props.logTab.iconName}</i>
                      {this.props.logTab.headline}
                    </Headline6>
                    
                    {this.props.logTab.template}

                    <Button onClick={()=> this.props.changeTabToNothingSelected()} >
                      <i className="material-icons mdc-button__icon" aria-hidden="true">close</i>
                      <span className="mdc-button__label">Close</span>
                    </Button>
                  </Cell>
                </Row>
              </Grid>
                
            </Cell>
          </Row>
        </Grid>
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
  sse: state.liveMonitoring.sseClient,
  colorLookupTable: state.liveMonitoring.colorLookupTable,
  logTab: state.liveMonitoring.logTab
});

const mapDispatchToProps = dispatch => ({
  startLiveMonitoring: (onclickFunction) => dispatch(startLiveMonitoring(onclickFunction)),
  stopLiveMonitoring: () => dispatch(stopLiveMonitoring()),
  addBeatObject: (newBeatObject) => dispatch(addBeatObject(newBeatObject)),
  changeBeatHostInput: (newBeatHostInput) => dispatch(changeBeatHostInput(newBeatHostInput)),
  clearBeatObjects: () => dispatch(clearBeatObjects()),
  toggleInfoDialog: () => dispatch(toggleInfoDialog()),
  changeTabToSearch: () => dispatch(changeTabToSearch()),
  changeTabToFilter: () => dispatch(changeTabToFilter()),
  changeTabToSort: () => dispatch(changeTabToSort()),
  changeTabToInfo: () => dispatch(changeTabToInfo()),
  changeTabToNothingSelected: () => dispatch(changeTabToNothingSelected()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveMonitoring)