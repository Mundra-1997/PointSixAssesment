import React, { useEffect, useState } from 'react';
import ShareButton from './ShareButton';
import Helper from './Helper';
 const publicUrl = process.env.PUBLIC_URL;
const RandomImage = () => {
  const [image, setImage] = useState('');
  const deployedUrl = 'https://bucolic-belekoy-ee8b23.netlify.app/'
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/400');
      const imageUrl = response.url;
      setImage(imageUrl);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
  <>
  <img src={image} alt="Random" />
   <ShareButton imageUrl={`${publicUrl}/preview.jpg`} />
   {/* <Helper imageUrl = {image} deployedUrl={deployedUrl}/> */}



   //rgdgdg
  </>);
 
};

export default RandomImage;
