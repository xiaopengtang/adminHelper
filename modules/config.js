define(function(){
	return {
		/*"loader" : {
			"paths" : {
				"jquery" : "bower_components/jquery/dist/jquery.min"
				,"backbone" : "modules/vendor/backbone/backbone-min"
				,"underscore" : "modules/vendor/underscore/underscore-min"
			}
			,"map"           :  {
				"*"         :  {
					css     :  "modules/vendor/require/css"
					,domReady : "modules/vendor.require/domReady"
				}
			}
	    }*/
	    "layout" : {
	    	"User" : {
	    		//指定中间件
	    		"middleware" : function($app){
	    			var e = void 0
	    			if(!$app.config("session")){
	    				e = new Error("NO AUTH")
	    				e.status = 504
	    			}
	    			$app.next(e)
	    		}
	    		,"loaders" : [
	    		    "jquery"
	    		]
	    	}
	    	//or
	    	,"Home" : [
	    	/*"jquery"
	    	,"bower_components/jquery-ui/jquery-ui.min.js"
	    	,*/
	    	/*"domReady!*/
	    	"bower_components/bootstrap/dist/js/bootstrap.min.js"
	    	,/*"domReady!*/
	    	"bower_components/raphael/raphael.min.js"
	    	,/*"domReady!*/
	    	"bower_components/morris.js/morris.min.js"
	    	,/*"domReady!*/
	    	"bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"
	    	,/*"domReady!*/
	    	"plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"
	    	,/*"domReady!*/
	    	// "plugins/jvectormap/jquery-jvectormap-world-mill-en.js"
	    	,/*"domReady!*/
	    	"bower_components/jquery-knob/dist/jquery.knob.min.js"
	    	,/*"domReady!*/
	    	"bower_components/moment/min/moment.min.js"
	    	,/*"domReady!*/
	    	"bower_components/bootstrap-daterangepicker/daterangepicker.js"
	    	,/*"domReady!*/
	    	// "plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
	    	,/*"domReady!*/
	    	"bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"
	    	,/*"domReady!*/
	    	"bower_components/fastclick/lib/fastclick.js"
	    	,"dist/js/adminlte.min.js"
	    	,"modules/vendor/metismenu/metisMenu.min.js"
	    	,"css!../modules/vendor/metismenu/metisMenu.min.css"
	    	,"css!../bower_components/bootstrap/dist/css/bootstrap.min.css"
	    	,"css!../bower_components/font-awesome/css/font-awesome.min.css"
	    	,"css!../bower_components/Ionicons/css/ionicons.min.css"
	    	,"css!../dist/css/AdminLTE.min.css"
	    	,"css!../dist/css/skins/_all-skins.min.css"
	    	,"css!../bower_components/morris.js/morris.css"
	    	,"css!../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
	    	,"css!../bower_components/bootstrap-daterangepicker/daterangepicker.css"
	    	,"css!../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
	    	,"css!../bower_components/jvectormap/jquery-jvectormap.css"
	    	,"css!https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
	        ]
	    }
	    ,"defaultTheme" : "Home" //默认的layout
	    ,"extend"   :  []  //扩展包，可以有多个，该配置项指定扩展包的位置
	}
})