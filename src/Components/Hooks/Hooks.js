import { useEffect, useState } from 'react';
import {getRecords} from '../Api/Api';

export const useUserRecords = () => {
    const [posts, setPosts] = useState([
      {
            key: 1,
            id: 1,
            activity: "running",
            date: "4/4/2022",
            duration: "30:00",
            kcal: 120,
            distance: 5,
          },
          {
            key: 2,
            id: 2,
            activity: "hiking",
            date: "4/4/2022",
            duration: "30:00",
            kcal: 120,
            distance: 5,
          },
          {
            key: 3,
            id: 3,
            activity: "swimming",
            date: "4/4/2022",
            duration: "30:00",
            kcal: 120,
            distance: 5,
          },
    ]);

    useEffect(() => {
        (async() => {
          const response = await getRecords();
          console.log(response.status);
          console.log(response.data);
  
          if (response.status === 200) {
            setPosts(response.data);
          } else {
            alert("Can't connect to server");
          }
        })();
      }, []);

      return [posts, setPosts];
}