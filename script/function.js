//========== 判斷函式 ==========

//籌碼1~6層變更
function chips(e) {
   
    //抓取參數指定為那個籌碼BOX 以及 下注區塊
    var y = $(`#${e} span`).text()
        // 籌碼_01層判斷
    if (y < 10) {
        $(`#${e} .chippic_01`).attr('src', 'img/1.png')
    } else if (y < 50) {
        $(`#${e} .chippic_01`).attr('src', 'img/2.png')
    } else if (y <= 100) {
        $(`#${e} .chippic_01`).attr('src', 'img/3.png')
    } else {
        $(`#${e} .chippic_01`).attr('src', 'img/0.png')
    };

    // 籌碼_02層判斷
    if (y < 15) {
        $(`#${e} .chippic_02`).attr('src', 'img/0.png')
    } else if (y < 20) {
        $(`#${e} .chippic_02`).attr('src', 'img/1.png')
    } else if (y < 50) {
        $(`#${e} .chippic_02`).attr('src', 'img/2.png')
    } else if (y < 55) {
        $(`#${e} .chippic_02`).attr('src', 'img/0.png')
    } else if (y < 60) {
        $(`#${e} .chippic_02`).attr('src', 'img/1.png')
    } else if (y < 100) {
        $(`#${e} .chippic_02`).attr('src', 'img/2.png')
    } else if (y == 100) {
        $(`#${e} .chippic_02`).attr('src', 'img/3.png')
    } else {
        $(`#${e} .chippic_02`).attr('src', 'img/0.png')
    };
    // 籌碼_03層判斷
    if (y < 25) {
        $(`#${e} .chippic_03`).attr('src', 'img/0.png')
    } else if (y < 30) {
        $(`#${e} .chippic_03`).attr('src', 'img/1.png')
    } else if (y < 50) {
        $(`#${e} .chippic_03`).attr('src', 'img/2.png')
    } else if (y < 65) {
        $(`#${e} .chippic_03`).attr('src', 'img/0.png')
    } else if (y < 70) {
        $(`#${e} .chippic_03`).attr('src', 'img/1.png')
    } else if (y < 100) {
        $(`#${e} .chippic_03`).attr('src', 'img/2.png')
    } else if (y == 100) {
        $(`#${e} .chippic_03`).attr('src', 'img/0.png')
    } else {
        $(`#${e} .chippic_03`).attr('src', 'img/0.png')
    };
    // 籌碼_04層判斷
    if (y < 35) {
        $(`#${e} .chippic_04`).attr('src', 'img/0.png')
    } else if (y < 40) {
        $(`#${e} .chippic_04`).attr('src', 'img/1.png')
    } else if (y < 50) {
        $(`#${e} .chippic_04`).attr('src', 'img/2.png')
    } else if (y < 75) {
        $(`#${e} .chippic_04`).attr('src', 'img/0.png')
    } else if (y < 80) {
        $(`#${e} .chippic_04`).attr('src', 'img/1.png')
    } else if (y < 100) {
        $(`#${e} .chippic_04`).attr('src', 'img/2.png')
    } else if (y == 100) {
        $(`#${e} .chippic_04`).attr('src', 'img/0.png')
    } else {
        $(`#${e} .chippic_04`).attr('src', 'img/0.png')
    };
    // 籌碼_05層判斷
    if (y < 45) {
        $(`#${e} .chippic_05`).attr('src', 'img/0.png')
    } else if (y < 50) {
        $(`#${e} .chippic_05`).attr('src', 'img/1.png')
    } else if (y < 85) {
        $(`#${e} .chippic_05`).attr('src', 'img/0.png')
    } else if (y < 90) {
        $(`#${e} .chippic_05`).attr('src', 'img/1.png')
    } else if (y < 100) {
        $(`#${e} .chippic_05`).attr('src', 'img/2.png')
    } else if (y == 100) {
        $(`#${e} .chippic_05`).attr('src', 'img/0.png')
    } else {
        $(`#${e} .chippic_05`).attr('src', 'img/0.png')
    }
    // 籌碼_06層判斷
    if (y < 95) {
        $(`#${e} .chippic_06`).attr('src', 'img/0.png')
    } else if (y < 100) {
        $(`#${e} .chippic_06`).attr('src', 'img/1.png')
    } else if (y == 100) {
        $(`#${e} .chippic_06`).attr('src', 'img/0.png')
    } else {
        $(`#${e} .chippic_06`).attr('src', 'img/0.png')
    }
}

//派彩金額回投(money+上獲得金額)
function addmoney (){
    var money = setInterval(function(){
        if($('#myMoney').text()==mymoney){
            clearInterval(money)
            //還原btn狀態
            $('#btn').removeClass('btnbf');
            $('#btn span').removeClass('btnsp');
            //將兩個btn及籌碼還原到可使用狀態
            btn = true;
            clearbtn = true;
            mychip = true;
        }else{
            $('#myMoney').text(parseInt($('#myMoney').text())+5); 
        }              
    },30)
};

