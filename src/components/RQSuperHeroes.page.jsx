import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:5000/superheroes");
};

const onSuccess = (data) => {
  console.log("Perform side effect after data fetching", data);
};

const onError = (error) => {
  console.log("Perform side effect after encountering error", error.message);
};

const RQSuperHeroesPage = () => {
  // query key => unique identifier
  // query fn

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 6000, // 5sec   default = 5 min
      // staleTime: 30000, default = 0 sec
      //
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: false,

      // enabled: false,
      onSuccess,
      onError,
      select: (data) => {
        // const superHeroNames = data.data.map((hero) => hero.alterEgo);
        // return superHeroNames;

        return data.data.filter((hero) => hero.name.includes("Superman"));
      },
    },
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroespage</h2>
      <button
        onClick={refetch}
        disabled={isFetching}
        style={{ marginBottom: "1rem" }}
      >
        {isFetching ? "Loading..." : "Fetch Heroes"}
      </button>
      {/* {data?.data?.map((hero) => { */}
      {/*   return <div key={hero.id}>{hero.name}</div>; */}
      {/* })} */}

      {/* choice 1 */}
      {/* {data?.map((alterEgo) => { */}
      {/*   return <div key={alterEgo}>{alterEgo}</div>; */}
      {/* })} */}

      {/* choice 2 */}
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
