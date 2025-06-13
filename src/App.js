import React from 'react';
import './App.css';
import black from './videos/black.mp4'



const Box = ({ title, imageUrl, link }) => {
  return (
    <a href={link} className="box">
      <img src={imageUrl} alt={title} />
      <div className="box-title">{title}</div>
    </a>
  );
};

const BoxContainer = () => {
  const boxes = [
    {
      title: 'iphone 14 pro max ',
      imageUrl: 'images/image22.png',
      link: '/App1'
    },
    {
      title: 'Apple MacBook Pro',
      imageUrl: 'images/macbook.png',
      link: '/Blog'
    },
    {
      title: 'Apple Vision Pro',
      imageUrl: 'images/applevision.png',
      link: '/Blog1'
    },
    // Add more box objects as needed
  ];

  return (
    <div>
      {boxes.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          imageUrl={box.imageUrl}
          link={box.link}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div style={{
      color: 'white',
      fontFamily: 'Papyrus, fantasy',
      // Set the background video
      position: 'relative', // Ensure video covers the entire area
      minHeight: '100vh', // Ensure the video covers the entire viewport height
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', // Hide any overflowing content from the video
    }}>
      {/* The video element */}
      <video autoPlay loop muted style={{
        position: 'absolute', // Position the video absolutely
        width: '100%', // Make the video cover the entire area
        height: '100%',
        objectFit: 'cover', // Cover the entire area while maintaining aspect ratio
        zIndex: -1, // Place the video behind other content
      }}>
        <source src={black} type="video/mp4"  />
      </video>

      <h1>Hayalinizdekini Seçin</h1>

      <BoxContainer />
    </div>
  );
};
export default App;
