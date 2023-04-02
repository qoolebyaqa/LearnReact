import React, { useEffect, useRef, useState } from 'react';

function SearchBar() {
  const [cur, setter] = useState(localStorage.searched ? localStorage.searched : '');
  const searcherRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      localStorage.setItem('searched', cur);
    };
  }, [cur]);

  const deleteFromLocal = function () {
    localStorage.removeItem('searched');
    (searcherRef.current as HTMLInputElement).value = '';
    setter('');
  };

  const ChangeInput = (e?: React.FormEvent<HTMLInputElement>) => {
    setter((e?.target as HTMLInputElement).value);
  };

  return (
    <div className="search__section">
      <h3>Storage</h3>
      <div className="search__input-wrap">
        <input className="search__input" value={cur} onChange={ChangeInput} ref={searcherRef} />
        <button className="search__button" type="submit" onClick={deleteFromLocal}>
          Remove From Storage
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
