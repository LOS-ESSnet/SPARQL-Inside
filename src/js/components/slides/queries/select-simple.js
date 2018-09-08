import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `SELECT *
  WHERE {
    ?subject ?predicat ?object
  }
LIMIT 10`;
	return <SparqlViewer text={query} />;
};
