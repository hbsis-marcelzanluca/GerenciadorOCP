import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class Navegacao extends Component {

    state = { aberto: false }

    handlerSidebar = () => this.setState({ aberto: !this.state.aberto })

    render() {
        return (
    		<AppBar title="HBSIS" onLeftIconButtonTouchTap={ this.handlerSidebar }>
    			<Drawer open={ this.state.aberto } docked={ false } onRequestChange={ this.handlerSidebar }>
    				<MenuItem
    					containerElement={ <Link to="/" /> }
    					onTouchTap={ this.handlerSidebar }>Início</MenuItem>

    				<MenuItem
    					containerElement={ <Link to="/veiculos" /> }
    					onTouchTap={ this.handlerSidebar }>Veículos</MenuItem>

    				<MenuItem
    					containerElement={ <Link to="/veiculos/perfis" /> }
    					onTouchTap={ this.handlerSidebar }>Perfis de veículo</MenuItem>
    			</Drawer>
    		</AppBar>
    	)
    }

}
