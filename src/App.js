import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import 'assets/css/app.css'
import Homepage from 'Pages/Homepage';
import CategoriesItem from 'Pages/ItemCategories';
import Categories from 'Parts/Categories/categories';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories" component={Categories}/>
          <Route path="/categories/item/:title" component={CategoriesItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
