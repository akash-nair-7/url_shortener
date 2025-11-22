const app = require("./src/app");

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD

app.listen(PORT, "0.0.0.0", () => {
=======
app.listen(PORT, () => {
>>>>>>> 23346ae623caae4ed608f1fca1255d4f21a1cd95
  console.log(`Server running on port ${PORT}`);
});
