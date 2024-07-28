import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MagicQuote.css';
import '../App.css'

const MagicQuote = () => {
  const [userDisplay, setUserDisplay] = useState([]);
  const [userDisplay2, setUserDisplay2] = useState('');
  const [authorName , setAuthorName]= useState("")
  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
    if (storedQuotes) {
      setUserDisplay(storedQuotes);
    }
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const data = response.data;
      const randomNumber = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomNumber];
      
      const indexOfQ = randomQuote.author ? randomQuote.author.indexOf(',') : -1;
      const sliced = indexOfQ !== -1 ? randomQuote.author.slice(0, indexOfQ) : randomQuote.author || 'Unknown';

      setUserDisplay2(`${randomQuote.text}`);
      setAuthorName(`" ${sliced} "`)
      const updatedQuotes = [...userDisplay, randomQuote];
      setUserDisplay(updatedQuotes);
      localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <>
      <div className="container magicQuote">
        <h2 className="magicQuoteh2">Magic Quote</h2>
        <div className="quotesDisplayMain">
        <h4 className="quotesDisplay">{userDisplay2}</h4>
        <h4 className="quotesDisplay"><i>{authorName}</i></h4>
        </div>
        <button onClick={fetchQuote} className="logout magicQuoteBtns">Generate Quote</button>
      </div>
    </>
  );
};

export default MagicQuote;
