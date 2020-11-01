import React from 'react';
import dateFormat from 'dateformat';
import ReactDOM from 'react-dom';
//import { NavLink } from 'react-router-dom';
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class MyDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor props",props);
    this.state = {
    	    //id:props.match.params.id,
            //isLoaded: false,
            //error: null,
            el: {}
    };
  }

  componentDidMount() {
	let url=`https://logisticsapi.roclas.com:3002/proxy/getExpedicion?idexpedicion=${this.props.match.params.id}`;
	fetch(url, {method:'GET',
                headers: {'Authorization': 'Basic ' + 
                        btoa('reactApp:astooDificultToGuess-9F7-9u7-9.!.4456')}})
        .then(response => response.json())
        .then(json => this.setState({el:json.expediciones.reduce((a,b)=>b,{})}));
  }

  render(){
    let el=this.state.el;
    return (
       <div>
        <h1>Detail {el.idexpedicion}</h1>
        <p>Detail page for delivery {el.idexpedicion}</p>
	This is the detail of element {this.props.match.params.id}
	    <form>
	    <Container><Row>
	    {Object.entries(el).map(e => 
		    <Col lg={6} sm={6} md={6}> {e[0]} <input name={e[0]} value={e[1]}/> </Col>
	    )}
	    </Row>
	    </Container>
	      <Button variant="primary" size="lg" type="submit" block>
    		enviar
  	      </Button>
	    </form>
       </div>
    );
  }

}

export default MyDetail;
