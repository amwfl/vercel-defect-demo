fetch('/api/cat-facts')
  .then(res => res.json())
  .then(fact => document.getElementById('fact').innerText = fact.text);
