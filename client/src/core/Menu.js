import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/AddBoxRounded'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import './menu.css';

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: '#fff', fontWeight: 'bolder'}
  else
    return {color: '#000'}
}
const isButtonActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#fffde7', backgroundColor: '#fff', marginRight:'1em', borderRadius: 4}
  else
    return {color: '#2bbd7e', backgroundColor: '#2BBD7E', border:'1px solid #2bbd7e', marginRight:'1em', borderRadius: 4}
}
const Menu = withRouter(({history}) => (
  <nav className="nav-menu">
    <ul>
      <div className="nav-item-group-1">
      <Link to="/" className="nav-item nav-header" style={isActive(history, "/")}><li>Expense Tracker</li></Link>
      {
          auth.isAuthenticated() && (<>
            <Link to={"/expenses/all"} className="nav-item" style={isActive(history, "/expenses/all")}>
              <li>Expenses</li>
            </Link>
            <Link to={"/expenses/reports"} style={isActive(history, "/expenses/reports")} className="nav-item">
              <li>Reports</li>
            </Link>
          </>)
        }
      </div>
      <div className="nav-item-group-2">
      {!auth.isAuthenticated() && 
      <><Link to="/signin" className="nav-item" style={isActive(history, "/signin")}><li>Sign in</li></Link>
      <Link to="/signup" className="nav-item" style={isActive(history, "/signup")}><li>Sign up</li></Link></>
      }
      {
        auth.isAuthenticated() && (<>
          <Link to="/expenses/new" className="nav-item" style={isButtonActive(history, "/expenses/new")}><Button><AddIcon style={{marginRight: 4}}/> Add Expense</Button></Link>  
          <Link to={"/user/" + auth.isAuthenticated().user._id} className="nav-item">
            <li style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</li>
          </Link>
          <li className="nav-item" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</li>
        </>)
      }
      </div>
    </ul>
  </nav>
  // <AppBar position="static">
  //   <Toolbar>
  //     <Typography variant="h6" color="inherit">
  //       MERN Expense Tracker
  //     </Typography>
  //     <div>
  //       <Link to="/">
  //         <IconButton aria-label="Home" style={isActive(history, "/")}>
  //           <HomeIcon/>
  //         </IconButton>
  //       </Link>
  //       {
  //         auth.isAuthenticated() && (<span>
  //           <Link to={"/expenses/all"}>
  //             <Button style={isActive(history, "/expenses/all")}>Expenses</Button>
  //           </Link>
  //           <Link to={"/expenses/reports"}>
  //             <Button style={isActive(history, "/expenses/reports")}>Reports</Button>
  //           </Link>
  //         </span>)
  //       }
  //     </div>
  //     <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
  //     {
  //       !auth.isAuthenticated() && (<span>
  //         <Link to="/signup">
  //           <Button style={isActive(history, "/signup")}>Sign up
  //           </Button>
  //         </Link>
  //         <Link to="/signin">
  //           <Button style={isActive(history, "/signin")}>Sign In
  //           </Button>
  //         </Link>
  //       </span>)
  //     }
  //     {
  //       auth.isAuthenticated() && (<span>
  //         <Link to="/expenses/new"><Button style={isButtonActive(history, "/expenses/new")}><AddIcon style={{marginRight: 4}}/> Add Expense</Button></Link>  
  //         <Link to={"/user/" + auth.isAuthenticated().user._id}>
  //           <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
  //         </Link>
  //         <Button color="inherit" onClick={() => {
  //             auth.clearJWT(() => history.push('/'))
  //           }}>Sign out</Button>
  //       </span>)
  //     }
  //     </span></div>
  //   </Toolbar>
  // </AppBar>
))

export default Menu
