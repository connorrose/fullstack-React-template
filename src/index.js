/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles.scss';

const mountNode = document.getElementById('root');
render(<App />, mountNode);
