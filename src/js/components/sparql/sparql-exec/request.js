import React from 'react';
import Input from 'js/components/shared/input';
import TextArea from 'js/components/shared/text-area';
import Button from 'js/components/shared/button';

export default ({
	endPoint,
	prefix,
	query,
	handleChangeEndPoint,
	handleChangeQuery,
	closeModal,
	execute,
	reset,
}) => (
	<div className="mui-row centered">
		<div className="mui-col-md-10">
			<Input text={endPoint} onChange={handleChangeEndPoint} />
		</div>
		<div className="mui-col-md-10">
			<TextArea text={query} onChange={handleChangeQuery} />
		</div>
		<div className="mui-col-md-2">
			<div>
				<Button
					label="Close"
					onClick={closeModal}
					width="50%"
					height="40px"
					fontSize="150%"
				/>
			</div>
			<div>
				<Button
					label="Execute !"
					onClick={execute}
					width="50%"
					height="40px"
					fontSize="150%"
				/>
			</div>
			<div>
				<Button
					label="Reset"
					onClick={reset}
					width="50%"
					height="40px"
					fontSize="150%"
				/>
			</div>
		</div>
	</div>
);
