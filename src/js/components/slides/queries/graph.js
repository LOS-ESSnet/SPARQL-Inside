import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `SELECT ?subject ?graph
# FROM <graph1>
WHERE { GRAPH ?graph {
  ?subject ?predicat ?object
  }
}
LIMIT 10`;
	return <SparqlViewer text={query} />;
};
