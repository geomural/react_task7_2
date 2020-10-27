import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import Video from './Video'
import Article from './Article'

function List(props) {
    const {list} = props;
    return list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Wrapper {...item} Component={Video} />
                );

            case 'article':
                return (
                    <Wrapper {...item} Component={Article} />
                );
            default:
                return null;
        }
    });
};

List.propTypes = {
    list: PropTypes.array
};

export default List