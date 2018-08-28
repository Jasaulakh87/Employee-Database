import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../main/table.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

export default class Employees extends React.Component{
    constructor(props){
        super(props);  
        
        this.state = {
            results:[]
        }
   
        this.addRow = this.addRow.bind(this)
    }
    
    componentWillMount(){
        fetch('http://localhost:8084/HR_API/EmployeeAPI')
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
        var newrow = {Employee_Id: '', First_Name: '', Last_Name: '',Email: '', Phone_Number: '', Hire_Date: '',Job_Id: '', Salary: '', Commission_Pct: '', Manager_Id: '', Department_Id: ''}
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
            <h2> <b>Employees </b>  </h2>  
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
                <th>Employee_Id</th> 
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Email</th>
                <th>Phone_Number</th>
                <th>Hire_Date</th>
                <th>Job_Id</th>
                <th>Salary</th>
                <th>Commission Pct</th>
                <th>Manager_Id</th>
                <th>Department_Id</th>
            </tr>
            </thead> 
            <tbody>
            {this.state.results.map((item, i)=>
             <EmployeeTable key = {i}
              results = {item} />)}
                  </tbody>
        </table>
        </div>
        <div className='addbutton'> <button onClick = {this.addRow}> Add Row </button> </div>    
        </div>
                    )
                }  
    }    
    
    
    class EmployeeTable extends React.Component{
        constructor(){
            super()
        }

        render(){
            return(
            <tr> 
                <td  width='30px'><input type="checkbox" name="name1" /></td> 
                <td> <div contenteditable = 'true'>  {this.props.results.Employee_Id} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.First_Name} </div> </td>
                <td> <div contenteditable = 'true'> {this.props.results.Last_Name} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Email} </div> </td>
                <td> <div contenteditable = 'true'> {this.props.results.Phone_Number} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Hire_Date} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Job_Id} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Salary} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Commission_Pct} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Manager_Id} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Department_Id} </div></td>
            </tr>
            )
        }



    }