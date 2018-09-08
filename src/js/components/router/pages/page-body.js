import React from 'react';
import PropTypes from 'prop-types';

const PageBody = ({ body }) => <div className="mui-row">{body}</div>;

PageBody.propTypes = {
	body: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default PageBody;
