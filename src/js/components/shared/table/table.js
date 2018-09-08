import React, { Component } from 'react';
import DataTables from 'material-ui-datatables';

class Table extends Component {
	constructor(props) {
		super();
		this.state = { filter: '', page: 1, rowSize: 5 };
	}
	handleFilterValueChange = filter => this.setState({ filter, page: 1 });

	onRowSizeChange = (index, rowSize) => {
		this.setState({ rowSize });
	};

	onNextPageClick = () => this.setState({ page: this.state.page + 1 });

	onPreviousPageClick = () => this.setState({ page: this.state.page - 1 });

	render() {
		const { data, title, columns } = this.props;
		const { filter, page, rowSize } = this.state;

		const filteredData = data.filter(d =>
			Object.values(d)
				.join('')
				.toLowerCase()
				.replace(/\s/g, '')
				.includes(filter.toLowerCase().replace(/\s/g, ''))
		);
		const pageData = filteredData.slice((page - 1) * rowSize, page * rowSize);
		return (
			<DataTables
				title={title}
				titleStyle={{ color: 'white', fontSize: '30px' }}
				filterHintText="Search ..."
				filterValue={filter}
				height={'auto'}
				selectable={false}
				showRowHover={true}
				stripedRows={true}
				tableHeaderColumnStyle={{
					fontSize: '30px',
					textAlign: 'center',
					color: 'white',
				}}
				footerToolbarStyle={{ fontSize: '50px' }}
				columns={columns}
				data={pageData}
				showHeaderToolbar={true}
				showCheckboxes={false}
				onFilterValueChange={this.handleFilterValueChange}
				rowSizeLabel={'Line per page'}
				rowSizeList={[5, 10, 20]}
				rowSize={rowSize}
				onRowSizeChange={this.onRowSizeChange}
				page={page}
				onPreviousPageClick={this.onPreviousPageClick}
				onNextPageClick={this.onNextPageClick}
				count={filteredData.length}
			/>
		);
	}
}

export default Table;
