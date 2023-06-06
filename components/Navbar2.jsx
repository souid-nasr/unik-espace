import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="ContainerNav">
      <span className="MainNav">Fake Navbar</span>
      <div className="LinksNav">
        <span>Home</span>
        <span>Link A</span>
        <span>Link B</span>
      </div>
      {props.children}
    </nav>
  );
};

export default Navbar;