import React from 'react';
import Highlight from 'react-highlight';

export default () => (
	<div className="centered slide-text">
		<div>Textual representation of RDF data</div>
		<br />
		<div>Grammar based on triples:</div>
		<br />
		<Highlight language="sql">{`subject predicat1 object1 .
subject predicat2 object2  `}</Highlight>
		<div>=</div>
		<Highlight language="sql">{`subject predicat1 object1 ;
     predicat2 object2  `}</Highlight>
	</div>
);
