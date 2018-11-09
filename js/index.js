$(function() {
    $("#spanBalanceTips").on({
        click: function() {
            alert("金额在有效期内都可使用！");
        }
    });
    var f = $("#divPending");
    var b = $("#divEffecting");
    var g = $("#UserId").val();
    var e = 20;
    let userInfo = sessionStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    if (!userInfo) {
        location.href = 'login.html';
    }
    // if(!userInfo.sfcz || userInfo.sfcz != '2'){
    //     location.href = 'recharge.html';
    // }
    if (userInfo.qx != 'admin') {
        $("#manager").remove();
    }

    $(".name").html(userInfo.userName);
    $("#Balance").html((userInfo.sfcz == 1 ? '0.00' : '100.00') + '元');
    $("#amountValidPeriod").html(userInfo.newTime);
    $("#TotalReceivable").html(userInfo.ds);
    $("#TotalNotRepayable").html(userInfo.dh);

    var d = function(status) {
        // 加载待确认列表
        $.ajax({
            url: "http://39.106.11.92:8080/lgFace/proof/getProofByUserId",
            data: {
                userId: userInfo.id,
                token: userInfo.token,
                sfqr: status
            },
            type: "POST",
            dataType: 'jsonp',
            success: function(j) {
                b.empty().append('');
                if (j.code == 99) {
                    location.href = 'login.html';
                }
                if (j.proofList && j.proofList.length) {
                    renderIOU(userInfo.id, b, j.proofList)
                }
                if (b.children().length > 0) {
                    b.append('<a href="myCredent.html?status=' + status + '" class="view-more">查看更多</a>')
                } else {
                    b.append('<div class="no-data"><img src="./imgs/data-none.png" /><div>暂无凭证</div></div>')
                }
            }
        });
    };
    d(2);
    $("#linkReloadData").on({
        click: function() {
            d(true)
        }
    });
    $('#pending').on({
        click: function() {
            $('#pending').attr("class", "weui-navbar__item weui-bar__item--on");
            $('#effecting').attr("class", "weui-navbar__item");
            d(2);
        }
    });
    $('#effecting').on({
        click: function() {
            $('#pending').attr("class", "weui-navbar__item");
            $('#effecting').attr("class", "weui-navbar__item weui-bar__item--on");
            d(1);
        }
    });
    $('#dapingzheng').on({
        click: function() {
            // if (userInfo && userInfo.sfcz == '2') {
            location.href = 'playCredent.html';
            // } else {
            //     location.href = 'recharge.html'
            // }
        }
    });
    $('#wodepingzheng').on({
        click: function() {
            // if (userInfo && userInfo.sfcz == '2') {
            location.href = 'myCredent.html';
            // } else {
            //     location.href = 'recharge.html'
            // }
        }
    });
});

$(function() {
    pushHistory();
    window.addEventListener("popstate", function(e) {
        //alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
        window.location.reload();
    }, false);

    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }

});