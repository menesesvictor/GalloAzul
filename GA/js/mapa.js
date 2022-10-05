$(document).ready(function(){
    var datos = [
    ['mx-3622', 0],
    ['mx-bc', 2],
    ['mx-bs', 2],
    ['mx-so', 3],
    ['mx-cl', 4],
    ['mx-na', 4],
    ['mx-cm', 6],
    ['mx-qr', 7],
    ['mx-mx', 8],
    ['mx-mo', 9],
    ['mx-df', 8],
    ['mx-qt', 5],
    ['mx-tb', 3],
    ['mx-cs', 1],
    ['mx-nl', 4],
    ['mx-si', 5],
    ['mx-ch', 6],
    ['mx-ve', 7],
    ['mx-za', 8],
    ['mx-ag', 9],
    ['mx-ja', 10],
    ['mx-mi', 1],
    ['mx-oa', 2],
    ['mx-pu', 3],
    ['mx-gr', 4],
    ['mx-tl', 5],
    ['mx-tm', 6],
    ['mx-co', 7],
    ['mx-yu', 8],
    ['mx-dg', 9],
    ['mx-gj', 10],
    ['mx-sl', 1],
    ['mx-hg', 2]
];
// Create the chart
Highcharts.mapChart('mapaMexico', {
    chart: {
        map: 'countries/mx/mx-all'
    },

    title: {
        text: 'Sucursales en la Republica Mexicana'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: datos,
        name: 'Numero de Sucursales',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
});
