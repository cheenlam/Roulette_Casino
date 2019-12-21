// ========== 數字下注區塊(1~36)，監聽及回傳參數  ==========
//阻止dragover時默認行為 (nbbox_1 ~ 36 )

for (var i = 1; i < 37; i++) {
    //阻止dragover時默認行為 (nbbox_1 ~ 36 )
    eval(`nbbox_${i}`).addEventListener('dragover', function() {
        event.preventDefault();       
    });
    //監聽drop事件，判斷下注金額並執行函式chips (nbbox_1 ~ 36 )
    eval(`nbbox_${i}`).addEventListener('drop', function() {
        var k = event.dataTransfer.getData('text');
        var idNumber;
        if ($(this).find('span').text() == 100) {
            maxbet()
        };
        if (mychip) {
            $('#clearbtn').addClass('clearbf');
            $('#clearbtn span').addClass('clearsp');
            idNumber = $(this).attr('id').substr(6, 2)
        }

        //籌碼面額5最高可加注到100
        if (k == 'chipskind_1') {
            var nowmoney = $('#myMoney').text()
            if ($(`#nbbox_${idNumber} span`).text() < 100 && nowmoney > 0) {
                $(`#nbbox_${idNumber} span`).text(Number($(`#nbbox_${idNumber} span`).text()) + 5)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
            //籌碼面額10最高可加注到100
        } else if (k == 'chipskind_2') {
            var nowmoney = $('#myMoney').text()
            if ($(`#nbbox_${idNumber} span`).text() < 95 && nowmoney > 5) {
                $(`#nbbox_${idNumber} span`).text(Number($(`#nbbox_${idNumber} span`).text()) + 10)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }

            //籌碼面額50最高可加注到100
        } else if (k == 'chipskind_3') {
            var nowmoney = $('#myMoney').text()
            if ($(`#nbbox_${idNumber} span`).text() < 55 && nowmoney > 45) {
                $(`#nbbox_${idNumber} span`).text(Number($(`#nbbox_${idNumber} span`).text()) + 50)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
        }
    });
}


// ========== 區域12注下注區塊(1~12 , 13~24 , 25~36)，監聽及回傳參數  ==========
//阻止dragover時默認行為

for(var i = 1; i < 4; i++){
    eval(`partbox_${i}`).addEventListener('dragover', function() {
        event.preventDefault();       
    });

    eval(`partbox_${i}`).addEventListener('drop', function() {
        var k = event.dataTransfer.getData('text');
        var idNumber;
        if ($(this).find('span').text() == 100) {
            maxbet()
        };
        if (mychip) {
            $('#clearbtn').addClass('clearbf');
            $('#clearbtn span').addClass('clearsp');
            idNumber = $(this).attr('id').substr(8, 2)
        }

        //籌碼面額5最高可加注到100
        if (k == 'chipskind_1') {
            var nowmoney = $('#myMoney').text()
            if ($(`#partbox_${idNumber} span`).text() < 100 && nowmoney > 0) {
                $(`#partbox_${idNumber} span`).text(Number($(`#partbox_${idNumber} span`).text()) + 5)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
            //籌碼面額10最高可加注到100
        } else if (k == 'chipskind_2') {
            var nowmoney = $('#myMoney').text()
            if ($(`#partbox_${idNumber} span`).text() < 95 && nowmoney > 5) {
                $(`#partbox_${idNumber} span`).text(Number($(`#partbox_${idNumber} span`).text()) + 10)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }

            //籌碼面額50最高可加注到100
        } else if (k == 'chipskind_3') {
            var nowmoney = $('#myMoney').text()
            if ($(`#partbox_${idNumber} span`).text() < 55 && nowmoney > 45) {
                $(`#partbox_${idNumber} span`).text(Number($(`#partbox_${idNumber} span`).text()) + 50)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
        } 

    });
}


// ========== 1賠2橫排下注區塊(每排12個數)，監聽及回傳參數  ==========
//阻止dragover時默認行為
for(var i = 1; i < 4; i++){
    eval(`rowbox_${i}`).addEventListener('dragover', function() {
        event.preventDefault();       
    });

    eval(`rowbox_${i}`).addEventListener('drop', function() {
        var k = event.dataTransfer.getData('text');
        var idNumber;
        if ($(this).find('span').text() == 100) {
            maxbet()
        };
        if (mychip) {
            $('#clearbtn').addClass('clearbf');
            $('#clearbtn span').addClass('clearsp');
            idNumber = $(this).attr('id').substr(7, 2)
        }

        //籌碼面額5最高可加注到100
        if (k == 'chipskind_1') {
            var nowmoney = $('#myMoney').text()
            if ($(`#rowbox_${idNumber} span`).text() < 100 && nowmoney > 0) {
                $(`#rowbox_${idNumber} span`).text(Number($(`#rowbox_${idNumber} span`).text()) + 5)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
            //籌碼面額10最高可加注到100
        } else if (k == 'chipskind_2') {
            var nowmoney = $('#myMoney').text()
            if ($(`#rowbox_${idNumber} span`).text() < 95 && nowmoney > 5) {
                $(`#rowbox_${idNumber} span`).text(Number($(`#rowbox_${idNumber} span`).text()) + 10)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }

            //籌碼面額50最高可加注到100
        } else if (k == 'chipskind_3') {
            var nowmoney = $('#myMoney').text()
            if ($(`#rowbox_${idNumber} span`).text() < 55 && nowmoney > 45) {
                $(`#rowbox_${idNumber} span`).text(Number($(`#rowbox_${idNumber} span`).text()) + 50)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
        } 

    });
}


// ========== 1賠1下注區塊(大小 , 紅黑 , 單雙)，監聽及回傳參數  ==========
//阻止dragover時默認行為


for(var i = 1; i < 7; i++){
    eval(`selectbox_${i}`).addEventListener('dragover', function() {
        event.preventDefault();       
    });

    eval(`selectbox_${i}`).addEventListener('drop', function() {
        var k = event.dataTransfer.getData('text');
        var idNumber;
        if ($(this).find('span').text() == 100) {
            maxbet()
        };
        if (mychip) {
            $('#clearbtn').addClass('clearbf');
            $('#clearbtn span').addClass('clearsp');
            idNumber = $(this).attr('id').substr(10, 2)
        }

        //籌碼面額5最高可加注到100
        if (k == 'chipskind_1') {
            var nowmoney = $('#myMoney').text()
            if ($(`#selectbox_${idNumber} span`).text() < 100 && nowmoney > 0) {
                $(`#selectbox_${idNumber} span`).text(Number($(`#selectbox_${idNumber} span`).text()) + 5)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
            //籌碼面額10最高可加注到100
        } else if (k == 'chipskind_2') {
            var nowmoney = $('#myMoney').text()
            if ($(`#selectbox_${idNumber} span`).text() < 95 && nowmoney > 5) {
                $(`#selectbox_${idNumber} span`).text(Number($(`#selectbox_${idNumber} span`).text()) + 10)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }

            //籌碼面額50最高可加注到100
        } else if (k == 'chipskind_3') {
            var nowmoney = $('#myMoney').text()
            if ($(`#selectbox_${idNumber} span`).text() < 55 && nowmoney > 45) {
                $(`#selectbox_${idNumber} span`).text(Number($(`#selectbox_${idNumber} span`).text()) + 50)

                //所有下注金額加總顯示於BET區域
                //玩家金額及時扣除下注區域的金額
                var x = 0,
                    y = 0,
                    z = 0,
                    k = 0
                $('#numberBox span').each(function() {
                    x += parseInt($(this).text());
                })
                $('#partBox span').each(function() {
                    y += parseInt($(this).text());
                })
                $('#selectBox span').each(function() {
                    z += parseInt($(this).text());
                })
                $('#rowBox span').each(function() {
                    k += parseInt($(this).text());
                })
                var total = x + y + z + k
                $('#bet').text(total)
                $('#myMoney').text(mymoney - total)
                chips($(this).attr('id'))
            }
        } 

    });
}


