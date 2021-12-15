const {app, start} = require('./server');

const coursescontroller = require('./controllers/course.controller');
const searchcontroller = require('./controllers/search.controller');


app.use("/course",coursescontroller);
app.use("/search",searchcontroller);

start();