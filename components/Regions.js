import React from 'react'
import '../main/table.css'
import Table from './Table'
import {deleteRow} from '../actions/DeleteRow'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

export default class Regions extends React.Component{
  constructor(props){
    super(props);  
    
    this.state = {
        results:[]
    };

    this.addRow = this.addRow.bind(this)
    this.submitData = this.submitData.bind(this)
    this.onDelete = this.onDelete.bind(this) 
    
};


componentWillMount() {
    fetch('http://localhost:8084/HR_API/RegionAPI')
        .then((resp) => {
            return resp.json()
        })
        .then((json)=>{
            this.setState({
                results: json.results
            })
        })
};

addRow(){
    var newrow = {Region_Id: '', Region_Name: ''}
    return(this.setState({results: this.state.results.concat(newrow)}))
 }
 
  
submitData(){
    return(
        console.log('data updated')
         /*fetch(url, {
        method: 'PUT'
      }).then((res) => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));*/
    )
}

  /* addData(data){
   fetch('http://localhost:8084/HR_API/RegionAPI'),{
       method:'POST',
       headers:{
           Accept: 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
       .then((response)=> {
           return response.json()
            })
        .then((json)=>{
            this.setState({
            results:json.results
            })
            })
        .catch((error) => {
            console.error(error);
        })
    }
} */

//Delete method  

onDelete(Region_Id){
    deleteRow(Region_Id)
    .then((json)=>{
        let results = this.state.results.filter((item)=>{
            return Region_Id !== item.Region_Id
        });

        this.setState((state)=>{
            state.results = results;
            return state;
        }).bind(this)
    })
    .catch(err=> {
        console.log('err', err);
    })
}

render(){
    return(
    <div> 
       <div> 
         <h2> <b>Regions </b>  </h2>  
        <ul className = 'mylist' >
            <li> <Link to= "/Home"> <button> Cancel </button> </Link> </li>
            <li><button onClick={this.deleteRow}> Delete </button> </li>
            <li><button onClick={this.submitData}> Submit </button></li>   
        </ul>
        </div>
    <Table  
            results= {this.state.results}
            onDelete={this.onDelete}/> 
    </div>
    
                );
            }
    
    
    
}