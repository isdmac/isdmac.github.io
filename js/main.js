$( "input" ).change(function() {
   compute() ;
});

 
 function compute() {	
	 
	 
	 
	 var h = parseFloat($("#q").val())  ;
	 var t = parseFloat($("#r").val())  ;
	 
	   e = (t * 0.8)
	   c = e/2 ; 	
	   q = c/h ; 
 
      $("#result").text("Actual Rate: " + q + "| Total: " + c + "|Gtotal: " + e + "|inclusive: " + t) ;
	 
 
 }