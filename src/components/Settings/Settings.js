import React, {Component} from 'react';
import {connect} from "react-redux";
import {Headline4, Headline6}  from '@material/react-typography';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent,
  CardMedia
} from "@material/react-card";
import './Settings.css'
import { TwitterPicker } from 'react-color';

import { changeCategoryVisibility, showColorPicker } from "../../actions/Settings/Actions";
import { changeLogLevelColor } from "../../actions/LiveMonitoring/Actions";

class Settings extends Component {
  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel].toUpperCase();

  
  render () {
    const defaultColors = ["#B71C1C", "#4A148C", "#0D47A1", "#006064", "#194D33", "#827717", "#FF6F00",
                           "#D32F2F", "#7B1FA2", "#1976D2", "#0097A7", "#388E3C", "#AFB42B", "#FFA000",
                           "#F44336", "#9C27B0", "#2196F3", "#00BCD4", "#4CAF50", "#CDDC39", "#FFC107",
                           "#E57373", "#BA68C8", "#64B5F6", "#4DD0E1", "#81C784", "#DCE775", "#FFD54F",
                           "#FFCDD2", "#E1BEE7", "#BBDEFB", "#B2EBF2", "#C8E6C9", "#F0F4C3", "#FFECB3",
                           "#FF0000", "#FF5252", "#FFF170", "#42ADFF", "#FF82D7", "#9DFF82", "#F78DA7",
                           "#FF9800", "#795548", "#607D8B"
                          ]

    return (
      <div>
        <Headline4 className="heading" style={{textAlign:"left", marginLeft:"20px"}}>
          <i className="material-icons title-icons">settings</i>
          Settings
        </Headline4>

        <Grid align="left">
          <Row className="setting-title" title={this.props.categoryVisibility["coloring"] ? "Hide Loglevel-Coloring" : "Show Loglevel-Coloring"} onClick={()=> this.props.changeCategoryVisibility("coloring")}>
            <Cell>
              <Headline6>
                <i className="material-icons setting-arrow">{this.props.categoryVisibility["coloring"] ? "keyboard_arrow_down" : "keyboard_arrow_right"}</i>
                Loglevel-Coloring
              </Headline6>
            </Cell>
          </Row>
          <Row style={{display: this.props.categoryVisibility["coloring"] ? "inherit" : "none"}}>
            <Cell className="setting-body">

              {Object.keys(this.props.colorLookupTable).map((logLevel, index) => 
                <div key={"logLevelItem " + index} className="logLevelItem" title={this.lookupColor(logLevel)}>
                  <Card onClick={() => this.props.showColorPicker(index)}>
                    <CardPrimaryContent >
                      <CardMedia square style={{backgroundColor: this.lookupColor(logLevel)}}/>
                      {logLevel}
                    </CardPrimaryContent>
                  </Card>
                  <div className="colorPicker" style={{display: this.props.colorPickerIndex === index ? "inherit" : "none"}}>
                    <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', }} onClick={ () => this.props.showColorPicker(-1) }/>
                    <TwitterPicker id={logLevel} colors={defaultColors} color={this.lookupColor(logLevel)} onChange={(color) => {this.props.changeLogLevelColor(logLevel, color); }}/>
                  </div>
                </div>
              )}

            </Cell>
          </Row>
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryVisibility: state.settings.categoryVisibility,
  colorPickerIndex: state.settings.colorPickerIndex,
  colorLookupTable: state.liveMonitoring.colorLookupTable,
});

const mapDispatchToProps = dispatch => ({  
  changeLogLevelColor: (logLevel, newColor) => dispatch(changeLogLevelColor(logLevel, newColor)),
  changeCategoryVisibility: (category) => dispatch(changeCategoryVisibility(category)),
  showColorPicker: (index) => dispatch(showColorPicker(index)),
});

export default  connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)