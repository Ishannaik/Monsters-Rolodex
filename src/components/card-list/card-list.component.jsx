import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    //console.log('render from cardlist')
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
