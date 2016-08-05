/**
 * Created by Administrator on 2016/5/6.
 */
window.onload= function () {

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    var wrap=document.getElementById("wrap");
    var slide=document.getElementById("slide");
    var ul=slide.children[0];
    var lis=ul.children;
    var arrow=document.getElementById("arrow");
    var arrLeft=arrow.children[0];
    var arrRight=arrow.children[1];

    wrap.onmouseover= function () {
        moveSlow(arrow,{"opacity":1});
    };
    wrap.onmouseout= function () {
        moveSlow(arrow,{"opacity":0});
    };
    assign();

    arrRight.onclick= function () {
        config.unshift(config.pop());
        assign();
    }

    arrLeft.onclick= function () {
        config.push(config.shift());
        assign();
    }
    function assign(){
        for(i=0;i<lis.length;i++){
            moveSlow(lis[i],config[i]);
        }
    }
}