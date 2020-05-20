import React from 'react';
import ReactDOM from 'react-dom';

import ReactMinesweeper from './react_minesweeper';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<ReactMinesweeper />, root);
});

