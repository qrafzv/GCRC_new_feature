function(doc) {

// !code vendor/nunaliit2/n2.couchUtils.js
// !code vendor/nunaliit2/n2.couchTiles.js

	if( n2utils.isValidGeom(doc.nunaliit_geom) ) {
		var geomSize = n2utils.geomSize(doc.nunaliit_geom);
		
		// Emit the document for each tile
		var tiles = n2tiles.getTilesFromBounds(
			n2tiles.format4326_65K
			,doc.nunaliit_geom.bbox[0],doc.nunaliit_geom.bbox[1]
			,doc.nunaliit_geom.bbox[2],doc.nunaliit_geom.bbox[3]
			,200
			);
		for(var i=0,e=tiles.length; i<e; ++i) {
			emit(tiles[i], geomSize);
		};
	};
};