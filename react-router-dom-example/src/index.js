import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useParams} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

const contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'},
]

function Topic() {
  const params = useParams();
  const topic_id = params.topic_id
  let selected_topic = {
    title:'Sorry',
    description:'Not Found',
  }
  for (let i=0; i<contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i]
      break
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  const lis = []
  for (let i=0; i<contents.length; i++ ){
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic />}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/1" element={<div>HTML is ...</div>}></Route>
        <Route path="/2" element={<div>JS is ...</div>}></Route>
        <Route path="/3" element={<div>React is ...</div>}></Route>
      </Routes> */}
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App(){
  return(
    <Router>
      <div>
        <h1>Hello Router</h1>
        <ul>
          {/* Link NavLink 차이 NavLink는 class에 active라는 class가 생김 */}
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topics/*" element={<Topics />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
