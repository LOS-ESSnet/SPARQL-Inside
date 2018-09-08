import React, { Component } from 'react';
import { TextField } from 'material-ui';

const style = {
	width: '50%',
	height: '30px',
	backgroundColor: 'white',
	paddingBottom: '5px',
};

const inputStyle = {
	color: 'black',
	textAlign: 'center',
};

class Input extends Component {
	render() {
		const { text } = this.props;
		return (
			<TextField
				id="input"
				value={text}
				onChange={e => this.props.onChange(e.target.value)}
				style={style}
				inputStyle={inputStyle}
			/>
		);
	}
}

export default Input;
