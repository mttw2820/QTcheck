var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.1.0.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


function send_data(){
	alert("func start");
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbzn7wdgjii-t7nNFX2MQUiV_s4hxx6wWFhWyd2u2bs63IubQQA/exec",
		data: {'sheet': 'Data', 'nickname': 'test_nickname', 'name': 'test_name'},
		type: "GET",
		dataType: "JSON",
		success : function(data){
			alert('SUCCESS');
		},
		error: function(request, status, error){
			alert("code: " + request.status + "\nmessage: " + request.responseText + "\nerror: " + error);
		}
	})
	.done(function(request){
		alert("DONE");
	})
	.fail(function(request, status, errorThrown){
		alert("code: " + request.status + "\nmessage: " + request.responseText + "\nerror: " + error);
	})
	.always(function(xhr, status){
		alert("ALWAYS");
	});
}