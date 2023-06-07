import React from 'react';
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    // console.log(item);
    const [details, setDetails] = useState(false);
    const showDetails = () => {
        // expand the card to show the details
        details ? setDetails(false) : setDetails(true);
    }

    return (
        <div className="card mx-auto" style={{ width: "22rem" }}>
            <div className="card-header px-2" style={{ fontWeight: "bold", backgroundColor: '#9966CC', color: 'whitesmoke' }}>{item.insight}</div>
            <ul className="list-group list-group-light list-group-small" style={{ padding: '10px' }}>
                <li className="list-group-item px-3"> <b>Sector</b> : {item.sector ? item.sector : 'Unknown Sector'}</li>
                <li className="list-group-item px-3"><b>Region </b>: {item.region ? item.region : 'Undisclosed'}</li>
                <li className="list-group-item px-3"><b>Relevance </b>: {item.relevance}</li>
            </ul>
            <Popup trigger={<button type="button" class="btn btn-sm" onClick={showDetails} style={{ margin: '1rem', backgroundColor: '#6F2DA8', color: 'white', width: '8vw' }}>Show details</button>} modal position={'center center'} >
                {
                    close => (
                        <div style={{background:'rgba(0,0,0,0.5)', height:'100vh', width:'100vw', display:'flex',justifyContent:'center', alignItems:'center'}}> 
                            <div className="card mx-auto" style={{ width: "22rem", boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
                                <div className="card-header px-2" style={{ fontWeight: "bold", backgroundColor: '#9966CC', color: 'whitesmoke' }}>{item.insight}</div>
                                <ul className="list-group list-group-light list-group-small" style={{ padding: '10px' }}>
                                    <li className="list-group-item px-3"> <b>Sector</b> : {item.sector ? item.sector : 'Unknown Sector'}</li>
                                    <li className="list-group-item px-3"><b>Region </b>: {item.region ? item.region : 'Undisclosed'}</li>
                                    <li className="list-group-item px-3"><b>Relevance </b>: {item.relevance}</li>
                                    <li className="list-group-item px-3"><b>Country </b>: {item.country ? item.country : 'Undisclosed'}</li>
                                    <li className="list-group-item px-3"><b>Topic </b>: {item.topic ? item.topic : 'Unknown'}</li>
                                    <li className="list-group-item px-3"><b>Impact </b>: {item.impact ? item.impact: 'Unknown'}</li>
                                    <li className="list-group-item px-3"><b>Source </b>: {item.source ? item.source : 'Unknown'}</li>
                                    <li className="list-group-item px-3"><b>URL </b>: <a href={item.url} target="_blank" rel='noreferrer'>{item.url ? item.url : 'No link'}</a></li>

                                </ul>
                                <button type="button" class="btn btn-sm" onClick={() => { close(); }} style={{ margin: '1rem', backgroundColor: '#6F2DA8', color: 'white', width: '8vw' }}>Close</button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )

}

export default CardsForData