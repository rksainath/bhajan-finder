import React, { Fragment, useContext, useState } from 'react';
import BhajanContext from '../context/bhajanContext';
import Bhajan from '../layouts/Bhajan';
import swamiBhajan from '../images/swamibhajan.jpg';

const Search = () => {
  const bhajanContext = useContext(BhajanContext);

  const [text, setText] = useState('');

  const {
    bhajans,
    bhajan,
    getBhajan,
    setBhajan,
    suggestBhajan,
    bhajanSelected,
  } = bhajanContext;

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     bhajans.forEach((bhajan, index) => {
  //       let bhajanTitle = bhajan.title;
  //       bhajanTitle = bhajanTitle.toLowerCase();
  //       if (text === bhajanTitle) {
  //         getBhajan(index);
  //       }
  //     });
  //     setText('');
  //   };

  const onChange = (e) => {
    setBhajan({});
    let searchPhrase = e.target.value;
    searchPhrase = searchPhrase.toLowerCase();
    setText(searchPhrase);
    const filteredBhajans = bhajans
      .filter((bhajan) => {
        const regex = new RegExp(`^${text}`, 'i');
        return regex.test(bhajan.title);
      })
      .map((song) => song);
    suggestBhajan(filteredBhajans);
  };

  const onClick = (e) => {
    let selectedText = e.target.innerText;
    selectedText = selectedText.toLowerCase();
    console.log(selectedText);
    bhajans.forEach((bhajan, index) => {
      let title = bhajan.title;
      title = title.toLowerCase();
      if (title === selectedText) {
        getBhajan(index);
      }
    });
    suggestBhajan([]);
    setText('');
  };

  return (
    <Fragment>
      <form className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Bhajan'
          value={text}
          onChange={onChange}
        />

        {/* <input
          type='submit'
          value='Search'
          className='#0288d1 light-blue darken-2 btn btn-small'
        /> */}

        {/* <button
          className='#0288d1 light-blue darken-2 btn btn-small right'
          onClick={randomBhajan}
        >
          RANDOM
        </button> */}
      </form>
      <div className='details'>
        {bhajanSelected.map((bhajan, index) => (
          <div className='card'>
            <div className='card-content' key={index}>
              <a
                className='black-text'
                href='#'
                key={bhajan.title}
                onClick={onClick}
              >
                {bhajan.title}
              </a>
            </div>
          </div>
        ))}
      </div>

      {Object.keys(bhajan).length === 2 && <Bhajan />}
      {Object.keys(bhajan).length < 2 && (
        <img src={swamiBhajan} className='swamiBhajan' alt='swamiBhajan'></img>
      )}
    </Fragment>
  );
};

export default Search;
