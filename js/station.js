//<!--2016.11.25 nevil-->
var stationData = {
	"one":["苹果园","古城","八角游乐园","八宝山","玉泉路","五棵松","万寿路","公主坟","军事博物馆","木樨地","南礼士路","复兴门","西单","天安门西","天安门东","王府井","东单","建国门","永安里","国贸","大望路","四惠","四惠东"],
	"two":["西直门","车公庄","阜成门","复兴门","长椿街","宣武门","和平门","前门","崇文门","北京站","建国门","朝阳门","东四十条","东直门","雍和宫","安定门","鼓楼大街","积水潭"],
	"four":["安河桥北","北宫门","西苑","圆明园","北大东门","中关村","海淀黄庄","人民大学","魏公村","国家图书馆","动物园","西直门","新街口","平安里","西四","灵境胡同","西单","宣武门","菜市口","陶然亭","北京南站","马家堡","角门西","公益西桥"],
	"five":["宋家庄","刘家窑","蒲黄榆","天坛东门","磁器口","崇文门","东单","灯市口","东四","张自忠路","北新桥","雍和宫","和平里北桥","和平西桥","惠新西街南口","惠新西街北口","大屯路东","北苑路北","立水桥南","立水桥","天通苑南","天通苑","天通苑北"],
	"six":["海淀五路居","慈寿寺","花园桥","白石桥南","车公庄西","车公庄","平安里","北海北","南锣鼓巷","东四","朝阳门","东大桥","呼家楼","金台路","十里堡","青年路","褡裢坡","黄渠","常营","草房","物资学院","通州北关","北运河西","郝家府","东夏园","潞城"],
	"seven":["北京西站","湾子","达官营","广安门内","菜市口","虎坊桥","珠市口","桥湾","磁器口","广渠门内","广渠门外","九龙山","大郊亭","百子湾","化工","南楼梓庄","欢乐谷景区","双合","焦化厂"],
	"eight":["朱辛庄","育知路","平西府","回龙观东大街","霍营","育新","西小口","永泰庄","林翠桥","森林公园南门","奥林匹克公园","奥体中心","北土城","安华桥","安德里北街","鼓楼大街","什刹海","南锣鼓巷"],
	"nine":["郭公庄","丰台科技园","科怡路","丰台南路","丰台东大街","七里庄","六里桥","六里桥东","北京西站","军事博物馆","白堆子","白石桥南","国家图书馆"],
	"ten":["巴沟","苏州街","海淀黄庄","知春里","知春路","西土城","牡丹园","健德门","北土城","安贞门","惠新西街南口","芍药居","太阳宫","三元桥","亮马桥","农业展览馆","团结湖","呼家楼","金台夕照","国贸","双井","劲松","潘家园","十里河","分钟寺","成寿寺","宋家庄","石榴庄","大红门","角门东","角门西","草桥","纪家庙","首经贸","丰台站","泥洼","西局","六里桥","莲花桥","公主坟","西钓鱼台","慈寿寺","车道沟","长春桥","火器营"],
	"thirteen":["东直门","柳芳","光熙门","芍药居","望京西","北苑","立水桥","霍营","回龙观","龙泽","西二旗","上地","五道口","知春路","大钟寺","西直门"],
	"fourteen":["张郭庄","园博园","大瓦窑","郭庄子","大井","七里庄","西局"],
	"fifteen":["俸伯","顺义","石门","南发信","后沙峪","花梨坎","国展","孙河","马泉营","崔各庄","望京","望京西","关庄","大屯路东","安立路","奥林匹克公园","北沙滩","六道口","清华东路西口"]
};
var chartData = [
	["苹果园","古城",2.5],["古城","八角游乐园",1.9],["八角游乐园","八宝山",1.9],["八宝山","玉泉路",1.5],["玉泉路","五棵松",1.8],["五棵松","万寿路",1.8],["万寿路","公主坟",1.3],["公主坟","军事博物馆",1.2],["军事博物馆","木樨地",1.2],["木樨地","南礼士路",1.3],["南礼士路","复兴门",0.5],["复兴门","西单",1.6],["西单","天安门西",1.2],["天安门西","天安门东",0.9],["天安门东","王府井",0.9],["王府井","东单",0.8],["东单","建国门",1.2],["建国门","永安里",1.4],["永安里","国贸",0.8],["国贸","大望路",1.4],["大望路","四惠",1.7],["四惠","四惠东",1.7],
	["西直门","车公庄",0.9],["车公庄","阜成门",1],["阜成门","复兴门",1.8],["复兴门","长椿街",1.2],["长椿街","宣武门",0.9],["宣武门","和平门",0.9],["和平门","前门",1.2],["前门","崇文门",1.6],["崇文门","北京站",1],["北京站","建国门",1],["建国门","朝阳门",1.8]["朝阳门","东四十条",1],["东四十条","东直门",0.8],["东直门","雍和宫",2.2],["雍和宫","安定门",0.8],["安定门","鼓楼大街",1.2],["鼓楼大街","积水潭",1.8],["积水潭","西直门",1.9],
	["安河桥北","北宫门",1.4],["北宫门","西苑",1.2],["西苑","圆明园",1.7],["圆明园","北大东门",1.3],["北大东门","中关村",0.9],["中关村","海淀黄庄",0.9],["海淀黄庄","人民大学",1],["人民大学","魏公村",1],["魏公村","国家图书馆",1.7],["国家图书馆","动物园",1.5],["动物园","西直门",1.4],["西直门","新街口",1],["新街口","平安里",1.1],["平安里","西四",1.1],["西四","灵境胡同",0.9],["灵境胡同","西单",1],["西单","宣武门",0.8],["宣武门","菜市口",1.1],["菜市口","陶然亭",1.2],["陶然亭","北京南站",1.6],["北京南站","马家堡",1.5],["马家堡","角门西",0.8],["角门西","公益西桥",1],
	["宋家庄","刘家窑",1.6],["刘家窑","蒲黄榆",0.9],["蒲黄榆","天坛东门",1.9],["天坛东门","磁器口",1.2],["磁器口","崇文门",0.9],["崇文门","东单",0.8],["东单","灯市口",0.9],["灯市口","东四",0.8],["东四","张自忠路",1],["张自忠路","北新桥",0.8],["北新桥","雍和宫",0.9],["雍和宫","和平里北桥",1.2],["和平里北桥","和平西桥",1],["和平西桥","惠新西街南口",1],["惠新西街南口","惠新西街北口",1.1],["惠新西街北口","大屯路东",3],["大屯路东","北苑路北",1.3],["北苑路北","立水桥南",1.3],["立水桥南","立水桥",1.3],["立水桥","天通苑南",1.5],["天通苑南","天通苑",1],["天通苑","天通苑北",0.9],
	["海淀五路居","慈寿寺",1.5],["慈寿寺","花园桥",1.4],["花园桥","白石桥南",1.1],["白石桥南","车公庄西",1.7],["车公庄西","车公庄",0.9],["车公庄","平安里",1.4],["平安里","北海北",1.3],["北海北","南锣鼓巷",1.3],["东四","朝阳门",1.4],["朝阳门","东大桥",1.7],["东大桥","呼家楼",0.8],["呼家楼","金台路",1.5],["金台路","十里堡",2],["十里堡","青年路",1.3],["青年路","褡裢坡",4],["褡裢坡","黄渠",1.2],["黄渠","常营",1.9],["常营","草房",1.4],["草房","物资学院",2.1],["物资学院","通州北关",2.5],["通州北关","北运河西",3],["北运河西","郝家府",0.9],["郝家府","东夏园",1.3],["东夏园","潞城",1.2],
	["北京西站","湾子",0,9],["湾子","达官营",0.7],["达官营","广安门内",1.9],["广安门内","菜市口",1.4],["菜市口","虎坊桥",0.9],["虎坊桥","珠市口",1.2],["珠市口","桥湾",0.9],["桥湾","磁器口",1],["磁器口","广渠门内",1.1],["广渠门内","广渠门外",1.3],["广渠门外","九龙山",2.6],["九龙山","大郊亭",0.8],["大郊亭","百子湾",0.9],["百子湾","化工",0.9],["化工","南楼梓庄",1.5],["南楼梓庄","欢乐谷景区",1.7],["欢乐谷景区","双合",3],["双合","焦化厂",1],
	["朱辛庄","育知路",2.3],["育知路","平西府",2],["平西府","回龙观东大街",2],["回龙观东大街","霍营",1.1],["霍营","育新",1.9],["育新","西小口",1.5],["西小口","永泰庄",1],["永泰庄","林翠桥",2.6],["林翠桥","森林公园南门",2.6],["森林公园南门","奥林匹克公园",1],["奥林匹克公园","奥体中心",1.7],["奥体中心","北土城",0.9],["北土城","安华桥",1],["安华桥","安德里北街",1.2],["安德里北街","鼓楼大街",1],["鼓楼大街","什刹海",1.2],["什刹海","南锣鼓巷",0.9],
	["郭公庄","丰台科技园",1.3],["丰台科技园","科怡路",0.8],["科怡路","丰台南路",1.6],["丰台南路","丰台东大街",1.6],["丰台东大街","七里庄",1.3],["七里庄","六里桥",1.8],["六里桥","六里桥东",1.3],["六里桥东","北京西站",1.2],["北京西站","军事博物馆",1.4],["军事博物馆","白堆子",1.9],["白堆子","白石桥南",0.9],["白石桥南","国家图书馆",1.1],
	["巴沟","苏州街",1.1],["苏州街","海淀黄庄",1],["海淀黄庄","知春里",1],["知春里","知春路",1.1],["知春路","西土城",1.1],["西土城","牡丹园",1.3],["牡丹园","健德门",1],["健德门","北土城",1],["北土城","安贞门",1],["安贞门","惠新西街南口",1],["惠新西街南口","芍药居",1.7],["芍药居","太阳宫",1],["太阳宫","三元桥",1.8],["三元桥","亮马桥",1.5],["亮马桥","农业展览馆",0.9],["农业展览馆","团结湖",0.9],["团结湖","呼家楼",1.2],["呼家楼","金台夕照",0.7],["金台夕照","国贸",0.8],["国贸","双井",1.8],["双井","劲松",1],["劲松","潘家园",1],["潘家园","十里河",1],["十里河","分钟寺",1.8],["分钟寺","成寿寺",1],["成寿寺","宋家庄",1.7],["宋家庄","石榴庄",1,3],["石榴庄","大红门",1.1],["大红门","角门东",1.3],
	["角门东","角门西",1.3],["角门西","草桥",1.7],["草桥","纪家庙",1.5],["纪家庙","首经贸",1.1],["首经贸","丰台站",1.7],["丰台站","泥洼",0.9],["泥洼","西局",0.7],["西局","六里桥",1.6],["六里桥","莲花桥",2.4],["莲花桥","公主坟",1],["公主坟","西钓鱼台",2.4],["西钓鱼台","慈寿寺",1.2],["慈寿寺","车道沟",1.6],["车道沟","长春桥",1.2],["长春桥","火器营",1],["火器营","巴沟",1.5],
	["东直门","柳芳",1.8],["柳芳","光熙门",1.1],["光熙门","芍药居",1.1],["芍药居","望京西",6.7],["望京西","北苑",2.3],["北苑","立水桥",2.3],["立水桥","霍营",4.8],["霍营","回龙观",2.1],["回龙观","龙泽",1.4],["龙泽","西二旗",3.6],["西二旗","上地",2.5],["上地","五道口",4.9],["五道口","知春路",1.8],["知春路","大钟寺",1.2],["大钟寺","西直门",2.8],
	["张郭庄","园博园",1.3],["园博园","大瓦窑",4],["大瓦窑","郭庄子",1.2],["郭庄子","大井",2],["大井","七里庄",1.6],["七里庄","西局",0.8],
	["俸伯","顺义",2.44],["顺义","石门",1.33],["石门","南发信",2.71],["南发信","后沙峪",4.58],["后沙峪","花梨坎",3.35],["花梨坎","国展",1.62],["国展","孙河",3.39],["孙河","马泉营",3.3],["马泉营","崔各庄",2],["崔各庄","望京",4],["望京","望京西",1.76],["望京西","关庄",2.1],["关庄","大屯路东",1.1],["大屯路东","安立路",0.94],["安立路","奥林匹克公园",1.37],["奥林匹克公园","北沙滩",2],["北沙滩","六道口",1.34],["六道口","清华东路西口",1.14]
]


