import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Button from 'js/components/shared/button';
import SparqlExec from './sparql-exec';

class SparqlViewer extends Component {
	constructor() {
		super();
		this.state = { modal: false };
		this.openModal = () => this.setState({ modal: true });
		this.closeModal = () => this.setState({ modal: false });
	}
	render() {
		const { text, noTry, language } = this.props;
		const { modal } = this.state;
		return (
			<React.Fragment>
				<div className="query-text">
					<Highlight language={`${language ? language : 'sql'}`}>
						{text}
					</Highlight>
				</div>
				{!noTry && (
					<div className="centered">
						<Button label="Try it out !" onClick={this.openModal} />
						{modal && <SparqlExec query={text} closeModal={this.closeModal} />}
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default SparqlViewer;
