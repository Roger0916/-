/**
 * Created by Administrator on 2016/5/6.
 */

function moveSlow(obj,json,fn){
    clearInterval(obj.timeId);
    timeClear=false;
    obj.timeId = setInterval(function () {
        flag=true;
        for(var k in json) {
            if (k == "opacity") {
                leader = parseInt(getStyle(obj, k) * 100);
                target = json[k] * 100;
                step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
                if (target != leader) {
                    flag = false;
                }
            }if(k=="zIndex"){
                obj.style[k]=json[k];
            }
            else {
                leader = parseInt(getStyle(obj, k)) || 0;

                target = json[k];
                step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
                if (target != leader) {
                    flag = false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timeId);
            timeClear=true;
            if(fn){
                fn();
            }
        }
    }, 15);
}



function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];//IE678
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}