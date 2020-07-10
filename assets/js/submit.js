
//$('#submit_qt').click(function(){
function qt_submit_onclick(){
	alert("submit_qt clicked");
	submit_index = "QT";
	var qt_msg = $('#qt_message');
	var week = "1";
	alert("got msg");
	$.ajax({
		type : "GET",
		url : "https://script.google.com/macros/s/AKfycbxMz41wYe1ozJKiK9Zp4LfHmzKhrY1gtH5SOQa4q0OE1T5VxEM/exec",
		data: {
			"submit_index": submit_index,
			"Campus": campus,
			"SID": sid,
			"Name": name,
			"Week": week,
			"Message": "test"
		},
		success: function(response){
			alert("입력 완료");
		},
		error: function(request, status, error){
			isLoading(false);
			alert("code: " + request.status + "\n" + "error: " + error);
			alert(request.responseText);
		}
	});	
//});
}