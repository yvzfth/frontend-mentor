var data = fetch('./data.json')
    .then(response => response.json())



console.log(data["timeframes"])