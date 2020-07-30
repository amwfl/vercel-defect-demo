const nFetch = require('node-fetch');

module.exports = (req, res) => {
	if (req.method === 'OPTIONS') { res.send(200); return; }
	nFetch('https://cat-fact.herokuapp.com/facts')
		.then(r => r.json())
		.then(r => {
			const randomFactIdx = Math.floor(Math.random() * r.all.length);
			res.end(JSON.stringify(r.all[randomFactIdx]));
		})
		.catch(err => {
			res.status(500);
			res.end(JSON.stringify(err));
		})
}
