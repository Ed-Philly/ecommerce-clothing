import React from "react";

import SpringLoader from "react-spring-loaders";

const settings = {
  rebound: {
    tension: 14,
    friction: 10,
  },
  spinner: {
    id: "spinner",
    radius: 30,
    sides: 6,
    depth: 8,
    colors: {
      background: "#fff", //#00272C
      stroke: "#00272C",
      base: null,
      child: "#02C39A",
    },
    alwaysForward: true, // When false the spring will reverse normally.
    restAt: null, // A number from 0.1 to 0.9 || null for full rotation
    renderBase: false,
  },
};

const WithSpringLoader = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpringLoader settings={settings} />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpringLoader;
