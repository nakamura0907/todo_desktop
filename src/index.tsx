import * as React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";

import { createGlobalStyle } from "styled-components";
import "@utils/Calendar.css";

import reducers from "@module";
const store = createStore(
  reducers,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension ? window.devToolsExtension() : (f): void => f
  )
);

import Footer from "@component/templates/Footer";
import Head from "@component/templates/Head";
import Header from "@component/templates/Header";
import Main from "@component/templates/Main";

class App extends React.Component {
  render(): object {
    return (
      <>
        <Head
          description="React.jsで作成した成果物を紹介します。"
          keywords="React React.js Todoリスト"
          title="React.js成果物"
        />
        <GlobalStyle />
        <Header text="TodoList" />
        <Main />
        <Footer />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 24px;
}
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: proximanova, Gidole-Regular, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Segoe UI", Meiryo, sans-serif;
}
ul{
    list-style-type: none;
}
.is-completed {
    opacity: .5;
}
.is-completed p {
    // background: orange;
    text-decoration: line-through;
 }
`;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

declare global {
  interface Window {
    devToolsExtension: Function;
  }
}
