import express from "express";
const app: express.Application = express();
const port = process.env.PORT || 8000;

app.get(
	"/",
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		res.send("Hello World!");
	}
);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
