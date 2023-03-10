import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { ChatArea, ChatHierarchy, Header } from "./components";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { DashBoard, LoginPage, LandingPage } from "./Pages";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route
            path={"/dashboard/:id"}
            //element={isAuth ? <DashBoard /> : <Navigate to="/login" />}
            element={<DashBoard />}
          />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;