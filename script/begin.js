//========== 變數設定 ==========
// 籌碼 5 / 10 / 50 面額  
var chip_1 = document.getElementById('chipskind_1');
var chip_2 = document.getElementById('chipskind_2');
var chip_3 = document.getElementById('chipskind_3');


//數字下注區塊(1~36)
var nbbox_1 = document.getElementById('nbbox_1');
var nbbox_2 = document.getElementById('nbbox_2');
var nbbox_3 = document.getElementById('nbbox_3');
var nbbox_4 = document.getElementById('nbbox_4');
var nbbox_5 = document.getElementById('nbbox_5');
var nbbox_6 = document.getElementById('nbbox_6');
var nbbox_7 = document.getElementById('nbbox_7');
var nbbox_8 = document.getElementById('nbbox_8');
var nbbox_9 = document.getElementById('nbbox_9');
var nbbox_10 = document.getElementById('nbbox_10');
var nbbox_11 = document.getElementById('nbbox_11');
var nbbox_12 = document.getElementById('nbbox_12');
var nbbox_13 = document.getElementById('nbbox_13');
var nbbox_14 = document.getElementById('nbbox_14');
var nbbox_15 = document.getElementById('nbbox_15');
var nbbox_16 = document.getElementById('nbbox_16');
var nbbox_17 = document.getElementById('nbbox_17');
var nbbox_18 = document.getElementById('nbbox_18');
var nbbox_19 = document.getElementById('nbbox_19');
var nbbox_20 = document.getElementById('nbbox_20');
var nbbox_21 = document.getElementById('nbbox_21');
var nbbox_22 = document.getElementById('nbbox_22');
var nbbox_23 = document.getElementById('nbbox_23');
var nbbox_24 = document.getElementById('nbbox_24');
var nbbox_25 = document.getElementById('nbbox_25');
var nbbox_26 = document.getElementById('nbbox_26');
var nbbox_27 = document.getElementById('nbbox_27');
var nbbox_28 = document.getElementById('nbbox_28');
var nbbox_29 = document.getElementById('nbbox_29');
var nbbox_30 = document.getElementById('nbbox_30');
var nbbox_31 = document.getElementById('nbbox_31');
var nbbox_32 = document.getElementById('nbbox_32');
var nbbox_33 = document.getElementById('nbbox_33');
var nbbox_34 = document.getElementById('nbbox_34');
var nbbox_35 = document.getElementById('nbbox_35');
var nbbox_36 = document.getElementById('nbbox_36');

//區域12注下注區塊(1~12 , 13~24 , 25~36)
var partbox_1 = document.getElementById('partbox_1');
var partbox_2 = document.getElementById('partbox_2');
var partbox_3 = document.getElementById('partbox_3');

// 1賠1下注區塊(大小 , 紅黑 , 單雙)
var selectbox_1 = document.getElementById('selectbox_1');
var selectbox_2 = document.getElementById('selectbox_2');
var selectbox_3 = document.getElementById('selectbox_3');
var selectbox_4 = document.getElementById('selectbox_4');
var selectbox_5 = document.getElementById('selectbox_5');
var selectbox_6 = document.getElementById('selectbox_6');

//1賠2橫排下注區塊(每排12個數)
var rowbox_1 = document.getElementById('rowbox_1');
var rowbox_2 = document.getElementById('rowbox_2');
var rowbox_3 = document.getElementById('rowbox_3');


//數字下注區塊(1~36)其span內容數字
var nb_1 = parseInt($('#nbbox_1 span').text());
var nb_2 = parseInt($('#nbbox_2 span').text());
var nb_3 = parseInt($('#nbbox_3 span').text());
var nb_4 = parseInt($('#nbbox_4 span').text());
var nb_5 = parseInt($('#nbbox_5 span').text());
var nb_6 = parseInt($('#nbbox_6 span').text());
var nb_7 = parseInt($('#nbbox_7 span').text());
var nb_8 = parseInt($('#nbbox_8 span').text());
var nb_9 = parseInt($('#nbbox_9 span').text());
var nb_10 = parseInt($('#nbbox_10 span').text());
var nb_11 = parseInt($('#nbbox_11 span').text());
var nb_12 = parseInt($('#nbbox_12 span').text());
var nb_13 = parseInt($('#nbbox_13 span').text());
var nb_14 = parseInt($('#nbbox_14 span').text());
var nb_15 = parseInt($('#nbbox_15 span').text());
var nb_16 = parseInt($('#nbbox_16 span').text());
var nb_17 = parseInt($('#nbbox_17 span').text());
var nb_18 = parseInt($('#nbbox_18 span').text());
var nb_19 = parseInt($('#nbbox_19 span').text());
var nb_20 = parseInt($('#nbbox_20 span').text());
var nb_21 = parseInt($('#nbbox_21 span').text());
var nb_22 = parseInt($('#nbbox_22 span').text());
var nb_23 = parseInt($('#nbbox_23 span').text());
var nb_24 = parseInt($('#nbbox_24 span').text());
var nb_25 = parseInt($('#nbbox_25 span').text());
var nb_26 = parseInt($('#nbbox_26 span').text());
var nb_27 = parseInt($('#nbbox_27 span').text());
var nb_28 = parseInt($('#nbbox_28 span').text());
var nb_29 = parseInt($('#nbbox_29 span').text());
var nb_30 = parseInt($('#nbbox_30 span').text());
var nb_31 = parseInt($('#nbbox_31 span').text());
var nb_32 = parseInt($('#nbbox_32 span').text());
var nb_33 = parseInt($('#nbbox_33 span').text());
var nb_34 = parseInt($('#nbbox_34 span').text());
var nb_35 = parseInt($('#nbbox_35 span').text());
var nb_36 = parseInt($('#nbbox_36 span').text());

