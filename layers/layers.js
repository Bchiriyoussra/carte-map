var wms_layers = [];

var format_tun_gouvernorats_utm_0 = new ol.format.GeoJSON();
var features_tun_gouvernorats_utm_0 = format_tun_gouvernorats_utm_0.readFeatures(json_tun_gouvernorats_utm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tun_gouvernorats_utm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tun_gouvernorats_utm_0.addFeatures(features_tun_gouvernorats_utm_0);
var lyr_tun_gouvernorats_utm_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tun_gouvernorats_utm_0, 
                style: style_tun_gouvernorats_utm_0,
                interactive: true,
                title: '<img src="styles/legend/tun_gouvernorats_utm_0.png" /> tun_gouvernorats_utm'
            });
var format_Reprojet_1 = new ol.format.GeoJSON();
var features_Reprojet_1 = format_Reprojet_1.readFeatures(json_Reprojet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet_1.addFeatures(features_Reprojet_1);
var lyr_Reprojet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet_1, 
                style: style_Reprojet_1,
                interactive: true,
                title: '<img src="styles/legend/Reprojet_1.png" /> Reprojeté'
            });
var format_Reprojet_2 = new ol.format.GeoJSON();
var features_Reprojet_2 = format_Reprojet_2.readFeatures(json_Reprojet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet_2.addFeatures(features_Reprojet_2);
var lyr_Reprojet_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet_2, 
                style: style_Reprojet_2,
                interactive: true,
                title: '<img src="styles/legend/Reprojet_2.png" /> Reprojeté'
            });

lyr_tun_gouvernorats_utm_0.setVisible(true);lyr_Reprojet_1.setVisible(true);lyr_Reprojet_2.setVisible(true);
var layersList = [lyr_tun_gouvernorats_utm_0,lyr_Reprojet_1,lyr_Reprojet_2];
lyr_tun_gouvernorats_utm_0.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_Reprojet_1.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_Reprojet_2.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_tun_gouvernorats_utm_0.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_Reprojet_1.set('fieldImages', {'IDG': '', 'NOMG': '', 'IDPAYS': '', });
lyr_Reprojet_2.set('fieldImages', {'IDG': '', 'NOMG': '', 'IDPAYS': '', });
lyr_tun_gouvernorats_utm_0.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_Reprojet_1.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_Reprojet_2.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_Reprojet_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});