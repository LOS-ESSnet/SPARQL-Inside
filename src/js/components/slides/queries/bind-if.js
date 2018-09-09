import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dim: <http://id.insee.fr/meta/dimension/>
SELECT ?item ?labelFr ?labelEn
	WHERE {
  		dim:sexe qb:codeList ?codeList .
		?item skos:inScheme ?codeList .
		?item skos:prefLabel ?labelFr
		BIND( if(STR(?labelFr) = "Hommes", "Men", "Women") as ?labelEn)
}
`;
	return <SparqlViewer text={query} />;
};
