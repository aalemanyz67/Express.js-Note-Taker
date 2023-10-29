const express = require('express');
const routeHtml = require('./Routes/htmlRoutes')
const routeApi = require('./Routes/apiRoutes')
const PORT =  process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(routeHtml)
app.use(routeApi)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});