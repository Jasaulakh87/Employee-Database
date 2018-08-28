import React from 'react'


export default class Table extends React.Component{
constructor(){
    super();
    
}

deleteHandler(i,e){
    e.preventDefault();
    this.props.onDelete(this.props.results[i].Region_Id);
};

render(){
    return(
        <div> 
        <div className='table-scroll'>    
    <table>
    <thead>
        <tr> 
            <th>Region_Id</th> 
            <th>Region_Name</th>
            <th>Action</th>

        </tr>
    </thead> 
    <tbody>
        {this.props.results.map((item, i)=>{
         return(
        <tr key={item.Region_Id}> 
            <td>  {item.Region_Id}  </td>
            <td>  {item.Region_Name}  </td>
            <td>
                <button onClick={this.deleteHandler.bind(this, i)}> Delete </button>
            </td>
        </tr>
        
                        )
                    })
              }
           <tr className='last'> <td> <button onClick = {this.addRow}> Add Row </button> </td> </tr>
    </tbody>
    </table>
    
    </div> 

        </div>
    )
}
}