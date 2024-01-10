import React, { useEffect, useState } from 'react';

const YoutubeEmbed = (props) => {
  const { embedId } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoWidth = Math.floor(Math.min((0.84 * windowWidth), (0.84 * 430)));

  return (
    <div className='video-responsive' style={{ marginBottom: '10px' }}>
      <iframe 
        width={videoWidth} 
        height={(videoWidth / 853) * 480}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
