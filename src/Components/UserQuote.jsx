import React, { useState, useEffect } from 'react';


const UserQuote = () => {
  const [value, setValue] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem('userQuotes')) || [];
    setQuotes(storedQuotes);
  }, []);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {
    if (value !== '') {
      const newQuote = { quote: value };
      const updatedQuotes = [...quotes, newQuote];
      setQuotes(updatedQuotes);
      setValue('');
      localStorage.setItem('userQuotes', JSON.stringify(updatedQuotes));
    }
  };

  const handleDeleteBtn = (index) => {
    const updatedQuotes = quotes.filter((quote, i) => i !== index);
    setQuotes(updatedQuotes);
    localStorage.setItem('userQuotes', JSON.stringify(updatedQuotes));
  };

  return (
    <div className="userQuote container">
      <div>
        <h2>User Quotes</h2>
        <div className="inputButton">
          <input type="text" onChange={handleOnChange} value={value} />
          <button onClick={handleOnClick} className="logout">Add quote</button>
        </div>
      </div>
      <div>
        <ul className="quote-list">
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <li key={index} className="quote-item">
                {quote.quote}
                <button onClick={() => handleDeleteBtn(index)} className="delete-btn">Delete Quote</button>
              </li>
            ))
          ) : (
            <li className="no-quotes">No quotes available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserQuote;
