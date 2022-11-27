import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCon = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCon.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetch Denied");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setPending(false);
        })
        .catch((err) => {
          if (err.name == "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setPending(false);
          }
        });
    }, 500);
    return () => abortCon.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
