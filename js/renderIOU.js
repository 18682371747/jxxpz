var IOU_RENDER_UTILITY = {
	StatusInfo: function (status) {

		if (status == 2) {
			return {
				text: '<span class="text-xs ml5" style="color:red;">待确认</span>'
			}
		} else if (status == 1) {
			return {
				text: '<span class="text-xs ml5" style="color:#44cc11">已确认</span>'
			}
		}else if(status == 3){
			return {
				text: '<span class="text-xs ml5" style="color:#999">已驳回</span>'
			}
		}else {
			return {
				text: '<span class="text-xs ml5" style="color:#999">已作废</span>'
			}
		}
	}
};
var renderIOU = function (c, a, b) {
	$.each(b, function (e, d) {
		d.status = 0;
		var g = IOU_RENDER_UTILITY.StatusInfo(d.sfqr);
		a.append('<a href="./getDetail.html?id=' + d.id + '" class="card-container">'
			+ '<div class="weui-flex border-bottom">'
			+ '  <div><img src="'+(d.img ? d.img : "./imgs/user.png")+'" class="head-img"></div>'
			+ '  <div class="ml10 text-center">'
			+ '    <div class="text-dark" style="line-height: 25px;">'
			+ (d.cjr)
			+ '    </div>'
			+ '    <div class="text-xs" style="line-height: 15px;">(出借人)</div>'
			+ '  </div>'
			+ '  <div class="weui-flex__item text-right">'
			+ '    <div style="line-height: 14px;">'
			+ '      <span class="text-success" style="font-size: 14px;">'
			+ ("我跟他借")
			+ '      </span>'
			+ '      <small class="ml5" style="font-size: 12px;">(元)</small>'
			+ '    </div>'
			+ '    <div style="line-height: 25px;">'
			+ '       <strong class="text-dark text-xl">' + parseFloat(d.jkje).toFixed(2) + '</strong>'
			+ '    </div>'
			+ '  </div>'
			+ '</div>'
			+ '<div class="weui-flex border-bottom" style="line-height: 22px;">'
			+ '  <div class="weui-flex__item">'
			+ '     <div class="text-xs">利率：' + d.nhll + '%</div>'
			+ '     <div class="text-xs">用途：' + d.yt + '</div>'
			+ '  </div>'
			+ '  <div class="weui-flex__item" style="text-align: right;">'
			+ '     <div class="text-xs">借款日：' + d.jkrq + '</div>'
			+ '     <div class="text-xs">还款日：' + d.hkrq + '</div>'
			+ '  </div>'
			+ '</div>'
			+ '<div class="text-right">'
			+ '  <span class="text-xs fa fa-check-circle"></span>'
			+ '  <span class="text-xs ml5">' + g.text + '</span>'
			+ '</div></a>');
			
	})
};
//var renderExten = function(c, a, b) {
//    $.each(b,
//    function(e, d) {
//        a.append('<a href="../m/getDetail.html?id='+d.id+'" class="card-container card-container-border">'
//			+ '<div class="weui-flex border-bottom">'
//			+ '  <div><img src="'+path+'/images/user1.png" class="head-img"></div>'
//			+ '  <div class="ml10 text-center">'
//	        + '    <div class="text-dark" style="line-height: 25px;">' 
//	        +        (d.creditorId == c ? d.debtorName: d.creditorName) 
//	        + '    </div>'
//	        + '    <div class="text-xs" style="line-height: 15px;">'
//	        + '      (' + (d.creditorId == c ? "借款人": "出借人") + ')'
//	        + '    </div>'
//	        + '  </div>'
//	        + '  <div class="weui-flex__item text-right">'
//	        + '     <div style="line-height: 40px;"><strong class="text-dark text-xl">展期</strong></div>'
//	        + '  </div>'
//	        + '</div>'
//	        + '<div class="weui-flex" style="line-height: 22px;">'
//	        + '  <div class="weui-flex__item">'
//	        + '     <div class="text-xs">展期本金：' + d.amount + '元</div>'
//	        + '  </div>'
//	        + '  <div class="weui-flex__item" style="text-align: right;">'
//	        + '     <div class="text-xs">展期至：' + parseDatetime(d.repaymentDate).toFormat("yyyy-MM-dd") + "</div>'" +
//	        + '  </div>'
//	        + '</div></a>');
//    })
//};