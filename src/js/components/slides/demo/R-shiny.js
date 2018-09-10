import React from 'react';

export default () => (
	<React.Fragment>
		<h1 className="centered">SPARQL Shiny Demo</h1>
		<div className="mui-row">
			<div className="mui-col-md-6">
				<h1 className="centered">
					<a
						href="https://github.com/LOS-ESSnet/SPARQL-Shiny-Demo"
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
						href="http://shiny.linked-open-statistics.org/plosh/demo/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Web app
					</a>
				</h1>
			</div>
		</div>
		<h1 className="centered">
			<a
				href="http://www.linked-open-statistics.org/plosh/r-intro/r-consume.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				How it works?
			</a>
		</h1>
	</React.Fragment>
);
