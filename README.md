# HaDongBangBang
Demo Static Web Page for Seoul Central CCC - Daily QT check

Distributed as HaDongBangBang
* * *


## Intro
* You can check this web [HERE](https://dailyqt.netlify.app)

This web is developed to help the members' summer vacation time of KCCC Seoul Central District.
From Demo version 'dailyQT' to 'HaDongBangBang' - 하나님과 동행하는 방구석 방학, will be used from 2020.07 to 2020.09

Hosted through netlify, a static web hosting site.
Using ajax, sends data to Google Spreadsheet.

  	Web Template downloaded from [HTML5 UP](https://html5up.net/)




## .ajax to Google Spreadsheet

[on click submit button function](https://github.com/mttw2820/QTcheck/blob/master/assets/js/submit.js) with .ajax send datas to google spreadsheet script

"""

function send_qt(){
	// get datas from html form 
  // check data not null
	$.ajax({
		url: /* google spreadsheet script url */,
		data: { /* data go to spreadsheet */ },
		type: "GET",
		dataType: "JSON",
		success : function(data){
			/* when data send success */
		},
		error: function(request, status, error){
			alert("alert text");
		}
	});
}

"""

* Reference : [구글-스프레드시트-API-사용하기](https://kutar37.tistory.com/entry/%EA%B5%AC%EA%B8%80-%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C%EC%8B%9C%ED%8A%B8-API-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-INSERT)




## Contents

* main page

<p align="left">
  <img src="/img_/mobile_mainpage.jpg" height=300px">&nbsp;
  <img src="/img_/desktop_mainpage.png" height="300px">
</p>

* get user data

<p align="left">
  <img src="/img_/mobile(1).jpg" height="300px">&nbsp;
  <img src="/img_/desktop(1).png" height="300px">
</p>

* other contents

<p align="left">
  <img src="/img_/mobile(2).jpg" height="300px">&nbsp;
  <img src="/img_/desktop(2).png" height="300px">
</p>
<p align="left">
  <img src="/img_/mobile(3).jpg" height="300px">&nbsp;
  <img src="/img_/desktop(3).png" height="300px">
</p>
<p align="left">
  <img src="/img_/mobile(4).jpg" height="300px">&nbsp;
  <img src="/img_/desktop(4).png" height="300px">
</p>
<p align="left">
  <img src="/img_/mobile(5).jpg" height="300px">&nbsp;
  <img src="/img_/desktop(5).png" height="300px">
</p>
