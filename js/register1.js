$(function() {
    // $.appGetLocation({
    //     onSuccess: function(position) {
    //         console.log(position);
    //         if (isNumber(position.latitude) && isNumber(position.longitude)) {
    //             $("#Latitude").val(position.latitude);
    //             $("#Longitude").val(position.longitude)
    //         }
    //     }
    // });
    // 初始化数据
    function initData() {
        $.ajax({
            url: "http://39.106.11.92:8080/lgFace/comn/getSales",
            data: {},
            type: "POST",
            dataType: 'jsonp',
            success: function(data) {
                var html = '<option value="">--请选择业务员--</option>';
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
        $("#background,#progressBar").hide();
    }
    initData();

    $("#ProtocolText").css("height", ($(window).height() - 61) + "px");
    var init = function() {
        $(".weui-cells").each(function() {
            if ($(this).children(".weui-cell").length == 0) {
                if ($(this).data("id")) { $("#" + $(this).data("id")).remove() }
                $(this).remove()
            }
        });
        // $("form").each(function(i) {
        //     debugger
        //     if ($(this).children(".weui-cells").length == 0) {
        //         $("#step" + (i + 1)).remove();
        //         $(this).remove();
        //         $(".m-navbar li").css("width", (100 / $(".m-navbar li").length) + "%")
        //     }
        // });
        var list = JSON.parse($("#hidFieldData").val());
        for (var name in list) {
            var item = list[name];
            var $input = $("#" + name);
            $input.attr("placeholder", item.Description);
            if (item.IsRequired || item.ValueLimit) { $input.attr("data-val", "true") }
            if (item.IsRequired) { $input.attr("data-val-required", item.Description) }
            if (!item.ValueLimit) { continue }
            var valueLimit = JSON.parse(item.ValueLimit.replace(/\\/g, "\\\\"));
            var regex = valueLimit.value;
            if (valueLimit.type == "Enum") {
                var enumObject = eval(valueLimit.value);
                var enumNameList = [];
                for (var enumItem in enumObject.name) { enumNameList.push(enumItem) }
                regex = "^(" + enumNameList.join("|") + "){1}$"
            }
            $input.attr({ "data-val-regex-pattern": regex, "data-val-regex": item.Name + "格式错误" })
        }
        $("form").appBindValidator()
    }();
    $("#Area").appCityPicker({
        title: "请选择所在地区",
        onChange: function(data, list) {
            // $("#ProvinceId").val(list[0]).valid();
            // $("#CityId").val(list[1]).valid();
            // $("#DistrictId").val(list[2]).valid()
            $("#ProvinceId").val(data.displayValue[0]).valid();
            $("#CityId").val(data.displayValue[1]).valid();
            $("#DistrictId").val(data.displayValue[2]).valid()
        }
    });
    $(".m-navbar li").click(function() { if ($(this).hasClass("status-curr") && $("form.form-action").length > 0) { updateFrmAction($("form").eq($(this).prevAll("li").length)) } });
    var updateFrmAction = function($next) {

        $("form").removeClass("form-action");
        $next.addClass("form-action");
        $(".m-navbar ul li").removeClass("status-curr");
        $(".m-navbar ul li:lt(" + ($next.prevAll("form").length + 1) + ")").addClass("status-curr");
        $("#btnNext").text(($next.prevAll("form").length + 1) == 3 ? '提交认证' : "下一步");
        $("body,html").animate({ scrollTop: 0 }, 100)
    };
    $("#btnNext").click(function() {
        if (!$("form.form-action").valid()) { return false }

        var formid = $("form.form-action").attr("id");
        if (formid == 'frm1') {
            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/userReg",
                data: {
                    userCard: $('#IdentityCode').val(), //身份证
                    userName: $('#Name').val(), //用户姓名
                    userPhone: $('#CellPhoneNumber').val(), //用户手机
                    weChatId: $('#WeiXinNo').val(), //微信号
                    address: $('#ProvinceId').val() + $('#CityId').val() + $('#DistrictId').val(), //地址
                    xxaddress: $('#Address').val(), //详细地址
                    password: $('#password').val(), //密码
                    salesId: $('#salesID').val(), //业务员ID
                    sfcz: 0, //是否充值
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == '100') {
                        sessionStorage.setItem('user_id', data.userPhone);
                        var $next = $("form.form-action").next();
                        updateFrmAction($next)
                    } else if (data.code == '103') {
                        $.toast(data.msg);
                    } else {
                        $.toast('注册失败！');
                    }
                }
            });
        } else if (formid == 'frm2') {
            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/userRegCompany",
                data: {
                    company: $('#CompanyName').val(), //公司名称
                    companyAddr: $('#CompanyAddress').val(), //公司地址
                    companyPhone: $('#CompanyPhoneNumber').val(), //公司手机
                    incomeMoney: $('#MonthlyIncome').val(), // 公司收入
                    user_id: sessionStorage.getItem('user_id')
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == '100') {
                        var $next = $("form.form-action").next();
                        updateFrmAction($next)
                    } else if (data.code == '103') {
                        $.toast(data.msg);
                    } else {
                        $.toast('注册失败！');
                    }
                }
            });
        } else {


            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/user/userRegServices",
                data: {
                    password: $('#OperatorPassword').val(), //运营商密码
                    is_ress: 1, //授权通讯录
                    user_id: sessionStorage.getItem('user_id')
                },
                type: "POST",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == '100') {
                        $.toast("认证成功！", function() {
                            $("#background,#progressBar").show();
                            setTimeout(() => {
                                location.href = 'showMoney.html';
                            }, 30000)
                        })
                    } else if (data.code == '103') {
                        alert(data.msg);
                    } else {
                        $.toast('认证失败！', "cancel")
                    }
                }
            });
        }
    });
    $('input[type="file"]').appCompressionUploadFile({
        url: "/file/uploadcertificationimage",
        onBeforeSubmit: function(file, $this) {
            var $progress = $this.parents(".weui-uploader__bd").next().children("div");
            $progress.css("width", "100%");
            $progress.next("span").text("上传中(100%)");
            $progress.parent().show()
        },
        onSuccess: function(response, $this) {
            $this.parent().children('input[type="hidden"]').val(response.data).valid();
            $this.parent().children("img").attr("src", response.data + "-ymtb")
        },
        onError: function(response, $this) { $.toptip("您的网络开了小差，请刷新重试", 5000, "error") },
        onComplete: function(response, completeString, $this) { $this.parents(".weui-uploader__bd").next().hide() },
    });
    $("#divAddressBook").click(function() {
        if ($(this).hasClass("disabled")) { return false }
        $("#Protocol").popup()
    });
    $("#btnAddressBook").click(function() {
        var data = window.contacts.getContacts();
        setContacts(data.base64Encrypt())
    })
});
var setContacts = function(b) {
    var a = JSON.parse(b.base64Decrypt());
    if (a.result) {
        $("#spanAddressBook").text("已导入");
        $("#AddressBook").val(JSON.stringify(a.contacts));
        $("#divAddressBook").addClass("disabled");
        $("#divAddressBook").find(".weui-cell").removeClass("weui-cell_access")
    }
    $.closePopup()
};