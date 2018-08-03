import React, { Component } from "react";
import { withRouter } from "react-router";

/**
 * https://github.com/ReactTraining/react-router/blob/v4.0.0-beta.8/packages/react-router/docs/guides/blocked-updates.md
 */
class BlockAvoider extends Component {
  render() {
    const className = this.props.location.pathname;
    return <div className={className}>{this.props.children}</div>;
  }
}

export default withRouter(BlockAvoider);
