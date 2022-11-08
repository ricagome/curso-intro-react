import {useState} from 'react';
import './styles/TodoSearch.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TodoSearch() {
    const [searchValue, setSearchValue] = useState('');
    const now = 25; 
    const onSearchValueChange = (event: { target: { value: any; }; }) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
      };
    return (
        <>
            <input className="TodoSearch" placeholder="TODO Search" value={searchValue} onChange={onSearchValueChange} />
            <p></p>
            <h3>Avance</h3>
            <ProgressBar animated now={now} label={`${now}%`} />
            <p></p>
            <p>{searchValue}</p>
        </>
    );
}

export { TodoSearch };