import React, { Fragment } from 'react';
import Coordenadas from '../Components/ClassCordenada.js';
import CoordenadasHooks from '../Components/HookCordenada.js';
import './pages.css';
import { Helmet } from 'react-helmet';


export default function HelmetA(){
    return (
        <Fragment>
            <Helmet>
                <title>REACT SEO | Helmet A</title>
                <meta name="description" content="SEO for React application with React Helment  Helmet A" />
                <meta name="theme-color" content="#1DCC66" />
                <body class="Green" />
            </Helmet>
            <div className="Container content-text">
                <div className="row">
                    <h1>Helmet A</h1>
                    <p>You can see an update on the following metadata tags:</p>
                    <ul>
                        <li>Title</li>
                        <li>Description</li>
                        <li>theme-color</li>
                        <li>Body class name</li>
                    </ul>
                </div>
            </div>
        </Fragment>
      );
}