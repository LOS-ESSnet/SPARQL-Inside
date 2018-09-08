import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?s ?label
	WHERE {
  		?s ?p qb:DataStructureDefinition ;
		  rdfs:label ?label
		FILTER(lang(?label) = 'en')
}
#See also filtering on TYPE, REGEX, STRENDS, ...
`;
	return <SparqlViewer text={query} />;
};
