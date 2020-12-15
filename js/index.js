
function $(el) {
    return document.querySelector(el)
}
var timer = null;
var str1 = `人生只要两次幸运便好，一次遇到你，一次走到底。a
最美丽的事，莫过于在最好的时光遇见你，相互嫌弃，却又不离不弃a
是鬼迷心窍也好，是上天注定也好，总之人生能够有你，真好a
一年有365天我只爱你4天春天夏天秋天冬天一个月里我只爱你3天昨天今天明天一个礼拜我只爱你2天白天黑夜而我只爱你一次这一次是一-辈子
遇见你是我的幸运，爱上你是我的发自内心的诉求，拥有你，是我一生的荣幸，失去你，是一生的遗憾!a`

var str2 = `谢命运让你我相遇，于千万人之中，在时光的荒野里，不早也不晚1
我曾爱慕诗与远方，无所羁绊，直到遇见了你，才发现你的心才是我想去的地方1
鸟患了恐高症，鱼变成了旱鸭子，所有逻辑都被推翻，我还是要喜欢你1
往后余生，风雪是你，平淡是你，心底温柔是你，目光所致都是你≈1
我可能给不了你世间所有的温柔，但有个词叫尽我所能 1
别问我心里面到底有没有你 ，因为我的余光都是你 1
我们谈久一点吧，久到有稳定工作，久到见双方父母，久到一天两人三餐四季1
只要是你，晚一点也可以122222222222222222
`




function init() {
    var tu = document.getElementsByClassName('tu')[0];
    tu.style.opacity = 0.3;
    var open = document.querySelector('.open');
    open.style.opacity = "0";
    open.remove()
    var mus = document.getElementsByClassName('mus')[0];
    mus.play()


    var autoimg = $('.autoimg');
    autoimg.style.opacity = "1";

    var p = document.querySelector('.wenzi1 span:first-child')
    var cunchu1 = '';
    var nn = 0;
    var boo = false;
    if (!timer) {
        setTimeout(function () {
            timer = setInterval(function () {
                if (str1[nn]) {

                    if (str1[nn] == "a" || str1[nn] == "b") {
                        if (str1[nn] == "b") {
                            cunchu1 += ' <i></i>';
                            nn++;
                        } else {
                            cunchu1 += ' <i></i><br><br>';
                            nn++;
                        }

                    } else {
                        cunchu1 += str1[nn];
                        nn++;
                        console.log(cunchu1)

                    }

                } else {
                    clearInterval(timer)
                    boo = true;
                    autoimg.style.opacity = "0"
                    autoimg.style.display = "none"
                    last(boo)
                    return
                }
                p.innerHTML = cunchu1;
            }, 150)
        }, 1000)

    }


    var cunchu2 = '';
    var n2 = 0;
    var p2 = $('.lasty')
    var pp2 = $('.lasty span')
    var ii = $('.teshu')
    function last(boo) {
        if (boo) {
            p2.style.zIndex = 10;
            ii.style.display = " inline-block"
            var timer1 = null;
            setTimeout(function () {
                timer1 = setInterval(function () {
                    if (str2[n2]) {
                        if (str2[n2] == "1" || str2[n2] == "2") {
                            if (str2[n2] == "2") {
                                cunchu2 += "<i></i>";
                                n2++;
                            } else {
                                cunchu2 += "<i></i><br><br>"
                                n2++;
                            }
                        } else {
                            cunchu2 += str2[n2];
                            n2++;
                        }
                        pp2.innerHTML = cunchu2;
                    }
                }, 150)
            }, 800)

        }
    }




}

function addwind() {

    var width = document.body.clientWidth;
    var height = document.body.clientHeight;

    document.body.style.width = width + "px"
    document.body.style.height = height + "px"
    // var boxa = $('.box')
    // console.log(boxa)
    // boxa.style.width = width + "px";
    // boxa.style.height = height + "px";
    console.log(width)
    console.log(height)

}
addwind()

