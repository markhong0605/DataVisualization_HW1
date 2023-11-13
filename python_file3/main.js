let barGraph2 = document.getElementById('barGraph2');

let trace10 ={};
trace10.type = "bar";
trace10.name = "lion";
trace10.x = [];
trace10.y = [];

trace10.x[0] = "Taipei Zoo";
trace10.y[0] = animals_Taipei_zoo[0]['count'];
trace10.x[1] = "Taoyuan Zoo";
trace10.y[1] = animals_Taoyuan_zoo[0]['count'];

trace10.text = trace10.y;
trace10.textfont = {
    color : 'White',
    size : 20
};

let trace20 ={};
trace20.type = "bar";
trace20.name = "tiger";
trace20.x = [];
trace20.y = [];

trace20.x[0] = "Taipei Zoo";
trace20.y[0] = animals_Taipei_zoo[1]['count'];
trace20.x[1] = "Taoyuan Zoo";
trace20.y[1] = animals_Taoyuan_zoo[1]['count'];

trace20.text = trace20.y;
trace20.textfont = {
    color : 'White',
    size : 20
};

let trace30 ={};
trace30.type = "bar";
trace30.name = "monkey";
trace30.x = [];
trace30.y = [];

trace30.x[0] = "Taipei Zoo";
trace30.y[0] = animals_Taipei_zoo[2]['count'];
trace30.x[1] = "Taoyuan Zoo";
trace30.y[1] = animals_Taoyuan_zoo[2]['count'];

trace30.text = trace30.y;
trace30.textfont = {
    color : 'White',
    size : 20
};




let data2 = [];
data2.push(trace10);
data2.push(trace20);
data2.push(trace30);
let layout2 = {
    margin : {
        t : 50
    },
    barmode : 'stack',
    title : 'TAIPEI V.S. TAOYUAN ZOO'
};

Plotly.newPlot(barGraph2, data2, layout2);

