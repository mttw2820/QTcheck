var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.1.0.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var MAIN_DATA_ERR = -1;

function checkmaindata(){
	if(campus == null || sid == null || name == null) 
		return MAIN_DATA_ERR;
}
function send_qt(){
	var msg = document.getElementById("qt_message").value;
	if(checkmaindata() == MAIN_DATA_ERR) {
		alert("어느 캠퍼스의 누구인가요??\n메인 페이지에서 기본 정보를 채워주세요.");
		location.href = "index.html";
		return;
	}
	if(qt_week == null){
		alert("어느 주차에 큐티를 했는지 선택해주세요.");
		return;
	}
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbwz0qUcDcRqNwI_9OzgRylTLkdD5Bk9v_KaM-MseTiwQqB9vJYy/exec",
		data: {
			'Campus': campus, 
			'SID': sid, 
			'Name': name,
			'Week': qt_week,
			'Message': msg
		},
		type: "GET",
		dataType: "JSON",
		success : function(data){
			location.href = "#congrats";
		},
		error: function(request, status, error){
			alert("잠시 후 다시 시도해주세요!");
		}
	});
}

function send_chapel(){
	if(checkmaindata() == MAIN_DATA_ERR) {
		alert("어느 캠퍼스의 누구인가요??\n메인 페이지에서 기본 정보를 채워주세요.");
		location.href = "index.html";
		return;
	}
	if(chapel_week == null){
		alert("몇 주차 채플에 참여했나요??\n몇주차인지 모른다면 댚단 순장님께 연락주세요 :)");
		return;
	}
	
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbwVY_kgtxKuMaYlK_qaPP1rsJPufCp-bXOA1dIMcqfWi0KqAAFp/exec",
		data: {
			'Campus': campus, 
			'SID': sid, 
			'Name': name,
			'Week': chapel_week
		},
		type: "GET",
		dataType: "JSON",
		success : function(data){
			location.href = "#congrats";
		},
		error: function(request, status, error){
			alert("잠시 후 다시 시도해주세요!");
		}
	});
}

function send_soon(){
	var msg = document.getElementById("soon_message").value;
	
	if(checkmaindata() == MAIN_DATA_ERR) {
		alert("어느 캠퍼스의 누구인가요??\n메인 페이지에서 기본 정보를 채워주세요.");
		location.href = "index.html";
		return;
	}
	if(soon_count == null){
		alert("몇 번째 순모임이었는지 체크해주세요!");
		return;
	}
	if(msg.length == 0){
		alert("순모임 어땠는지 알려주세요!");
		return;
	}

	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbyQ2siPjgKTxlzTL-1oiWTKo0LtxlDoFYI_bfISmPHJQEhaOPin/exec",
		data: {
			'Campus': campus, 
			'SID': sid, 
			'Name': name,
			'Time': soon_count,
			'Message': msg,
		},
		type: "GET",
		dataType: "JSON",
		success : function(data){
			location.href = "#congrats";
		},
		error: function(request, status, error){
			alert("잠시 후 다시 시도해주세요!");
		}
	});
}

function send_reading(){
	var review = document.getElementById("review").value;
	
	if(checkmaindata() == MAIN_DATA_ERR) {
		alert("어느 캠퍼스의 누구인가요??\n메인 페이지에서 기본 정보를 채워주세요.");
		location.href = "index.html";
		return;
	}
	if(reading_title == null || reading_title == "etc"){
		alert("책 제목을 알려주세요.");
		return;
	}
	if(review.length == 0){
		alert("어떤 책이었나요?");
		return;
	}
	
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbymYSHN1pIfbXzQD07N0aW2Hn4Hfe8o9VN03AMBqQBEuGnhiBAL/exec",
		data: {
			'Campus': campus, 
			'SID': sid, 
			'Name': name,
			'Title': reading_title,
			'Message': review,
		},
		type: "GET",
		dataType: "JSON",
		success : function(data){
			location.href = "#congrats";
		},
		error: function(request, status, error){
			alert("잠시 후 다시 시도해주세요!");
		}
	});
}

/*
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
*/