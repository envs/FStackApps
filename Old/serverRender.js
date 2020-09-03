// Fetch data from the api

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from "axios";

import App from './src/components/App';

const serverRender = () => 
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {
            return ReactDOMServer.renderToString(
                <App initialContests={resp.data.contests} />
            );
        });

export default serverRender;