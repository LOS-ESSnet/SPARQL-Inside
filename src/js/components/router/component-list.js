import React from 'react';
import * as C from './components';

export const items = [
	{ route: '/', menuTitle: 'Home', title: '', body: <C.Home /> },
	{
		route: '/intro',
		title: 'Introduction',
		body: <C.Summary />,
		type: 'SubHeader',
	},
	{
		route: '/intro/definition',
		title: 'SPARQL Definition',
		body: <C.SparqlDefinition />,
	},
	{
		route: '/intro/context',
		title: 'SPARQL Context',
		body: <C.SparqlContext />,
	},
	{
		route: '/intro/turtle',
		title: 'Turtle',
		body: <C.Turtle />,
	},
	{
		route: '/queries',
		title: 'Queries',
		body: <C.Summary />,
		type: 'SubHeader',
	},
	{
		route: '/sparl-verbs',
		title: 'SPARQL verbs',
		body: <C.SparqlVerbs />,
	},
	{
		route: '/query/describe',
		title: 'Describe',
		body: <C.SparqlDescribe />,
	},
	{
		route: '/query/ask',
		title: 'Ask',
		body: <C.SparqlAsk />,
	},
	{
		route: '/query/select-simple',
		title: 'Select: my first query',
		body: <C.SparqlSimple />,
	},
	{
		route: '/query/graph',
		title: 'Specify graph',
		body: <C.SparqlGraph />,
	},
	{
		route: '/query/prefixes',
		title: 'Using prefixes',
		body: <C.SparqlPrefixes />,
	},
	{
		route: '/query/combine',
		title: 'Combine triples',
		body: <C.SparqlCombine />,
	},
	{
		route: '/query/bind',
		title: 'Bind',
		body: <C.SparqlBind />,
	},
	{
		route: '/query/bind-if',
		title: 'Bind if',
		body: <C.SparqlBindIf />,
	},
	{
		route: '/query/filter',
		title: 'Filter',
		body: <C.SparqlFilter />,
	},
	{
		route: '/query/values',
		title: 'Values',
		body: <C.SparqlValues />,
	},
	{
		route: '/query/property-path',
		title: 'Property path',
		body: <C.SparqlPropertyPath />,
	},
	{
		route: '/query/optional',
		title: 'Optional',
		body: <C.SparqlOptional />,
	},
	{
		route: '/query/sum',
		title: 'Sum',
		body: <C.SparqlSum />,
	},
	{
		route: '/query/sub-queries',
		title: 'Sub-queries',
		body: <C.SparqlSubQueries />,
	},
	{
		route: '/query/service',
		title: 'Service: query multiple endpoints !',
		body: <C.SparqlService />,
	},
	{
		route: '/protocol',
		title: 'Protocol',
		body: <C.Summary />,
		type: 'SubHeader',
	},
	{
		route: '/protocol/sparql',
		title: 'SPARQL Protocol',
		body: <C.Protocol />,
	},
	{
		route: '/protocol/sparql-query',
		title: 'SPARQL query',
		body: <C.ProtocolQuery />,
	},
	{
		route: '/protocol/sparql-query/get',
		title: 'SPARQL query: GET',
		body: <C.ProtocolQueryGet />,
	},
	{
		route: '/demo',
		title: 'Demo apps',
		body: <C.Summary />,
		type: 'SubHeader',
	},
	{
		route: '/demo/react-js',
		title: 'React-JS',
		body: <C.DemoReact />,
	},
	{
		route: '/demo/R-shiny',
		title: 'R - Shiny',
		body: <C.DemoShiny />,
	},
	{
		route: '/demo/python-dash',
		title: 'Python - Dash',
		body: <C.DemoDash />,
	},
	{
		route: '/demo/python-jupyter',
		title: 'Python - Jupyter',
		body: <C.DemoJupyter />,
	},
];
