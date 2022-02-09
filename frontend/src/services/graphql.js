const endpoint = "http://localhost:4000/graphql";

const executeQuery = async (query) =>
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });

export { executeQuery };
