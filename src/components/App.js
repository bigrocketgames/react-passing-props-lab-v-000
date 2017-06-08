/*import React from 'react';

import FruitBasket from './FruitBasket';

const App = () => <FruitBasket />;

export default App;*/

import React from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentFilter: null,
            filters: [],
            fruit: [],
        };

        this.fetchFilters = this.fetchFilters.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }

    fetchFilters() {
        fetch('/api/fruit_types')
            .then(res => res.json())
            .then(filters => this.setState({filters: filters}));
    }

    fetchFruit() {
        fetch('/api/fruit')
            .then(res => res.json())
            .then(fruits => this.setState({fruits: fruits}));
    }

    updateFilter(e) {
        this.setState({ currentFilter: e.target.value });
    }

    render() {
        return(
            <FruitBasket
                fruit={this.state.fruit}
                filters={this.state.filters}
                currentFilter={this.state.currentFilter}
                updatedFilterCallback={this.updateFilter} />
        );
    }
}