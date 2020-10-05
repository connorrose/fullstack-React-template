import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { TestButton } from './components/TestButton';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);

  return (
    <>
      <h1>Fullstack React Template</h1>
      <TestButton
        setClicked={setClicked}
        setTestSuccess={setTestSuccess}
        testSuccess={testSuccess}
      />
      {clicked && (
        <span className={testSuccess ? 'good-alert' : 'bad-alert'}>
          {`test ${testSuccess ? 'succeeded' : 'failed'}`}
        </span>
      )}
    </>
  );
};

export default hot(App);
