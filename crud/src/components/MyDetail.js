import React from 'react';
import dateFormat from 'dateformat';
import ReactDOM from 'react-dom';
//import { NavLink } from 'react-router-dom';

class MyDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor props",props);
    this.state = {
    	    //id:props.match.params.id,
            //isLoaded: false,
            //error: null,
            els: []
    };
  }

  componentDidMount() {
	//this.setState({ els: []});
  }

  render(){
    console.log("render props",this.props.match.params.id);
    return (
       <div>
        <h1>Detail</h1>
        <p>Detail page</p>
        <p>
	    This is the detail of element {this.props.match.params.id}
        </p>
       </div>
    );
  }

}

export default MyDetail;
