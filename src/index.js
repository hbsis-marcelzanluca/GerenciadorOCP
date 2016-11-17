import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './layout/App';
import Index from './paginas/Index/App';
import Veiculos from './paginas/Veiculos';
import PerfisVeiculos from './paginas/Veiculos/Perfis';

const Roteamento = () => {
    return (
		<MuiThemeProvider>
			<Router history={ hashHistory }>
		        <Route component={ App }>
                    <Route path="/" component={ Index } />
                    <Route path="/veiculos" component={ Veiculos } />
                    <Route path="/veiculos/perfis" component={ PerfisVeiculos } />
                </Route>
		    </Router>
		</MuiThemeProvider>
	);
}

render(<Roteamento />, document.getElementById('root'));
