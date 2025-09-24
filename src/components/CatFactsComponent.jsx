import { useEffect, useState } from "react";
import styles from "../styles/CatFacts.module.css";

export default function CatFactsComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://catfact.ninja/facts?limit=5&page=${Math.ceil(
            Math.random() * 67
          )}`
        );

        // response checker
        if (!response.ok) {
          throw new Error(`Error fetching Data: ${response.status}`);
        }

        const fetchedData = await response.json();

        // array/object checker
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          setData(fetchedData.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // runs fetchData on button click
    if (fetchTrigger > 0) {
      fetchData();
    }
    // dependency: useEffect runs every time fetchTrigger value changes
  }, [fetchTrigger]);

  // console.log(data);
  const fetchNewBtnClick = () => {
    setFetchTrigger((prev) => prev + 1);
  };

  return (
    <>
      {/* checks if true */}
      {loading && <img className={styles.loading} src="./loading.gif"></img>}
      {error && <p className={styles.errorMessage}>Error: {error}</p>}
      {data &&
        data.map((dataItem, index) => {
          return (
            <ul key={index}>
              <li className={styles.catFactItem} key={index}>
                {dataItem.fact}
              </li>
            </ul>
          );
        })}
      <button className={styles.getMoreBtn} onClick={fetchNewBtnClick}>
        Get New Facts
      </button>
    </>
  );
}
