import { useEffect, useState } from 'react';
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar';
import Spinner from './Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(list => {
                setList(list);
            })
    }, [list]);

    const hasList = list.length > 0;
    return (
        <div>
            {
                hasList ?
                    <SearchBar searchList={list} />
                    :
                    <Spinner />
            }

            {/* <CountButton incrementBy="1" bgColor="sandybrown" txtColor="white"/>
            <CountButton incrementBy="5" bgColor="green" txtColor="white"/> */}
        </div>
    );
}
// https://youtu.be/ABQLwlE8MUA?list=PLfuZzro3POlY8ZqHtHzZ994_xSsFC7mUA&t=7412
export default App;