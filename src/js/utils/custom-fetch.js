export const get = (endPoint, query, type) => {
	const URL = `${endPoint}?query=${encodeURIComponent(query)}`;
	let accept;
	if (type === 'xml') accept = 'application/xml';
	else accept = 'application/json';
	return fetch(URL, {
		headers: {
			Accept: accept,
		},
	}).then(res => {
		if (res.ok) return res;
		else return Promise.reject(res.statusText);
	});
};
