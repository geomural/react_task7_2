import React from 'react'
import PropTypes from 'prop-types'
import Popular from './Popular'
import New from './New'

function Wrapper(props) {
    const {views, Component} = props;
    if (views > 1000) {
      return <Popular>{Component(props)}</Popular>;
    }
    if (views < 100) {
      return <New>{Component(props)}</New>;
    }
    return Component(props);
}

Wrapper.propTypes = {
    views: PropTypes.number,
    Component: PropTypes.func
}

export default Wrapper;
  