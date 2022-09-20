import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
//import store, { persistor } from "./redux/store";
import Details from "./components/Details";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import store , {persistor} from "./components/redux/store";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </PersistGate>
      </Provider>
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
