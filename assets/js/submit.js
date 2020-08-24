/*
 * HADONGBANGBANG is strictly a static web
 * but by using ajax, sends data to Google Spreadsheet (like DB),
 * we can store(?) user's data.
 * 
 * 구분하자면 하동방방은 정적웹이다.
 * 정적웹 호스팅 서비스인 netlify를 통해 배포되어있으며, 사용자 정보를 가져올 수 없기 떄문이다.
 * 하지만 ajax 통신을 이용하여 사용자 정보를 구글 스프레드시트에 저장/확인할 수 있다.
 * 동적 웹호스팅을 연결하는 것이 번거롭고, 간단한 웹을 구성하여 값을 저장만 하는 거라면 
 * DB 연결 대신 시도해볼만 하다.
 * 사용자 정보 확인과 공유가 DB를 이용했을 때보다 쉽고 비전공자에게 공유하는 경우에는 더 편리했다.
 * 단점은 이용자의 정보를 가져올 수는 없다는 것!
 * 
 */

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

function send_summer(){
	var day1 = null;
	var day2 = null;
	var day3 = null;
	if(document.getElementById("day1").checked) day1 = "O";
	if(document.getElementById("day2").checked) day2 = "O";
	if(document.getElementById("day3").checked) day3 = "O";
	var summer_review = document.getElementById("summer_review").value;
	
	if(checkmaindata() == MAIN_DATA_ERR) {
		alert("어느 캠퍼스의 누구인가요??\n메인 페이지에서 기본 정보를 채워주세요.");
		location.href = "index.html";
		return;
	}
	if(summer_review.length == 0){	
		alert("여름수련회가 어땠는지 나눠줄 수 없나요..?");
		return;
	}
	
	
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbxQqlcCjAbsVBSgT9jZefoUUi03OJCybGVTjlYql1-E6Zu7fU8/exec",
		data: {
			'Campus': campus, 
			'SID': sid, 
			'Name': name,
			'day1': day1,
			'day2': day2,
			'day3': day3,
			'summer_review': summer_review,
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

