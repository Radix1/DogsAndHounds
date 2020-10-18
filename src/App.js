import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dogs from './components/dogs/Dogs'
import About from './components/pages/About'
import DisplayTable from './components/pages/DisplayTable'

import axios from 'axios'
import './App.css';
import Dashboard from './components/d3/Dashboard';

class App extends Component{

  state= {
    dogs:[],
    images:[],
    loading:false,
    alert:null
  };


   async componentDidMount() {
    this.setState({loading:true});
    const names= await axios.get('https://dog.ceo/api/breeds/list/all')
    const images= await axios.get('https://dog.ceo/api/breed/hound/images')
    var imgDogs=Array.from(images.data.message);
    var nameDogs=Object.keys(names.data.message);
   this.setState({dogs:nameDogs, images:imgDogs, loading:false })
   }
  
   
  render(){

    const {dogs,images,loading}=this.state;





    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
         
          <Switch>
            <Route 
            exact 
            path='/home' 
            render={props => (
              <Fragment>
        <Dogs dogs={dogs} images={images} loading={loading} />
              </Fragment>

            )}/>

            <Route exact path='/about' component={About} />
            <Route exact path='/table' component={DisplayTable} />
            <Route exact path='/dashboard' component={Dashboard}/>
          
          </Switch>
    
        </div>
      </div>
      </Router>
     
     
    );
  }
  
}

export default App;
