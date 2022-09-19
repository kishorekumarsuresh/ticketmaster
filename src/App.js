import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
//import store, { persistor } from "./redux/store";
import Details from "./components/Details";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import store , {persistor} from "./components/redux/store";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
          
        </Routes>
        </PersistGate>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
