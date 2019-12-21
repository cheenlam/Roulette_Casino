//========== 控制輪盤 與球 轉動 ==========
//========== 顯示中獎號碼 ==========
//========== 控制button 及籌碼狀態 ==========

// 按下spin鍵開始轉盤啟動
$('#btn').click(function() {
    //當bet下注籌碼不為0時，才可開始轉盤
    if ($('#bet').text() == 0) {
        btn = false;
        clearbtn = false;
        mychip = false;
        nobet()
    } else {
        // 找出數字下注區有幾個0(未下注)以利判斷賠率
        var iszero = 0
        $('#numberBox span').each(function() {
            if ($(this).text() == 0) {
                iszero = iszero + 1
            }
        })

        //根據下注情況找出數字區塊賠率
        var odds;
        if (iszero == 36) {
            odds = 0
        } else {
            odds = parseInt(36 / (36 - iszero))
        }

        if (btn) {
            //修改兩個button樣式
            $('#clearbtn').removeClass('clearbf');
            $('#clearbtn span').removeClass('clearsp');
            $('#btn').addClass('btnbf');
            $('#btn span').addClass('btnsp');

            //轉盤開始後button 及拖拉籌碼皆失效，函式結尾再設回true
            platemp3.play();
            btn = false;
            clearbtn = false;
            mychip = false;
            $('#ball_box').css('height', '450px');
            var x = (Math.floor(Math.random() * 37) + 1) * 9.7297297293;
            $('#plate img').addClass('rotate');
            $('#ball_box').addClass('rotate2');

            //球滾到內圈 & 隨機產生球停靠的角度
            setTimeout(function() {
                $('#ball_box').css('height', '260px');
            }, 3000);
            setTimeout(function() {
                $('#ball_box').css('transform', `rotate(${x}deg)`).removeClass('rotate2');
                $('#plate img').removeClass('rotate');


                // 根據角度顯示要回傳的中獎號碼
                var win;
                if (x > 0 && x < 10) {
                    $('#show').text('32')
                    win = $('#show').text()
                } else if (x > 10 && x < 20) {
                    $('#show').text('15')
                    win = $('#show').text()
                } else if (x > 20 && x < 30) {
                    $('#show').text('19')
                    win = $('#show').text()
                } else if (x > 30 && x < 40) {
                    $('#show').text('4')
                    win = $('#show').text()
                } else if (x > 40 && x < 50) {
                    $('#show').text('21')
                    win = $('#show').text()
                } else if (x > 50 && x < 60) {
                    $('#show').text('2')
                    win = $('#show').text()
                } else if (x > 60 && x < 70) {
                    $('#show').text('25')
                    win = $('#show').text()
                } else if (x > 70 && x < 80) {
                    $('#show').text('17')
                    win = $('#show').text()
                } else if (x > 80 && x < 90) {
                    $('#show').text('34')
                    win = $('#show').text()
                } else if (x > 90 && x < 100) {
                    $('#show').text('6')
                    win = $('#show').text()
                } else if (x > 100 && x < 110) {
                    $('#show').text('27')
                    win = $('#show').text()
                } else if (x > 110 && x < 120) {
                    $('#show').text('13')
                    win = $('#show').text()
                } else if (x > 120 && x < 130) {
                    $('#show').text('36')
                    win = $('#show').text()
                } else if (x > 130 && x < 140) {
                    $('#show').text('11')
                    win = $('#show').text()
                } else if (x > 140 && x < 150) {
                    $('#show').text('30')
                    win = $('#show').text()
                } else if (x > 150 && x < 160) {
                    $('#show').text('8')
                    win = $('#show').text()
                } else if (x > 160 && x < 170) {
                    $('#show').text('23')
                    win = $('#show').text()
                } else if (x > 170 && x < 180) {
                    $('#show').text('10')
                    win = $('#show').text()
                } else if (x > 180 && x < 190) {
                    $('#show').text('5')
                    win = $('#show').text()
                } else if (x > 190 && x < 200) {
                    $('#show').text('24')
                    win = $('#show').text()
                } else if (x > 200 && x < 210) {
                    $('#show').text('16')
                    win = $('#show').text()
                } else if (x > 210 && x < 220) {
                    $('#show').text('33')
                    win = $('#show').text()
                } else if (x > 220 && x < 230) {
                    $('#show').text('1')
                    win = $('#show').text()
                } else if (x > 230 && x < 240) {
                    $('#show').text('20')
                    win = $('#show').text()
                } else if (x > 240 && x < 250) {
                    $('#show').text('14')
                    win = $('#show').text()
                } else if (x > 250 && x < 260) {
                    $('#show').text('31')
                    win = $('#show').text()
                } else if (x > 260 && x < 270) {
                    $('#show').text('9')
                    win = $('#show').text()
                } else if (x > 270 && x < 280) {
                    $('#show').text('22')
                    win = $('#show').text()
                } else if (x > 280 && x < 290) {
                    $('#show').text('18')
                    win = $('#show').text()
                } else if (x > 290 && x < 300) {
                    $('#show').text('29')
                    win = $('#show').text()
                } else if (x > 300 && x < 310) {
                    $('#show').text('7')
                    win = $('#show').text()
                } else if (x > 310 && x < 320) {
                    $('#show').text('28')
                    win = $('#show').text()
                } else if (x > 320 && x < 330) {
                    $('#show').text('12')
                    win = $('#show').text()
                } else if (x > 330 && x < 340) {
                    $('#show').text('35')
                    win = $('#show').text()
                } else if (x > 340 && x < 350) {
                    $('#show').text('3')
                    win = $('#show').text()
                } else if (x > 350 && x < 350.5) {
                    $('#show').text('26')
                    win = $('#show').text()
                } else if (x > 350.5 && x < 360) {
                    $('#show').text('0')
                    win = $('#show').text()
                };
                // console.log('本次開出號碼為' + win)

                var winnb = parseInt(win);
                //找出數字中獎號碼套用賠率計算中獎金額
                var winnumber = $(`#nbbox_${winnb} span`).text() * odds;
                // console.log('數字下注區中獎金額為' + winnumber);

                //找出區域12注中獎號碼套用賠率計算中獎金額(1:3)
                var partchild;

                if (winnb >= 1 && winnb <= 12) {
                    partchild = 1
                } else if (winnb >= 13 && winnb <= 24) {
                    partchild = 2
                } else if (winnb >= 25 && winnb <= 36) {
                    partchild = 3
                };
                var winpart = $(`#partbox_${partchild} span`).text() * 3;
                // console.log('區域12下注區中獎金額為' + winpart);


                //找出壓大小獎號碼套用賠率計算中獎金額(1:2)
                var selectchild;

                if (winnb >= 1 && winnb <= 18) {
                    selectchild = 1
                } else if (winnb >= 19 && winnb <= 36) {
                    selectchild = 6
                };
                var selectsize = $(`#selectbox_${selectchild} span`).text() * 2;
                // console.log('大小下注區中獎金額為' + selectsize);

                //找出壓單雙獎號碼套用賠率計算中獎金額(1:2)
                var sd = winnb % 2
                if (sd == 0 && winnb != 0) {
                    selectchild = 2
                } else if (sd == 1 && winnb != 0) {
                    selectchild = 5
                };
                var sdselect = $(`#selectbox_${selectchild} span`).text() * 2;
                // console.log('單雙下注區中獎金額為' + sdselect);

                //找出壓紅白獎號碼套用賠率計算中獎金額(1:2)
                //並將轉盤開獎球色作變化
                if (winnb == 1 || winnb == 3 || winnb == 5 || winnb == 7 || winnb == 9 || winnb == 12 || winnb == 14 || winnb == 16 || winnb == 18 || winnb == 19 || winnb == 21 || winnb == 23 || winnb == 25 || winnb == 27 || winnb == 30 || winnb == 32 || winnb == 34 || winnb == 36) {
                    selectchild = 3
                    $('#show').removeClass('blackball').removeClass('yellowball').addClass('redball');
                } else if (winnb == 2 || winnb == 4 || winnb == 6 || winnb == 8 || winnb == 10 || winnb == 11 || winnb == 13 || winnb == 15 || winnb == 17 || winnb == 20 || winnb == 22 || winnb == 24 || winnb == 26 || winnb == 28 || winnb == 29 || winnb == 31 || winnb == 33 || winnb == 35) {
                    selectchild = 4
                    $('#show').removeClass('redball').removeClass('yellowball').addClass('blackball');
                } else {
                    $('#show').removeClass('redball').removeClass('blackball').addClass('yellowball')
                }


                var selectcolor = $(`#selectbox_${selectchild} span`).text() * 2;
                // console.log('紅白下注區中獎金額為' + selectcolor);

                //找出橫排下注中獎號碼套用賠率計算中獎金額(1:3)
                var rowchild;
                if (winnb == 1 || winnb == 4 || winnb == 7 || winnb == 10 || winnb == 13 || winnb == 16 || winnb == 19 || winnb == 22 || winnb == 25 || winnb == 28 || winnb == 31 || winnb == 34) { rowchild = 1 } else if (winnb == 2 || winnb == 5 || winnb == 8 || winnb == 11 || winnb == 14 || winnb == 17 || winnb == 20 || winnb == 23 || winnb == 26 || winnb == 29 || winnb == 32 || winnb == 35) { rowchild = 2 } else if (winnb == 3 || winnb == 6 || winnb == 9 || winnb == 12 || winnb == 15 || winnb == 18 || winnb == 21 || winnb == 24 || winnb == 27 || winnb == 30 || winnb == 33 || winnb == 36) { rowchild = 3 };
                var winrow = $(`#rowbox_${rowchild} span`).text() * 3;
                // console.log('橫排下注區中獎金額為' + winrow);


                // 總共贏得的金額回投計算到money顯示
                var nowmoney = parseInt($('#myMoney').text());
                var mywin = winnumber + winpart + selectsize + sdselect + selectcolor + winrow;
                totalwin = winnumber + winpart + selectsize + sdselect + selectcolor + winrow;
                mymoney = nowmoney + mywin
                // console.log('本次贏得金額為' + mywin);


                //中獎號碼提示圖顯示
                $('#show').css('opacity', '1');
                $('#show').css('transform', 'scale(4)');
            }, 4000);

            setTimeout(function() {
                $('#show').css('transform', 'scale(1)');
                $('#show').css('opacity', '0');
            }, 5000)

            //中獎號碼及對應區域閃爍
            setTimeout(function() {
                var count = 0;
                var winnb = parseInt($('#show').text())
                var winpart;
                var winsele_1;
                var winsele_2;
                var winsele_3;
                var winrow;
                var sd = winnb % 2

                if (winnb >= 1 && winnb <= 12) {
                    winpart = 1
                } else if (winnb >= 13 && winnb <= 24) {
                    winpart = 2
                } else if (winnb >= 25 && winnb <= 36) {
                    winpart = 3
                };
                if (winnb >= 1 && winnb <= 18) {
                    winsele_1 = 1
                } else if (winnb >= 19 && winnb <= 36) {
                    winsele_1 = 6
                };
                if (sd == 0 && winnb != 0) {
                    winsele_2 = 2
                } else if (sd == 1 && winnb != 0) {
                    winsele_2 = 5
                };

                if (winnb == 1 || winnb == 3 || winnb == 5 || winnb == 7 || winnb == 9 || winnb == 12 || winnb == 14 || winnb == 16 || winnb == 18 || winnb == 19 || winnb == 21 || winnb == 23 || winnb == 25 || winnb == 27 || winnb == 30 || winnb == 32 || winnb == 34 || winnb == 36) { winsele_3 = 3 } else if (winnb == 2 || winnb == 4 || winnb == 6 || winnb == 8 || winnb == 10 || winnb == 11 || winnb == 13 || winnb == 15 || winnb == 17 || winnb == 20 || winnb == 22 || winnb == 24 || winnb == 26 || winnb == 28 || winnb == 29 || winnb == 31 || winnb == 33 || winnb == 35) { winsele_3 = 4 };

                if (winnb == 1 || winnb == 4 || winnb == 7 || winnb == 10 || winnb == 13 || winnb == 16 || winnb == 19 || winnb == 22 || winnb == 25 || winnb == 28 || winnb == 31 || winnb == 34) { winrow = 1 } else if (winnb == 2 || winnb == 5 || winnb == 8 || winnb == 11 || winnb == 14 || winnb == 17 || winnb == 20 || winnb == 23 || winnb == 26 || winnb == 29 || winnb == 32 || winnb == 35) { winrow = 2 } else if (winnb == 3 || winnb == 6 || winnb == 9 || winnb == 12 || winnb == 15 || winnb == 18 || winnb == 21 || winnb == 24 || winnb == 27 || winnb == 30 || winnb == 33 || winnb == 36) { winrow = 3 };


                //閃爍並根據得獎金額若為0直接進到最後結算動作
                //若有贏得獎金先進入得獎畫面
                if (winnb == 0) {
                    plateover()
                } else {
                    var wintimer = setInterval(function() {
                        if (count == 4) {
                            clearInterval(wintimer)
                            if (totalwin == 0) {
                                plateover()
                            } else {
                                platewin()
                            }

                        } else {
                            count = count + 1
                            $(`#nbbox_${winnb}`).toggleClass('region');
                            $(`#partbox_${winpart}`).toggleClass('region');
                            $(`#selectbox_${winsele_1}`).toggleClass('region');
                            $(`#selectbox_${winsele_2}`).toggleClass('region');
                            $(`#selectbox_${winsele_3}`).toggleClass('region');
                            $(`#rowbox_${winrow}`).toggleClass('region');
                        }
                    }, 500)
                }
            }, 5500)
        }
    }

})