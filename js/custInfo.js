$(function() {
    // 修改交易密码
    // $("#linkPassword").on({
    //     click: function() {
    //     	location.href = '../m/toUpdatePwd.html?ranparam='+Math.random();
    //     }
    // });
    let userInfo = sessionStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    if (!userInfo) {
        location.href = 'login.html';
    }
    $("#Balance").html(userInfo.yuMoney + "元");
    $("#amountValidPeriod").html(userInfo.newTime);
    $(".name").html(userInfo.userName);
    $("#userPhone").html(userInfo.userPhone);
    $("#userCard").html(userInfo.userCard);
    $("#userName").html(userInfo.userName);
    $("#alipay").val(userInfo.alipayID);
    $("#Wechat").val(userInfo.weChatID);
    $("#Mail").val(userInfo.mail);
    $("#QQ").val(userInfo.qq);

    if (userInfo.qx != 'admin') {
        $("#manager").remove();
    }
    $("#logout").on({
            click: function() {
                sessionStorage.clear();
                location.href = 'login.html';
            }
        })
        // 修改支付宝、邮箱、微信、qq
    $("#alipay,#Mail, #Wechat, #QQ").on({
        change: function() {
            let userInfo = sessionStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/updateUser",
                data: {
                    AlipayID: $('#alipay').val(),
                    WeChatID: $('#Wechat').val(),
                    mail: $('#Mail').val(),
                    qq: $('#QQ').val(),
                    id: userInfo.id,
                    token: userInfo.token
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == 99) {
                        location.href = 'login.html';
                    }
                    if (data.code == '100') {
                        userInfo = Object.assign(userInfo, data.userInfo);
                        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                        location.reload();
                    } else {
                        alert('操作失败！');
                    }
                }
            });
        }
    });
});