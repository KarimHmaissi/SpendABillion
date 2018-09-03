import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      shown: true,
    });
  }

  renderLess() {
    return (
      <span>
        {this.props.description.substring(0, 140)}
        <span>...</span>
        <a tabIndex={0} role="button" onClick={this.showMore}> more</a>
      </span>
    );
  }

  render() {
    return (
      <p className="item__description">
        {this.state.shown
          ? this.props.description
          : this.renderLess()}
      </p>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
