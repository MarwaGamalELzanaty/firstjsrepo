import express from 'express';
const students = [{
        id: 1,
        name: 'marwa',
        city: 'sadat'
    }, {
        id: 2,
        name: 'mohammed',
        city: 'sadat'
    }, {
        id: 3,
        name: 'Nehal',
        city: 'sh'
    }, {
        id: 4,
        name: 'asmaa',
        city: 'sadat'
    }, {
        id: 5,
        name: 'menna',
        city: 'sadat'
    }]
    //let x = students.every((item) => {
    //return item.city == 'sadat';
    //})
const app = express();

const studentfun = (request, response) => {

    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        output += "<li>" + students[i].name + "</li>";
    }
    output += "</ul>";
    response.send(output);
};
app.get('/students', studentfun);
app.listen(9000);