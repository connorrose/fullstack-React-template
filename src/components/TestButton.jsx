import React from 'react';

export const TestButton = (props) => {
  const { setTestSuccess, setClicked } = props;

  const handleClick = async () => {
    try {
      setClicked(true);
      const request = await fetch('/api');
      const response = await request.json();
      if (response.success) setTestSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      <strong>ping server api</strong>
    </button>
  );
};
