import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class SearchBar extends React.Component {
	state = { term: '' };

	handleFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		const inputProps = {
			value: this.state.term,
			onChange: e => this.setState({ term: e.target.value }),
			onSubmit: this.handleFormSubmit,
			fullWidth: true,
		};
		const fullwidth = true;

		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<FormControl fullWidth={fullwidth}>
						<TextField
							id="search"
							type="text"
							InputProps={inputProps}
						/>
					</FormControl>
				</form>
			</div>
		);
	}
}

export default SearchBar;
