import React, {Component} from 'react'
import {connect} from "react-redux"
import CodeMirror from 'codemirror'
import './JsonViewer.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/display/autorefresh'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'

class JsonViewer extends Component {
  
  shouldComponentUpdate() {
    return ((this.props.displayBeatObjectDialog === true) ? false : true)
  }

  componentDidMount() {
    this.setState({ 
      editor :  CodeMirror(document.getElementById("codemirror"),
        {
          mode:  "javascript",
          json: true,
          readOnly: true,
          autoRefresh: true,
          scrollbarStyle: "null",
          lineNumbers: true,
          autofocus: true
        }
      )
    })
  }
  componentDidUpdate() {
    this.state.editor.setSize("100%", "100%")
    var content = (this.props.selectedIndex >= 0) ? JSON.stringify(this.props.beatObjects[this.props.selectedIndex], null, 3) : "empty"
    this.state.editor.setValue(content)
    this.state.editor.refresh()
  }

  render() {
    return (
      <div id="codemirror"></div>
    );
  }
}

const mapStateToProps = (state) => ({
  beatObjects: state.liveMonitoring.beatObjects,
  selectedIndex: state.liveMonitoring.selectedIndex,
  displayBeatObjectDialog: state.liveMonitoring.displayBeatObjectDialog,
});

export default connect(
  mapStateToProps,
)(JsonViewer)