import './App.css';

//======= import Provider from react-redux ================//
//======= import store from reduxStore/indexStore.js ======//
import { Provider } from 'react-redux';
import store from '../reduxStore/indexStore.js';

import Header from '../components/Header/Header.js';
import CategoryList from '../components/Categories/Categories.js';
import ProductsList from '../components/Products/Products.js';
import ActiveCategory from '../components/ActiveCategory/ActiveCategory.js';
import Footer from '../components/Footer/Footer.js';


//=== wrap your App component with Provider with store value ===//
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CategoryList/>
        <ActiveCategory/>
        <ProductsList/>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
