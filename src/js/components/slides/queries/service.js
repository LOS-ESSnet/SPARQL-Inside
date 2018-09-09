import React from 'react';
import { SparqlViewer } from 'js/components/sparql';

export default () => {
	const query = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX measure: <http://id.insee.fr/meta/mesure/>
PREFIX geo-dim: <http://id.insee.fr/meta/cog2017/dimension/>
PREFIX cog-2017: <http://id.insee.fr/codes/cog2017/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT ?label ?pop15plus ?contours WHERE {
  {
    SELECT ?area (sum(?pop) as ?pop15plus) WHERE {
      ?obs qb:dataSet <http://id.insee.fr/meta/demo/pop5/dataSet/2015-depcomarm> .
      ?obs measure:pop15Plus ?pop .
      ?obs geo-dim:DepartementOuCommuneOuArrondissementMunicipal ?area .
      ?area skos:topConceptOf cog-2017:departementsOuCommunesOuArrondissementsMunicipaux .
    }
    GROUP BY ?area
  }
  ?area skos:prefLabel ?label .
  ?area foaf:focus ?areaInsee .
  SERVICE <http://graphdb.linked-open-statistics.org/repositories/nuts> {
  ?areaIGN owl:sameAs ?areaInsee .
  ?areaIGN geo:hasGeometry ?geometry .
  ?geometry geo:asWKT ?contours .
  }
}
ORDER BY DESC(?pop15plus)
`;
	return <SparqlViewer text={query} />;
};
