$(function() {
    initData();

    // 跳转到注册界面
    $("#linkRegister").on({
        click: function() {
            location.href = "../register.html";
        }
    });

    // 忘记密码
    $("#linkForgPwd").on({
        click: function() {
            location.href = "../forgPwd.html";
        }
    });

    // 用户登录
    $("#loginBtn").on({
        click: function() {
            var cellPhoneNumber = $('#CellPhoneNumber').val();
            if (cellPhoneNumber == null || cellPhoneNumber.length == 0) {
                alert('手机号不能为空!');
                return false;
            }
            var password = $('#Password').val();
            if (password == null || password.length == 0) {
                alert('交易密码不能为空!');
                return false;
            }

            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/login",
                data: {
                    userPhone: $('#CellPhoneNumber').val(),
                    password: $('#Password').val()
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    sessionStorage.setItem('userInfo', JSON.stringify(data.userInfo));
                    if (data.code == '100') {

                        // if (data.userInfo.sfcz == '2') {
                        location.href = "index.html";
                        // } else {
                        //     location.href = 'recharge.html';
                        // }
                        // } else if (data.code == '103') {
                        //     location.href = 'recharge.html';
                    } else {
                        alert('用户名或密码错误！');
                    }
                }
            });
        }
    });

});

// 初始化数据
function initData() {
    $('#CellPhoneNumber').val('');
    $('#Password').val('');
}