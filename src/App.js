import { Provider } from 'react-redux';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import NavPara from './components/NavPara';
import appStore from './utils/appStore';

function App() {

  return (
    <>
    <div className="App ml-20 mr-20">
      <Provider store={appStore}>
      <Header/>
      <NavPara/>
      <Body/>
      </Provider>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;

