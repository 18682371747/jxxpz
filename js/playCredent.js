$(function() {
    let userInfo = sessionStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    if (!userInfo) {
        location.href = 'login.html';
    }

    $("#jiekuanren").html(userInfo.userName + "<br>(" + userInfo.userCard + ")");
    $.ajax({
            url: "http://39.106.11.92:8080/lgFace/comn/getRate",
            data: {},
            type: "POST",
            dataType: 'jsonp',
            success: function(j) {
                if (j.code == 99) {
                    location.href = 'login.html';
                }
                if (j.rateList && j.rateList.length > 0) {
                    $("#AnnualInterestRate").html('');
                    $("#AnnualInterestRate").append('<option value="">年化利率</option>')
                    j.rateList.forEach(elt => {
                        $("#AnnualInterestRate").append('<option value="' + elt.dm + '">' + elt.dmnr + '</option>')
                    });
                }

            }
        })
        // 完成个人信息
        // if (!userInfo.email) {
        //     confirm("请先到个人中心添加邮箱地址，完善个人信息",
        //         function (e) {
        //             location.href = e ? "custInfo.html" : "index.html";
        //         })
        // }

    // 借款人出借人名字验证
    var i = $("#DebtorName").val();
    $("#CreditorName").on({
        change: function() {
            if ($(this).val() === i) {
                alert("出借人借款人姓名相同，请确认！");
            }
        }
    });

    // 默认借款日期为今天
    $("#BorrowingDate").val(today.toFormat("yyyy-MM-dd"));

    // 验证借款时间
    var b = function() {
        var j = $("#BorrowingDate").val(),
            e = $("#RepaymentDate").val();
        var k = (parseDatetime(e) - parseDatetime(j)) / daysTime;
        $("#spanDays").html(k && !isNaN(k) ? ("共" + k + "天") : "").data("days", k)
    };
    var d = function() {
        var k = parseFloat($("#Amount").val()),
            l = parseFloat($("#AnnualInterestRate").val()),
            o = parseFloat($("#spanDays").data("days"));
        if (isNaN(k) || isNaN(l) || isNaN(o)) {
            $("#TotalAmount").html("");
            $("#TotalAmount").html("");
            $("#TotalAmountVal").val("");
        } else {
            var n = k && l && o ? k * l / 100 * o / 365 : 0;
            var m = k + n;
            var e = n.toFixed(2);
            var j = m.toFixed(2);
            $("#TotalAmount").html("总共还款：" + j + "元");
            $("#SpanInterest").html("其中利息：" + e + "元")
            $("#TotalAmountVal").val(j);
        }
    };

    $("#BorrowingDate,#RepaymentDate").on({
        change: function() {
            b();
            d();
        }
    }).appCalendar({
        onClose: function(e) {
            e.valid()
        }
    });

    $("#Amount").on({
        change: function() {
            var e = $(this);
            if (e.valid()) {
                $("#TotalAmount").html("");
                $("#TotalAmount").html("");
            } else {
                $("#TotalAmount").html("");
                $("#TotalAmount").html("");
            }
            d();
        }
    });
    $("#AnnualInterestRate").on({
        change: function() {
            d();
        }
    });

    // 打平证
    $("#btnSubmit").on({
        click: function() {
            let userInfo = sessionStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if (userInfo && userInfo.sfcz != '2') {
                $.toast("请充值！", 1000, function() {
                    location.href = 'recharge.html'
                })
                return;
            }
            if (!$("#cbAgreement").is(":checked")) {
                alert("请先阅读并同意《借款协议》");
            } else {
                if (parseDatetime($('#BorrowingDate').val()) - parseDatetime($('#RepaymentDate').val()) >= 0) {
                    $.toast("还款日期必须大于借款日期", "text");
                    return false
                }
                var creditorName = $('#CreditorName').val();
                if (creditorName == null || creditorName.length == 0) {
                    alert("出借人姓名不能为空！");
                    return false;
                }
                var borrowingDate = $('#BorrowingDate').val();
                if (borrowingDate == null || borrowingDate.length == 0) {
                    alert("请选择借款日期！");
                    return false;
                }
                var repaymentDate = $('#RepaymentDate').val();
                if (repaymentDate == null || repaymentDate.length == 0) {
                    alert("请选择还款日期！");
                    return false;
                }
                var amount = $('#Amount').val();
                if (amount == null || amount.length == 0) {
                    alert("请输入借款金额！");
                    return false;
                }
                var rate = $('#AnnualInterestRate').val();
                if (rate == null || rate.length == 0) {
                    alert("请选择年化利率！");
                    return false;
                }
                var loanUse = $('#LoanUse').val();
                if (loanUse == null || loanUse.length == 0) {
                    alert("请选择用途！");
                    return false;
                }



                layer.open({
                    type: 1,
                    title: '输入交易密码',
                    area: ['300px', '240px'], //宽高
                    btn: '验证密码', //可以无限个按钮 
                    content: '<div class="dialog"><div class="text-xs">请确认你的凭证信息，一经创建不可修改。线上补凭证，可能存在逾期风险。</div>' +
                        '<div class="row"><input class="form-control" id="Pass" name="Pass" placeholder="请输入你的交易密码" type="password"></div>' +
                        '<div class="text-xs">温馨提示</div>' +
                        '<div style = "font-size: 12px; color:#FF0000">禁止学生使用</div></div>',
                    yes: function(index, layero) {
                        let userInfo = sessionStorage.getItem('userInfo');
                        userInfo = JSON.parse(userInfo);
                        if (!userInfo) {
                            location.href = 'login.html';
                        }
                        if (userInfo.userPassword == $('#Pass').val()) {
                            layer.close(index);

                            $.ajax({
                                url: "http://39.106.11.92:8080/lgFace/proof/printProof",
                                data: {
                                    jkr: userInfo.id,
                                    jkrsfz: userInfo.userCard,
                                    cjr: creditorName,
                                    jkrq: borrowingDate,
                                    hkrq: repaymentDate,
                                    jkje: amount,
                                    nhll: rate,
                                    yt: loanUse,
                                    bz: $('#Remark').val(),
                                    fwf: $('#ServiceCharge').val(),
                                    userId: userInfo.id,
                                    token: userInfo.token
                                },
                                type: "POST",
                                dataType: 'jsonp',
                                success: function(data) {
                                    if (data.code == 99) {
                                        location.href = 'login.html';
                                    }
                                    if (data.code == '100') {
                                        $.toast("操作成功", "text");
                                        location.href = "index.html";
                                    } else {
                                        alert('操作失败！');
                                    }
                                }
                            });


                        } else {
                            layer.msg("交易密码输入错误，请重新输入");
                        }
                    }
                });

            }
        }
    });


});