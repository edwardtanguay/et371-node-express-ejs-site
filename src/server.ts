import express from 'express';
import * as config from './config';

const app = express();

app.get('/', (req, res) => {
	const siteTitle = 'The Info Site';
	res.send(`
<html>
	<head>
		<title>${siteTitle}</title>
		<link href="css/main.css"/>
	</head>
	<body>
		<h1>${siteTitle}</h1>
		<p>Welcome to this site.</p>
	</body>
</html>
	`);
})


app.listen(config.getPort(), () => {
	console.log(`Listening at http://localhost:${config.getPort()}`);
});