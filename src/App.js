/*
import './App.css';
import Card from './Component/Card';
function App() {
  return (
    <>
      <div className="App">
      <Card name={"Rose"}  profession={"Vocalist"}
       image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfWEYHATuXQMtqoZSlF8wmdehh5aFUK9J_w&usqp=CAU'} />        
      <Card name={"Lisa"}  profession={"Dancer"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWSLfOFsDRX4gj6GKiuc2A1JnjJtFXU_CMA&usqp=CAU'} />               
      <Card name={"Jennie"}  profession={"Rapper"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrwAniLB_3_7ehXHYvoYZm6MRcVcy_GdtJw&usqp=CAU'} />        
      <Card name={"Jiso"}  profession={"Vocalist"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHGcvQsrWdIqN52KH6u8JmYGjXNMoXXsYtUOYdWghzPa4Fgozvdlx6rtTfI87G-A-x_4&usqp=CAU'} /> 
      </div>
    </>
  );
}

export default App;
<img src='https://www.cheatsheet.com/wp-content/uploads/2019/10/BTS-.jpg?w=769&h=1024&strip=all&quality=89' />
*/
import React from 'react';
import './App.css';
import Card from './Component/Card';

function App() {
  const cardData = [
    { name: "Rose", profession: "Vocalist", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfWEYHATuXQMtqoZSlF8wmdehh5aFUK9J_w&usqp=CAU' },
    { name: "Lisa", profession: "Dancer", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWSLfOFsDRX4gj6GKiuc2A1JnjJtFXU_CMA&usqp=CAU' },
    { name: "Jennie", profession: "Rapper", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrwAniLB_3_7ehXHYvoYZm6MRcVcy_GdtJw&usqp=CAU' },
    { name: "Jiso", profession: "Vocalist", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHGcvQsrWdIqN52KH6u8JmYGjXNMoXXsYtUOYdWghzPa4Fgozvdlx6rtTfI87G-A-x_4&usqp=CAU' }
  ];

  return (
    <>
      <div className="App">
        {cardData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            profession={card.profession}
            image={card.image}
            index={index} // Pass the index as a prop

          />
        ))}
      </div>
    </>
  );
}

export default App;
