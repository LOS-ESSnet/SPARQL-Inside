import React from 'react';

export default () => (
	<div className="centered slide-text">
		<div>SELECT & ASK queries</div>
		<br />
		<div>{'GET {endpointURL}?query={encodedQuery}'}</div>
		<br />
		<div>Headers:</div>
		<ul>
			<li>application/json</li>
			<li>application/xml</li>
			<li>text/csv</li>
			<li>...</li>
		</ul>
	</div>
);
