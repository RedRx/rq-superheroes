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
import RQSuperHero from "./components/RQSuperHero.page";
import ParallelQueries from "./components/ParallelQueries.page";
import DynamicParallel from "./components/DynamicParallel.page";
import DependentQueries from "./components/DependentQueries.page";
import PaginatedQueries from "./components/PaginatedQueries.page";
import InfiniteQueries from "./components/InfiniteQueries.page";

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
    {
      path: "/rq-super-hero/:heroId",
      element: (
        <Nav>
          <RQSuperHero />
        </Nav>
      ),
    },
    {
      path: "/parallel-queries",
      element: (
        <Nav>
          <ParallelQueries />
        </Nav>
      ),
    },
    {
      path: "/dynamic-parallel",
      element: (
        <Nav>
          <DynamicParallel heroId={[1, 3]} />
        </Nav>
      ),
    },
    {
      path: "/dependent-queries",
      element: (
        <Nav>
          <DependentQueries email={"toy@toylab.com"} />
        </Nav>
      ),
    },
    {
      path: "/paginated-queries",
      element: (
        <Nav>
          <PaginatedQueries />
        </Nav>
      ),
    },
    {
      path: "/infinite-queries",
      element: (
        <Nav>
          <InfiniteQueries />
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
