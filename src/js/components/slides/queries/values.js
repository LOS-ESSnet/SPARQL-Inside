import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?dimension ?label
	WHERE {
		?s qb:dimension ?dimension .
		?dimension rdfs:label ?label
		VALUES ?dimension { <http://id.insee.fr/meta/dimension/sexe> <http://id.insee.fr/meta/dimension/tactr> }
}
`;
	return <SparqlViewer text={query} />;
};
