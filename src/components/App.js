import React from 'react';
import Axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar';
import Results from './Results';

class App extends React.Component {
	state = { beers: [], selectedBeer: null };

	handleSearchSubmit = async term => {
		try {
			console.log(term);
			if (!term) {
				const response = await Axios.get(
					'https://api.punkapi.com/v2/beers'
				);
				this.setState({ beers: response.data });
				console.log(this.state.beers);
			} else {
				const response = await Axios.get(
					`https://api.punkapi.com/v2/beers?beer_name=${term}`
				);
				console.log(response);
				this.setState({ beers: response.data });
				console.log(this.state.beers);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleBeerSelect = beer => {
		this.setState({ selectedBeer: beer });
	};

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Typography variant="h1">BD-beer-finder</Typography>
				<SearchBar onSubmit={this.handleSearchSubmit} />
				<Results
					beers={this.state.beers}
					handleBeerSelect={this.handleBeerSelect}
				/>
			</React.Fragment>
		);
	}
}

export default App;
