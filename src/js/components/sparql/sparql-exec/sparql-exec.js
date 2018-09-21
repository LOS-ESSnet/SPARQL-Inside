import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { Request, Response } from './';
import { get } from 'js/utils/custom-fetch';
import { customQuery } from 'js/utils/prefixes';
import { ENDPOINT_POP5 } from 'js/config';

const customContentStyle = {
	width: '90%',
	maxWidth: 'none',
};

class SparqlExec extends Component {
	constructor(props) {
		super();
		this.state = {
			exec: false,
			endPoint: ENDPOINT_POP5,
			query: customQuery(props.query) || '',
			response: '',
			isLoading: false,
		};
		this.handleChangeQuery = query =>
			this.setState({ query: customQuery(query) });
		this.handleChangeEndPoint = endPoint => this.setState({ endPoint });
		this.execute = () => {
			this.setState({
				exec: true,
				isLoading: true,
				response: '',
				error: '',
			});
			const { endPoint, query } = this.state;
			get(endPoint, query)
				.then(res => res.json())
				.then(response => this.setState({ response, isLoading: false }))
				.catch(() => this.setState({ error: true, isLoading: false }));
		};
		this.reset = () => this.setState({ exec: false, response: '' });
	}

	render() {
		const { closeModal } = this.props;
		const { endPoint, query, exec, response, isLoading, error } = this.state;
		return (
			<Dialog
				title="Try your query !"
				titleStyle={{ fontSize: '30px' }}
				modal={true}
				open={true}
				onRequestClose={e => console.log(e)}
				contentStyle={customContentStyle}
				autoScrollBodyContent={true}
			>
				{(!exec || (exec && !isLoading)) && (
					<Request
						endPoint={endPoint}
						query={query}
						handleChangeEndPoint={this.handleChangeEndPoint}
						handleChangeQuery={this.handleChangeQuery}
						closeModal={closeModal}
						execute={this.execute}
						reset={this.reset}
					/>
				)}
				{exec && (
					<Response response={response} isLoading={isLoading} error={error} />
				)}
			</Dialog>
		);
	}
}

export default SparqlExec;
