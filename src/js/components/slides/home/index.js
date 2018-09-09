import React from 'react';
import { Link } from 'react-router-dom';
import sparqlImg from 'img/sparql.png';

export default () => (
	<div className="centered">
		<Link to="/intro">
			<img src={sparqlImg} alt="RDF" className="img-full" />
		</Link>
	</div>
);