//區域12注下注區塊(1~12 , 13~24 , 25~36)其span內容數字
var part_1 = parseInt($('#partbox_1 span').text());
var part_2 = parseInt($('#partbox_2 span').text());
var part_3 = parseInt($('#partbox_3 span').text());

// 1賠1下注區塊(大小 , 紅黑 , 單雙)其span內容數字
var select_1 = parseInt($('#selectbox_1 span').text());
var select_2 = parseInt($('#selectbox_2 span').text());
var select_3 = parseInt($('#selectbox_3 span').text());
var select_4 = parseInt($('#selectbox_4 span').text());
var select_5 = parseInt($('#selectbox_5 span').text());
var select_6 = parseInt($('#selectbox_6 span').text());

//1賠2橫排下注區塊(每排12個數)其span內容數字
var row_1 = parseInt($('#rowbox_1 span').text());
var row_2 = parseInt($('#rowbox_2 span').text());
var row_3 = parseInt($('#rowbox_3 span').text());


//button及各籌碼狀態用於轉盤啟動時禁止使用
//防止連續按下spin鍵反複出現BET為0提示
var btn = true;
var clearbtn = true;
var mychip = true;
var needbet = true;

//myMoney玩家金額 & 下注金額顯示
var mymoney = $('#myMoney').text();
var bet = $('#bet').text();
var totalwin;

//各mp3音效
var winmp3 = new Audio('mp3/winer.mp3');
var platemp3 = new Audio('mp3/plate.mp3');
var music = new Audio('mp3/music.mp3');


//背景音樂循環調用
 

//========== 其他監聽事件 ==========

//監聽各籌碼dragstart事件,並取得其ID做後續判斷使用
chip_1.addEventListener('dragstart', function() {
    if (mychip) {
        event.dataTransfer.setData('text', event.target.id)
    }
});
chip_2.addEventListener('dragstart', function() {
    if (mychip) {
        event.dataTransfer.setData('text', event.target.id)
    }
});
chip_3.addEventListener('dragstart', function() {
    if (mychip) {
        event.dataTransfer.setData('text', event.target.id)
    }
});


//碰到區域下注區變動各對應的數字下注區域(對應數字亮燈)
//區域12注下注區(1~12,13~24,25~36)
$('#partbox_1').mousemove(function() {
    $('#nbbox_1,#nbbox_2,#nbbox_3,#nbbox_4,#nbbox_5,#nbbox_6,#nbbox_7,#nbbox_8,#nbbox_9,#nbbox_10,#nbbox_11,#nbbox_12').addClass('region')
});
$('#partbox_1').mouseout(function() {
    $('#nbbox_1,#nbbox_2,#nbbox_3,#nbbox_4,#nbbox_5,#nbbox_6,#nbbox_7,#nbbox_8,#nbbox_9,#nbbox_10,#nbbox_11,#nbbox_12').removeClass('region')
});
$('#partbox_2').mousemove(function() {
    $('#nbbox_13,#nbbox_14,#nbbox_15,#nbbox_16,#nbbox_17,#nbbox_18,#nbbox_19,#nbbox_20,#nbbox_21,#nbbox_22,#nbbox_23,#nbbox_24').addClass('region')
});
$('#partbox_2').mouseout(function() {
    $('#nbbox_13,#nbbox_14,#nbbox_15,#nbbox_16,#nbbox_17,#nbbox_18,#nbbox_19,#nbbox_20,#nbbox_21,#nbbox_22,#nbbox_23,#nbbox_24').removeClass('region')
});
$('#partbox_3').mousemove(function() {
    $('#nbbox_25,#nbbox_26,#nbbox_27,#nbbox_28,#nbbox_29,#nbbox_30,#nbbox_31,#nbbox_32,#nbbox_33,#nbbox_34,#nbbox_35,#nbbox_36').addClass('region')
});
$('#partbox_3').mouseout(function() {
    $('#nbbox_25,#nbbox_26,#nbbox_27,#nbbox_28,#nbbox_29,#nbbox_30,#nbbox_31,#nbbox_32,#nbbox_33,#nbbox_34,#nbbox_35,#nbbox_36').removeClass('region')
});


