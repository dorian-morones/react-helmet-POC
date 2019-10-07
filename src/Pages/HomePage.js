import React, { Fragment } from 'react'
import './pages.css'
import { Helmet } from 'react-helmet'

export default function HomePage(){
    return (
        <Fragment>
            <Helmet>
                <title>REACT SEO | with React Helmet</title>
                <meta name="description" content="Todos on steroid!" />
                <meta name="theme-color" content="#008f68" />
                <body class="dark" />
            </Helmet>
            <div className="Container">
                <div className="row generalText">
                    <h1>React Helmet</h1>
                    <p>Only work for functional components, since it gives them the ability to have a state.</p>
                    
                    <p className="tags">
                        <a href="https://www.npmjs.org/package/react-helmet" rel="nofollow">
                        <img className="tag-img" src="https://camo.githubusercontent.com/6469d9b69e6dadbb635a2ef45184f32dcb153865/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d68656c6d65742e7376673f7374796c653d666c61742d737175617265" alt="npm Version" data-canonical-src="https://img.shields.io/npm/v/react-helmet.svg?style=flat-square" />
                        </a>
                        <a href="https://codecov.io/github/nfl/react-helmet?branch=master" rel="nofollow"><img className="tag-img" src="https://camo.githubusercontent.com/bdc3480fac66044c5b5afbaddbffbfd6d8b61b61/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f6e666c2f72656163742d68656c6d65742e7376673f6272616e63683d6d6173746572267374796c653d666c61742d737175617265" alt="codecov.io" data-canonical-src="https://img.shields.io/codecov/c/github/nfl/react-helmet.svg?branch=master&amp;style=flat-square" /></a>

                        <a href="https://travis-ci.org/nfl/react-helmet" rel="nofollow"><img className="tag-img" src="https://camo.githubusercontent.com/f9a9ef4924878ad8c40507652981d0cd91d6920d/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6e666c2f72656163742d68656c6d65742f6d61737465722e7376673f7374796c653d666c61742d737175617265" alt="Build Status" data-canonical-src="https://img.shields.io/travis/nfl/react-helmet/master.svg?style=flat-square" /></a>

                        <a href="https://david-dm.org/nfl/react-helmet" rel="nofollow"><img className="tag-img" src="https://camo.githubusercontent.com/5861ef41cc722e2986e3952f570e6424c2baf6a5/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6e666c2f72656163742d68656c6d65742e7376673f7374796c653d666c61742d737175617265" alt="Dependency Status" data-canonical-src="https://img.shields.io/david/nfl/react-helmet.svg?style=flat-square" /></a>

                        <a href="/nfl/react-helmet/blob/master/CONTRIBUTING.md#pull-requests"><img className="tag-img" src="https://camo.githubusercontent.com/a34cfbf37ba6848362bf2bee0f3915c2e38b1cc1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265" alt="PRs Welcome" data-canonical-src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" /></a>

                    </p>
                    
                    <p>
                    This reusable React component will manage all of your changes to the document head.</p>
                    <p>Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.</p>

                    <h4>Features:</h4>
                    <ul>
                        <li>Supports all valid head tags: title, base, meta, link, script, noscript, and style tags.</li>
                        <li>Supports attributes for body, html and title tags.</li>
                        <li>Supports server-side rendering.</li>
                        <li>Nested components override duplicate head changes.</li>
                        <li>Duplicate head changes are preserved when specified in the same component (support for tags like "apple-touch-icon").</li>
                        <li>Callback for tracking DOM changes.</li>
                    </ul>

                    <h4>Compatibility:</h4>
                    <p>Helmet 5 is fully backward-compatible with previous Helmet releases, so you can upgrade at any time without fear of breaking changes. We encourage you to update your code to our more semantic API, but please feel free to do so at your own pace.</p>

                    <h4>Installation:</h4>

                    <p><b>Yarn:</b></p>
                    <p>yarn add react-helmet</p>

                    <p><b>npm:</b></p>
                    <p>npm install --save react-helmet</p>

                    <h6>This helmet instance contains the following properties:</h6>
                    <ul>
                        <li>base</li>
                        <li>bodyAttributes</li>
                        <li>htmlAttributes</li>
                        <li>link</li>
                        <li>meta</li>
                        <li>noscript</li>
                        <li>script</li>
                        <li>style</li>
                        <li>title</li>
                    </ul>
                </div>
            </div>
        </Fragment>
      );
}