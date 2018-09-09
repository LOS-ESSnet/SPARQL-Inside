import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX measure: <http://id.insee.fr/meta/mesure/>
PREFIX geo-dim: <http://id.insee.fr/meta/cog2017/dimension/>
PREFIX dim: <http://id.insee.fr/meta/dimension/>
PREFIX cog-2017: <http://id.insee.fr/codes/cog2017/>
PREFIX tactr-codes: <http://id.insee.fr/codes/tactr/>

SELECT ?label ?activePop ?unemployedPop
	(?unemployedPop/?activePop*100 as ?unemployementRate)
WHERE {
    {
        SELECT (sum(?pop) as ?activePop) ?area WHERE {
            ?obs qb:dataSet <http://id.insee.fr/meta/demo/pop5/dataSet/2015-depcomarm> .
            ?obs measure:pop15Plus ?pop .
            ?obs geo-dim:DepartementOuCommuneOuArrondissementMunicipal ?area .
            ?area skos:topConceptOf cog-2017:departementsOuCommunesOuArrondissementsMunicipaux .
            ?obs dim:tactr ?tactr .
            VALUES ?tactr { tactr-codes:11 tactr-codes:12 }
        }
        GROUP BY ?area
    }
    {
	SELECT (sum(?pop) as ?unemployedPop) ?area WHERE {
	   ?obs qb:dataSet <http://id.insee.fr/meta/demo/pop5/dataSet/2015-depcomarm> .
	   ?obs measure:pop15Plus ?pop .
	   ?obs geo-dim:DepartementOuCommuneOuArrondissementMunicipal ?area .
	   ?area skos:topConceptOf cog-2017:departementsOuCommunesOuArrondissementsMunicipaux .
	   ?obs dim:tactr ?tactr .
	   VALUES ?tactr { tactr-codes:12 }
	}
	GROUP BY ?area
    }
    ?area skos:prefLabel ?label .
}
ORDER BY DESC(?unemployementRate)
`;
	return <SparqlViewer text={query} />;
};
