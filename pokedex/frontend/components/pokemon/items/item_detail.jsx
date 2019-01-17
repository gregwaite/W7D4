import React from 'react';


class ItemDetail extends React.Component {
  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  render() {
    // debugger
    return (
      <section className="item-detail">
        <li>{this.props.item.name}</li>
        <li>Happiness: {this.props.item.happiness}</li>
        <li>Price: {this.props.item.price}</li>
      </section>
    )
  }
}

export default ItemDetail;