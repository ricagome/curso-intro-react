import React from 'react';
import './TodoSearch.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TodoSearch(props:{searchValue: string, setSearchValue: any}) {
    //const [searchValue, setSearchValue] = useState('');
    const now = 25; 
    const onSearchValueChange = (event: { target: { value: string; }; }) => {
        console.log(event.target.value);
        props.setSearchValue(event.target.value);
      };
    return (
        <>
            <input className="TodoSearch" placeholder="TODO Search" value={props.searchValue} onChange={onSearchValueChange} />
            <p></p>
            <h3>Avance</h3>
            <ProgressBar animated now={now} label={`${now}%`} />
            <p></p>
            <p>{props.searchValue}</p>
        </>
    );
}

export { TodoSearch };