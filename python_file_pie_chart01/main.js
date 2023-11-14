let myGraph = document.getElementById('myGraph');


let trace5 ={};
trace5.type = "pie";

trace5.labels = [];
trace5.values = [];
trace5.textfont = {
    family : "Raleway",
    size : 30
};
// trace5.domain = {
//     row : 2,
//     column : 1
// };



for(let x = 0; x < evaluation_ratio_05.length; x++){
    trace5.labels[x] = evaluation_ratio_05[x]['name'];
    trace5.values[x] = evaluation_ratio_05[x]['count'];
}

let data = [];

data.push(trace5);

let layout = {
    width : 700,
    height : 400,
    margin : {
        t : 30,
        l :50
    },

    title : "111年死因統計概況"

};

Plotly.newPlot(myGraph, data, layout);

