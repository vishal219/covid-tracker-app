import React from 'react'
import {makeStyles} from '@material-ui/core'

const styles=makeStyles({
nav:{
    color: '#fff',
    backgroundColor: '#ee6e73',
    width: '100%',
    height: '56px',
    position:'fixed'
},
navwrapper:{
    display: 'flex',
    justifyContent:'center'
},
brand:{
    color:'#fff',
    display: 'inline-block',
    fontSize: '2.1rem',
    padding: '0',
    textDecoration: 'none'
}
})
export default function Header() {
    const classes=styles()
    return (
        
             <nav className={classes.nav}>
                <div className={classes.navwrapper}>
                    <a href='' className={classes.brand}>Covid-Info</a>
                    {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <Link to="/india">
                            India
                        </Link>
                    </ul> */}
                </div>
            </nav>
        
    )
}
