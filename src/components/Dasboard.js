import React, { Component } from 'react'
import axios from  'axios'
import pic from './cc.jpg'
import {withStyles} from '@material-ui/core/styles'

const styles=theme=>({
  container:{
    width:"90%",
    display:"flex",
    justifyContent:"space-between",
    margin:"0 auto",
    flexWrap:"wrap"
  },
  card:{
    padding:"20px",
    backgroundColor:"#a8b9cf",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    color:"white",
    width:"20%",
    [theme.breakpoints.down('sm')]:{
      width:"30%",
      margin:"0 auto",
      marginBottom:"10px",
      padding:"10px"  
    },
    borderRadius:"6%"
  },
  recovered:{
    backgroundColor:"#276749",
    backgroundImage:"none"
  },
  deaths:{
    backgroundColor:"#ff3333",
    backgroundImage:"none"
  },
  big:{
    fontSize:"40px",
    padding:"0px",
    [theme.breakpoints.down('sm')]:{
      fontSize: "20px",
    },

  },
  small:{
    textAlign:"center",
    padding:"0px",
    [theme.breakpoints.down('sm')]:{
      fontSize: "15px",
    },
  }
})

class Dasboard extends Component {
  
  state={
      post:[],
      overall:[]
  }
  componentDidMount(){
       axios.get('https://api.covid19api.com/summary' )
        .then(res=>{
            // console.log(res.data)
            const post=res.data.Countries
            const overall=res.data.Global
            this.setState({
                post,overall
            })
        })
    
    }
   
    render() {
      const {classes}=this.props
       
        return (
          
            <div>
               
               <img src={pic} alt="Covid-19" style={{width:'100%'}}></img>
               <div className={classes.container}>
                <div className={classes.card}>
                  <h2 className={classes.small}>Total</h2>
                  <p className={classes.big}>{this.state.overall.TotalConfirmed}</p>
                </div>
                <div className={`${classes.card} ${classes.recovered}`}>
                  <h2 className={classes.small}>Recovered</h2>
                  <p className={classes.big}>{this.state.overall.TotalRecovered}</p>
                </div>
                <div className={`${classes.card} ${classes.deaths}`}>
                  <h2 className={classes.small}>Deaths</h2>
                  <p className={classes.big}>{this.state.overall.TotalDeaths}</p>
                </div>
                <div className={`${classes.card} ${classes.deaths}`}>
                  <h2 className={classes.small}>New Cases</h2>
                  <p className={classes.big}>{this.state.overall.NewConfirmed}</p>
                </div>
               </div>
               <h1 className="center">Covid-19 Stats</h1> 
               <table >
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
export default withStyles(styles)(Dasboard)