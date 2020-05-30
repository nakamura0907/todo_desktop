import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
