import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
SELECT ?s
	WHERE {
  		?s ?p qb:DataStructureDefinition
}
`;
	return <SparqlViewer text={query} />;
};
