import React, {Component} from 'react';
import {connect} from "react-redux";
import TopAppBar, {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Drawer, { DrawerContent } from '@material/react-drawer'
import MenuContent from './NavMenu'
import { toggleMenu } from "../actions/Navigation/Actions";

class TopBar extends Component {

  onDrawerClose = () => {
    this.props.toggleMenu()
  }

  render () {
    return (
      <div>
        <Drawer
          modal
          open={this.props.display_menu}
          onClose={this.onDrawerClose}
        >
          <DrawerContent>
            <MenuContent />
          </DrawerContent>
        </Drawer>
        
        <TopAppBar fixed >
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='menu' onClick={() => this.props.toggleMenu()}/>
              </TopAppBarIcon>
              <TopAppBarTitle>Scout</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    display_menu: state.navMenu.display_menu,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
