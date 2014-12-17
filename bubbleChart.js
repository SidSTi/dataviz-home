/*		var custom_bubble_chart = (function(d3, CustomTooltip) {
  "use strict";
 
	//alert("custom_bubble_chart");
	//console.log(clusterArr);

	var width = 940,
      height = 600,
      tooltip = CustomTooltip("Iris_tooltip", 240),
      layout_gravity = -0.01,
      damper = 0.1,
      nodes = [],
      vis, force, circles, radius_scale;
 
  var center = {x: width / 2, y: height / 2};

  	var fill_color = d3.scale.linear()
  							.domain([0,1])
  							.range(["steelblue","cyan"]);

	
 function custom_chart(clusterArr) {
  	clusterArr.forEach(function(d){
      	//alert("inside custom_chart");
      	var avg_data = {};
      rowArr.forEach(function(property){
      	var avg=0;
      	var sum=0;
      	d.forEach(function(data){
      		//data.property = +data.property;
      		sum += parseFloat(data[property]);
      		avg = sum/d.length;
        });
      	avg_data[property] = Math.round10(avg, -2);
      	//console.log(sum);
      });

      
      var node = {
        id: Math.round(Math.random() * 100000000),
        radius: d.length,
        mean: d.forEach(function(data){

        }),
        size: d.length,
        
        x: Math.random() * 900,
        y: Math.random() * 800,
        avg_data 
      };
      nodes.push(node);
    });
 
 	
 
    vis = d3.select(".right-div").append("svg")
                .attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom)
                .attr("id", "svg_vis");
 
    circles = vis.selectAll("circle")
                 .data(nodes, function(d) { return d.id ;});
 
    circles.enter().append("circle")
      .attr("r", 0)
      .attr("fill", function(d) { return fill_color(d.avg_data.species) ;})
      .attr("stroke-width", 2)
      .attr("stroke", function(d) {return d3.rgb(fill_color(d.group)).darker();})
      .attr("id", function(d) { return  "cluster_" + d.id; })
      .on("mouseover", function(d, i) {show_details(d, i, this);} )
      .on("mouseout", function(d, i) {hide_details(d, i, this);} );
 
    circles.transition().duration(2000).attr("r", function(d) { return d.radius; });
 	
	}

    function charge(d) {
    return -Math.pow(d.radius, 2.0) / 8;
  }
 
  function start() {
    force = d3.layout.force()
            .nodes(nodes)
            .size([width, height]);
  }
 
  function display_group_all() {
    force.gravity(layout_gravity)
         .charge(charge)
         .friction(0.9)
         .on("tick", function(e) {
            circles.each(move_towards_center(e.alpha))
                   .attr("cx", function(d) {return d.x;})
                   .attr("cy", function(d) {return d.y;});
         });
    force.start();
    //hide_years();
  }
 
  function move_towards_center(alpha) {
    return function(d) {
      d.x = d.x + (center.x - d.x) * (damper + 0.02) * alpha;
      d.y = d.y + (center.y - d.y) * (damper + 0.02) * alpha;
    };
  }
	

	function show_details(data, i, element) {
		var avg_feature = Object.keys(data.avg_data);
    d3.select(element).attr("stroke", "black");
    var content = "<span class=\"name\">Title:</span><span class=\"value\"> " + data.id + "</span><br/>";
    avg_feature.forEach(function(d){
    	content +="<span class=\"name\">"+d+":</span><span class=\"value\"> " + data.avg_data[d] + "</span><br/>";
    })
    
    content +="<span class=\"name\">Size:</span><span class=\"value\"> " + data.size + "</span>";
    tooltip.showTooltip(content, d3.event);
  }
 
  function hide_details(data, i, element) {
    d3.select(element).attr("stroke", function(d) { return d3.rgb(fill_color(d.group)).darker();} );
    tooltip.hideTooltip();
  }

	var my_mod = {};
  my_mod.init = function (_data) {
    custom_chart(_data);
    start();
  };
 
  my_mod.display_all = display_group_all;
 // my_mod.display_year = display_by_year;
  my_mod.toggle_view = function(view_type) {
    if (view_type == 'year') {
      //display_by_year();
    } else {
      display_group_all();
      }
    };
 
  return my_mod;
})(d3, CustomTooltip);

 		*/