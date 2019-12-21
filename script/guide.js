// ==========  遊戲起始引導畫面 ==========
//手指向左移動至籌碼上 & 籌碼亮起並變大
var guidetime_1 = setInterval(function() {
    var x = parseInt($('#finger').css('left'));
    if (x == 780) {
        clearInterval(guidetime_1)
        $('#guidechip').css('opacity', '1').css('transform', 'scale(1.5)')
        setTimeout(function() {
            guide_1()
        }, 500)

    } else {
        x += 1
        $('#finger').css('left', `${x}px`)
    }
}, 2);

//手指及籌碼同時向右上移動 & 下注區域亮起
function guide_1() {
    var x = parseInt($('#finger').css('left'));
    var y = parseInt($('#finger').css('top'));

    var guidetime_2 = setInterval(function() {
        if (y <= 460) {
            clearInterval(guidetime_2)
        } else {
            y = y - 2
            $('#finger').css('top', `${y}px`)
        }
    }, 10)
    var guidetime_3 = setInterval(function() {
        if (x == 870) {
            clearInterval(guidetime_3)
        } else {
            x = x + 2
            $('#finger').css('left', `${x}px`)
        }
    }, 23)

    var z = parseInt($('#guidechip').css('left'));
    var g = parseInt($('#guidechip').css('top'));

    var guidetime_4 = setInterval(function() {
        if (g == 430) {
            clearInterval(guidetime_4)
            $('#betBox').addClass('guideshow')

            $('#guide').css('z-index', '2')
            setTimeout(function() {
                guide_2();
            }, 1000)
        } else {
            g = g - 2
            $('#guidechip').css('top', `${g}px`)
        }
    }, 10)

    var guidetime_5 = setInterval(function() {
        if (z == 850) {
            clearInterval(guidetime_5)
        } else {
            z = z + 2
            $('#guidechip').css('left', `${z}px`)
        }
    }, 24)
};

//手指向右下移動 & SPIN按鈕亮起
function guide_2() {
    var x = parseInt($('#finger').css('left'));
    var y = parseInt($('#finger').css('top'));
    $('#betBox').removeClass('guideshow')
    $('#guidechip').css('z-index', '1')
    var guidetime_6 = setInterval(function() {
        if (y >= 670) {
            clearInterval(guidetime_6)
            $('#btn').addClass('guideshow')
            setTimeout(function() {
                guide_3();
            }, 1000)
        } else {
            y = y + 2
            $('#finger').css('top', `${y}px`)
        }
    }, 10)
    var guidetime_7 = setInterval(function() {
        if (x == 960) {
            clearInterval(guidetime_7)
        } else {
            x = x + 2
            $('#finger').css('left', `${x}px`)
        }
    }, 23)

};

//輪盤區域亮起 & 開始轉動並顯示開獎結果
function guide_3() {
    platemp3.play();
    $('#finger').css('z-index', '-1').css('opacity', '0')
    $('#btn').removeClass('guideshow')
    $('#plate').addClass('guideshow')
    $('#ball_box').css('height', '450px');
    $('#plate img').addClass('rotate');
    $('#ball_box').addClass('rotate2');
    setTimeout(function() {
        $('#ball_box').css('height', '260px');
    }, 3000);
    setTimeout(function() {
        $('#plate img').removeClass('rotate');
        $('#ball_box').css('transform', `rotate(205deg)`).removeClass('rotate2');
        $('#show').css('opacity', '1');
        $('#show').css('transform', 'scale(4)');
        $('#show').addClass('redball');
    }, 4000)
    setTimeout(function() {
        $('#show').css('transform', 'scale(1)');
        $('#show').css('opacity', '0');
        guide_4()
    }, 5000)
};

//展現贏得彩金畫面
function guide_4() {
    $('#youwin tt').text(totalwin)
    $('#showWin').css({
        zIndex: '3',
        opacity: '1'
    })
    var x = 0.1;
    var guidetime_8 = setInterval(function() {
        x = x + 0.1
        if (x >= 1.1) {
            clearInterval(guidetime_8)
            guide_5()
        } else {
            $('#showwinpic').css('transform', `scale(${x})`)
            $('#showWin').css('opacity', `${x}`)
        }
    }, 40)
};


function guide_5() {
    $('#youwin').css('opacity', '1')
    var x = 2;
    var guidetime_9 = setInterval(function() {
        x = x - 0.1
        if (x < 1) {
            clearInterval(guidetime_9)
            guide_6()
        } else {
            $('#youwin').css('transform', `scale(${x})`)
        }
    }, 35)
};


function guide_6() {
    winmp3.play()
    btn = false;
    clearbtn = false;
    mychip = false;
    setTimeout(function() {
        $('#showwinpic').css('transform', 'scale(0.1)');
        $('#youwin').css('transform', 'scale(2)');
        $('#showWin').css({zIndex: '-1',opacity: '0'});
        $('#guide').css({zIndex: '-1',opacity: '0'});
        $('#guidechip').css({zIndex: '-1',opacity: '0'});
        gamemusic()
    }, 3000)
};

//展現提示下注區域 & 開始播放背景音樂
function gamemusic(){ 
    setInterval(function(){ 
        music.play() 
    }, 1000); 
    nobet()
} ;