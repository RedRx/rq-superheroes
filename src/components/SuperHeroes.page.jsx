import React from "react";
import axios from "axios";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>SuperHeroes</h2>
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroes;
