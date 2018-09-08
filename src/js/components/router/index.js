import React from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Menu from 'js/components/menu';
import PagesRoutes from './routes';
import { items } from 'js/components/router/component-list';

export default () => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Menu items={items} changeTheme={this.changeTheme} />
					<Switch>
						<PagesRoutes />
						/>
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
};
