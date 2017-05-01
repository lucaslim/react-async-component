import { Component } from 'react';
import PropTypes from 'prop-types';

class AsyncComponent extends Component {
  state = { Component : null }

  static propTypes = {
    getComponent: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { getComponent } = this.props;

    getComponent().then(component => {
      this.setState({ Component: component });
    });
  }

  render () {
    const { Component } = this.state;
    if (Component) {
      return Component;
    }

    return null;
  }
}

export default AsyncComponent;
