import React  from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';

const App = ()=>{
    return(
        <div>
          <Card/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))