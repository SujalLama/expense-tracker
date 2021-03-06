import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import {Link} from 'react-router-dom'
import auth from '../auth/auth-helper'
import ExpenseOverview from '../expense/ExpenseOverview'
import './home.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 440
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#4f83cc'
    } 
  }
}))

export default function Home(){
  const classes = useStyles()
  return (
        <>
          { auth.isAuthenticated() && 
            <ExpenseOverview/> 
          } 
          { !auth.isAuthenticated() && typeof window !== "undefined" && 
            // (<Card className={classes.card}>
            //   <Typography variant="h6" className={classes.title}>
            //     Home Page
            //   </Typography>
            //   <CardMedia className={classes.media} image='./images/unicornbike.jpg' title="Unicorn Bicycle"/>
            //   <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/@anniespratt" target="_blank" rel="noopener noreferrer">Annie Spratt</a> on Unsplash</Typography>
            //   <CardContent>
            //     <Typography variant="body1" component="p">
            //       Welcome to the MERN Expense Tracker. <Link to='/signup'>Sign up</Link> or <Link to='/signin'>sign in</Link> to get started.
            //     </Typography>
            //   </CardContent>
            // </Card>)
            (
              <div className="home">
                <div className="tag-line">
                    <h2 className="heading-1">Welcome to MERN.</h2>
                    <h1>Expense Tracker</h1>
                </div>
                <div className="hero-img-wrapper">
                    <img src="./images/hero.svg" alt="hero image" />
                </div>
              </div>
            )
          }
        </>
    )
}