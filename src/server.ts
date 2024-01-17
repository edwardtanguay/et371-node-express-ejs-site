import express from 'express';

const app = express();
const port = 4115;

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


app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});