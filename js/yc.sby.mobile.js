$.fn.extend({weuiSelectPicker:function(a){a=$.extend({title:undefined,textAlign:"center",},a);$(this).hide();$(this).each(function(){var c=$(this);c.nextAll(".weui-selectPicker").remove();var b={name:{},values:[]};c.find("option").each(function(d){if($(this).val()){b.name[$(this).text()]=d;b.values.push($(this).text())}});c.after($("<input>").attr({"class":c.attr("class")+" weui-selectPicker",type:"text",value:c.find("option:selected").text(),placeholder:c.attr("placeholder")}).picker({title:$(this).data("title")||a.title||"",cols:[{textAlign:a.textAlign,values:b.values}],onChange:function(d,e){c[0].selectedIndex=b.name[e[0]];c.valid()},onOpen:function(){$("input").blur();c.focus()}}))});return $(this)},appCompressionUploadFile:function(a){a=$.extend({url:undefined,postName:"fileData",maxWidth:undefined,maxHeight:undefined,onBeforeSubmit:undefined,onSuccess:undefined,onError:undefined,onComplete:undefined,},a);$(this).change(function(){var g=$(this);var f=event.target.files[0];if(f.type.indexOf("image")==0){var b=new FileReader(),c=new Image();var d=document.createElement("canvas");var e=d.getContext("2d");c.onload=function(){var i=this.width;var m=this.height;var l=a.maxWidth||650,k=a.maxHeight||650;var j=i,h=m;if(i>l||m>k){if(i/m>l/k){j=l;h=Math.round(l*(m/i))}else{h=k;j=Math.round(k*(i/m))}}d.width=j;d.height=h;e.clearRect(0,0,j,h);e.drawImage(c,0,0,j,h);d.toBlob(function(n){a.onBeforeSubmit&&a.onBeforeSubmit(n,g);var p=new XMLHttpRequest();p.onreadystatechange=function(){switch(p.readyState){case 4:var q=JSON.parse(p.responseText);if(p.status=="200"){a.onSuccess&&a.onSuccess(q,g)}else{a.onError&&a.onError(q,g)}a.onComplete&&a.onComplete(q,p.status=="200"?"success":"error",g);break}};p.open("POST",a.url,true);var o=new FormData();o.append(a.postName,n);p.send(o)},f.type||"image/png")};b.onload=function(h){c.src=h.target.result};b.readAsDataURL(f)}})}});$.extend({appGetLocation:function(a){a=$.extend({onSuccess:undefined,onError:undefined},a);if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(b){if(b!=null&&b.coords!=null){a.onSuccess&&a.onSuccess({latitude:b.coords.latitude,longitude:b.coords.longitude})}else{a.onError&&a.onError(b)}})}else{a.onError&&a.onError({message:"Geolocation is not supported by this browser"})}}});var wechatJSAPIList;$(function(){var c=null;var a=null;if(wechatJSAPIList&&wechatJSAPIList.length){var b=WechatParameters.base64Decrypt().split("|");wx.config({debug:Environment===SystemEnvironment.name.DEV,appId:b[0],timestamp:b[1],nonceStr:b[2],signature:b[3],jsApiList:wechatJSAPIList});wx.error(function(d){console.log("wx config error: "+JSON.stringify(d))})}$('select[data-toggle="weuiSelect"]').weuiSelectPicker();FastClick.attach(document.body)});