import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const MenuItems = ({ route, title, close, type }) => {
	const text =
		type === 'SubHeader' ? (
			<div style={{ color: '#ee3467', fontSize: '34px' }}>{title}</div>
		) : (
			<div style={{ fontSize: '18px' }}>{title}</div>
		);
	return (
		<React.Fragment>
			{type === 'SubHeader' && <Divider />}
			<MenuItem
				onClick={close}
				primaryText={text}
				containerElement={<Link to={route} />}
			/>
		</React.Fragment>
	);
};

MenuItems.propTypes = {
	route: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	close: PropTypes.func.isRequired,
	typetitle: PropTypes.string,
};

export default MenuItems;
