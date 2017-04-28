import { Component } from 'react';
import PropTypes from 'prop-types';

class AsyncComponent extends Component {
  state = { Component : null }

  static propTypes = {
    getComponent: PropTypes.func.isRequired
  }

  async componentDidMount () {
    const { getComponent } = this.props;

    const component = await getComponent();
    await this.setState({ Component: component });
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
