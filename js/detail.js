$(function() {
    function getRequest() {
        var url = location.search; //获取url中"?"符后的字串   
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    function getDetail() {
        let userInfo = sessionStorage.getItem('userInfo');
        userInfo = JSON.parse(userInfo);
        if (!userInfo) {
            location.href = 'login.html';
        }
        // 加载待确认列表
        $.ajax({
            url: "http://39.106.11.92:8080/lgFace/proof/getProofDetail",
            data: {
                userId: userInfo.id,
                token: userInfo.token,
                id: getRequest().id
            },
            type: "POST",
            dataType: 'jsonp',
            success: function(res) {
                if (res.code == 99) {
                    location.href = 'login.html';
                }
                $("#cjr").html(res.proof.cjr);
                $("#jkr").html(res.proof.jkr);
                $("#jkrq").html(res.proof.jkrq);
                $("#hkrq").html(res.proof.hkrq);
                $("#jkje").html(res.proof.jkje);
                $("#nhll").html(res.proof.nhll);

                $("#jkrq").html(res.proof.jhrq);

                $("#jkyt").html(res.proof.yt);
                $("#ptfwf").html(res.proof.fwf);
                res.proof;

            }
        });
    };
    getDetail();
    $("#btnQRCode").on({
        click: function() {
            $("#divQRCode").show();
            $("body").addClass("overflow-y")
        }
    });
    $("#btnQRCodeClose").on({
        click: function() {
            $("#divQRCode").hide();
            $("body").removeClass("overflow-y")
        }
    });
    $("#btnShare").on({
        click: function() {
            $("#divShare").show();
            $("body").addClass("overflow-y")
        }
    });
    $("#btnShareClose").on({
        click: function() {
            $("#divShare").hide();
            $("body").removeClass("overflow-y")
        }
    });
    // 已还清,更新状态
    $("#destroyedBtn").on({
        click: function() {
            /*$.appAjax({
                url: "../m/savePayOff.html",
                data: {
                	id: $('#Id').val()
                },
                onSuccess: function(data) {
                	if(data.result == 'success'){
                		$.toast("操作成功!", "text");
                		location.href = "../m/toMyCredent.html";
        			}else{
        				$.toast("操作失败!", "text");
        			}
                }
            });*/


            //弹出密码框
            //页面层
            layer.open({
                type: 1,
                title: '输入交易密码',
                area: ['300px', '240px'], //宽高
                btn: '验证密码', //可以无限个按钮 
                content: '<div class="dialog"><div class="text-xs">请确认您已收到借款，一经撕毁不可修改</div>' +
                    '<div class="row"><input class="form-control" id="Pass" name="Pass" placeholder="请输入你的交易密码" type="password"></div>' +
                    '<div class="text-xs">温馨提示</div>' +
                    '<div style = "font-size: 12px; color:#FF0000">禁止学生使用</div></div>',
                yes: function(index, layero) {
                    var pass = (layero).find('input').val();
                    if (MD5(pass) == $('#Password').val()) {
                        layer.close(index);

                        $.appAjax({
                            url: "../m/savePayOff.html",
                            data: {
                                id: $('#Id').val()
                            },
                            onSuccess: function(data) {
                                if (data.result == 'success') {
                                    $.toast("操作成功!", "text");
                                    location.href = "../m/toMyCredent.html";
                                } else {
                                    $.toast("操作失败!", "text");
                                }
                            }
                        });


                    } else {
                        layer.msg("交易密码输入错误，请重新输入");
                    }
                }
            });


        }
    });

    // 删除凭证
    $("#deleteBtn").on({
        click: function() {
            $.appAjax({
                url: "../m/deleteCredent.html",
                data: {
                    id: $('#Id').val()
                },
                onSuccess: function(data) {
                    if (data.result == 'success') {
                        alert('操作成功!');
                        location.href = "../m/toMyCredent.html";
                    } else {
                        alert('操作失败!');
                    }
                }
            });
        }
    });

    /*var clipboard = new Clipboard('#copyBtn');
    clipboard.on('success', function(e) {
    	alert("复制成功！");
 	});
    clipboard.on('error', function(e) {
 	    alert("复制失败！");
 	});*/
});