import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `DESCRIBE <http://id.insee.fr/meta/demo/pop5/dsd/2015-depcomarm>`;
	return <SparqlViewer text={query} noTry={true} />;
};
