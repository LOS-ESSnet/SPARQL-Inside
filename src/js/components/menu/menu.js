import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItems from './menu-items';

class AppMenu extends Component {
	constructor() {
		super();
		this.state = { open: false };

		this.handleToggle = () => this.setState({ open: !this.state.open });
		this.handleMenuItem = route => {
			this.setState({ open: false });
		};
	}

	render() {
		const { items } = this.props;
		const menuItems = items.map(({ route, title, menuTitle, type }) => (
			<MenuItems
				key={route}
				route={route}
				title={title || menuTitle}
				close={this.handleMenuItem}
				type={type}
			/>
		));

		return (
			<div>
				<AppBar
					title={<span style={{ color: '#FFFFFF' }}>Sparql Inside</span>}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonClick={this.handleToggle}
					style={{ backgroundColor: '#ee3467' }}
				/>
				<Drawer
					ref="leftNav"
					docked={false}
					open={this.state.open}
					onRequestChange={this.handleToggle}
					style={{
						width: 1000,
					}}
					width="25%"
				>
					{menuItems}
				</Drawer>
			</div>
		);
	}
}

export default AppMenu;
