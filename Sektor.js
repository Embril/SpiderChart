var chart = new ej.charts.Chart({
    title: "Risk analysis chart",
    tooltip: {enable: true},

    
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
            drawType: 'Area',
            fill: '#FFB275',
            marker: {visible: true},
            dataSource: [
                { x: "Risk 1", y: 4 },
                { x: "Risk 2", y: 3 },
                { x: "Risk 3", y: 2 },
                { x: "Risk 4", y: 2 },
                { x: "Risk 5", y: 2 },
                { x: "Risk 6", y: 3 },
                { x: "Risk 7", y: 4 },
                { x: "Risk 8", y: 3 },
                { x: "Risk 9", y: 4 },
                { x: "Risk 10", y: 2 }
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