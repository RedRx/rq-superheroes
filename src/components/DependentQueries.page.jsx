import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:5000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:5000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: users } = useQuery(["users", email], () =>
    fetchUserByEmail(email),
  );

  const channelId = users?.data?.channelId;

  console.log(users);

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId, //is not undefined && is not null
    },
  );

  console.log(courses);

  return <div>DependentQueries</div>;
};

export default DependentQueries;
