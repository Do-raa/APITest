import Card from 'react-bootstrap/Card';
 import './ApiCard.css';


function ApiCard({item}) { 

    return(
        <div >

          <Card className='cardContainer' style={{ 
                           width: '18rem', margin: '8px', borderRadius: '20px',
                           height:'300px',  boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                           }}>
            <Card.Body>
              <Card.Title style={{fontFamily: '-moz-initial', fontWeight: 'bold', 
                                  color: '#DD4A48', textShadow: '1px 1px 2px black',
                                  marginBottom: '15px'}}>
                                  {item.API} 
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{color: '#557B83', 
                                  fontFamily: 'monospace', fontSize: '15px'}}> 
                                  {item.Category}
              </Card.Subtitle>
              <Card.Text style={{color : 'black', fontFamily: 'cursive'}}>
                                  {item.Description}
              </Card.Text>
              <Card.Link href={item.Link} className='link' style={{color: '#334756', fontWeight: 'bold' }}>
                                  {item.Link}
              </Card.Link>
            </Card.Body>
         </Card>
   
      </div>
    );
  }
  
  export default ApiCard;