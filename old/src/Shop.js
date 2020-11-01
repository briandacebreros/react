import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';


const apibaseurl="http://localhost:3001"

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch (`${apibaseurl}/list`);
        const items = await data.json();
        setItems(items.results);

        console.log(items);
    };


  return (
        <div>
            <h1>Shop</h1>
            {items.map(item=> (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.name}
                    </Link>
                    
                    
                </h1>

                
            ))}
        </div>
  );
}

export default Shop;
