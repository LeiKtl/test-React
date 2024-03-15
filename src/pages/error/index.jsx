import './error.scss';
import { Link } from 'react-router-dom';

function Error () {
    return (
        <div className='container_error'>
            <span className='container_error_number'>404</span>
            <p className='container_error_content'>We can't find the page you're looking for..</p>
            <Link  to="/" className='container_error_button'>home page</Link>
        </div>
    )
};

export default Error