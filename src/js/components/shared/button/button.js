import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ label, onClick, width, height, fontSize }) => {
	const style = {
		color: 'black',
		backgroundColor: '#ee3467',
		width: width || '20%',
		height: height || '60px',
		marginTop: '20px',
		marginBottom: '20px',
		padding: '5px',
		fontSize: fontSize || '200%',
	};
	return (
		<FlatButton
			onClick={onClick}
			variant="outlined"
			color="secondary"
			style={style}
		>
			{label}
		</FlatButton>
	);
};
