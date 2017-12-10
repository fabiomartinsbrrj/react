//declaring dependencies $modules alias criado no wabpak.config.js
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'


import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)