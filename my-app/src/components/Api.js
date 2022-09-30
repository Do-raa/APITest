import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiCard from './ApiCard';
import Spinner from 'react-bootstrap/Spinner'; 
import './Api.css';

function Api() {
    
 const url = "https://api.publicapis.org/entries"; 
 const [query, setQuery] = useState(""); 
 const [error, setError] = useState(null);
 const [items, setItems] = useState([]);
 const [isLoading, setIsLoading] = useState(false); 

 const navigate = useNavigate();

 useEffect(() => {
   axios.get(url)
      .then(response => { 
         setIsLoading(true)
         setItems([...response.data.entries])
         console.log(response.data)
      }) 
      .catch(error =>{
        setIsLoading(true);
        setError(error);
        console.log(error);
      }) 
}, []) 

    
const filtering = (query) => {
       let values = []; 
       {items.filter((item) =>  item.API.toLowerCase().includes(query.toLowerCase()) ? values.push(item): null)} 
       return setItems([...values])
    }

return( 
  <> 
    <div className='container'>  
   
    { 
        error? <div style={{fontFamily: 'cursive', fontSize: '20px', 
                            fontWeight: 'bold', color: '#4C4C6D',display: 'flex', alignItems: 'center',flexDirection: 'column'}}> 
                             <button style={{fontFamily: 'cursive', fontWeight: 'bold', padding: '10px', 
                                             borderRadius: '30px', borderWidth: '3px', maxWidth: '130px', 
                                             marginBottom: '20px', backgroundColor: '#EEEBDD'}} onClick={() => navigate(-1)}> 
                                             Go back 
                             </button>
                            {error.message}... Please Try Again ! 
                </div>  

        : !isLoading? <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
                         <Spinner animation="border" size="sm" />
                         <Spinner animation="border" />
                         <Spinner animation="grow" size="sm" />
                         <Spinner animation="grow" />
                      </div>  
        : <>

        <div className='searchBar'>
            <input className='inputContainer' placeholder="Searching ... " style={{borderRadius: '8px',borderWidth:'3px', borderColor:'black',
                                                         boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                                          width: '50%', height: '50px', backgroundColor: '#EEEEEE', 
                                                          paddingLeft: '8px' }} onChange={event => setQuery(event.target.value)} /> 
            <button style={{ borderRadius: '8px',borderWidth:'3px', borderColor:'black',
                           width: '20%', height: '50px', backgroundImage: 'linear-gradient(to bottom right, #C56824, #EAEAEA)',
                           boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                           textAlign: 'center', color: 'black', fontFamily: 'cursive',fontSize: '15px', fontWeight: 'bold'}} 
                           onClick={()=>filtering(query)}>Search</button>
        </div>
        <div className='flex-container'> 
        {
            items? 
                    items.map((item, index) => {
                    return <ApiCard key ={index}  item={item} />})
           : null 
        }
       
        </div>
        </> 
    }
    </div> 
</>
)

}

export default Api;