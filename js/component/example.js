const Example = function(resolve, reject) {
    $.get('./components/example.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    layoutMethod:"hubsize",
                    nodes:[
                        {id: "jia", label: "贾",level:0},{id: "shi", label: "史",level:0},
                        {id: "wang", label: "王",level:0},{id: "xue", label: "薛",level:0},
                        {id: "jiayuan", label: "贾源(荣国公)",level:1},{id: "jiayan", label: "贾演(宁国公)",level:1},
                        {id: "shihou", label: "史候(尚书令)",level:1},{id: "wangbuxiang", label: "不详",level:1},
                        {id: "xuebuxiang", label: "不详",level:1}, {id: "wangfu", label: "王夫人父亲",level:2},
                        {id: "jiadaihua", label: "贾代化",level:2},{id: "jiadaishan", label: "贾代善",level:2},
                        {id: "shitaijun", label: "史太君(贾母)",level:2},{id: "shitaijunxiongdi", label: "史湘云祖父",level:2},
                        {id: "jiajing", label: "贾敬(袭宁国公)",level:3},{id: "jiazheng", label: "贾政(工部员外部)",level:3},{id: "wangfuren1", label: "王夫人",level:3},
                        {id: "jiashe", label: "贾赦(袭宁国公)",level:3},{id: "xingfuren", label: "刑夫人",level:3},{id: "xiangyunfumu", label: "史湘云父母",level:3},
                        {id: "xifengfumu", label: "王熙凤父",level:3},{id: "wangziteng", label: "王子腾",level:3},
                        {id: "wangfuren", label: "王夫人",level:3},{id: "xueyima", label: "薛姨妈(薛宝钗之母)",level:3},
                        {id: "baochaifu", label: "薛宝钗父",level:3},{id: "baoqinfu", label: "薛宝琴父",level:3},
                        {id: "xuepan", label: "薛蟠",level:4},
                        {id: "xiajingui", label: "夏金桂",level:4},{id: "xiangling", label: "香菱",level:4},{id: "baochan", label: "宝蟾",level:4},
                        {id: "xuebaochai", label: "薛宝钗",level:4},
                        {id: "xueke", label: "薛蝌",level:4},{id: "xuebaoqin", label: "薛宝琴",level:4},
                        
                        
                    ],
                    edges:[
                        {from: "jia", to: "jiayuan"},{from: "jia", to: "jiayan"},
                        {from: "shi", to: "shihou"},{from: "wang", to: "wangbuxiang"},{from: "xue", to: "xuebuxiang"},
                        {from: "wangbuxiang", to: "wangfu"},
                        {from: "jiayuan", to: "jiadaihua",label:"父子"},{from: "jiayan", to: "jiadaishan",label:"父子"},
                        {from: "shihou", to: "shitaijun",label:"父女"},{from: "shihou", to: "shitaijunxiongdi",label:"父子"},
                        {from: "jiadaishan", to: "shitaijun",label:"夫妻"},{from: "shitaijun", to: "jiadaishan"},
                        {from: "shitaijun", to: "shitaijunxiongdi",label:"兄妹或姐弟"},
                        {from: "jiadaihua", to: "jiajing",label:"父子"},
                        {from: "jiadaishan", to: "jiashe",label:"长子"},{from: "shitaijun", to: "jiashe",label:"母子"},
                        {from: "shitaijun", to: "jiazheng",label:"母子"},
                        {from: "jiadaishan", to: "jiazheng",label:"父子"},
                        {from: "shitaijunxiongdi", to: "xiangyunfumu",label:"父子"},
                        {from: "wangfu", to: "xifengfumu"},{from: "wangfu", to: "wangziteng"},
                        {from: "wangfu", to: "wangfuren"},{from: "wangfu", to: "xueyima"},
                        {from: "jiashe", to: "xingfuren",label:"夫妻"},{from: "xingfuren", to: "jiashe"},
                        {from: "jiazheng", to: "wangfuren1",label:"夫妻"},{from: "wangfuren1", to: "jiazheng"},
                        {from: "xuebuxiang", to: "baochaifu"},{from: "xuebuxiang", to: "baoqinfu"},
                        {from: "baochaifu", to: "xuepan",label:"父子"},{from: "baochaifu", to: "xuebaochai",label:"父女"},
                        {from: "baoqinfu", to: "xueke",label:"父子"},{from: "baoqinfu", to: "xuebaoqin",label:"父女"},
                        {from: "xuepan", to: "xiajingui",label:"夫妻"},{from: "xuepan", to: "xiangling",label:"薛蟠妾"},{from: "xuepan", to: "baochan",label:"薛蟠妾"}
                    ]
                }
            },
            components: { expandRow },
            methods: {
                draw() {
                    var container = this.$refs.mynetwork;
                    var data = {
                      nodes: this.nodes,
                      edges: this.edges
                    };
              
                    var options = {
                      layout: {
                        hierarchical: {
                            // nodeSpacing:200,
                        //   sortMethod: this.layoutMethod,
                          direction:"LR"
                        }
                      },
                      edges: {
                        arrows: {to : true }
                      },
                      physics:true,
                    };
                    var network = new vis.Network(container, data, options);
                }
              
            },
            created() {
               
            },
            mounted: function() {
                this.draw();
            }
        });
    })
}