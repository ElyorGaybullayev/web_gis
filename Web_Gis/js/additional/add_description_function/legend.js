function addLegend(html, map) {

    // Create Leaflet Control Object for Legend
    let legend = L.control({position: "bottomleft"});

    // Function that runs when legend is added to map
    legend.onAdd = function() {

        // Create Div Element and Populate it with HTML
        let div = L.DomUtil.create("div", "legend");
        div.innerHTML = html;

    // Return the Legend div containing the HTML content
    return div;

    };

    // Add Legend to Map
    legend.addTo(map);

}