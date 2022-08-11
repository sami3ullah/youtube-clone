import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Container, Main, Wrapper } from "./styled/App.styledcomponent";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import Authentication from "./pages/Authentication/Authentication.jsx";
import { useSelector } from "react-redux";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="explore" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  {/* if there's no current user*/}
                  {!currentUser ? (
                    <Route path="authentication" element={<Authentication />} />
                  ) : (
                    <Route
                      path="authentication"
                      element={<Navigate to="/" replace={true} />}
                    />
                  )}
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
