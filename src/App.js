import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import Newsitem from './components/Newsitem';
import Loading from './components/Loading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize = 18;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element = {<News key = "general" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"general"}/>}/>
          <Route exact path="/business" element = {<News key = "business" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"business"}/>}/>
          <Route exact path="/general" element = {<News key = "general" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"general"}/>}/>
          <Route exact path="/sports" element = {<News key = "sports" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"sports"}/>}/>
          <Route exact path="/science" element = {<News key = "science" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"science"}/>}/>
          <Route exact path="/health" element = {<News key = "health" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"health"}/>}/>
          <Route exact path="/technology" element = {<News key = "technology" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"technology"}/>}/>
          <Route exact path="/entertainment" element = {<News key = "entertainment" pageSize={18} apiKey={this.apiKey} country = {"in"} category = {"entertainment"}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
