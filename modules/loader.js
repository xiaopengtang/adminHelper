require.config({
	"paths" : {
		"jquery" : "../bower_components/jquery/dist/jquery.min"
		,"backbone" : "../modules/vendor/backbone/backbone-min"
		,"underscore" : "../modules/vendor/underscore/underscore-min"
		,"moment" : "../bower_components/moment/min/moment.min"
		,"wysihtml5" : "../modules/vendor/wysihtml5/wysihtml5.min"
	}
	,"map"           :  {
		"*"         :  {
			css     :  "../modules/vendor/require/css"
			,domReady : "../modules/vendor/require/domReady"
		}
	}
})