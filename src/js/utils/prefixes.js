const PREFIXES = [
	{
		row: 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>',
		shortcut: 'rdf:',
	},
	{
		row: 'PREFIX skos: <http://www.w3.org/2004/02/skos/core#>',
		shortcut: 'skos:',
	},
];

export const customQuery = query => {
	const prefixes = PREFIXES.reduce((_, p) => {
		if (query.includes(p.shortcut) && !query.includes(p.row)) {
			return _
				? `${_}
${p.row}`
				: `${p.row}`;
		} else return _;
	}, '');
	if (!prefixes) return query;
	else
		return query.includes('PREFIX')
			? `${prefixes}
${query}`
			: `${prefixes}

${query}`;
};
