import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MovieList from './components/MovieList/MovieList'
import MovieDetail from './pages/Home/MovieDetail/MovieDetail'
const App = () => {
  return (
  <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<MovieDetail/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>Error</h1>}></Route>

      </Routes>
    </Router>
   

      
    </div>
  )
}

export default App
