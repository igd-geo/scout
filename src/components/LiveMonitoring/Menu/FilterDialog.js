import React, {Component} from 'react';
import {connect} from "react-redux";
import './Menu.css'

class FilterDialog extends Component {
    render () {
        return (
            <div className="main_menu">
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  });
  
  const mapDispatchToProps = dispatch => ({
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FilterDialog) 