import './App.css';
// import MyTag from './MyTag'
// import MyTag2 from './MyTag2';
// import MyTag3 from './MyTag3';
// import LC from './LifeCycle';
// import Class from './Class';
// import ES6 from './es6/es6'
import List from './tour/list';
import Footer from './tour/footer'

function App() {
  return (
    <div id='page'>
        <h1>GwangJu City Tour List</h1>
        <div id='listSector'>
          <List></List>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;