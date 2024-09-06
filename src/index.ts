import app from "./app";

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.API_URL? process.env.API_URL : "http://localhost:"}${process.env.PORT}`);
});