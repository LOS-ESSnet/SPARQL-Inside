import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

import queries

# Init app

app = dash.Dash()
server = app.server

# Define the graphic components

app.layout = html.Div(children=[
    html.H1(children='Hackathon Linked Open Statistics'),
    html.H2(children='Un exemple minimal avec Python'),
    html.Div(children='Population totale des communes'),

    html.Label('Département'),
    dcc.Dropdown(
        id = 'dep_id',
        options=queries.liste_departements(),
        value=queries.liste_departements()[0]['value']
    ),

    html.Label('Commune'),
    dcc.Dropdown(
        id = 'com_id',
        value=[],
        multi=True
    ),
    dcc.Graph(
        id='graphpop'
       )
])

# Handle actions

@app.callback(
    Output(component_id='com_id', component_property='options'),
    [Input(component_id='dep_id', component_property='value')]
)
def update_liste_communes(departement):
    return queries.liste_communes(departement)

@app.callback(
    Output(component_id='graphpop', component_property='figure'),
    [Input(component_id='com_id', component_property='value')]
)
def update_data(communes):
    return {
            'data': [queries.population(codecom) for codecom in communes],
            'layout': {'title': 'Population totale'}
    }
	`;
	return (
		<React.Fragment>
			<h1 className="centered">SPARQL Dash Demo</h1>
			<div className="mui-row">
				<div className="mui-col-md-6">
					<h1 className="centered">
						<a
							href="https://github.com/jfeudeline/los-python-app"
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
							href="https://los-dash-app.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Web app
						</a>
					</h1>
				</div>
			</div>
			<SparqlViewer text={query} language="python" noTry={true} />
		</React.Fragment>
	);
};
