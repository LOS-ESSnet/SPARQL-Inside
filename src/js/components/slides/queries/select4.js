import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `SELECT *
  WHERE {
    ?s ?p ?o
  }
LIMIT 10`;
	return <SparqlViewer text={query} />;
};
