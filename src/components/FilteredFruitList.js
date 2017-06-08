/*import React, { Component } from 'react';

class FilteredFruitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    const list = !this.props.filter ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }
}

export default FilteredFruitList;
*/

import React from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  const fruitlist = !filter ? fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {fruitlist.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;