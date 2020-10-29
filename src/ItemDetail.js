import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://randomuser.me/api/?results=1&seed=foobar&inc=name,gender,id&id=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

    const [item, setItem] = useState({});

  return (
        <div>
            <h1>{item.gender}</h1>
            <h3>{item.name}</h3>
        </div>
  );
}

export default ItemDetail;