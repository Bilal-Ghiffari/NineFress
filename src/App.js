import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import 'assets/css/app.css'
import Homepage from 'Pages/Homepage';
import CategoriesItem from 'Pages/ItemCategories';
import DetailsPageCabe from 'Pages/DetailsPageCabe';
import DetailsPageTelur from 'Pages/DetailsPageTelur';
import Provinder from 'Helper/Hooks/useGlobalContext';
import CartPages from 'Pages/CartPages';
import Success from 'Pages/Success';
import AboutUs from 'Static/AboutUs';
import Contact from 'Static/Contact';

function App() {
  return (
    <Provinder>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories/:idc" component={CategoriesItem} />
          <Route path="/categories/4/product/:idp" component={DetailsPageTelur} />
          <Route exact path="/categories/:idc/product/:idp" component={DetailsPageCabe} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={CartPages} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </Provinder>
  );
}

export default App;
