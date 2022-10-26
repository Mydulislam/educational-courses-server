const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000;
app.get('/', (req, res)=>{
    res.send('server api running')
})
const courseCategories = require('./data/course-category.json');
const courseInfo = require('./data/course-info.json');

app.get('/course-categories',(req, res)=>{
    res.send(courseCategories)
})
app.get('/courses',(req, res)=>{
    res.send(courseInfo)
})
app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const selectCourses = courseInfo.filter(courses => courses.category_id === id);
    res.send(selectCourses)
})
app.get('/course/:id',(req, res)=>{
    const id = req.params.id;
    const  selectCourse = courseInfo.find(course => course._id === id);
    res.send(selectCourse)
})



app.listen(port, ()=>{
    console.log('Server Running on port', port)
})