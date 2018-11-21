import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import BrewDog from '../api/BrewDog';
import SearchBar from './SearchBar';
import Results from './Results';

class App extends React.Component {
	state = { beers: [], selectedBeer: null, term: '', page: 1 };

	handleSearchSubmit = async term => {
		await this.setState({ page: 1 });
		await this.setState({ term: term });
		this.handleNewApiReq();
	};

	handleNewApiReq = async () => {
		try {
			if (!this.state.term) {
				const response = await BrewDog.get(`?page=${this.state.page}`);
				this.setState({ beers: response.data });
			} else {
				const response = await BrewDog.get(
					`?beer_name=${this.state.term}&page=${this.state.page}`
				);
				this.setState({ beers: response.data });
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleBeerSelect = async beer => {
		try {
			await this.setState({ selectedBeer: beer });
			console.log(this.state.selectedBeer);
		} catch (err) {
			console.log(err);
		}
	};

	handlePrevButton = async () => {
		await this.setState({
			page: this.state.page <= 1 ? 1 : this.state.page - 1,
		});
		this.handleNewApiReq();
	};

	handleNextButton = async () => {
		await this.setState({
			page: this.state.page >= 11 ? 11 : this.state.page + 1,
		});
		this.handleNewApiReq();
	};

	render() {
		return (
			<div>
				<h1>BD-Beer-Finder</h1>
				<SearchBar onSubmit={this.handleSearchSubmit} />
				<GridList cellHeight={'auto'} cols={12} spacing={12}>
					<Results
						beers={this.state.beers}
						handleBeerSelect={this.handleBeerSelect}
						selectedBeer={this.state.selectedBeer}
					/>
				</GridList>
				<button type="button" onClick={this.handlePrevButton}>
					Prev Page
				</button>
				<button type="button" onClick={this.handleNextButton}>
					Next Page
				</button>
			</div>
		);
	}
}

export default App;
