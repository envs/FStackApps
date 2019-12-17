import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import data from './testData';

//import data from '!json-loader!./testData';
//console.log(data);

ReactDOM.render(
    // <App contests = {data.contests}/>,
    <App />,
    document.getElementById('root')
);



// // Let's now make the below Component reuseable and validate the Prop Type

// const App = (props) => {
//     return (
//         <h2 className="text-center">
//             {props.headerMessage}
//         </h2>
//     );
// };

// // Prop Validation
// // App.propTypes = {
// //     headerMessage: React.PropTypes.string.isRequired
// // };

// // You can also use the default value feature of React. When using this, the isRequired feature is not required
// // App.defaultProps = {
// //     headerMessage: "Hello!!"
// // };

// ReactDOM.render(
//     <App headerMessage="Hello Props!" />,
//     document.getElementById('root')
// );


// // We don't usually work with React Element directly, we work with the React component (like App) which is a function

// const App = () => {
//     return (
//         <h2 className="text-center">
//             Hello React Components!
//         </h2>
//     );
// };

// ReactDOM.render(
//     <App />,        // We use it as an HTML element or tag. It extends HTML elements and they are reuseable too
//     document.getElementById('root')
// );




// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//     //React.createElement('h2', null, 'Hello React'),    // NB: 'Hello React' is a children
//     // The above can also be written (in JSX) as <h2>Hello React</h2>,
//     <h2 style={{color: color}}>
//         Hello React with JSX!! -- {Math.random()}
//     </h2>,
//     document.getElementById('root')
// );
