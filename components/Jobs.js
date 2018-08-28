import React from 'react'
import '../main/table.css'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


export default class Jobs extends React.Component{
constructor(props){
    super(props);  
    
    this.state = {
        results:[]
    }
    
    this.addRow = this.addRow.bind(this)

}

componentWillMount(){
    fetch('http://localhost:8084/HR_API/JobAPI')
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
    var newrow = {Job_Id: '', Job_Title: '', Min_Salary: '', max_Salary: ''}
    return(this.setState({results: this.state.results.concat(newrow)}))
 }

/*goHome(){
    return(
        location.href = "http://localhost:64203/Home"
    )
}*/


render(){
    return(
    <div>
        <div> 
         <h2> <b>Jobs </b>  </h2>  
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
    <th>Job_Id</th> 
    <th>Job_Title</th>
    <th>Min_Salary</th>
    <th>Max_Salary</th>
</tr>
</thead> 
<tbody>
{this.state.results.map((item, i)=>
    <JobTable key = {i}
    results = {item} />)}
  </tbody>
</table>
</div>
<div className='addbutton'> <button onClick = {this.addRow}> Add Row </button> </div>    
    </div>
    )
}}

class JobTable extends React.Component{
    constructor(props){
    super(props)
        }
    
        render(){
        return(
            <tr> 
                <td  width='30px'><input type="checkbox" name="name1" /></td> 
                <td> <div contenteditable = 'true'>  {this.props.results.Job_Id} </div></td>
                <td> <div contenteditable = 'true'> {this.props.results.Job_Title} </div> </td>
                <td> <div contenteditable = 'true'> {this.props.results.Min_Salary} </div> </td>
                <td> <div contenteditable = 'true'> {this.props.results.Max_Salary} </div> </td>

            </tr>
            )
        }
    }