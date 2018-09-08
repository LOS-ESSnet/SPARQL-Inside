import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?label
	WHERE {
		?s qb:dimension/rdfs:label ?label .
#  		?s qb:dimension ?dimension .
#		?dimension rdfs:label ?label
		FILTER(lang(?label) = 'fr')
}
`;
	return <SparqlViewer text={query} />;
};
