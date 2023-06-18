# react_router

#### ☑️ Router 사용

1. router install 하기 : npm install react-router-dom

2. 사용할 곳에서 import 하기

```jsx
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useParams}
 from 'react-router-dom';
```

3. Router 사용하기
   
   1. Router로 감싸기
   
   2. 링크 만들어주기(페이지가 새로고침안되게 하기 위해 사용)
   
   3. Route할 대상 Routes로 감싸주기
   
   4. Route에 path와 선택되었을 때 보여줄 것을 element 안에 적기

```jsx
function App(){
  return(
    <Router>
      <div>
        <h1>Hello Router</h1>
        <ul>
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
```

#### ☑️ Link와 NavLink 차이

1. NavLink 같은 경우에는 선택이 되었을 때 a tag안에 class="active" 속성이 추가된다.

2. 따라서 선택이 된 것을 표시해주고 싶을 때 .active에 css만 추가해주면 쉽게 표현이 가능하다.

```jsx
선택이 되었을 때
<a href="/" class="active">Home</a>

선택이 안 되었을 때
<a href="/" class>Home</a>
```

#### ☑️ Route를 param값을 통해 생성

1. Route의 값이 많을 경우 해당하는 값에 대해서 모든 것을 다 적을 수는 없기에 전달하는 param 값에 따라서 route를 연결

```jsx
<Routes>
    <Route path='/:topic_id' element={<Topic />}></Route>
</Routes>
```

2. 보여주는 Component에서는 해당하는 값 보여주기

example

```jsx
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
```

#### ☑️ Route 안에서 Route 사용

1. 바깥의 Route의 path 값에 /* 추가해주어야함.

```jsx
<Route path="/topics/*" element={<Topics />}></Route>
```

2. 안의 Route에서는 /topics 뒤에 올 path값만 작성

```jsx
<Route path='/:topic_id' element={<Topic />}></Route>
```

3. 위 경우 처럼 사용하면 /topics/:topic_id로 접근하면 안에 있는 route로 접근이 가능함.