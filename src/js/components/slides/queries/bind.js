import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?s ?label ?lang
	WHERE {
  		?s ?p qb:DataStructureDefinition ;
		  rdfs:label ?label
		BIND(lang(?label) as ?lang)
}
`;
	return <SparqlViewer text={query} />;
};
