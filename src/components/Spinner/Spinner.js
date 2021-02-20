import { Container } from 'react-bootstrap';
import './Spinner.css'
import spinner from './spinner.gif';
const Spinner = () => {
    return (
        <div className="flex-container">
            <img
                width={200}
                src={spinner}
                alt="spinner"
            />
        </div>
    )
}

export default Spinner;