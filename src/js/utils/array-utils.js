export const buildSparqlResponse = res => {
	if ('boolean' in res) return [{ boolean: res.boolean ? 'true' : 'false' }];
	return res.results.bindings.map(r =>
		Object.entries(r).reduce((_, e) => {
			_[e[0].toLowerCase()] = e[1].value;
			return _;
		}, {})
	);
};

export const buildSparqlColumns = res => {
	if ('boolean' in res) return [{ key: 'boolean', label: 'BOOLEAN' }];
	return res.head.vars.map(v => ({
		key: v.toLowerCase(),
		label: v.toUpperCase(),
	}));
};
