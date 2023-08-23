import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import PenutContainer from "./components/PenutContainer";
// import CookContainer from "./components/CookContainer";
// import NewCookContainer from "./components/NewCookContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <PenutContainer />
        <CookContainer />
        <NewCookContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
