var chart = new ej.charts.Chart({
    title: "Risk analysis chart",
    tooltip: {enable: true},
    series: [
                
        {
            marker: {
                 visible: true,
           }
        }
    ],
    
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        minimum: 0,
        maximum: 5,
        interval: 10,
        edgeLabelPlacement: "Shift",
        labelFormat: "{value}"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Radar",
            dataSource: [
                { x: "Risk 1", y: 4 },
                { x: "Risk 2", y: 3 },
                { x: "Risk 3", y: 2 },
                { x: "Risk 4", y: 1 },
                { x: "Risk 5", y: 1 },
                { x: "Risk 6", y: 1 },
                { x: "Risk 7", y: 5 },
                { x: "Risk 8", y: 3 },
                { x: "Risk 9", y: 5 },
                { x: "Risk 10", y: 2 },
                { x: "Risk 11", y: 3 },
                { x: "Risk 12", y: 3 },
                { x: "Risk 13", y: 3 },
                { x: "Risk 14", y: 5 },
                { x: "Risk 15", y: 2 },
                { x: "Risk 16", y: 1 },
                { x: "Risk 17", y: 2 },
                { x: "Risk 18", y: 2 },
                { x: "Risk 19", y: 5 },
                { x: "Risk 20", y: 5 },
                { x: "Risk 21", y: 1 },
                { x: "Risk 22", y: 1 },
                { x: "Risk 23", y: 3 },
                { x: "Risk 25", y: 2 },
                { x: "Risk 26", y: 2 },
                { x: "Risk 27", y: 2 },
                { x: "Risk 28", y: 3 },
                { x: "Risk 29", y: 3 },
                { x: "Risk 30", y: 4 },
                { x: "Risk 31", y: 1 },
                { x: "Risk 32", y: 1 },
                { x: "Risk 33", y: 1 },
                { x: "Risk 34", y: 4 },
                { x: "Risk 35", y: 3 },
                { x: "Risk 36", y: 3 },
                { x: "Risk 37", y: 4 },
                { x: "Risk 38", y: 5 },
                { x: "Risk 39", y: 3 },
                { x: "Risk 40", y: 3 },
                { x: "Risk 41", y: 1 },
                { x: "Risk 42", y: 5 },
                { x: "Risk 43", y: 4 },
                { x: "Risk 43", y: 4 },
                { x: "Risk 44", y: 2 },
                { x: "Risk 45", y: 4 },
                { x: "Risk 46", y: 3 },
                { x: "Risk 47", y: 4 },
                {x: "Risk 48", y: 4}
            ],
            xName: "x",
            width: 2,
            yName: "y",
            name: "Risk Analysis",
        }
        // {
        //     type: "Radar",
        //     dataSource: [
        //         { x: "Risk 13", y: -17.4 },
        //         { x: "Risk 14", y: -15.6 },
        //         { x: "Risk 15", y: -12.3 },
        //         { x: "Risk 16", y: -5.3 },
        //         { x: "Risk 17", y: 1.0 },
        //         { x: "Risk 18", y: 6.9 },
        //         { x: "Risk 19", y: 9.4 },
        //         { x: "Risk 20", y: 7.6 },
        //         { x: "Risk 21", y: 2.6 },
        //         { x: "Risk 22", y: -4.9 },
        //         { x: "Risk 23", y: -13.4 },
        //         { x: "Risk 24", y: -16.4 }
        //     ],
        //     xName: "x",
        //     width: 2,
        //     yName: "y",
        //     name: "Coldest",
        // }
    ],
});
chart.appendTo("#container");

function LoadChart() {
    chart.appendTo("#container")
}