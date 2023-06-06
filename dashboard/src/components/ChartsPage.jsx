import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

//import from files
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const ChartsPage = ({ data }) => {
    // defaultActiveKey="0"
    return (
        <div className='d-flex flex-column'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'2vh' }} >
                <span className='square border border-dark rounded' ><PolarChart  serverData={data} /></span>
                <span className="sqaure border border-dark rounded"><DoughnutChart serverData={data} /></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between',  marginBottom:'2vh' }}> 
                <span className='square border border-dark rounded'><BarChart serverData={data} /></span>
                <span className='square border border-dark rounded'> <LineChart serverData={data} /></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'2vh' }}>
                <span className='square border border-dark rounded'><RadarChart serverData={data} /></span>
                <span className='square border border-dark rounded'><PieChart serverData={data} /></span>
            </div>
        </div>
    )
}

export default ChartsPage