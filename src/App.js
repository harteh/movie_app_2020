import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like { name }.</h2>
      <img src={picture} />
    </div>
  );
}

// foodILike 변수에 빈 배열을 저장.
const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://images.pexels.com/photos/2781540/pexels-photo-2781540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://images.pexels.com/photos/5526927/pexels-photo-5526927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Kimbap',
    image: 'https://images.pexels.com/photos/5678887/pexels-photo-5678887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Bibimbap',
    image: 'https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Sushi',
    image: 'https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

function App() {
  // return <div className="App" />;
  return (
    <div>
      {/* dish에 foodILike의 원소가 하나씩 넘어옴
                              그 값을 name props에 전달함. */}
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
