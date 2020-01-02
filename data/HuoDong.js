//超过此数量折叠，0为永不折叠
var maxHide=0;
//活动名，开始时间，结束时间
//公主双倍为固定格式
var eventList=[
['元旦限定+元日采竹','01/01/2019 05:00','01/10/2019 23:59'],
['大喵制衣·暖椿+特惠礼包','01/02/2019 05:00','01/08/2019 23:59'],
['公主2/3/6/9/11/15/17/18/卷二第1章双倍+萤光复刻·命运双生','01/04/2019 05:00','01/06/2019 23:59'],
['小屋复刻·流音听雨榭','01/04/2019 05:00','01/13/2019 23:59'],
['大喵制衣·魔影之魅+特惠礼包','01/09/2019 05:00','01/15/2019 23:59'],
['公主1/2/4/5/10/12/14/16/卷二第3章双倍','01/11/2019 05:00','01/13/2019 23:59'],
['风旅吟游','01/11/2019 05:00','01/17/2019 23:59'],
['复开·倾心回忆+誓言礼包','01/14/2019 05:00','01/20/2019 23:59'],
['大喵制衣·元气悠游','01/16/2019 05:00','01/22/2019 23:59'],
['公主1/7/8/9/13/15/18/19/卷二第2章双倍+萤光复刻·碧霄吟','01/18/2019 05:00','01/20/2019 23:59'],
['小屋·春之印象诗+首充福利','01/18/2019 05:00','01/24/2019 23:59'],
['大喵制衣·青鸾有信','01/23/2019 05:00','01/31/2019 23:59'],
['公主2/3/5/6/9/11/12/13/17双倍','01/25/2019 05:00','01/27/2019 23:59'],
['云空之境','01/25/2019 05:00','02/10/2019 23:59'],
['每日红包+好友红包+新春限时福包+美丽新世界+公主不限购买次数+祈愿福袋+云霄之梦','01/25/2019 05:00','02/17/2019 23:59'],
['抢红包','01/28/2019 12:00','01/28/2019 13:00'],
['星法法专栏','01/29/2019 05:00','02/04/2019 23:59'],
['芳草绘春','01/29/2019 05:00','02/07/2019 23:59'],
['公主级三倍+萤光复刻·回忆花火','02/01/2019 05:00','02/03/2019 23:59'],
['小屋复刻·晨露花中梦','02/01/2019 05:00','02/07/2019 23:59'],
['大喵制衣·冰风战歌+新春助力礼包+累消体力有礼','02/01/2019 05:00','02/13/2019 23:59'],
['星光币双倍','02/04/2019 05:00','02/07/2019 23:59'],
['抢红包','02/04/2019 12:00','02/04/2019 13:00'],
['登录送春节限定套装+新年祈愿签','02/05/2019 05:00','02/11/2019 23:59'],
['公主级三倍','02/08/2019 05:00','02/10/2019 23:59'],
['复刻·四神之战','02/08/2019 05:00','02/17/2019 23:59'],
['钟情舞曲','02/10/2019 05:00','02/16/2019 23:59'],
['抢红包','02/10/2019 12:00','02/10/2019 13:00'],
['复开·倾心回忆+誓言礼包','02/14/2019 05:00','02/20/2019 23:59'],
['大喵制衣·黑天鹅+特惠礼包','02/14/2019 05:00','02/21/2019 23:59'],
['小屋复刻·惊情古堡','02/14/2019 05:00','02/23/2019 23:59'],
['公主1/2/5/6/10/11/14/16/19双倍','02/15/2019 05:00','02/17/2019 23:59'],
['抢红包','02/16/2019 12:00','02/16/2019 13:00'],
['花灯映月','02/17/2019 05:00','02/26/2019 23:59'],
['元宵限定礼包+复刻·家族萌宠','02/18/2019 05:00','02/21/2019 23:59'],
['公主2/4/7/8/9/13/15/16/18双倍+萤光复刻·长夜伊始','02/22/2019 05:00','02/24/2019 23:59'],  
['超值考拉礼包+梦想橱窗+复刻·招财福喵+大喵制衣·探险之旅','02/22/2019 05:00','02/28/2019 23:59'],
['公主3/5/6/9/11/12/14/15/17双倍+星光币双倍','03/01/2019 05:00','03/03/2019 23:59'], 
['累消钻石送套装+回溯繁星+星辰石礼包','03/01/2019 05:00','03/07/2019 23:59'],
['大喵制衣·斯温妮小姐+特惠礼包','03/01/2019 05:00','03/10/2019 23:59'],
['青葱一元购','03/01/2019 05:00','03/14/2019 23:59'],
['小屋复开·花与爱恋时光','03/04/2019 05:00','03/10/2019 23:59'],
['公主1/2/3/6/7/10/12/14/16双倍+萤光复刻·舞夜前奏曲','03/08/2019 05:00','03/10/2019 23:59'], 
['梦幻甜点','03/08/2019 05:00','03/14/2019 23:59'],
['累充福利','03/08/2019 05:00','03/26/2019 23:59'],
['大喵制衣·魔力音符','03/11/2019 05:00','03/17/2019 23:59'],
['小屋·童话甜点屋+复开·倾心回忆+誓言礼包','03/13/2019 05:00','03/19/2019 23:59'],
['公主1/2/4/8/9/13/15/17/19+星光币双倍','03/15/2019 05:00','03/17/2019 23:59'], 
['向阳之旅','03/15/2019 05:00','03/28/2019 23:59'],
['大喵制衣·夕月潇湘+特惠礼包','03/18/2019 05:00','03/24/2019 23:59'],
['奇妙邂逅','03/20/2019 05:00','03/26/2019 23:59'],
['公主3/4/6/9/11/12/14/17/18双倍+萤光复刻·呦呦鹿鸣','03/22/2019 05:00','03/24/2019 23:59'], 
['大喵制衣·蔷薇香氛','03/25/2019 05:00','03/31/2019 23:59'],
['公主1/2/5/7/10/11/12/15/18+星光币双倍','03/29/2019 05:00','03/31/2019 23:59'], 
['充值送·萌犬守护+青葱一元购','03/29/2019 05:00','04/07/2019 23:59'],
['复刻·奇迹演唱会+萤光复刻·不灭初心','03/29/2019 05:00','04/04/2019 23:59'],
['恶魔玩笑+大喵制衣·潮汐永航+特惠礼包+小屋复刻·猫王国的茶会','04/01/2019 05:00','04/07/2019 23:59'],
['联邦商贸·旅人倒计时礼包','04/01/2019 05:00','04/16/2019 23:59'],
['乘风访春','04/04/2019 05:00','04/17/2019 23:59'],
['公主1/2/4/7/8/9/13/14/16双倍','04/05/2019 05:00','04/07/2019 23:59'], 
['联邦商贸复刻·野餐摆件礼包','04/05/2019 05:00','04/09/2019 23:59'], 
['大喵制衣·兔萝萝+特惠礼包+复开·倾心回忆','04/08/2019 05:00','04/14/2019 23:59'],
['奇妙魔法+小屋复刻·帆与海之诗','04/10/2019 05:00','04/16/2019 23:59'],
['返利狂欢+往期充值复刻','04/10/2019 05:00','04/25/2019 23:59'],
['公主3/5/6/7/8/11/12/15/19双倍+萤光复刻·千机变','04/12/2019 05:00','04/14/2019 23:59'], 
['大喵制衣·游鲤图','04/15/2019 05:00','04/21/2019 23:59'],
['公主1/2/5/9/10/14/15/16/18双倍','04/19/2019 05:00','04/21/2019 23:59'], 
['星灵探秘+2019复活节限定+小屋·星期天的街角','04/19/2019 05:00','04/25/2019 23:59'],
['大喵制衣·月下离别曲+特惠礼包','04/22/2019 05:00','04/29/2019 23:59'],
['公主2/4/5/7/8/12/13/16/17+星光币双倍','04/26/2019 05:00','04/28/2019 23:59'],
['古社夜话+雅意弦音礼包','04/29/2019 05:00','05/05/2019 23:59'],
['累充送·夏日烟火','04/29/2019 05:00','05/12/2019 23:59'],
['初音未来+大喵制衣·墨色喵语染色+小屋复刻·近未来回响','04/30/2019 05:00','05/06/2019 23:59'],
['召回好友·梦旅同行','04/30/2019 05:00','05/20/2019 23:59'],
['公主1/3/6/8/9/11/13/17/19双倍','05/03/2019 05:00','05/05/2019 23:59'],
['月下绮遇','05/06/2019 05:00','05/20/2019 23:59'],
['大喵制衣·绮梦下午茶','05/07/2019 05:00','05/16/2019 23:59'],
['公主2/3/5/6/7/10/14/15/卷二第1章双倍+萤光复刻·碧霄吟','05/10/2019 05:00','05/12/2019 23:59'],
['时空派对+随机体力礼包','05/10/2019 05:00','05/19/2019 23:59'],
['小屋·晨光之邸','05/10/2019 05:00','05/23/2019 23:59'],
['复开·倾心回忆+誓言礼包','05/13/2019 05:00','05/19/2019 23:59'],
['全服登录奖励','05/15/2019 05:00','05/26/2019 23:59'],
['公主级三倍','05/17/2019 05:00','05/20/2019 23:59'],
['大喵制衣·白樱恋歌+特惠礼包+公主级不限购买次数','05/17/2019 05:00','05/27/2019 23:59'],
['风语馈赠+每日钻石赠礼+万象之汐+钻石特权周礼盒+累充送套装','05/17/2019 05:00','06/02/2019 23:59'],
['四周年福利套','05/20/2019 05:00','05/26/2019 23:59'],
['苜蓿奇遇','05/20/2019 05:00','05/29/2019 23:59'],
['星光币双倍','05/21/2019 05:00','05/23/2019 23:59'],
['公主级三倍','05/24/2019 05:00','05/27/2019 23:59'],
['米妮和米奇','05/24/2019 05:00','05/30/2019 23:59'],
['大喵制衣·部落图腾','05/28/2019 05:00','06/02/2019 23:59'],
['公主1/4/6/7/8/10/11/14/16双倍+萤光复刻·长夜伊始','05/31/2019 05:00','06/02/2019 23:59'],
['小屋复刻·春之印象诗','05/31/2019 05:00','06/06/2019 23:59'],
['童心玩偶','05/31/2019 05:00','06/09/2019 23:59'],
['大喵制衣·望海潮黄色款+特惠礼包','06/03/2019 05:00','06/12/2019 23:59'],
['执笔临帖','06/05/2019 05:00','06/13/2019 23:59'],
['琼林翰墨','06/05/2019 05:00','07/04/2019 23:59'],
['公主2/3/5/7/9/12/13/15/17双倍','06/06/2019 05:00','06/09/2019 23:59'],
['复刻·秋日松果曲','06/06/2019 05:00','06/12/2019 23:59'],
['端午邂逅史丢丢','06/06/2019 05:00','06/15/2019 23:59'],
['复开·倾心回忆','06/10/2019 05:00','06/16/2019 23:59'],
['大喵制衣·南瓜夜怪谈','06/13/2019 05:00','06/18/2019 23:59'],
['公主1/4/6/8/11/12/16/18/19双倍','06/14/2019 05:00','06/16/2019 23:59'],
['时光回溯+复刻·岁月集影+充值送套装','06/14/2019 05:00','06/23/2019 23:59'],
['夜影行动','06/17/2019 05:00','06/23/2019 23:59'],
['大喵制衣·冯莱茵夫人+特惠礼包','06/19/2019 05:00','06/25/2019 23:59'],
['公主2/3/6/7/8/10/14/17/18双倍+萤光复刻·回忆花火','06/21/2019 05:00','06/23/2019 23:59'],
['小屋复刻·晨露花中梦','06/21/2019 05:00','06/27/2019 23:59'],
['禁忌卷轴+礼包','06/28/2019 05:00','07/04/2019 23:59'],
['累充福利','06/28/2019 05:00','07/18/2019 23:59'],
['大喵制衣·颈饰浮世尘埃+特惠礼包','07/03/2019 05:00','07/11/2019 23:59'],
['公主2/3/5/6/7/8/13/14/18双倍+萤光复刻·舞夜前奏曲','07/05/2019 05:00','07/07/2019 23:59'],
['星法法专栏+累消心意劵+复刻·山海云荒','07/05/2019 05:00','07/11/2019 23:59'],
['奇妙侦探社','07/05/2019 05:00','07/25/2019 23:59'],
['公主1/4/5/6/9/10/11/16/17双倍','07/12/2019 05:00','07/14/2019 23:59'],
['圣洁赞美诗+大喵制衣·涂鸦风潮','07/12/2019 05:00','07/18/2019 23:59'],
['复开·倾心回忆','07/15/2019 05:00','07/21/2019 23:59'],
['大喵制衣·龙虾小姐+特惠礼包+小屋复刻·冒险者港湾','07/19/2019 05:00','07/25/2019 23:59'],
['公主1/2/3/8/9/12/14/15/19双倍','07/19/2019 05:00','07/21/2019 23:59'],
['公主2/5/6/7/12/13/17/18/卷二第1章+星光币双倍+萤光复刻·呦呦鹿鸣','07/26/2019 05:00','07/28/2019 23:59'],
['大喵制衣·朝旅歌吟','07/26/2019 05:00','08/01/2019 23:59'],
['迪士尼公主限定阁+累充福利+游光长廊','07/26/2019 05:00','08/04/2019 23:59'],
['公主1/3/4/6/9/10/11/14/19双倍','08/02/2019 05:00','08/04/2019 23:59'],
['鸾梦七夕+大喵制衣·蓝星糖果派+小屋复刻·岚烟雪中阁','08/02/2019 05:00','08/08/2019 23:59'],
['萤光·霓虹灯下的谎言','08/07/2019 05:00','08/11/2019 23:59'],
['公主2/5/7/8/12/13/14/16/18双倍','08/09/2019 05:00','08/11/2019 23:59'],
['大喵制衣·遥狮守望+3元特惠礼包','08/09/2019 05:00','08/15/2019 23:59'],
['旋阶之庭+九日夜话','08/09/2019 05:00','08/18/2019 23:59'],
['累充福利','08/09/2019 05:00','09/05/2019 23:59'],
['复开·倾心回忆','08/12/2019 05:00','08/18/2019 23:59'],
['公主级三倍','08/16/2019 05:00','08/18/2019 23:59'],
['大喵制衣·隽永弦歌+3元特惠礼包','08/16/2019 05:00','08/25/2019 23:59'],
['星光币双倍','08/19/2019 05:00','08/22/2019 23:59'],
['拾光之屿+梦想八音盒','08/21/2019 05:00','08/27/2019 23:59'],  
['公主级三倍','08/23/2019 05:00','08/25/2019 23:59'],
['大喵制衣·风暴驯服者','08/26/2019 05:00','09/01/2019 23:59'],
['公主1/3/5/6/9/10/15/17/19双倍','08/30/2019 05:00','09/01/2019 23:59'],
['FUTURE CIRCUS','08/30/2019 05:00','09/05/2019 23:59'],
['大喵制衣·凤蝶迷踪染色款+特惠礼包','09/02/2019 05:00','09/08/2019 23:59'],
['公主2/5/7/10/12/15/16/18/卷二第2章+星光币双倍+萤光复刻·千机变','09/06/2019 05:00','09/08/2019 23:59'],
['小屋·蒙特图斯神殿','09/06/2019 05:00','09/12/2019 23:59'],
['月卡套','09/06/2019 05:00','09/15/2019 23:59'],
['星河幻梦+大喵制衣·少女的祈祷','09/09/2019 05:00','09/15/2019 23:59'],
['中秋邂逅史丢丢','09/12/2019 05:00','09/18/2019 23:59'],
['公主1/4/6/7/8/11/13/14/19双倍','09/13/2019 05:00','09/15/2019 23:59'],
['复开·倾心回忆','09/13/2019 05:00','09/18/2019 23:59'],
['大喵制衣·时光收藏家+3元特惠礼包','09/16/2019 05:00','09/22/2019 23:59'],
['黑猫传说+限时特惠专场+时光回溯','09/19/2019 05:00','09/25/2019 23:59'],
['公主2/3/5/8/10/12/15/16/18双倍','09/20/2019 05:00','09/22/2019 23:59'],
['大喵制衣·雪域长谣','09/23/2019 05:00','09/28/2019 23:59'],
['回溯繁星','09/23/2019 05:00','09/29/2019 23:59'],
['萤光复刻·命运双生','09/26/2019 05:00','09/28/2019 23:59'],
['荒漠韵律','09/26/2019 05:00','10/05/2019 23:59'],
['公主1/2/3/6/7/9/10/13/17+星光币双倍','09/27/2019 05:00','09/29/2019 23:59'],
['花园谧语','09/29/2019 05:00','10/08/2019 23:59'],
['累充套装+一元购','09/29/2019 05:00','10/10/2019 23:59'],
['复开·时光流转之庭','10/05/2019 05:00','10/11/2019 23:59'],
['破晓之战·黑白诡计','10/05/2019 05:00','10/15/2019 23:59'],
['大喵制衣·夕醉蝶梦','10/07/2019 05:00','10/13/2019 23:59'],
['公主1/2/6/9/11/12/14/15/17双倍+萤光复刻·碧霄吟','10/11/2019 05:00','10/13/2019 23:59'],
['返利狂欢','10/11/2019 05:00','10/27/2019 23:59'],
['拂晓速报','10/13/2019 05:00','10/20/2019 23:59'],
['复开·倾心回忆+大喵制衣·茶歇时光+特惠礼包','10/14/2019 05:00','10/20/2019 23:59'],
['午后童话+甜蜜点心限定','10/17/2019 05:00','10/23/2019 23:59'],
['公主3/5/7/10/12/15/18/19/卷二第1章+星光币双倍','10/18/2019 05:00','10/20/2019 23:59'],
['大喵制衣·圣诞手偶剧','10/21/2019 05:00','10/27/2019 23:59'],
['公主1/4/5/6/7/11/13/14/16双倍+萤光复刻·长夜伊始','10/25/2019 05:00','10/27/2019 23:59'],
['小屋复刻·奇妙博物馆','10/24/2019 05:00','10/30/2019 23:59'],
['惊惧之夜+大喵制衣·重工机械+特惠礼包','10/28/2019 05:00','11/03/2019 23:59'],
['档位充值送+累充福利+惊惧派对礼包','10/28/2019 05:00','11/10/2019 23:59'],
['公主2/3/4/8/9/11/13/15/19双倍','11/01/2019 05:00','11/03/2019 23:59'],
['复刻·魑魅魍魉','11/01/2019 05:00','11/07/2019 23:59'],
['侠义无双','11/01/2019 05:00','11/10/2019 23:59'],
['四季遐音','11/08/2019 05:00','11/14/2019 23:59'],
['大喵制衣·晴日小雏菊+复刻·倾心回忆','11/11/2019 05:00','11/17/2019 23:59'],
['返利狂欢+活跃福利商店+超值返利商店+往期充值复刻','11/11/2019 05:00','11/26/2019 23:59'],
['公主2/4/6/7/9/11/12/17/19双倍+萤光复刻·回忆花火','11/15/2019 05:00','11/17/2019 23:59'],
['小屋·暖暖的回忆小屋','11/15/2019 05:00','11/21/2019 23:59'],
['繁星之境','11/15/2019 05:00','11/26/2019 23:59'],
['大喵制衣·智慧苍穹+特惠礼包','11/18/2019 05:00','11/24/2019 23:59'],
['异域风采商店+芳草碧色','11/20/2019 05:00','11/26/2019 23:59'],
['公主1/2/3/6/8/13/14/15/18双倍','11/22/2019 05:00','11/24/2019 23:59'],
['大喵制衣·福运滚滚+复刻·血月初拥','11/25/2019 05:00','12/01/2019 23:59'],
['公主+星光币双倍+萤光复刻·舞夜前奏曲','11/29/2019 05:00','12/01/2019 23:59'],
['小屋复刻·童话甜点屋','11/29/2019 05:00','12/05/2019 23:59'],
['温馨献礼','11/29/2019 05:00','12/08/2019 23:59'],
['档位充值送+累计充值福利','11/29/2019 05:00','12/15/2019 23:59'],
['剧院惊喜派对+大喵制衣·和平祷告+特惠礼包','12/02/2019 05:00','12/08/2019 23:59'],
['公主1/3/4/5/9/10/12/15/16双倍','12/06/2019 05:00','12/08/2019 23:59'],
['萤光复刻·哟哟鹿鸣','12/09/2019 05:00','12/11/2019 23:59'],
['特惠礼包+小屋复刻·岚烟雪中阁+复刻·倾心回忆','12/09/2019 05:00','12/15/2019 23:59'],
['大喵制衣·江河万里','12/09/2019 05:00','12/19/2019 23:59'],
['公主2/3/6/7/8/13/14/18/19双倍','12/13/2019 05:00','12/15/2019 23:59'],
['危险实验室','12/13/2019 05:00','12/19/2019 23:59'], 
['圣诞限时登录送+奇趣圣诞礼包','12/17/2019 05:00','12/24/2019 23:59'],  
['史丢丢的礼物','12/17/2019 05:00','12/29/2019 23:59'], 
['迪士尼冰雪奇缘阁+冰雪奇缘主题礼包+流光长廊+累计充值福利','12/25/2019 05:00','01/03/2020 23:59'], 
['公主1/3/4/6/7/9/12/17/18双倍','12/27/2019 05:00','12/29/2019 23:59'],
['大喵制衣·上元灯花宴','12/27/2019 05:00','01/02/2020 23:59'],
['萤光复刻·千机变','12/31/2019 05:00','01/02/2020 23:59'],
['小屋复刻·春之印象诗','12/31/2019 05:00','01/06/2020 23:59'],
['奇妙侦探社','12/31/2019 05:00','01/19/2020 23:59'],
];