//選擇下注區(大小,單雙,紅黑)
$('#selectbox_1').mousemove(function() {
    $('#nbbox_1,#nbbox_2,#nbbox_3,#nbbox_4,#nbbox_5,#nbbox_6,#nbbox_7,#nbbox_8,#nbbox_9,#nbbox_10,#nbbox_11,#nbbox_12,#nbbox_13,#nbbox_14,#nbbox_15,#nbbox_16,#nbbox_17,#nbbox_18').addClass('region')
});
$('#selectbox_1').mouseout(function() {
    $('#nbbox_1,#nbbox_2,#nbbox_3,#nbbox_4,#nbbox_5,#nbbox_6,#nbbox_7,#nbbox_8,#nbbox_9,#nbbox_10,#nbbox_11,#nbbox_12,#nbbox_13,#nbbox_14,#nbbox_15,#nbbox_16,#nbbox_17,#nbbox_18').removeClass('region')
});
$('#selectbox_6').mousemove(function() {
    $('#nbbox_19,#nbbox_20,#nbbox_21,#nbbox_22,#nbbox_23,#nbbox_24,#nbbox_25,#nbbox_26,#nbbox_27,#nbbox_28,#nbbox_29,#nbbox_30,#nbbox_31,#nbbox_32,#nbbox_33,#nbbox_34,#nbbox_35,#nbbox_36').addClass('region')
});
$('#selectbox_6').mouseout(function() {
    $('#nbbox_19,#nbbox_20,#nbbox_21,#nbbox_22,#nbbox_23,#nbbox_24,#nbbox_25,#nbbox_26,#nbbox_27,#nbbox_28,#nbbox_29,#nbbox_30,#nbbox_31,#nbbox_32,#nbbox_33,#nbbox_34,#nbbox_35,#nbbox_36').removeClass('region')
});
$('#selectbox_5').mousemove(function() {
    $('#nbbox_1,#nbbox_3,#nbbox_5,#nbbox_7,#nbbox_9,#nbbox_11,#nbbox_13,#nbbox_15,#nbbox_17,#nbbox_19,#nbbox_21,#nbbox_23,#nbbox_25,#nbbox_27,#nbbox_29,#nbbox_31,#nbbox_33,#nbbox_35').addClass('region')
});
$('#selectbox_5').mouseout(function() {
    $('#nbbox_1,#nbbox_3,#nbbox_5,#nbbox_7,#nbbox_9,#nbbox_11,#nbbox_13,#nbbox_15,#nbbox_17,#nbbox_19,#nbbox_21,#nbbox_23,#nbbox_25,#nbbox_27,#nbbox_29,#nbbox_31,#nbbox_33,#nbbox_35').removeClass('region')
});
$('#selectbox_2').mousemove(function() {
    $('#nbbox_2,#nbbox_4,#nbbox_6,#nbbox_8,#nbbox_10,#nbbox_12,#nbbox_14,#nbbox_16,#nbbox_18,#nbbox_20,#nbbox_22,#nbbox_24,#nbbox_26,#nbbox_28,#nbbox_30,#nbbox_32,#nbbox_34,#nbbox_36').addClass('region')
});
$('#selectbox_2').mouseout(function() {
    $('#nbbox_2,#nbbox_4,#nbbox_6,#nbbox_8,#nbbox_10,#nbbox_12,#nbbox_14,#nbbox_16,#nbbox_18,#nbbox_20,#nbbox_22,#nbbox_24,#nbbox_26,#nbbox_28,#nbbox_30,#nbbox_32,#nbbox_34,#nbbox_36').removeClass('region')
});

