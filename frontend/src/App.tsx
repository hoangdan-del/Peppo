import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routeConfig } from "./routes/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./store/Context";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AppProvider>

    <Router>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((childRoute, idx) => (
              <Route key={idx} path={childRoute.path} element={childRoute.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
        </AppProvider>
        </GoogleOAuthProvider>
    </QueryClientProvider>  
  );
}

export default App;
