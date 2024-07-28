import React, { useState, useEffect } from 'react';
import './UserQuote.css'


const UserQuote = () => {
  const [value, setValue] = useState('');
  const [quotes, setQuotes] = useState([]);
  const[showAllQuotes,setShowAllQuotes]=useState([])
  const [show,setShow]=useState(false)
  const addQuoteBtnRef =useRef(null)
  const searchBtnRef = useRef(null)

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
  const handleSearch=()=>{
   if (value){  const filteredValue=quotes.filter((quote=>quote.quote.includes(value)))
setShowAllQuotes(quotes)
    setQuotes(filteredValue)
    setValue('')
    setShow(true)
   }
  }
  const handleShowAll=()=>{
    setQuotes(showAllQuotes)
    setShow(false)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (document.activeElement === addQuoteBtnRef.current) {
        handleOnClick();
      } else if (document.activeElement === searchBtnRef.current) {
        handleSearch();
      }
    }
  };

  return (
    <div className="userQuote container">
      <div>
        <h2>User Quotes</h2>
        <div className="inputButton">
          <input type="text" 
          onChange={handleOnChange} 
          KeyPress={handleKeyPress} 
          value={value} />
          <div className="addQuote-Search-Btns">
          <button onClick={handleOnClick}  ref={addQuoteBtnRef}id="AddquoteBtn">Add quote</button>
          <button onClick={handleSearch} ref={searchBtnRef}id="searchBtn">search</button>
          </div>
        </div>
      </div>
      <div>
       {show?( <button onClick ={handleShowAll} className='showAllBtn'>Show all quotes</button>):<div></div>}
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
