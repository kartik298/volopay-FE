import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                cards.length > 0? <Card key={index} card={card} /> : <p >No cards found...</p>
            ))}
        </div>
    );
};

export default CardList;