document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('select');
    		var instances = M.FormSelect.init(elems);
        

    		new TypeIt("#titsub", {
			strings: "Suscribete para obtener promociones y descuentos antes que nadie.",
			speed: 100,
			lifeLike: true,
			loop:true,
			deleteSpeed: 100
		}).go();
    		});

$(document).ready(function(){
    $('.sidenav').sidenav();
     $('.slider').slider();
     $('.materialboxed').materialbox();
     $('.parallax').parallax();
     $('.pushpin').pushpin();
     $('input#nombre, input#telefono, input#email, textarea#comentarios').characterCounter();
    		


	$('.ir-arriba').click(function(){ 
	$('body, html').animate({ scrollTop: '0px' }, 300); }); $(window).scroll(function(){ if( $(this).scrollTop() > 0 ){ 
	$('.ir-arriba').slideDown(300); } 
	else { $('.ir-arriba').slideUp(300); } });

		$('.tooltip').tooltipster({
			animation: 'fade',
			animationDuration: 1000,
		});

    // Create the chart barras
Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Esta grafica muestra nuestros productos más vendidos de cada sección'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Escala de porcentajes'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: "Productos",
      colorByPoint: true,
      data: [
        {
          name: "Pollos",
          y: 85.74,
          drilldown: "Pollos"
        },
        {
          name: "Salsas",
          y: 25.57,
          drilldown: "Salsas"
        },
        {
          name: "Bebidas",
          y: 75.23,
          drilldown: "Bebidas"
        },
        {
          name: "Extras",
          y: 50.58,
          drilldown: "Extras"
        }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        name: "Pollos",
        id: "Pollos",
        data: [
          [
            "Pollo Rostizado Clasico",
            70.4
          ],
          [
            "Pollo Ranchero",
            50.3
          ],
          [
            "Pollo Al Pastor",
            40.02
          ]
        ]
      },
      {
        name: "Salsas",
        id: "Salsas",
        data: [
          [
            "Salsa Roja",
            7.36
          ],
          [
            "Salsa Verde",
            7.32
          ],
          [
            "Guacamole",
            8.50
          ],
          [
            "Salsa Habanera",
            6.11
          ],
          [
            "Salsa de Mango",
            5.1
          ],
          [
            "Salsa de Tamarindo",
            4.95
          ]
        ]
      },
      {
        name: "Bebidas",
        id: "Bebidas",
        data: [
          [
            "Agua de Jamaica",
            8.2
          ],
          [
            "Agua de Horchata",
            9.29
          ],
          [
            "Agua de Mazapan",
            9.01
          ],
          [
            "Agua de Maracuya",
            8.47
          ],
          [
            "Agua de Limon",
            8.70
          ],
          [
            "Agua de Fresa",
            6.47
          ]
        ]
      },
      {
        name: "Extras",
        id: "Extras",
        data: [
          [
            "Pizza de Peperoni",
            9.39
          ],
          [
            "Hamburguesa",
            7.96
          ],
          [
            "Hot Dog",
            7.36
          ],
          [
            "Alitas",
            9.54
          ],
          [
            "Papas a la francesa",
            9.13
          ],
          [
            "Aros de Cebolla",
            4.2
          ]
        ]
      }
    ]
  }
});

 /*grafica de pie con estilos*/
Highcharts.chart('container4', {

  chart: {
    styledMode: true
  },

  title: {
    text: 'Estados de la Republica donde se tienen mas ventas'
  },

  series: [{
    type: 'pie',
    allowPointSelect: true,
    keys: ['name', 'y', 'selected', 'sliced'],
    data: [
      ['Chiapas', 29.9, false],
      ['Veracruz', 71.5, false],
      ['Sinaloa', 106.4, false],
      ['Puebla', 129.2, false],
      ['Guadalajara', 144.0, false],
      ['Ciudad de México', 176.0, false],
      ['Guerrero', 135.6, true, true],
      ['Estado de México', 148.5, false]
    ],
    showInLegend: true
  }]
});

Highcharts.chart('container', {

  title: {
    text: 'Empleados por departamento, 2010-2016'
  },


  yAxis: {
    title: {
      text: 'Numero de Empleados'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Instalación',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufactura',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Ventas y Distribucion',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Desarrollo de productos',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Otros',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});


  });