//菜单级联
function getStartStation(){
	var startLine = document.getElementById("startLine");
	var startStation = document.getElementById("startStation");	
	//获取1,2级菜单id
	var add = [].concat(stationData[startLine.value]);
	startStation.length=0;
	//清空二级菜单
	for (var i = 0; i < add.length; i++) {
		var str = new Option();
		str.text = add[i];
		startStation.add(str);
		//text的值添加到二级select中
	};
	
}

function getEndStation(){
	var endLine = document.getElementById("endLine");
	var endStation =document.getElementById("endStation");
	var add = [].concat(stationData[endLine.value]);
	endStation.length=0;
	for (var i = 0; i < add.length; i++) {
		var str = new Option();
		str.text = add[i];
		endStation.add(str);
	};
}

function getSubwayData(){
	var startStation = document.getElementById("startStation");
	var endStation = document.getElementById("endStation");
	var fare = document.getElementById("fare")
	var distance = document.getElementById("distance");
	//获取当前select的元素，这里用到selectIndex属性
	origin = startStation.options[startStation.selectedIndex].text;
	target = endStation.options[endStation.selectedIndex].text;
	/*if (origin == target) {
		fare.value = "3";
		distance.value = "0";
	} else{*/
		distance.value = dijkstra.shortest(origin,target).toFixed(1);
		fare.value = caleFare(distance.value);
	//};
}
//对传入的距离 计算fare 起步6公里内每人次3元，6-12公里每人次4元，12-32公里每10公里加1元，32公里以上每20公里加1元，票价不封顶
function caleFare(distance){
	if(distance<=6) return  3;
	if(distance<=12) return 4;
	if(distance<=32) return 4+ Math.ceil((distance-12)/10);
	else return 6+ Math.ceil((distance-32)/20)
}
//初始化算法
function initDijkstra(){
	dijkstra.addChart(chartData);
}

initDijkstra();