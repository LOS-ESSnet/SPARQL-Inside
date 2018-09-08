import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import PageButton from './page-button';
import PageBody from './page-body';

const Page = ({ title, route, body }) => (
	<div className="mui-container">
		<PageTitle title={title} />
		<PageButton route={route} />
		<PageBody body={body} />
	</div>
);

Page.propTypes = {
	title: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Page;
