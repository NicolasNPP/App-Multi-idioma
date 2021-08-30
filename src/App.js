import Navegacion from './components/Navegacion/Navegacion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import HomeContainer from './components/HomeContainer/HomeContainer';



function App() {

  return (


    <div>
      <Router>
        <div className="App">
          <Navegacion brandname={"App Nico"} />

          <Switch>

            <Route exact path="/" component={HomeContainer} />
            <Route path="/contact" component={Contact} />



          </Switch>
        </div>
      </Router>
    </div>


  )
}

export default App;
