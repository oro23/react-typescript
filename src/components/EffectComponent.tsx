import { useEffect, useState } from "react";

const fetchData = async (): Promise<any> => {
  // Simulate an API call or fetch request
  const response = await fetch("https://jsonplaceholder.typicode.com/user");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const EffectComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // This effect runs after the component has rendered

    // Perform some asynchronous data fetching
    fetchData()
      .then((result: any) => {
        if (isMounted) {
          setData(result);
        }
      })
      .catch((error: Error) => {
        console.error("Error fetching data:", error);
      });

    // Clean up the effect
    return () => {
      isMounted = false;
      // Perform any necessary cleanup here
      // This is optional but important to prevent memory leaks
    };
  }, []); // Empty dependency array, so the effect runs only once on component mount

  return <div>{data ? <p>Data: {data}</p> : <p>Loading data...</p>}</div>;
};

export default EffectComponent;
