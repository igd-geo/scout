import React, {Component} from 'react';
import {Headline4, Headline6, Subtitle2}  from '@material/react-typography';
import Card, {CardPrimaryContent, CardMedia} from "@material/react-card";
import {Cell, Grid, Row} from '@material/react-layout-grid';

import './Aggregation.css'


class Aggregation extends Component {
  render () {
    return (
      <div className="aggregation">
        <Headline4 className="heading" style={{textAlign:"left", marginLeft:"20px"}}>
          <i className="material-icons title-icons">dashboard</i>
          Aggregation
        </Headline4>

        <Grid align="left" className="layoutGrid">
          <Row>
            <Cell>
              <Card>
                <CardPrimaryContent >
                  <CardMedia wide imageUrl={"https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"} />
                  <div className="primaryContent">
                    <Headline6>
                      Name
                    </Headline6>
                    <Subtitle2 className='demo-card__subtitle'>
                      Content
                    </Subtitle2>
                  </div>
                </CardPrimaryContent>
              </Card>
            </Cell>
          </Row> 
        </Grid>
      </div>
    );
  }
}

export default Aggregation