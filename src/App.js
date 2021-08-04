import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import 'assets/css/app.css'
import Homepage from 'Pages/Homepage';
import CategoriesItem from 'Pages/ItemCategories';
import DetailsPageCabe from 'Pages/DetailsPageCabe';
import Provinder from 'Helper/Hooks/useGlobalContext';
import CartPages from 'Pages/CartPages';
import Success from 'Pages/Success';

function App() {
  return (
    <Provinder>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories/:idc" component={CategoriesItem} />
          <Route exact path="/categories/:idc/product/:idp" component={DetailsPageCabe} />
          <Route path="/cart" component={CartPages} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </Provinder>
  );
}

export default App;
