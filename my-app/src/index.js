import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    HashRouter,
    Route,
    Redirect,
    Switch
  }   from 'react-router-dom';
import App from './App';
import AboutMe from './AboutMe';
import registerServiceWorker from './registerServiceWorker';

class All extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path={"/index"} component={App} />                      
                    <Route path={"/detail/:id"} component={AboutMe} />
                    <Redirect form='/' to="/index" />
                  </Switch>
            </HashRouter>
            
        )
    }
}

ReactDOM.render(<All />, document.getElementById('root'));
registerServiceWorker();

