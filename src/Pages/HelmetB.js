import React, {Fragment} from 'react'
import ClassCounter from '../Components/ClassCounter.js'
import HookCounter from '../Components/HookCounter.js'
import './pages.css'
import { Helmet } from 'react-helmet';

export default function HelmetB(){
    return (
        <Fragment>
            <Helmet>
                <title>REACT SEO | Helmet B</title>
                <meta name="description" content="SEO for React application with React Helment  Helmet B" />
                <meta name="theme-color" content="#1DA6CC" />
                <body class="Blue" />
            </Helmet>
            <div className="Container content-text">
                <div className="row">
                    <h1>Helmet B</h1>
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