import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
SELECT ?s ?type ?object
	WHERE {
  		?s ?p qb:DataStructureDefinition ;
		  ?type ?object
}
`;
	return <SparqlViewer text={query} />;
};
