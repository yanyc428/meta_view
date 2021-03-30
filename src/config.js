const config = {
    index:{
        bgc: "http://gxmz.art.bift.edu.cn/app/images/mainbg.jpg",
        dynamicTags: ["女子", "上海", "商务印书馆"],
        departments: ['商务印书馆','中华书局','文明书局','开明书店','世界书局','大光书局'],
        phase1: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}],
        phase2: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}],
        phase3: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}]
    },
    search:{
        tableData:[
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"},
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"},
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"},
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"},
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"},
            {title:"这里是标题", charge:"这里是责任者", publish:"这里是机构", location:"这里是出版地", suit: "这里是适用对象"}
        ]
    },
    navigate:{
        phase1: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}],
        phase2: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}],
        phase3: [
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"},
            {img: require("./assets/demo.png"), name:"这里是书名", description: "这里是描述"}],
        example:{
            img: require("./assets/demo.png"),
            metadata:[
                {key:'责任者', value:'（清）庄俞、沈颐 编纂；高凤谦、张元济 校订'},
                {key:'出版机构', value:'商务印书馆'},
                {key:'出版地', value:'上海'},
                {key:'适用对象', value:'学生 初小 （秋季始业）'},
                {key:'适用范围', value:'全国'},
                {key:'学制', value:'壬子癸丑学制'},
                {key:'审定机构', value:'教育部'},
                {key:'馆藏地', value:'北京师范大学图书馆'}
            ],
        },
        recommend_img:[
            {name:'册次合集-第2册', img: require('./assets/recommend/1.png')},
            {name:'册次合集-第4册', img: require('./assets/recommend/2.png')},
            {name:'册次合集-第5册', img: require('./assets/recommend/3.png')},
            {name:'册次合集-第7册', img: require('./assets/recommend/4.png')},
            {name:'册次合集-第8册', img: require('./assets/recommend/5.png')},
            {name:'美术', img: require('./assets/recommend/6.png')},
            {name:'教授法', img:require( './assets/recommend/7.png')},
            {name:'数学', img: require('./assets/recommend/8.png')},
            {name:'相邻学段', img:  require( './assets/recommend/9.png')},
            {name:'修身', img: require('./assets/recommend/10.png')}
        ],
        time: ['1900','1901','1902','1903','1904','1905','1906','1907','1908','1909','1911','1912','1913','1914','1915'],
        departments: ['商务印书馆','中华书局','文明书局','开明书店','世界书局','大光书局','文艺书局','民智书局','北新学社','著者自刊','中学生书局'],
        area: ['华北','东北','华东','华中','华南','西南','西北','港澳地区'],
        province: ['北京','天津','河北','陕西','内蒙古','辽宁','吉林','黑龙江','上海'],
        city:['南京','无锡','徐州','常州','苏州','南通','连云港'],
    }

}

export default config