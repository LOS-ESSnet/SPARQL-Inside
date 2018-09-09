import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `// Define Redux store

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default function configureStore(mainReducer) {
  return createStore(
    mainReducer,
    undefined,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
       ),
      window.devToolsExtension ? window.devToolsExtension() : f => f)
    )
}

// Initialize app into index.js

import React from 'react';
import { Provider } from 'react-redux';
import DepartementContainer from './dep-container';
import configureStore from 'js/store/configure-store';
import { getReducer, setQueryURL } from 'sparql-connect';

setQueryURL('http://graphdb.linked-open-statistics.org/repositories/pop5');
const store = configureStore(getReducer());

export default () => (
  <Provider store={store}>
    <DepartementContainer />
  </Provider>

// Define the container which will wrap the display component

import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import DepDiplay from './dep-display';
import Spinner from 'js/components/shared/spinner';

const queryBuilder = () => \`
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX cog2017-dep: <http://id.insee.fr/codes/cog2017/>

select ?label ?pop15plus where {
  {
      select (sum(?pop) as ?pop15plus) ?departement where {
          ?obs a qb:Observation .
          ?obs <http://id.insee.fr/meta/mesure/pop15Plus> ?pop .
          ?obs <http://id.insee.fr/meta/cog2017/dimension/DepartementOuCommuneOuArrondissementMunicipal> ?departement.
          ?departement skos:topConceptOf cog2017-dep:departementsOuCommunesOuArrondissementsMunicipaux.
      }
      GROUP BY ?departement
  }
  ?departement skos:prefLabel ?label .
}
ORDER BY DESC(?pop15plus)
\`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'departementPopulation',
});

const ContainerDepartements = ({ departementPopulation }) => (
	<Viz data={departementPopulation} />
);

export default connector(ContainerDepartements, {
	loading: () => <Spinner text={'Loading ...'} />,
});

// Define the container which will wrap the display component

import React from 'react';

export default (data) => (
  <ul>
    {data.map(({ label, pop15plus },i) => (
      <li key="i">
        {label} : {pop15plus}
      </li>
    ))}
  </ul>
)

`;
	return (
		<React.Fragment>
			<h1 className="centered">SPARQL React Demo</h1>
			<div className="mui-row">
				<div className="mui-col-md-6">
					<h1 className="centered">
						<a
							href="https://github.com/LOS-ESSnet/SPARQL-React-Demo"
							target="_blank"
							rel="noopener noreferrer"
						>
							Source code
						</a>
					</h1>
				</div>
				<div className="mui-col-md-6">
					<h1 className="centered">
						<a
							href="http://www.linked-open-statistics.org/plosh/sparql-react-demo"
							target="_blank"
							rel="noopener noreferrer"
						>
							Web app
						</a>
					</h1>
				</div>
			</div>
			<h2 className="mui-row centered">
				App based on{' '}
				<a
					href="https://github.com/noknot/sparql-connect"
					target="_blank"
					rel="noopener noreferrer"
				>
					SPARQL-connect
				</a>
				:
			</h2>
			<SparqlViewer text={query} language="language-jsx" />
		</React.Fragment>
	);
};
