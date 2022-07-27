const result = () => Math.floor(Math.random() * 100) < 15 ? document.getElementById('item').innerHTML = "Prize" : document.getElementById('item').innerHTML = "Better luck next time sucker";
result();