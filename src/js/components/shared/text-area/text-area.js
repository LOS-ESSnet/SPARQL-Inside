import React, { Component } from 'react';
import { TextField } from 'material-ui';

const style = {
	width: '90%',
};
const textareaStyle = {
	color: 'black',
	backgroundColor: 'white',
	padding: '10px',
};

class TextArea extends Component {
	render() {
		const { text } = this.props;
		return (
			<TextField
				id="text-area"
				value={text}
				onChange={e => this.props.onChange(e.target.value)}
				multiLine={true}
				rows={10}
				rowsMax={10}
				style={style}
				textareaStyle={textareaStyle}
			/>
		);
	}
}

export default TextArea;
