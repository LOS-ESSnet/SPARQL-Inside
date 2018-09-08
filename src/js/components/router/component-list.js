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
		route: '/intro/sparl-verbs',
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
		title: 'Select : My first query',
		body: <C.SparqlSimple />,
	},
	{
		route: '/query/graph',
		title: 'Precise graph',
		body: <C.SparqlGraph />,
	},
	{
		route: '/query/prefixes',
		title: 'Using prefixes',
		body: <C.SparqlPrefixes />,
	},
	{
		route: '/query/join',
		title: 'Join triples',
		body: <C.SparqlJoin />,
	},
	{
		route: '/query/bind',
		title: 'Bind',
		body: <C.SparqlBind />,
	},
	{
		route: '/query/filter',
		title: 'Filter',
		body: <C.SparqlFilter />,
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
		route: '/protocol',
		title: 'Protocol',
		body: <C.Summary />,
		type: 'SubHeader',
	},
];
