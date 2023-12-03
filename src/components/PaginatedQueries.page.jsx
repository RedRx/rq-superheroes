import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <div>
        {data?.data?.map((color) => (
          <div key={color.id}>
            <h2>
              {color.id} - {color.label}
            </h2>
          </div>
        ))}
      </div>
      <div>{isFetching && "Updating..."}</div>
      <div>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 4}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueries;
