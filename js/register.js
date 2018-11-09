$(function() {
    initData();

    // 弹出协议窗体
    $("#linkServiceProtocol").on({
        click: function() {
            $("#divServiceProtocol").popup();
        }
    });

    // 注册用户提交
    $("#registerBtn").on({
        click: function() {
            var cellPhoneNumber = $('#CellPhoneNumber').val();
            if (cellPhoneNumber == null || cellPhoneNumber.length == 0) {
                alert('手机号不能为空!');
                return false;
            }

            // var captchaCode = $('#CaptchaCode').val();
            // if(captchaCode == null || captchaCode.length == 0){
            // 	alert('验证码不能为空!');
            // 	return false;
            // }

            // var smsHidden = $('#smsHidden').val();
            // if(captchaCode != smsHidden){
            // 	alert('验证码填写不正确!');
            // 	return false;
            // }

            var identityNumber = $('#IdentityNumber').val();
            if (identityNumber == null || identityNumber.length == 0) {
                alert('身份证号码不能为空!');
                return false;
            }
            var name = $('#Name').val();
            if (name == null || name.length == 0) {
                alert('姓名不能为空!');
                return false;
            }
            var bankNo = $('#BankNo').val();
            if (bankNo == null || bankNo.length == 0) {
                alert('银行卡号不能为空!');
                return false;
            }
            var salesID = $('#salesID').val();
            if (salesID == null || salesID.length == 0) {
                alert('通道ID不能为空!');
                return false;
            }
            var password = $('#Password').val();
            if (password == null || password.length == 0) {
                alert('密码不能为空!');
                return false;
            }
            if (!$("#cbAgreement").is(':checked')) {
                alert('请阅读并接受《钱借到服务协议》')
                return false;
            }
            var extendNo = $('#extendNo').val();

            // 注册
            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/userReg",
                data: {
                    userPhone: $('#CellPhoneNumber').val(),
                    userCARD: $('#IdentityNumber').val(),
                    userName: $('#Name').val(),
                    userBank: $('#BankNo').val(),
                    userPassword: $('#Password').val(),
                    salesID: $('#salesID').val()
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == '100') {
                        $.ajax({
                            url: "http://39.106.11.92:8080/lgFace/user/login",
                            data: {
                                userPhone: $('#CellPhoneNumber').val(),
                                userPassword: $('#Password').val()
                            },
                            type: "POST",
                            dataType: 'jsonp',
                            success: function(data) {
                                sessionStorage.setItem('userInfo', data.userInfo);
                                sessionStorage.setItem('userPhone', data.userPhone);
                                if (data.code == '100') {

                                    alert('信息填写成功，请您继续充值，否则注册失败！');
                                    setTimeout(function() {
                                        location.href = "recharge.html";
                                    }, 1000)
                                } else {
                                    alert('用户名或密码错误！');
                                }
                            }
                        });


                    } else if (data.code == '103') {
                        alert('手机号码已存在，请直接登录！');
                        setTimeout(function() {
                            location.href = "login.html";
                        }, 1000)
                    } else {
                        alert('注册失败！');
                    }
                }
            });
        }
    });
});

// 初始化数据
function initData() {
    $.ajax({
        url: "http://39.106.11.92:8080/lgFace/comn/getSales",
        data: {},
        type: "POST",
        dataType: 'jsonp',
        success: function(data) {
            var html = '<option value="">--请选择通道--</option>';
            data && data.salesList && data.salesList.forEach(element => {
                html += '<option value="' + element.salesId + '">' + element.salesName + '</option>';
            });
            $("#salesID").html(html);
        }
    });
    $('#CellPhoneNumber').val('');
    $('#IdentityNumber').val('');
    $('#Name').val('');
    $('#Password').val('');
}