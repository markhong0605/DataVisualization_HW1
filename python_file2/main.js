let lineGraph1 = document.getElementById('lineGraph1');

let trace11 ={};
trace11.mode ="lines+markers+text";
trace11.type ="scatter";
trace11.name = "GS Warriors";
trace11.marker = {
    size : 15
};
trace11.x =[];
trace11.y =[];
trace11.text = [];
trace11.textposition = "center";
trace11.textfont = {
    family : "Raleway",
    size : 15
};

for(let i=0;i<set1.length;i++){
    trace11.x[i] =set1[i][0];
    trace11.y[i] =set1[i][1];
    trace11.text[i] = set1[i][2];
}

let trace22 = {};
trace22.mode = "lines+markers+text";
trace22.type = "scatter";
trace22.name = "LA Lakers";
trace22.marker = {
    size : 15
};
trace22.x = [];
trace22.y = [];
trace22.text = [];
trace22.textposition = "center"
trace22.textfont = {
    family : "Raleway, sans_serif",
    size : 15
};

for(let i=0;i<set2.length;i++){
    trace22.x[i] =set2[i][0];
    trace22.y[i] =set2[i][1];
    trace22.text[i] = set2[i][2];
}

let trace33 = {};
trace33.mode = "lines+markers+text";
trace33.type = "scatter";
trace33.name = "LA Clippers";
trace33.marker = {
    size : 15
};
trace33.x = [];
trace33.y = [];
trace33.text = [];
trace33.textposition = "center";
trace33.textfont = {
    family : "Raleway, sans_serif",
    size : 15
};

for(let i=0;i<set3.length;i++){
    trace33.x[i] =set3[i][0];
    trace33.y[i] =set3[i][1];
    trace33.text[i] = set3[i][2];
}

let data1 =[];
data1.push(trace11);
data1.push(trace22);
data1.push(trace33);

let layout1 ={
    margin:{
        t:50
    },
    xaxis : {
       range : [0,6.5]
    },
    yaxis : {
        range : [0,50]
    },
    updatemenus:[
        {
            y:0.6,
            x:1.3,
    
            yanchor: 'top',
            buttons:[
                {
                    method: 'restyle',
                    args:['visible', [true, false, false]],
                    label: "GS Warriors"
                },
                {
                    method: 'restyle',
                    args:['visible', [false, true, false]],
                    label: "LA Lakers"
                },
                {
                    method: 'restyle',
                    args:['visible', [false, false, true]],
                    label: "LA Clippers"
                },
                {
                    method: 'restyle',
                    args:['visible', [true, true, true]],
                    label: "Display All"
                },
            ]
        }
    ],
    title : 'NBA starting lineups scoring points per game(due to 11/14 00:00 UTF +8)'
};

Plotly.newPlot(lineGraph1, data1, layout1);

