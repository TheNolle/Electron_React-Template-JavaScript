import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import { Link } from 'react-router-dom'

export default function App() {
    function nodeLog(message) {
        window.electron.consoleLog(message)
    }

    return (
        <div className="app-container">
            <h1>Electron x React</h1>
            <Routes>
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="a" element={<h2>A</h2>} />
                <Route path="*" element={<h2>An error occurred</h2>} />
            </Routes>
            <div>
                <Link to="/" title="Click me to switch to the home page">Home</Link>
                <Link to="a" title="Click me to switch to the A page">A</Link>
                <Link to="/404" title="Click me to switch to the 404 page">404</Link>
            </div>
            <div>
                <button title="Click me to log to the console (nodejs one)" onClick={() => nodeLog('Button Clicked')}>NodeLog</button>
                <button title="Click me to open a dialog" onClick={() => alert('Button Clicked')}>Alert</button>
            </div>
        </div>
    )
}
