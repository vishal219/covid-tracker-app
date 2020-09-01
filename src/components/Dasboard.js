import React, { Component } from 'react'
import axios from  'axios'
import pic from './cc.jpg'
import {makeStyles} from '@material-ui/core'
const style=makeStyles({
  table:{
    width: '100%',
    display: 'table',
    borderCollapse: 'collapse',
    borderSpacing: '0',
    boxSizing: 'inherit',
    fontFamily: 'Segoe UI'
  },
  bold:{
    textAlign:'left',

  },
  row:{
    borderBottom: '1px solid lightgray',
    padding: '3px 0px 3px 0px'
  }
})

export default class Dasboard extends Component {
  state={
      post:[]
  }
  componentDidMount(){
       axios.get('https://api.covid19api.com/summary' )
        .then(res=>{
            // console.log(res.data)
            const post=res.data.Countries
            
            this.setState({
                post
            })
        })
    
    }
    
    render() {
      const classes=style()
       
        return (
          
            <div>
               
               <img src={pic} alt="Covid-19" style={{width:'100%'}}></img>
               <h1 className="center">Covid-19 Stats</h1> 
               <table className={classes.table}>
        <thead>
          <tr>
              <th >Name</th>
              <th>Total</th>
              <th >Recovered</th>
              <th >Deaths</th>
              
          </tr>
        </thead>
       
        <tbody>
          {
            
              this.state.post.map((row)=>(
              <tr key={row.Country}>
                <td>{row.Country}</td>
                <td>{row.TotalConfirmed}  </td>
                <td>{row.TotalRecovered} </td>
                <td>{row.TotalDeaths}</td>
              </tr>
          ))}
        </tbody>
      </table>
            </div>
        )
    }
}

