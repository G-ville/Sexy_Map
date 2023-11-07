ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7850").setExtent([386958.372417, 6471598.248623, 390451.886379, 6474321.539034]);
var wms_layers = [];


        var lyr_voyager_0 = new ol.layer.Tile({
            'title': 'voyager',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}@2x.png'
            })
        });
var format_Urban_Change_1 = new ol.format.GeoJSON();
var features_Urban_Change_1 = format_Urban_Change_1.readFeatures(json_Urban_Change_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_Urban_Change_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_Change_1.addFeatures(features_Urban_Change_1);
var lyr_Urban_Change_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Urban_Change_1, 
                style: style_Urban_Change_1,
                interactive: true,
                title: '<img src="styles/legend/Urban_Change_1.png" /> Urban_Change'
            });

lyr_voyager_0.setVisible(true);lyr_Urban_Change_1.setVisible(true);
var layersList = [lyr_voyager_0,lyr_Urban_Change_1];
lyr_Urban_Change_1.set('fieldAliases', {'name': 'name', 'suburb': 'suburb', 'label': 'label', });
lyr_Urban_Change_1.set('fieldImages', {'name': 'TextEdit', 'suburb': 'TextEdit', 'label': 'ExternalResource', });
lyr_Urban_Change_1.set('fieldLabels', {'name': 'no label', 'suburb': 'no label', 'label': 'no label', });
lyr_Urban_Change_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});