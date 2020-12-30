import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }.</h2>
      <h4>{ rating }/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// foodILike 변수에 빈 배열을 저장.
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://images.pexels.com/photos/2781540/pexels-photo-2781540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://images.pexels.com/photos/5526927/pexels-photo-5526927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rating: 3.9,
  },
  {
    id: 3,
    name: 'Kimbap',
    image: 'https://images.pexels.com/photos/5678887/pexels-photo-5678887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rating: 2.1,
  },
  {
    id: 4,
    name: 'Bibimbap',
    image: 'https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rating: 3.0,
  },
  {
    id: 5,
    name: 'Sushi',
    image: 'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    rating: 5.0,
  },
];

function App() {
  // return <div className="App" />;
  return (
    <div>
      {/* dish에 foodILike의 원소가 하나씩 넘어옴
                              그 값을 name props에 전달함. */}
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;
