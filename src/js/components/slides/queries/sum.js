import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?label (sum(?pop) as ?pop15plus)
	WHERE {
  		?obs qb:dataSet <http://id.insee.fr/meta/demo/pop5/dataSet/2015-depcomarm> .
		?obs ?dimGeo ?commune .
		?commune skos:notation "70285" .
		?commune skos:prefLabel ?label .
		?obs <http://id.insee.fr/meta/mesure/pop15Plus> ?pop
}
GROUP BY ?label
`;
	return <SparqlViewer text={query} />;
};
