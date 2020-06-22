import React from 'react';
import css from './cards.module.css';

export default function Cards(props) {
  const { colorCard, colorBackText, values, cardId } = props;
  return (
    <div className="col s6 m4 l2">
      <div className={`card prefix ${colorCard}`}>
        <div className="card-content" style={{ padding: 10 }}>
          <span className={`card-title center ${colorBackText}`}>{cardId}</span>
          <p className={colorBackText}>{values.value}</p>
          <p className={colorBackText}>{values.diference}</p>
          <p className={colorBackText}>{values.percent}</p>
        </div>
      </div>
    </div>
  );
}
