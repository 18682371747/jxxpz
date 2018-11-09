var wechatJSAPIList;
ajaxBeforeSend = function() {
    viewUtility.loading()
};
ajaxComplete = function() {
    viewUtility.closeLoading()
};
var handleAjaxResult = function(a, c, b) {
    setTimeout(function() {
        if (a.result) {
            viewUtility.success(a.message, 1500, c)
        } else {
            alert(a.message, b)
        }
    },
    250)
};
alert = function(b, c) {
    var a = $.modal({
        title: "提示",
        text: b,
        buttons: [{
            text: "确定",
            className: "primary",
            onClick: function() {
                $.closeModal();
                viewUtility.closeSubview();
                c && c()
            }
        },
        ]
    });
    viewUtility.openSubview(a);
    return a
};
confirm = function(b, c) {
    var a = $.modal({
        title: "请选择",
        text: b,
        buttons: [{
            text: "取消",
            onClick: function() {
                $.closeModal();
                viewUtility.closeSubview();
                c && c(false)
            }
        },
        {
            text: "确定",
            className: "primary",
            onClick: function() {
                $.closeModal();
                viewUtility.closeSubview();
                c && c(true)
            }
        },
        ]
    });
    viewUtility.openSubview(a);
    return a
};
var loadUrl = function(d, c, a) {
    var b;
    $.appAjax({
        url: c,
        type: "GET",
        dataType: "text",
        executeBeforeSendFunc: false,
        executeCompleteFunc: false,
        onBeforeSend: function(e) {
            $.showLoading("加载中...");
            $(".weui-toast").animate({
                opacity: 0
            },
            0);
            setTimeout(function() {
                $(".weui-toast").animate({
                    opacity: 1
                },
                150)
            },
            250)
        },
        onSuccess: function(f, g, e) {
            setTimeout(function() {
                $.hideLoading();
                b = $.modal({
                    title: d,
                    text: f,
                    buttons: []
                });
                viewUtility.openSubview(b);
                var j = $('<button type="button" class="weui-dialog__close">&times;</button>').on({
                    click: function() {
                        $.closeModal();
                        viewUtility.closeSubview()
                    }
                });
                b.find(".weui-dialog__hd").append(j);
                b.find(".weui-dialog__bd").addClass("text-left");
                var i = window.innerHeight * 0.96,
                h = i - parseFloat(b.find(".weui-dialog__hd").css("height")) - 20,
                k = parseFloat(b.find(".weui-dialog__bd").css("height")) + 30;
                if (k > h) {
                    $(".weui-dialog__bd").css({
                        height: (h - 30) + "px",
                        "overflow-y": "auto"
                    })
                }
                b.appBindValidator && b.appBindValidator();
                b.appBindView && b.appBindView();
                a && a(b)
            },
            500)
        }
    });
    return b
};
var viewUtility = function() {
    return {
        disbaledScroll: function(a) {
            $.appViewUtility.disbaledScroll();
            if (a && $("body").data("disbaledscroll") === true) {
                setTimeout(function() {
                    $("body .weui-mask").on({
                        click: function() {
                            viewUtility.enabledScroll()
                        }
                    })
                },
                250)
            }
        },
        enabledScroll: function() {
            setTimeout(function() {
                if ($("body .weui-mask").length === 0) {
                    $.appViewUtility.enabledScroll()
                }
            },
            500)
        },
        openSubview: function(b, a) {
            viewUtility.disbaledScroll();
            b.animate({
                opacity: 0
            },
            0);
            setTimeout(function() {
                b.animate({
                    opacity: 1
                },
                150, a)
            },
            250)
        },
        closeSubview: function() {
            viewUtility.enabledScroll()
        },
        loading: function(a) {
            $.showLoading(a ? a: "加载中...");
            viewUtility.openSubview($(".weui-toast"))
        },
        closeLoading: function() {
            $.hideLoading();
            viewUtility.closeSubview()
        },
        success: function(a, b, c) {
            $.toast(a ? a: "操作成功", b,
            function() {
                viewUtility.closeSubview();
                c && c()
            });
            $(".weui-toast .weui-icon_toast").addClass("weui-icon_toast-scale");
            viewUtility.openSubview($(".weui-toast"))
        },
        failure: function(a, b) {
            $.toast(a ? a: "操作失败", "cancel",
            function() {
                viewUtility.closeSubview();
                b && b()
            });
            $(".weui-toast .weui-icon_toast").addClass("weui-icon_toast-scale");
            viewUtility.openSubview($(".weui-toast"))
        }
    }
} ();
$.extend({
    _appOnOpen: function(a) {
        a.focus().attr({
            disabled: true
        });
        setTimeout(function() {
            a.attr({
                disabled: false
            }).blur()
        },
        100);
        if (!$("body .weui-mask").length) {
            $("body").append('<div class="weui-mask weui-mask--visible"></div>')
        }
        viewUtility.disbaledScroll()
    },
    _appOnClose: function() {
        $("body .weui-mask").remove();
        viewUtility.enabledScroll()
    },
    appActions: function(b, a) {
        viewUtility.disbaledScroll(true);
        $.actions({
            title: b,
            actions: a,
            onClose: function() {
                viewUtility.enabledScroll()
            }
        })
    }
});
$.fn.extend({
    appCalendar: function(a) {
        a = $.extend({
            executeOpenFunc: true,
            executeCloseFunc: true,
            onChange: undefined,
            onOpen: undefined,
            onClose: undefined
        },
        a);
        return $(this).each(function() {
            var c = $(this),
            h = c.attr("id"),
            b = c.data("max") || "",
            d = c.data("min") || "",
            g = "",
            f = "",
            e = c.data("cansame");
            g = b && b.indexOf("#") === 0 ? $(b).val() || "": b;
            f = d && d.indexOf("#") === 0 ? $(d).val() || "": d;
            if (e === undefined || e) {
                g && (g = parseDatetime(g).toFormat("yyyy-MM-dd"));
                f && (f = parseDatetime(f).addDays( - 1).toFormat("yyyy-MM-dd"))
            } else {
                g && (g = parseDatetime(g).addDays( - 1).toFormat("yyyy-MM-dd"));
                f && (f = parseDatetime(f).toFormat("yyyy-MM-dd"))
            }
            c.addClass("select").appMobileCalendarPicker({
                format: c.data("format"),
                min: f,
                max: g,
                closeFor: c.data("closefor"),
                onChange: a.onChange,
                onOpen: function(i) {
                    a.executeOpenFunc && $._appOnOpen(c);
                    a.onOpen && a.onOpen(i)
                },
                onClose: function(i) {
                    a.executeCloseFunc && $._appOnClose(c);
                    a.onClose && a.onClose(i);
                    if (h) {
                        $('input[data-toggle="date"][data-min="#' + h + '"]').appCalendar(a);
                        $('input[data-toggle="date"][data-max="#' + h + '"]').appCalendar(a)
                    }
                }
            })
        })
    },
    appTime: function(a) {
        a = $.extend({
            executeOpenFunc: true,
            executeCloseFunc: true,
            onChange: undefined,
            onOpen: undefined,
            onClose: undefined
        },
        a);
        return $(this).each(function(e, k) {
            var h = $(k),
            j = function(p, m, q) {
                var n = [];
                for (var o = p; o < m; o += q) {
                    n.push(o.toString().padLeft(2, "0"))
                }
                return n
            },
            l = parseInt(h.data("hourstep") || 1),
            c = parseInt(h.data("minutestep") || 1),
            b = parseInt(h.data("secondstep") || 1),
            f = l === 1 ? undefined: j(0, 24, l),
            d = c === 1 ? undefined: j(0, 60, c),
            g = b === 1 ? undefined: j(0, 60, b);
            h.addClass("select").appMobileTimePicker({
                format: h.data("format"),
                view: h.data("view"),
                hours: f,
                minutes: d,
                seconds: g,
                onChange: a.onChange,
                onOpen: function() {
                    a.executeOpenFunc && $._appOnOpen(h);
                    a.onOpen && a.onOpen($input)
                },
                onClose: function() {
                    a.executeCloseFunc && $._appOnClose(h);
                    a.onClose && a.onClose($input)
                }
            })
        })
    },
    appDatetime: function(a) {
        a = $.extend({
            executeOpenFunc: true,
            executeCloseFunc: true,
            onChange: undefined,
            onOpen: undefined,
            onClose: undefined
        },
        a);
        var b = $(this).each(function(e, d) {
            var c = $(d);
            c.data("datetime") !== undefined && c.datetimePicker("destroy");
            c.addClass("select").datetimePicker({
                onChange: a.onChange,
                onOpen: function(f) {
                    a.executeOpenFunc && $._appOnOpen(c);
                    a.onOpen && a.onOpen($input)
                },
                onClose: function(f) {
                    a.executeCloseFunc && $._appOnClose(c);
                    a.onClose && a.onClose($input)
                }
            })
        });
        b.data("opts", a);
        return b
    },
    appSelect: function(a) {
        a = $.extend({
            executeOpenFunc: true,
            executeCloseFunc: true,
            onChange: undefined,
            onOpen: undefined,
            onClose: undefined
        },
        a);
        var b = $(this).hide().each(function(f, n) {
            var m = $(n),
            c = m.attr("class"),
            d = m.attr("disabled"),
            l = m.attr("placeholder"),
            o = (m.attr("multiple") !== undefined) || false,
            e = m.data("min"),
            k = m.data("max"),
            h = [];
            var g = [];
            m.find("option").each(function(p, i) {
                var r = $(i),
                q = r.val(),
                s = r.html();
                if (q === "") {
                    l = s
                } else {
                    h.push({
                        title: s,
                        value: q
                    });
                    r.is(":selected") && g.push(s)
                }
            });
            m.data("input") !== undefined && m.data("input").remove();
            var j = $('<input type="text" class="' + c + ' select"' + (d ? ' disabled="disabled"': "") + ' placeholder="' + (l || "") + '" data-clear="' + m.data("clear") + '" />');
            j.insertBefore(m).select({
                title: l,
                items: h,
                multi: o,
                input: g,
                onChange: function(i) {
                    m.val(i.values.split(",")).change() && $.validator && m.valid();
                    a.onChange && a.onChange(m)
                },
                onOpen: function() {
                    a.executeOpenFunc && $._appOnOpen(j);
                    a.onOpen && a.onOpen(m)
                },
                beforeClose: function() {
                    if (o) {
                        var i = m.val() || [];
                        if (e && i.length < e) {
                            $.toast("至少选择" + e + "个选项", "text");
                            return false
                        } else {
                            if (k && i.length > k) {
                                $.toast("至多选择" + k + "个选项", "text");
                                return false
                            }
                        }
                        $.hideLoading()
                    }
                    a.executeCloseFunc && $._appOnClose(j);
                    a.onClose && a.onClose(m)
                }
            });
            m.data("input", j)
        });
        b.data("opts", a);
        return b
    },
    appSelectSetValue: function(a) {
        var b = $(this);
        return b.val(a).appSelect(b.data("opts"))
    },
    appAreas: function(a) {
        a = $.extend({
            executeOpenFunc: true,
            executeCloseFunc: true,
            onChange: undefined,
            onOpen: undefined,
            onClose: undefined
        },
        a);
        var b = $(this).each(function() {
            var c = $(this);
            c.addClass("select").appMobileAreas({
                view: c.data("view"),
                onChange: function(d) {
                    a.onChange && a.onChange(c)
                },
                onOpen: function() {
                    a.executeOpenFunc && $._appOnOpen(c);
                    a.onChange && a.onChange(c)
                },
                onClose: function() {
                    a.executeCloseFunc && $._appOnClose(c);
                    a.onClose && a.onClose(c)
                }
            })
        });
        b.data("opts", a);
        return b
    },
    appPullToRefresh: function(b) {
        var a = $(this);
        return a.pullToRefresh().on({
            "pull-to-refresh": function() {
                b && b(function() {
                    a.pullToRefreshDone()
                })
            }
        })
    },
    appInfinite: function(c, b) {
        var a = $(this);
        return a.infinite(c).on({
            infinite: function() {
                var e = a.data("loading") || false,
                d = a.data("finish") || false;
                if (e || d) {
                    return
                }
                a.data("loading", true);
                b && b(function(f) {
                    a.data("loading", false);
                    a.data("finish", f || false)
                })
            }
        })
    },
    appBindView: function() {
        var b = $(this);
        b.find(".alert .close").on({
            click: function() {
                var c = $(this).parents(".alert").animate({
                    opacity: 0,
                    overflow: "hidden",
                    height: 0,
                    "padding-top": 0,
                    "padding-bottom": 0,
                    "margin-top": 0,
                    "margin-bottom": 0
                },
                250,
                function() {
                    c.remove()
                })
            }
        });
        b.find(".weui-search-bar .weui-search-bar__form .weui-search-bar__input").each(function() {
            var c = $(this);
            c.on({
                click: function() {
                    c.addClass("weui-search-bar__input-focusing")
                },
                blur: function() {
                    c.val() === "" && c.removeClass("weui-search-bar__input-focusing")
                }
            })
        });
        b.find('input[data-toggle="date"]').appCalendar();
        b.find('input[data-toggle="time"]').appTime();
        b.find('input[data-toggle="datetime"]').appDatetime();
        b.find('select[data-toggle="select"]').appSelect();
        b.find('input[data-toggle="areas"]').appAreas();
        var a = b.find('.weui-cells_form input[type=text].select[data-clear!="false"], .weui-search-bar__form input[type=search][data-clear!="false"]').each(function() {
            var d = $(this),
            c = function() {
                var f = d.val() !== "",
                e = d.attr("disabled");
                if (!e && f) {
                    d.addClass("input-notempty")
                } else {
                    d.removeClass("input-notempty")
                }
            };
            if (d.data("unclear")) {
                return
            }
            d.bind("input change propertychange", c);
            c()
        });
        $(".weui-icon-clear").remove();
        $('<span class="weui-icon-clear"></span>').insertAfter(a).on({
            click: function() {
                $(this).parent().find("input").val("").removeClass("input-notempty")
            }
        });
        return b
    }
});
$(function() {
    if (wechatJSAPIList && wechatJSAPIList.length) {
        var a = WechatParameters.base64Decrypt().split("|");
        wx.config({
            debug: Environment === SystemEnvironment.name.DEV,
            appId: a[0],
            timestamp: a[1],
            nonceStr: a[2],
            signature: a[3],
            jsApiList: wechatJSAPIList
        });
        wx.error(function(b) {
            console.log("wx config error: " + JSON.stringify(b))
        })
    }
    AreaInitPath = "/api/common/allareas";
    $("html").appBindView();
    $.toast.prototype.defaults.duration = 3000;
    $(window).on({
        beforeunload: function() {
            viewUtility.enabledScroll()
        }
    })
});