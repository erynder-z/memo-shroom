import React, { useState, useEffect } from 'react';

function Header() {
  const [title, setTitle] = useState('Memo-shroom');
  const showAbout = () => {
    setTitle(() => (
      <div className="info">
        Erynder-Z 2022 ||{' '}
        <a href="https://github.com/erynder-z" target="_blank" rel="noreferrer">
          My GitHub
        </a>{' '}
        || Mushroom images from{' '}
        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          Pixabay
        </a>
      </div>
    ));
  };

  const showTitle = () => {
    setTitle(() => 'Memo-shroom');
  };

  useEffect(() => {
    setTimeout(showTitle, 10000);
  }, [title]);

  return (
    <nav className="navbar ">
      <div className="header-text">{title}</div>
      <div className="about" onClick={showAbout} onKeyDown={showAbout} role="button" tabIndex="0">
        ●
      </div>
    </nav>
  );
}

export default Header;
