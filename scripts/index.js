import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// === Import components
import { HomeModule } from './components/home/index';
import { LogInModule } from './components/login/index';
import { RegisterModule } from './components/register/index';

class App extends React.Component {

    render() {

        return(

            <BrowserRouter>
                <div>
                    <Route exact path={'/'} component={ HomeModule }/>
                    <Route path={'/login'} component={ LogInModule }/>
                    <Route path={'/register'} component={ RegisterModule }/>
                </div>
            </BrowserRouter>

        )

    }

}

render(<App />, document.getElementById('main-container'));




