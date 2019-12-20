import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
//import data from '../testData';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            pageHeader: "Naming Contests",
            bodySubContent: "Just a bit of content filling for the page",
            contests : this.props.initialContests
        };
    }
    // You can just do the above as:
    // state = {
    //     test : 24
    // }

    // Lifecycle methods - These are used to configure some custom behaviors
    componentDidMount() {
        // Usually for implementing timers, listeners, etc.
        // Can also contains integration codes, ajax logic, 
        // console.log("Did Mount");
        // debugger;

        // Let's use ajax request to fetch the data from the remote api
        axios.get('/api/contests')
            .then(resp => {
                this.setState({
                    contests: resp.data.contests
                });
            })
            .catch(console.error);
    }
    componentWillUnmount() {
        // Usually for cleaning timers, listeners, etc.
        // console.log("Will unmount");
        // debugger;
    }

    render() {
        return (
            <div className='App'>
                <Header message= {this.state.pageHeader} />
                <div>
                    {this.state.bodySubContent}
                </div>
                <div>
                    {/* Every time you have a map() call, you need to provide a unique key to identify the child element */}
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest}/>
                    )}
                </div>
            </div>  
        );
    }
}

// // Note that this component is stateless, that's why we just defined it with a function syntax
// // Having a state means it's dynamic
// // To create a State Component, you can use either React.createClass or use the more recent one -> extends React.Component
// NB:: If you don't need the state or the Lifecycle methods of the components, just use the stateless function defined style as defined below
// const App = () => {
//     return (
//         <div className='App'>
//             <Header message="Naming Contests" />
//             <div>
//                 ...
//             </div>
//         </div>

//     );
// };

export default App;