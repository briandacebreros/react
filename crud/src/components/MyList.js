import React from 'react';
import dateFormat from 'dateformat';
import ReactDOM from 'react-dom';

class MyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
            //isLoaded: false,
            //error: null,
            els: []
    };
  }

  componentDidMount() {
	let h=parseInt(dateFormat(new Date(), "HHMM"));
	let d=dateFormat(new Date(), "dd-mm-yyyy");
	if(h>2100)d=dateFormat(new Date(new Date().getTime()+24*60*60000), "dd-mm-yyyy");
	let url=`https://logisticsapi.roclas.com:3002/proxy/getExpedicion?fechapropuentrega=${d}`;
	fetch(url, {method:'GET',
		headers: {'Authorization': 'Basic ' + 
			btoa('reactApp:astooDificultToGuess-9F7-9u7-9.!.4456')}})
	.then(response => response.json())
	.then(json => this.setState({ els: json.expediciones }))
  }

  render(){
    return (
       <div>
       <h1>Listing</h1>
       <p>Listing page</p>
       <table className="table" id="deliveries">
	<thead className="thead-dark"><tr>
			<th scope="col">[#id]</th>
			<th scope="col">[pickup@]</th>
			<th scope="col">[Recogida]</th>
			<th scope="col">[Entrega]</th></tr>
	</thead>
	<tbody>
	  {this.state.els.map(el=>
            <tr>
	    <td>{el.idexpedicion}</td>
	    <td>{el.horapropurecogida}</td>
	    <td>{el.direccionremitente}</td>
	    <td>{el.direcciondestinatario}</td>
            </tr>
          )}
	</tbody>
       </table>
       </div>
    );
  }

}

export default MyList;
