import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      status: "Getting current Status" 
    }
  } 


  componentDidMount() {
    axios.get('http://aws-dev-alb-1190596654.us-east-1.elb.amazonaws.com/getMessage')
      .then(response => {
        this.setState({'status': response.data});
      })
      .catch(error => {
        this.setState({'status': error});
      });
    }

  render() {
    return <h1>{this.state.status} </h1>;
  }
}

export default App;
