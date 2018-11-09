$(function() {
    var a = parseInt($("#hIndex").val());
    if (isNaN(a)) {
        a = 0
    }
    $("#divTabs > div.weui-flex__item").on({
        click: function() {
            var e = $(this),
                d = e.index();
            $("#divTabs > div.weui-flex__item").removeClass("active");
            e.addClass("active");
            $("#divTabs .border").animate({
                left: (d * 50) + "%"
            }, 100);
            $("#divDataList > div").hide();
            $("#divDataList > div").eq(d).show()
        }
    }).eq(a).click();

    var c = function(d) {
        d.find(".card-container" + (d.find('[type="checkbox"]').is(":checked") ? "" : '[data-isalloverdue="FALSE"]') + ":hidden:lt(" + b + ")").show()
    };
    var b = 20;
    $(".datalist > div").each(function() {
        var e = $(this);
        c(e);
        if (e.find(".card-container").length > b) {
            var d = $('<a href="javascript: void(0);" class="loadmore">加载更多</a>').on({
                click: function() {
                    c(e);
                    if (e.find(".card-container" + (e.find("#cbShowOverdue").is(":checked") ? "" : '[data-isalloverdue="FALSE"]') + ":hidden").length === 0) {
                        d.hide();
                        e.find(".data-end").show()
                    }
                }
            });
            e.append(d)
        } else {
            e.find(".data-end").show()
        }
    });
    $("#Receivable_cbShowOverdue,#Repayable_cbShowOverdue").on({
        change: function() {
            var d = $(this),
                f = d.attr("id"),
                e = $("#div" + f.substr(0, f.indexOf("_")));
            e.find(".card-container").hide();
            c(e);
            if (e.find(".loadmore").length) {
                e.find(".loadmore").show();
                e.find(".data-end").hide()
            }
        }
    })
    let divReceivable = $("#divReceivable");
    let divRepayable = $("#divRepayable");
    let userInfo = sessionStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    if (!userInfo) {
        location.href = 'login.html';
    }

    $(".name").html(userInfo.userName);
    $("#Balance").html(userInfo.yuMoney + '元');
    $("#amountValidPeriod").html(userInfo.newTime);
    $("#TotalReceivable").html(userInfo.ds);
    $("#TotalNotRepayable").html(userInfo.dh);

    var d = function(status) {
        // 加载待确认列表
        $.ajax({
            url: "http://39.106.11.92:8080/lgFace/proof/getProofUserDSDH",
            data: {
                userId: userInfo.id,
                token: userInfo.token,
                sfqr: status
            },
            type: "POST",
            dataType: 'jsonp',
            success: function(j) {
                if (j.code == 99) {
                    location.href = 'login.html';
                }
                let divRes = status == 2 ? divReceivable : divRepayable;
                divRes.empty().append('');
                if (j.proofList && j.proofList.length) {
                    renderIOU(userInfo.id, divRes, j.proofList)
                }
                if (divRes.children().length > 0) {
                    divRes.append('<a href="myCredent.html?status=' + status + '" class="view-more">查看更多</a>')
                } else {
                    divRes.append('<div class="no-data"><img src="./imgs/data-none.png" /><div>暂无凭证</div></div>')
                }
            }
        });
    };
    d(1);
    d(2);
});