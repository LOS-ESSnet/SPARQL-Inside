import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

ASK {?s rdf:type skos:Concept}

# ?s a skos:Concept`;
	return <SparqlViewer text={query} />;
};
