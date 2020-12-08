const coinDataFetch = async (endpoint, params, method, data = undefined) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const fetchedData = await fetch(`https://api.coingecko.com/api/v3/${endpoint}`, options);
  const jsonData = await fetchedData.json();
  if (fetchedData.status !== 200) {
    throw new Error(jsonData.message);
  }
  
  return jsonData;
};

export default coinDataFetch;
