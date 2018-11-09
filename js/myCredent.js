// 初始化
$(function() {
    var c = $("#formList");
    var e = $("#datalist");
    var f = $("#UserId").val();
    $('#divTabs input[type="radio"][name="Status"][value="' + statVal + '"]')

    var d = function(g) {
        $("#divTabs .link-dropdown").each(function() {
            var h = $(this);
            if (!h.is(g)) {
                h.removeClass("active");
                if (h.children("i").attr("class").indexOf("fa-sort-asc") >= 0) {
                    h.children("i").removeClass("fa-sort-asc").addClass("fa-sort-desc")
                }
                h.next("div").hide()
            }
        })
    };
    $("#divTabs .link-dropdown").on({
        click: function() {
            var g = $(this);
            g.addClass("active");
            d(g);
            if (g.children("i").attr("class").indexOf("fa-sort-desc") >= 0) {
                g.children("i").removeClass("fa-sort-desc").addClass("fa-sort-asc")
            }
            g.next("div").show();
            $("#Keyword").focus()
        }
    });
    $('#divTabs input[type="radio"]').on({
        change: function() {
            $("#Page").val(1);
            b = true;
            var h = $(this);
            var g = h.parents(".dropdownbox").prev();
            g.children("span").text(h.parent(".weui-cell__ft").prev(".weui-cell__bd").html());
            if (h.attr("name") == "Status") {
                $("#IsOverdue").val(h.data("isoverdue"))
            }
        }
    });
    $("#Keyword").on({
        change: function() {
            var g = $('#divTabs input[type="radio"][name="Status"][value=""]'),
                j = g.parents(".dropdownbox").prev();
            g.attr({
                checked: true
            });
            j.children("span").text(g.parent(".weui-cell__ft").prev(".weui-cell__bd").html());
            $("#IsOverdue").val(g.data("isoverdue"));
            var h = $('#divTabs input[type="radio"][name="Sorted"][value=""]'),
                i = h.parents(".dropdownbox").prev();
            h.attr({
                checked: true
            });
            i.children("span").text(h.parent(".weui-cell__ft").prev(".weui-cell__bd").html());
            $("#Page").val(1);
            b = true
        }
    });
    $(".dropdownbox .dropdownbox-mask").click(function() {
        d()
    });
    c.appAutoSubmit().on({
        submit: function(h) {
            h.preventDefault();
            d();
            $("#divEnd").hide();
            $("#divNone").hide();
            // $("#divLoadMore").show();
            //var g = c.appSerialize();
            var userId = $('#UserId').val();
            var page = $('#Page').val();
            var size = $('#Size').val();
            var status = $("input[name='Status']:checked").val();
            var sorted = $("input[name='Sorted']:checked").val();
            var keyword = $('#Keyword').val();
            let userInfo = sessionStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if (!userInfo) {
                location.href = 'login.html';
            }
            let param = {
                userId: userInfo.id,
                token: userInfo.token
            };
            if (status) {
                param.sfqr = status;
            }
            if (sorted == 1) {
                param.time_w_z = 'y';
            } else if (sorted == 2) {
                param.time_z_w = 'y';
            } else if (sorted == 3) {
                param.money_d_x = 'y';
            } else if (sorted == 4) {
                param.money_x_d = 'y';
            }
            $.ajax({
                url: "http://39.106.11.92:8080/lgFace/proof/myProofQuery",
                data: param,
                type: "POST",
                dataType: 'jsonp',
                success: function(j) {
                    if (j.code == 99) {
                        location.href = 'login.html';
                    }
                    e.empty().append('');
                    if (j.proof && j.proof.length > 0) {
                        renderIOU(8, e, j.proof)
                    }
                    if (j.proof.length == 0) {
                        e.append('<div class="no-data"><img src="./imgs/data-none.png" /><div>暂无凭证</div></div>')
                    }
                    if (e.children().length) {
                        $("#divEnd").show();
                    } else {
                        $("#divNone").show();
                    }
                }
            })
        }
    }).submit();
    var b = false;
    var a = false;
    $(document.body).infinite(100).on("infinite",
        function() {
            if (!b || a) {
                return
            }
            a = true;
            $("#Page").val(parseInt($("#Page").val()) + 1);
            c.submit()
        }
    );
});