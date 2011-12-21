exports.views = {
	entries: {
		map: function(doc) {
			if (doc.type == 'entry') {
				emit(doc.timestamp, doc);
			}			
		}
	}
}
