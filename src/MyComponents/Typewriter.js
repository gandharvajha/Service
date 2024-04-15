import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const titles = [
    "Your Website in Minutes!",
    "Fast SEO-Friendly Website!",
    "Effortless Website Designs! ",
    "Templates with Builder!",
    "Attractive Website!"
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(titles[index].substring(0, text.length + 1));
      if (text === titles[index]) {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          setIndex((index + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index, text]);

  return (
    <h1 className='text-gradient' style={{height:'60px', fontSize:'3rem'}}>{text}</h1>
  );
};

export default Typewriter;
