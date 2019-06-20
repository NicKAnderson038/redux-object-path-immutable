import React from "react";
import { Link } from "react-router-dom";

const Main = props => {
  const { children, match, ...rest } = props;
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      {React.Children.map(children, child => React.cloneElement(child, rest))}
    </div>
  );
};

export default Main;
