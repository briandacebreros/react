import React from 'react';
import { NavLink } from 'react-router-dom';

class MyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { els: [] };
  }

  componentDidMount() {
	let url=`https://logisticsapi.roclas.com:3002/proxy/getExpedicion?entregado=0&fechapropuentrega=08-11-2020`;

	fetch(url, {method:'GET',headers: {'Authorization': 'Basic ' + 
                        btoa('reactApp:astooDificultToGuess-9F7-9u7-9.!.4456')}})
		.then(r=>r.json())
	   	//.then(json=>console.log(json));
	   	.then(json=>this.setState({els:json.expediciones.map(e=>{
			Object.keys(e).filter(f=>
				typeof e[f] == 'object'
				|| typeof e[f] == 'array'
			).forEach(f=> delete e[f])
			return e;
		})}));
  }

  render(){ 
    let fields=["idexpedicion"].concat([...Object.values(this.state.els).reduce((a,b)=>
	    [...Object.keys(b)].reduce((ac,c)=>ac.add(c),a)
    ,new Set())].filter(f=>f!="idexpedicion").sort());

     let res=    
       <div>
       <table className="table" id="deliveries">
        <thead className="thead-dark"><tr>
		<th scope="col"></th>
	  	{fields.map(f=> <th key={f} scope="col">[{f}]</th> )}
		<th scope="col"></th>
	    </tr>
        </thead>
	<tbody>
	  {this.state.els.map(e=>
	    <tr key={"tr_"+e.idexpedicion}>
	    <td key={e[0]+"_ref"} ><NavLink to={"/detail/"+e.idexpedicion}>Detail</NavLink></td>
	    {fields.map(f=> <td key={f+"_"+e.idexpedicion} scope="col">{e[f]}</td>)}
	    <td key={e[0]+"_link"} ><NavLink to={"/detail/"+e.idexpedicion}>Detail</NavLink></td>
            </tr>
	  )}
	</tbody>
       </table>
       </div>;

    return (res);
  }

}

export default MyList;