$('#selectbox_3').mousemove(function() {
    $('#nbbox_1,#nbbox_3,#nbbox_5,#nbbox_7,#nbbox_9,#nbbox_12,#nbbox_14,#nbbox_16,#nbbox_18,#nbbox_19,#nbbox_21,#nbbox_23,#nbbox_25,#nbbox_27,#nbbox_30,#nbbox_32,#nbbox_34,#nbbox_36').addClass('region')
});
$('#selectbox_3').mouseout(function() {
    $('#nbbox_1,#nbbox_3,#nbbox_5,#nbbox_7,#nbbox_9,#nbbox_12,#nbbox_14,#nbbox_16,#nbbox_18,#nbbox_19,#nbbox_21,#nbbox_23,#nbbox_25,#nbbox_27,#nbbox_30,#nbbox_32,#nbbox_34,#nbbox_36').removeClass('region')
});
$('#selectbox_4').mousemove(function() {
    $('#nbbox_2,#nbbox_4,#nbbox_6,#nbbox_8,#nbbox_10,#nbbox_11,#nbbox_13,#nbbox_15,#nbbox_17,#nbbox_20,#nbbox_22,#nbbox_24,#nbbox_26,#nbbox_28,#nbbox_29,#nbbox_31,#nbbox_33,#nbbox_35').addClass('region')
});
$('#selectbox_4').mouseout(function() {
    $('#nbbox_2,#nbbox_4,#nbbox_6,#nbbox_8,#nbbox_10,#nbbox_11,#nbbox_13,#nbbox_15,#nbbox_17,#nbbox_20,#nbbox_22,#nbbox_24,#nbbox_26,#nbbox_28,#nbbox_29,#nbbox_31,#nbbox_33,#nbbox_35').removeClass('region')
});


//橫排下注區     
$('#rowbox_1').mousemove(function() {
    $('#nbbox_1,#nbbox_4,#nbbox_7,#nbbox_10,#nbbox_13,#nbbox_16,#nbbox_19,#nbbox_22,#nbbox_25,#nbbox_28,#nbbox_31,#nbbox_34').addClass('region')
});
$('#rowbox_1').mouseout(function() {
    $('#nbbox_1,#nbbox_4,#nbbox_7,#nbbox_10,#nbbox_13,#nbbox_16,#nbbox_19,#nbbox_22,#nbbox_25,#nbbox_28,#nbbox_31,#nbbox_34').removeClass('region')
});
$('#rowbox_2').mousemove(function() {
    $('#nbbox_2,#nbbox_5,#nbbox_8,#nbbox_11,#nbbox_14,#nbbox_17,#nbbox_20,#nbbox_23,#nbbox_26,#nbbox_29,#nbbox_32,#nbbox_35').addClass('region')
});
$('#rowbox_2').mouseout(function() {
    $('#nbbox_2,#nbbox_5,#nbbox_8,#nbbox_11,#nbbox_14,#nbbox_17,#nbbox_20,#nbbox_23,#nbbox_26,#nbbox_29,#nbbox_32,#nbbox_35').removeClass('region')
});
$('#rowbox_3').mousemove(function() {
    $('#nbbox_3,#nbbox_6,#nbbox_9,#nbbox_12,#nbbox_15,#nbbox_18,#nbbox_21,#nbbox_24,#nbbox_27,#nbbox_30,#nbbox_33,#nbbox_36').addClass('region')
});
$('#rowbox_3').mouseout(function() {
    $('#nbbox_3,#nbbox_6,#nbbox_9,#nbbox_12,#nbbox_15,#nbbox_18,#nbbox_21,#nbbox_24,#nbbox_27,#nbbox_30,#nbbox_33,#nbbox_36').removeClass('region')
});


//按下clear鍵將bet金額返回money並清除變數及臺上籌碼
$('#clearbtn').click(function(){ 
    if(clearbtn){
        $('#numberBox span').each(function(){
            $(this).text(0)
            $(this).next().find('img').attr('src', 'img/0.png')
        });
        $('#partBox span').each(function(){
            $(this).text(0)
            $(this).next().find('img').attr('src', 'img/0.png')
        });
        $('#selectBox span').each(function(){
            $(this).text(0)
            $(this).next().find('img').attr('src', 'img/0.png')
        });
        $('#rowBox span').each(function(){
            $(this).text(0)
            $(this).next().find('img').attr('src', 'img/0.png')
        });
        nb_1 = 0; nb_2 = 0; nb_3 = 0; nb_4 = 0; nb_5 = 0; nb_6 = 0; nb_7 = 0; nb_8 = 0; nb_9 = 0; nb_10 = 0; nb_11 = 0; nb_12 = 0; nb_13 = 0; nb_14 = 0; nb_15 = 0; nb_16 = 0; nb_17 = 0; nb_18 = 0; nb_19 = 0; nb_20 = 0; nb_21 = 0; nb_22 = 0; nb_23 = 0; nb_24 = 0; nb_25 = 0; nb_26 = 0; nb_27 = 0; nb_28 = 0; nb_29 = 0; nb_30 = 0; nb_31 = 0; nb_32 = 0; nb_33 = 0; nb_34 = 0; nb_35 = 0; nb_36 = 0; 
        part_1 = 0; part_2 = 0; part_3 = 0;
        select_1 = 0; select_2 = 0; select_3 = 0; select_4 = 0; select_5 = 0; select_6 = 0
        row_1 = 0; row_2 = 0; row_3 = 0

        returnmoney()
        clearbet()   
    }                
});