let myGraph = document.getElementById('myGraph');

let trace1 ={};
trace1.type = "pie";
trace1.title = "機器學習概論";
trace1.labels = [];
trace1.values = [];
trace1.hole = 0.5;
trace1.domain = {
    row : 0,
    column : 0
};



for(let x = 0; x < evaluation_ratio.length; x++){
    trace1.labels[x] = evaluation_ratio[x]['name'];
    trace1.values[x] = evaluation_ratio[x]['count'];
}


let trace2 ={};
trace2.type = "pie";
trace2.title = "資料視覺化";
trace2.labels = [];
trace2.values = [];
trace2.hole = 0.5;
trace2.domain = {
    row : 0,
    column : 1
};



for(let x = 0; x < evaluation_ratio_02.length; x++){
    trace2.labels[x] = evaluation_ratio_02[x]['name'];
    trace2.values[x] = evaluation_ratio_02[x]['count'];
}


let trace3 ={};
trace3.type = "pie";
trace3.title = "人工智慧與永續發展";
trace3.labels = [];
trace3.values = [];
trace3.hole = 0.5;
trace3.domain = {
    row : 1,
    column : 0
};



for(let x = 0; x < evaluation_ratio_03.length; x++){
    trace3.labels[x] = evaluation_ratio_03[x]['name'];
    trace3.values[x] = evaluation_ratio_03[x]['count'];
}

let trace4 ={};
trace4.type = "pie";
trace4.title = "Python程式設計";
trace4.labels = [];
trace4.values = [];
trace4.hole = 0.5;
trace4.domain = {
    row : 1,
    column : 1
};



for(let x = 0; x < evaluation_ratio_04.length; x++){
    trace4.labels[x] = evaluation_ratio_04[x]['name'];
    trace4.values[x] = evaluation_ratio_04[x]['count'];
}

let trace5 ={};
trace5.type = "pie";
trace5.title = "Who am I";
trace5.labels = [];
trace5.values = [];
trace5.hole = 0.5;
trace5.domain = {
    row : 2,
    column : 1
};



for(let x = 0; x < evaluation_ratio_05.length; x++){
    trace5.labels[x] = evaluation_ratio_05[x]['name'];
    trace5.values[x] = evaluation_ratio_05[x]['count'];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
data.push(trace5);

let layout = {
    margin : {
        t : 50,
        l : 0
    },
    grid :{
        rows : 3,
        columns : 2
    }
};

Plotly.newPlot(myGraph, data, layout);

