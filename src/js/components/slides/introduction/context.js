import React from 'react';

export default () => (
	<div className="centered slide-text">
		<div>RDF data are storing in " Triple Store "</div>
		<br />
		<div>Triple Stores are divided in " Repositories "</div>
		<br />
		<div>Repositories contains RDF data grouped by " graph "</div>
		<br />
		<div>Data of a repository is accessible via an " endpoint "</div>
		<br />
		<div>
			<a
				href="http://graphdb.linked-open-statistics.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				LOS triple store
			</a>
			{` (endpoint : http://graphdb.linked-open-statistics.org/repositories/{repo})`}
		</div>
	</div>
);
