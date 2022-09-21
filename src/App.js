import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import Details from "./components/Details";
import Homepage from "./components/Homepage";
import store, { persistor } from "./components/redux/store";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import React,{useState} from "react";

function App() {
  const [load,setLoad] = useState(false)
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Routes>
                <Route path="/" element={<Homepage load={load} setLoad={setLoad}/>} />
                <Route path="/details/:id" element={<Details load={load} setLoad={setLoad}/>} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
