import React, { Component } from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log('[Modal] componentWillUpdate');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} backdropClicked={this.props.backdropClicked} />
        <div
          className={styles.Modal}
          style={{
            opacity: this.props.show ? 1 : 0,
            transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  };
}

export default Modal;