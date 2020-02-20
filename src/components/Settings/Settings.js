import React, {Component} from 'react';
import {connect} from "react-redux";
import {Headline4, Headline6, Subtitle2, Subtitle1}  from '@material/react-typography';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent,
  CardMedia
} from "@material/react-card";
import './Settings.css'
import '@material/react-card/index.scss'

import { changeCategoryVisibility } from "../../actions/Settings/Actions";

class Settings extends Component {
  lookupColor = (loglevel) => this.props.colorLookupTable[loglevel]

  render () {
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
              <Card>
                <CardPrimaryContent>
                  <CardMedia square style={{backgroundColor: this.lookupColor(logLevel)}}/>
                  {logLevel}
                </CardPrimaryContent>
              </Card>
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
  colorLookupTable: state.liveMonitoring.colorLookupTable,
});

const mapDispatchToProps = dispatch => ({
  changeCategoryVisibility: (category) => dispatch(changeCategoryVisibility(category)),
});

export default  connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)