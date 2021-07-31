import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import 'assets/css/app.css'
import Homepage from 'Pages/Homepage';
import CategoriesItem from 'Pages/ItemCategories';
import DetailsPage from 'Pages/DetailsPage';
import Provinder from 'Helper/Hooks/useGlobalContext';

function App() {
  return (
    <Provinder>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories/:idc" component={CategoriesItem} />
          <Route path="/categories/:idc/product/:idp" component={DetailsPage} />
        </Switch>
      </Router>
    </Provinder>
  );
}

export default App;
