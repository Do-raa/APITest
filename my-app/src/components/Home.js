import { Link } from 'react-router-dom';
import './Home.css';

function Home() {


    return(
        <div className='homeContainer'>
              <Link to="/Api">Let's Chek This Out !</Link> 
        </div>
    )
} 

export default Home;