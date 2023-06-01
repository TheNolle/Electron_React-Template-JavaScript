import React, { useEffect, useState } from 'react'

import './Versions.scss'

import packageJson from '../../package.json'

export default function Versions() {
    const [reactVersion, setReactVersion] = useState('')
    const [reactDomVersion, setReactDomVersion] = useState('')
    const [reactRouterDomVersion, setReactRouterDomVersion] = useState('')
    const [sassVersion, setSassVersion] = useState('')
    const [webpackVersion, setWebpackVersion] = useState('')
    const [electronVersion, setElectronVersion] = useState('')
    const [electronBuilderVersion, setElectronBuilderVersion] = useState('')
    const [chromeVersion, setChromeVersion] = useState('')
    const [nodeVersion, setNodeVersion] = useState('')

    async function setPreloaderVersions() {
        setNodeVersion(await window.versions.node)
        setChromeVersion(await window.versions.chrome)
        setElectronVersion(await window.versions.electron)
    }

    useEffect(() => {
        setReactVersion(packageJson.dependencies.react)
        setReactDomVersion(packageJson.dependencies['react-dom'])
        setReactRouterDomVersion(packageJson.dependencies['react-router-dom'])
        setSassVersion(packageJson.devDependencies.sass)
        setWebpackVersion(packageJson.devDependencies.webpack)
        setElectronBuilderVersion(packageJson.devDependencies['electron-builder'])
        setPreloaderVersions()
    }, [])

    return (
        <ul className="versions">
            <li>React: {reactVersion}</li>
            <li>React DOM: {reactDomVersion}</li>
            <li>React Router DOM: {reactRouterDomVersion}</li>
            <li>Sass: {sassVersion}</li>
            <li>Webpack: {webpackVersion}</li>
            <li>Electron: {electronVersion}</li>
            <li>Electron Builder: {electronBuilderVersion}</li>
            <li>Chrome: {chromeVersion}</li>
            <li>Node: {nodeVersion}</li>
        </ul>
    )
}
