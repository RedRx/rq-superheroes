import "./App.css";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//RQ
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//nested component
import HomePage from "./components/Home.page";
import SuperHeroes from "./components/SuperHeroes.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Nav>
          <HomePage />
        </Nav>
      ),
    },
    {
      path: "/super-heroes",
      element: (
        <Nav>
          <SuperHeroes />
        </Nav>
      ),
    },
    {
      path: "/rq-super-heroes",
      element: (
        <Nav>
          <RQSuperHeroes />
        </Nav>
      ),
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
