import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//import from files
import CardsForData from './CardsForData';
import ChartsPage from './ChartsPage';
import axios from 'axios';
import Cardspage from './Cardspage';

const Mainpage = ({ data, setMainData }) => {
    return (
        <div className='tabsClass'>


            <Tabs
                defaultActiveKey="cards"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="cards" title="Projects">
                    <Cardspage data={data} />
                </Tab>
                <Tab eventKey="chart" title="Interactive Insights">
                    <ChartsPage data={data} />
                </Tab>
                
            </Tabs>
        </div>
    );
}

export default Mainpage