import React from 'react'
import '../main/table.css'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

export default class Locations extends React.Component{
    constructor(props){
        super(props);  
        
        this.state = {
            results:[]
        }
    
        this.addRow = this.addRow.bind(this)
    }
    
    componentWillMount(){
        fetch('http://localhost:8084/HR_API/LocationAPI')
            .then((resp)=>{
                return resp.json()
            })
            .then((json)=>{
               //console.log(json)
              this.setState({
              results:  json.results
            })
                    
                })
    }
    
    addRow(){
        var newrow = {Location_Id: '', Street_Address: '', Postal_Code: '', City: '', State_Province: '', Country_Id: ''}
        return(this.setState({results: this.state.results.concat(newrow)}))
     }

    goHome(){
        return(
            location.href = "http://localhost:64203/Home"
        )
    }
    
    render(){
    return(
    <div>
        <div> 
         <h2> <b>Locations </b>  </h2>  
        <ul className = 'mylist' >
            <li> <Link to= "/Home"> <button> Cancel </button> </Link> </li>
            <li><button onClick={this.deleteRow}> Delete </button> </li>
            <li><button onClick={this.submitData}> Submit </button></li>   
        </ul>
        </div>
    <div className='table-scroll'>    
    <table>
        <thead>
            <tr> 
                <th className='text'><input type="checkbox"/></th> 
                <th>Location_Id</th> 
                <th>Street_Address</th>
                <th>Postal_Code</th>
                <th>City</th>
                <th>State_Province</th>
                <th>Country_Id</th>
            </tr>
        </thead> 

        <tbody>
            {this.state.results.map((item, i)=>
            <LocationTable key={i}
            results = {item} />)}
        </tbody>
    </table>
    </div>
        <div className='addbutton'> <button onClick = {this.addRow}> Add Row </button></div>   
    </div>
                )
            }  
    }

    class LocationTable extends React.Component{
        constructor(props){
            super(props)
        }

        render(){
            return(
            <tr>
                <td  width='30px'><input type="checkbox" name="name1" /></td> 
                <td> <div contenteditable = 'true'>  {this.props.results.Location_Id} </div>   </td> 
                <td> <div contenteditable = 'true'>  {this.props.results.Street_Address}</div>   </td>
                <td> <div contenteditable = 'true'>  {this.props.results.Postal_Code} </div>   </td>
                <td>  <div contenteditable = 'true'> {this.props.results.City} </div>  </td>
                <td> <div contenteditable = 'true'>  {this.props.results.State_Province}</div>  </td>
                <td>  <div contenteditable = 'true'> {this.props.results.Country_Id} </div>  </td>
            </tr>
            )
        }



    }