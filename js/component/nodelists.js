const DIR = "../../images/hlm/";
var data = {
    "nodes":[
        {"id": "jia", "label": "贾","level":0,"shape":"circularImage","image": DIR+"jia.jpg"},
        {"id": "shi", "label": "史","level":0,"shape":"circularImage","image": DIR+"shi.jpg"},
        {"id": "wang", "label": "王","level":0,"shape":"circularImage","image": DIR+"wang.jpg"},
        {"id": "xue", "label": "薛","level":0,"shape":"circularImage","image": DIR+"xue.jpg"},
        {"id": "jiayuan", "label": "贾源(荣国公)","level":1,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "jiayan", "label": "贾演(宁国公)","level":1,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "shihou", "label": "史候(尚书令)","level":1,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "wangbuxiang", "label": "不详","level":1,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "xuebuxiang", "label": "不详","level":1,"shape":"circularImage","image": DIR+"wu.jpg"}, 
       
        {"id": "jiadaihua", "label": "贾代化","level":2,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "jiadaishan", "label": "贾代善","level":2,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "shitaijun", "label": "史太君(贾母)","level":2,"shape":"circularImage","image": DIR+"jm.jpg"},
        {"id": "shitaijunxiongdi", "label": "史湘云祖父","level":2,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "wangfu", "label": "王夫人父亲","level":2,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "linruhai", "label": "林如海","level":3,"shape":"circularImage","image": DIR+"lrh.jpg"},
        {"id": "jiamin", "label": "贾敏","level":3,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "jiajing", "label": "贾敬(袭宁国公)","level":3,"shape":"circularImage","image": DIR+"jj.jpg"},
        // {"id": "wangfuren1", "label": "王夫人","level":3,"shape":"circularImage","image": DIR+"wfr.jpg"},
        {"id": "jiazheng", "label": "贾政(工部员外部)","level":3,"shape":"circularImage","image": DIR+"jz.jpg"},
        {"id": "zhaoyiniang", "label": "赵姨娘","level":3,"shape":"circularImage","image": DIR+"zyn.jpg"},
        {"id": "jiashe", "label": "贾赦(袭宁国公)","level":3,"shape":"circularImage","image": DIR+"js.jpg"},
        {"id": "xingfuren", "label": "刑夫人","level":3,"shape":"circularImage","image": DIR+"xfr.jpg"},
        {"id": "xiangyunfumu", "label": "史湘云父母","level":3,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "xifengfumu", "label": "王熙凤父","level":3,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "wangziteng", "label": "王子腾","level":3,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "wangfuren", "label": "王夫人","level":3,"shape":"circularImage","image": DIR+"xue.jpg"},
        {"id": "xueyima", "label": "薛姨妈(薛宝钗之母)","level":3,"shape":"circularImage","image": DIR+"xym.jpg"},
        {"id": "baochaifu", "label": "薛宝钗父","level":3,"shape":"circularImage","image": DIR+"xue.jpg"},
        {"id": "baoqinfu", "label": "薛宝琴父","level":3,"shape":"circularImage","image": DIR+"xue.jpg"},
        
        
        {"id": "lindaiyu", "label": "林黛玉","level":4,"shape":"circularImage","image": DIR+"ldy.jpg"},
        {"id": "xichun", "label": "惜春","level":4,"shape":"circularImage","image": DIR+"jxc.jpg"},
        {"id": "yousanjie", "label": "尤三姐","level":4,"shape":"circularImage","image": DIR+"ysj.jpg"},
        {"id": "jiazhen", "label": "贾珍","level":4,"shape":"circularImage","image": DIR+"jzhen.jpg"},
        {"id": "youshi", "label": "尤氏","level":4,"shape":"circularImage","image": DIR+"ys.jpg"},
        {"id": "jiabaoyu", "label": "贾宝玉","level":4,"shape":"circularImage","image": DIR+"jby.jpg"},
        {"id": "jiazhu", "label": "贾珠","level":4,"shape":"circularImage","image": DIR+"wu.jpg"},
        {"id": "liwan", "label": "李纨","level":4,"shape":"circularImage","image": DIR+"lw.jpg"},
        {"id": "jiahuan", "label": "贾环","level":4,"shape":"circularImage","image": DIR+"jh.jpg"},
        {"id": "youerjie", "label": "尤二姐","level":4,"shape":"circularImage","image": DIR+"yej.jpg"},
        {"id": "jialian", "label": "贾琏","level":4,"shape":"circularImage","image": DIR+"jl.jpg"},
        
        {"id": "wangxifeng", "label": "王熙凤","level":4,"shape":"circularImage","image": DIR+"wxf.jpg"},
        {"id": "yuanchun", "label": "元春","level":4,"shape":"circularImage","image": DIR+"jyc1.jpg"},
        {"id": "yingchun", "label": "迎春","level":4,"shape":"circularImage","image": DIR+"jyc.jpg"},
        {"id": "tanchun", "label": "探春","level":4,"shape":"circularImage","image": DIR+"jtc.jpg"},
        {"id": "shixiangyun", "label": "史湘云","level":4,"shape":"circularImage","image": DIR+"sxy.jpg"},
        
        {"id": "xuebaochai", "label": "薛宝钗","level":4,"shape":"circularImage","image": DIR+"xbc.jpg"},
        {"id": "xiajingui", "label": "夏金桂","level":4,"shape":"circularImage","image": DIR+"xjg.jpg"},
        {"id": "xuepan", "label": "薛蟠","level":4,"shape":"circularImage","image": DIR+"xp.jpg"},
        {"id": "xiangling", "label": "香菱","level":4,"shape":"circularImage","image": DIR+"xl.jpg"},
        {"id": "baochan", "label": "宝蟾","level":4,"shape":"circularImage","image": DIR+"xue.jpg"},
        {"id": "xueke", "label": "薛蝌","level":4,"shape":"circularImage","image": DIR+"xue.jpg"},
        {"id": "xuebaoqin", "label": "薛宝琴","level":4,"shape":"circularImage","image": DIR+"xue.jpg"},
        
        {"id": "jiarong", "label": "贾蓉","level":5,"shape":"circularImage","image": DIR+"jr.jpg"},
        {"id": "qingkeqing", "label": "秦克卿","level":5,"shape":"circularImage","image": DIR+"qkq.jpg"},
        {"id": "jialan", "label": "贾兰","level":5,"shape":"circularImage","image": DIR+"jlan.jpg"},

    ],
    edges:[
        {from: "jia", to: "jiayuan"},
        {from: "jia", to: "jiayan"},
        {from: "shi", to: "shihou"},
        {from: "wang", to: "wangbuxiang"},
        {from: "xue", to: "xuebuxiang"},
        {from: "wangbuxiang", to: "wangfu"},
        {from: "jiayuan", to: "jiadaihua",label:"父子",font: {background: '#ff0000',color:"white"}},
        {from: "jiayan", to: "jiadaishan",label:"父子"},
        {from: "shihou", to: "shitaijun",label:"父女"},
        {from: "shihou", to: "shitaijunxiongdi",label:"父子"},
        {from: "jiadaishan", to: "shitaijun",label:"夫妻"},
        {from: "shitaijun", to: "jiadaishan"},
        {from: "shitaijun", to: "shitaijunxiongdi",label:"兄妹或姐弟"},
        {from: "shitaijun", to: "jiashe",label:"母子"},
        {from: "shitaijun", to: "jiamin",label:"母女"},
        {from: "shitaijun", to: "jiazheng",label:"母子"},

        {from: "jiadaihua", to: "jiajing",label:"父子"},
        {from: "jiajing", to: "xichun",label:"父女"},
        {from: "jiajing", to: "jiazhen",label:"父子"},
        {from: "jiazhen", to: "jiarong",label:"父子"},
        {from: "jiazhen", to: "youshi",label:"夫妻"},
        {from: "jiazhen", to: "yousanjie",label:"偷情"},
        {from: "jiarong", to: "qingkeqing",label:"夫妻"},
        {from: "jiazhen", to: "qingkeqing",label:"公媳(关系不正当)"},
        {from: "jiazhen", to: "xichun",label:"兄妹"},
        
        {from: "jiadaishan", to: "jiazheng",label:"父子"},
        {from: "jiazheng", to: "yuanchun",label:"父女"},
        {from: "jiazheng", to: "jiabaoyu",label:"父子"},
        {from: "jiazheng", to: "jiazhu",label:"父子"},
        {from: "jiazheng", to: "jiahuan",label:"父子"},
        {from: "jiazheng", to: "tanchun",label:"父女"},
        {from: "wangfuren", to: "yuanchun",label:"母女"},
        {from: "wangfuren", to: "jiabaoyu",label:"母子"},
        {from: "wangfuren", to: "jiazhu",label:"母子"},
        {from: "jiazhu", to: "liwan",label:"夫妻"},
        {from: "jiazhu", to: "jialan",label:"父子"},
        {from: "liwan", to: "jialan",label:"母子"},
        {from: "zhaoyiniang", to: "jiahuan",label:"母子"},
        {from: "zhaoyiniang", to: "tanchun",label:"母女"},
        {from: "shitaijunxiongdi", to: "xiangyunfumu",label:"父子"},
        {from: "xiangyunfumu", to: "shixiangyun",label:"父女"},
        {from: "wangfu", to: "xifengfumu"},
        {from: "xifengfumu", to: "wangxifeng",label:"父女"},
        {from: "jiamin", to: "linruhai",label:"夫妻"},
        {from: "jiamin", to: "lindaiyu",label:"母女"},
        {from: "linruhai", to: "lindaiyu",label:"父女"},
        {from: "jialian", to: "youerjie",label:"妾(吞金而亡)"},
        {from: "jialian", to: "wangxifeng",label:"夫妻"},
        {from: "wangxifeng", to: "jialian",label:"夫妻"},
        {from: "wangfu", to: "wangziteng"},
        {from: "wangfu", to: "wangfuren"},
        {from: "wangziteng", to: "wangfuren",label:"姐弟"},
        {from: "xueyima", to: "wangfuren",label:"姐妹"},
        {from: "xueyima", to: "baochaifu",label:"夫妻"},
        {from: "wangfu", to: "xueyima",label:"父女"},
        {from: "jiashe", to: "xingfuren",label:"夫妻"},
        {from: "xingfuren", to: "jiashe"},
        {from: "jiashe", to: "yingchun",label:"父女"},
        {from: "jiashe", to: "jialian",label:"父子"},
        {from: "jiazheng", to: "wangfuren",label:"夫妻"},
        {from: "jiazheng", to: "zhaoyiniang",label:"夫妻-妾"},
        {from: "wangfuren", to: "jiazheng"},
        {from: "xuebuxiang", to: "baochaifu"},
        {from: "xuebuxiang", to: "baoqinfu"},
        {from: "baochaifu", to: "xuepan",label:"父子"},
        {from: "baochaifu", to: "xuebaochai",label:"父女"},
        {from: "xueyima", to: "xuebaochai",label:"母女"},
        {from: "baoqinfu", to: "xueke",label:"父子"},
        {from: "baoqinfu", to: "xuebaoqin",label:"父女"},
        {from: "xuepan", to: "xiajingui",label:"夫妻"},
        {from: "xuepan", to: "xiangling",label:"薛蟠妾"},
        {from: "xuepan", to: "baochan",label:"薛蟠妾"}
    ]
}