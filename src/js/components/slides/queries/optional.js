import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?s ?notation
	WHERE {
  		?s ?p ?o .
		OPTIONAL { ?s skos:notation ?notation }
}
LIMIT 1000
`;
	return <SparqlViewer text={query} />;
};
