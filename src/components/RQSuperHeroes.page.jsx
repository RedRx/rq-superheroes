import React from "react";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const onSuccess = (data) => {
  console.log("Perform side effect after data fetching", data);
};

const onError = (error) => {
  console.log("Perform side effect after encountering error", error.message);
};

const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate: addHero } = useAddSuperHeroData();

  const [name, setName] = React.useState("");
  const [alterEgo, setAlterEgo] = React.useState("");

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
    setName("");
    setAlterEgo("");
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroespage</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHero}>Add Hero</button>
      </div>
      <button
        onClick={refetch}
        disabled={isFetching}
        style={{ marginBottom: "1rem" }}
      >
        {isFetching ? "Loading..." : "Fetch Heroes"}
      </button>
      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperHeroesPage;
