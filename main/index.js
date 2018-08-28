import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/Home'
import './index.css'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Regions from '../components/Regions';
import Locations from '../components/Locations';
import Countries from '../components/Countries';
import Jobs from '../components/Jobs';
import Employees from '../components/Employees';



function App(){
    return (
        <div > 
            <BrowserRouter> 
            <div>
                <ul className= 'button' > 
                    <li > <Link to= "/Home"> <button> Home </button> </Link></li>
                    <li> <Link to= "/Regions"> <button> Regions  </button></Link></li>
                    <li> <Link to= "/Locations"> <button> Locations </button> </Link></li>
                    <li> <Link to= "/Countries"> <button> Countries </button></Link></li>
                    <li> <Link to= "/Jobs"> <button> Jobs </button></Link></li>
                    <li> <Link to= "/Employees"> <button> Employees </button></Link></li>
                </ul>
            <Switch>
                <Route exact path = "/Home" component = {Home} />
                <Route exact path = "/Regions" component = {Regions} />
                <Route exact path = "/Locations" component = {Locations} />
                <Route exact path = "/Countries" component = {Countries} />
                <Route exact path = "/Jobs" component = {Jobs} />
                <Route exact path = "/Employees" component = {Employees} />
            </Switch>
            </div>
            </BrowserRouter>
        </div>

    )

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)