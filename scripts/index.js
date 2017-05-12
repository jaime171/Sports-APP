import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'


// === Import components
import { LogInModule } from './components/login/index';
import { HomeModule } from './components/home/index';


class App extends React.Component {

    render() {

        return(

            <BrowserRouter>
                <div>
                    <Route exact path={'/'} component={ HomeModule }/>
                    <Route path={'/login'} component={ LogInModule }/>
                </div>
            </BrowserRouter>

        )

    }

}

render(<App />, document.getElementById('wrapper'));




