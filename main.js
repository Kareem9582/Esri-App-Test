        require([
            "esri/config", 
            "esri/Map", 
            "esri/views/MapView",
            "esri/layers/FeatureLayer"] ,
        function (esriConfig, Map, MapView,FeatureLayer) {
            esriConfig.apiKey = "AAPK3b501767c7f14e31ac6c6eb01473a691osC3nax5hTMssy9PKsLwSyQDZ3uKKvDIKmJWytCqSPSWQqPaW5DzCdRC2MXd9hNx";

            const map = new Map({
                basemap: "arcgis-topographic" 
            });

            const view = new MapView({
                map: map,
                center: [151.1686334, -33.8662383], 
                zoom: 9, 
                container: "viewDiv"
            });

            const featureLayer = new FeatureLayer({
                url: "https://portal.spatial.nsw.gov.au/geoserver/liveTransport/buses/FeatureServer/0/query?f=geojson",
            });
            
            view.when(()=> {
                const template  = featureLayer.createPopupTemplate();
                featureLayer.popupTemplate = template;   
            });
            
            map.add(featureLayer);

        });