import React from 'react';
import Spinner from 'js/components/shared/spinner';
import DataTable from 'js/components/shared/table';
import { buildSparqlResponse, buildSparqlColumns } from 'js/utils/array-utils';

export default ({ response, isLoading, error }) => {
	if (error) return <div>ERROR</div>;
	if (isLoading) return <Spinner text="Loading ..." />;
	return (
		<div className="mui-row">
			<DataTable
				title={'Results'}
				data={buildSparqlResponse(response)}
				columns={buildSparqlColumns(response)}
			/>
		</div>
	);
};
