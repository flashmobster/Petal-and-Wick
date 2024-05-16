async function displayCandles() {
    const response = await fetch("https://petal-and-wick.onrender.com/api/candles");
    const candles = await response.json();
    console.log(candles);
  }