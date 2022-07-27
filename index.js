const result = () => Math.floor(Math.random() * 100) < 15 ? document.getElementById('item').innerHTML = "🥤" : document.getElementById('item').innerHTML = "💩";
result();