import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroId }) => {
  useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-heroes", id],
        queryFn: () => fetchSuperHero(id),
        onSuccess: (data) => {
          const mappedData = {};
          mappedData[id] = data;
          console.log(mappedData);
        },
      };
    }) || [],
  );
  return <div>DynamicParallelpage</div>;
};

export default DynamicParallel;
