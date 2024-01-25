import React from 'react';
import { Star } from './Star';



export const PrdRating = ({ score }) => {
  const filledStars = Math.min(5, Math.max(0, score)); // Limit score between 0 and 5

  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} filled={index < filledStars} />
  ));

  return (
    <div>
      <p>{stars}</p>
    </div>
  );
};
