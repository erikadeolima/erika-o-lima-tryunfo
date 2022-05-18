import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { saved } = this.props;
    return (
      <div>
        {saved.map((card, index) => {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          } = card;
          return (
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              key={ index }
            />
          );
        })}

      </div>
    );
  }
}

CardList.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
