// onclick functions for main pages
// on campus button clicked

var campusSymbol = new Map();
campusSymbol['동국'] = "&#127819;";
campusSymbol['배화'] = "&#127800;";
campusSymbol['성균'] = "&#128171;";
campusSymbol['상명'] = "&#9752;";
campusSymbol['숙명'] = "&#10052;";
campusSymbol['숭의'] = "&#127803;";

function campus_onclick(cam){
	var new_campus = document.getElementById(cam);	// 클릭된 캠퍼스
	var welcome_space = document.getElementById("welcometxt");
	var sid_block = document.getElementById("sid_block");
	var name_block = document.getElementById("name_block");
	
	if(campus == null){	// 첫 선택
		var welcometext = "이름이 뭐에요?";
		var sym = campusSymbol[cam];
		welcome_space.innerText = welcometext;
		new_campus.innerHTML = "&nbsp;" + sym;
		new_campus.className = "button primary";
		campus = cam;
		
		new_campus.style.fontSize = "1.2rem";
		welcome_space.style.display = "block";
		sid_block.style.display = "block";
		name_block.style.display = "block";
		
	} else {	// 중복 또는 취소
		if(campus != cam) { // 중복
			alert("캠퍼스는 하나만 선택해주세요."); 
		}
		else { // 취소 - 기존에 선택되었던 캠퍼스 취소
			campus = null;
			new_campus.innerText = cam;
			new_campus.style.fontSize = "1.0rem";
			new_campus.className = "button";
			welcome_space.style.display = "none";
			sid_block.style.display = "none";
			name_block.style.display = "none";
		}		
	}
}

function sidTyped(s_id){
	var typed_sid = document.getElementById(s_id);
	sid = typed_sid.value;
}

function nameTyped(name_id){
	var typed_name = document.getElementById(name_id);
	name = typed_name.value;
}


// on qt week button clicked
function qtweek_onclick(btn_id){
	var clicked_week = document.getElementById(btn_id);
	
	if(qt_week == null){	// 첫 선택
		clicked_week.innerHTML = "&nbsp" + "&#127775" + "&nbsp;";
		clicked_week.className = "button primary";
		clicked_week.style.fontSize = "1.2rem";
		qt_week = btn_id;	
	} else {	// 중복 또는 취소
		if(qt_week != btn_id) { // 중복
			alert("한 주차씩 인증해주세요!"); 
		}
		else { // 취소 - 기존에 선택되었던 캠퍼스 취소
			qt_week = null;
			clicked_week.innerText = btn_id;
			clicked_week.className = "button";
			clicked_week.style.fontSize = "1.0rem";
		}		
	}
}

function soonbtn_onclick(btn_id){
	var clicked_btn = document.getElementById(btn_id);
	
	if(soon_count == null){
		clicked_btn.className = "button primary";
		soon_count = btn_id;
	} else {
		if(soon_count != btn_id){
			alert("한번에 한 횟수만 선택 가능해요.");
		} else {
			soon_count = null;
			clicked_btn.className = "button";
		}
	}
}
