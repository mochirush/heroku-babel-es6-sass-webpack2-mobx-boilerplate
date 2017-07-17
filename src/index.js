import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './main.scss'

ReactDOM.render(
    <App
        uiState={uiState}
    />,
    document.getElementById('app')
)

// if (process.env.NODE_ENV !== 'production') {
//   overrideComponentTypeChecker((classType, reactElement) => (
//     reactElement && (
//       reactElement.type === classType
//       || reactElement.type.name === classType.displayName
//     )
//   ));
//   // if (module.hot) {
//   //   module.hot.accept('./components/App', render);
//   // }
// }