//清除bet上金額(降至0)
function clearbet(){
    $('#clearbtn').removeClass('clearbf');
    $('#clearbtn span').removeClass('clearsp');
    var bet = setInterval(function(){      
        if($('#bet').text()==0){
            clearInterval(bet)
        }else{
            $('#bet').text(parseInt($('#bet').text())-5);
        }
    },30)
}

//遊戲開始後獲得獎金總額
function addhistory(){
    var nowhistory = Number($('#history').text()) 
    var myhistory = Number($('#history').text())+totalwin
    var history = setInterval(function(){
        if(nowhistory == myhistory){
            clearInterval(history)
        }else{
            nowhistory +=5
            $('#history').text(nowhistory); 
        }              
    },30)
}

//按下clear鍵將bet金額返回money
function returnmoney(){
    btn = false;
    clearbtn = false;
    mychip = false;
    $('#clearbtn').removeClass('clearbf');
    $('#clearbtn span').removeClass('clearsp');
    var mymoney =parseInt($('#myMoney').text()) 
    var bet = parseInt($('#bet').text())  
    var money = setInterval(function(){
        if($('#myMoney').text()== mymoney+bet){
            clearInterval(money);
            btn = true;
            clearbtn = true;
            mychip = true;
        }else{
            $('#myMoney').text(parseInt($('#myMoney').text())+5); 
        }              
    },30)
}

//按下spin鍵若bet為0，將提示下注區域
function nobet(){
    $('#error').text('PLACE YOUR BET')
    if(needbet){
        needbet = false;
        var nobet = 0
        var nobettime = setInterval(function(){
        if(nobet == 4){
            clearInterval(nobettime)
            btn = true;
            clearbtn = true;
            mychip = true;
            needbet = true;
        }else{
            nobet+=1
            $('#nobet').toggleClass('shownobet');
            $('#error').toggleClass('shownobet');
        }      
    },600)
    }
}

//當該下注區已達上限100，再次下注將出現提示
function maxbet(){
    //將button及籌碼設為無法作用狀態
    btn = false;
    clearbtn = false;
    mychip = false;
    //將#error替換內容字
    $('#error').text('Over Maximum Betting Limit')
        var  maxbet = 0
        var  maxbettime = setInterval(function(){
        if( maxbet == 4){
            clearInterval( maxbettime)
            btn = true;
            clearbtn = true;
            mychip = true;
        }else{
             maxbet+=1
            $('#error').toggleClass('showmax');
        }      
    },500)
}


//派彩畫面
function platewin() {
    $('#youwin tt').text(totalwin)                
    $('#showWin').css({
        zIndex: '3',
        opacity: '1'
    })
    var x = 0.1;
    var aa = setInterval(function(){
        x = x + 0.1
        if(x >= 1.1){
            clearInterval(aa)
            platewin_2()
        }else{
            $('#showwinpic').css('transform',`scale(${x})`)
            $('#showWin').css('opacity',`${x}`)
        }                  
    },40)
}
function  platewin_2(){  
    $('#youwin').css('opacity','1')
    var x = 2;
    var bb = setInterval(function(){
        x = x - 0.1
        if(x < 1){
            clearInterval(bb)
            platewin_3()
        }else{
            $('#youwin').css('transform',`scale(${x})`)
        }                  
    },35)
}
function platewin_3(){
     winmp3.play();
    setTimeout(function(){
        $('#showwinpic').css('transform','scale(0.1)')
        $('#youwin').css('transform','scale(2)')
        plateover()
    },3000)
}

//輪盤開獎結束最後派彩動作
function plateover(){
    // 清除下注區顯示金額及抬面上所有籌碼
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

    //清除暫存變數的值
    nb_1 = 0; nb_2 = 0; nb_3 = 0; nb_4 = 0; nb_5 = 0; nb_6 = 0; nb_7 = 0; nb_8 = 0; nb_9 = 0; nb_10 = 0; nb_11 = 0; nb_12 = 0; nb_13 = 0; nb_14 = 0; nb_15 = 0; nb_16 = 0; nb_17 = 0; nb_18 = 0; nb_19 = 0; nb_20 = 0; nb_21 = 0; nb_22 = 0; nb_23 = 0; nb_24 = 0; nb_25 = 0; nb_26 = 0; nb_27 = 0; nb_28 = 0; nb_29 = 0; nb_30 = 0; nb_31 = 0; nb_32 = 0; nb_33 = 0; nb_34 = 0; nb_35 = 0; nb_36 = 0; 
    part_1 = 0; part_2 = 0; part_3 = 0;
    select_1 = 0; select_2 = 0; select_3 = 0; select_4 = 0; select_5 = 0; select_6 = 0
    row_1 = 0; row_2 = 0; row_3 = 0
    $('#showWin tt').text('')

    //將showwin區塊隱藏
    $('#showWin').css({
        zIndex: '-1',
        opacity: '0'
    })

    //呼叫金額顯示函式執行各區域加減動作
    addmoney()
    clearbet()
    addhistory()
}

