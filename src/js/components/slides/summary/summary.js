import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { items } from 'js/components/router/component-list';
import './summary.css';

export default withRouter(props => {
	let sub = false;
	return (
		<ul>
			{items.reduce((_, { route, title, type }, i) => {
				const path = props.location.pathname;
				if (type === 'SubHeader')
					_.push(
						<li
							key={`item-${i}`}
							className={`summary-item ${
								path === route ? 'summary-item-selected' : ''
							}`}
						>
							<Link to={route}>{title}</Link>
						</li>
					);
				if (path === route) sub = true;
				if (path !== route && type === 'SubHeader') sub = false;
				if (sub && type !== 'SubHeader')
					_.push(
						<li key={`item-${i}`} className="summary-subitem">
							<Link to={route}>{title}</Link>
						</li>
					);
				return _;
			}, [])}
		</ul>
	);
});
