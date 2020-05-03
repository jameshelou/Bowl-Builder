import React, { Component } from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {
    state = {
      error: null
    }

    // cannot use componentDidMount() as network request is made in our <WrappedComponent> before interceptors are set here.
    // when componentWillMount() is deprecated we can set up interceptors in constructor instead as recommended by Max.
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({error: null});
        return request;
      })
      this.resInterceptor = axios.interceptors.response.use(response => response, error => {
        this.setState({error: error});
      })
    }

    // clean up interceptors - or else wherever we use <withErrorHandler /> and delete, they will hang around and cause memory leaks
    componentWillUnmount() {
      console.log(`[WithErrorHandler.js] will unmount...\n ${this.reqInterceptor}\n${this.resInterceptor}}`)
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          <Modal 
          show={this.state.error}
          backdropClicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;