import React, { useEffect } from 'react';

const Calendly = ({ minWidth, height, url }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={"https://calendly.com/1896"}
      style={{ maxWidth: "420px", height: "500px"}}
    />
  );
};

export default Calendly;