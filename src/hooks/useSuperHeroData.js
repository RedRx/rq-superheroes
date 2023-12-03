import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-heroes", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient.getQueryData("super-heroes");

      if (hero) {
        return hero?.data?.find((hero) => hero.id === heroId);
      } else {
        return undefined;
      }
    },
  });
};
