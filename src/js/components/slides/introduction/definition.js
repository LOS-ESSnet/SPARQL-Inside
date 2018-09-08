import React from 'react';

export default () => (
	<div className="centered slide-text">
		<div>
			<b>SPARQL Protocol And RDF Query</b>
		</div>
		<br />
		<div>
			<a
				href="https://www.w3.org/TR/sparql11-protocol/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Protocol
			</a>{' '}
			based on HTTP
		</div>
		<div>
			<a
				href="https://www.w3.org/TR/rdf-sparql-query/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Query language
			</a>{' '}
			based on{' '}
			<a
				href="https://www.w3.org/TR/turtle/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Turtle
			</a>{' '}
			syntax
		</div>
	</div>
);
