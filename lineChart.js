/*
var chart = c3.generate({
    data: {
        x: 'x',
        xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2010', '2011', '2012', '2013', '2014', '2015'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
});
*/

var chart = c3.generate({
    data: {
        url: 'https://github.com/MahirEusufzai/test/blob/master/test.csv',
        type: 'line'
    }
});



$('#A').on('click', function () {

    chart.load({
        columns: [
        	['x', '2010', '2011', '2012', '2013', '2014', '2018'],
            ['data1', 20, 240, 120, 460, 158, 200],
        ],
        unload: chart.columns,
    });
});
