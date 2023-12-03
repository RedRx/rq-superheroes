import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:5000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:5000/friends");
};

const ParallelQueries = () => {
  const { data: superHeores } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      <div>
        {superHeores?.data?.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>;
        })}
      </div>
      <div
        style={{
          width: "100vw",
          height: "1px",
          backgroundColor: "white",
          margin: "1rem 0",
        }}
      />
      <div>
        {friends?.data?.map((friend) => {
          return <div key={friend.id}>{friend.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ParallelQueries;
