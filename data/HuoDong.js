//超过此数量折叠，0为永不折叠
var maxHide=0;
//活动名，开始时间，结束时间
//公主双倍为固定格式
var eventList=[
['清凉一元购','06/22/2018 05:00','07/03/2018 23:59'],
['大喵制衣·人偶之心','06/25/2018 05:00','07/01/2018 23:59'],
['童话梦乡+充值送·星光小夜曲+签到送·流光代码','06/27/2018 05:00','07/03/2018 23:59'],
['公主2/3/4/6/7/9/10/13/16双倍+萤光复开·呦呦鹿鸣','06/29/2018 05:00','07/01/2018 23:59'],
['大喵制衣·魔力星','07/02/2018 05:00','07/12/2018 23:59'],
['弦外之音','07/04/2018 05:00','07/18/2018 23:59'],
['公主1/2/5/6/8/12/14/18/19+星光币双倍','07/06/2018 05:00','07/08/2018 23:59'],
['小屋复开·璀璨圣诞夜','07/06/2018 05:00','07/12/2018 23:59'],
['晨星启示+充值送·晴天娃娃+复开·招财福喵','07/09/2018 05:00','07/15/2018 23:59'],
['复开·倾心回忆+誓言礼包','07/12/2018 05:00','07/18/2018 23:59'],
['公主2/4/9/11/13/14/16/17/卷二第1章双倍+萤光复开·千机变','07/13/2018 05:00','07/15/2018 23:59'],
['大喵制衣·油画家染色款+特惠礼包','07/13/2018 05:00','07/22/2018 23:59'],
['累消心意劵福利','07/17/2018 05:00','07/23/2018 23:59'],
['超维战场·了解活动','07/19/2018 5:00','07/20/2018 5:00'],
['超维战场·报名、捐资','07/20/2018 5:00','07/22/2018 5:00'],
['超维战场·预搭配、演习','07/20/2018 5:00','07/22/2018 9:00'],
['超维战场·自动搭配（19点前支援）','07/22/2018 9:00','07/22/2018 21:00'],
['超维战场·兑换','07/22/2018 21:00','07/29/2018 23:59'],
['公主3/5/6/7/8/10/12/15/卷二第1章双倍+萤光复开·命运双生','07/20/2018 05:00','07/22/2018 23:59'],
['限时首冲福利','07/23/2018 05:00','07/26/2018 23:59'],
['大喵制衣·滑板少女','07/23/2018 05:00','08/01/2018 23:59'],
['星光币双倍','07/27/2018 05:00','07/29/2018 23:59'],
['星法法专栏','07/27/2018 05:00','08/02/2018 23:59'],
['山海云荒+登录送设计图+累消体力送礼+照片墙+清凉一元购','07/27/2018 05:00','08/05/2018 23:59'],
['累充福利','07/27/2018 05:00','09/06/2018 23:59'],
['大喵制衣·碧潭竹影','08/02/2018 05:00','08/09/2018 23:59'],
['公主1/2/6/7/9/13/15/17/19双倍+萤光复开·碧霄吟','08/03/2018 05:00','08/05/2018 23:59'],
['花火大会+随机体力礼包','08/03/2018 05:00','08/10/2018 23:59'],
['小屋复开·奇妙博物馆','08/08/2018 05:00','08/14/2018 23:59'],
['七夕·邂逅史丢丢','08/08/2018 05:00','08/17/2018 23:59'],
['公主1/4/5/9/11/14/16/18/卷二第2章+星光币双倍+萤光复开·长夜伊始','08/10/2018 05:00','08/12/2018 23:59'],
['大喵制衣·红莓绢蝶+特惠礼包','08/10/2018 05:00','08/16/2018 23:59'],
['狐嫁盛典+复开·倾心回忆+誓言礼包','08/13/2018 05:00','08/19/2018 23:59'],
['公主3/8/10/11/12/13/15/18/19双倍','08/17/2018 05:00','08/19/2018 23:59'],
['大喵制衣·月之咒语染色款+特惠礼包','08/17/2018 05:00','08/26/2018 23:59'],
['少女与狮','08/20/2018 05:00','08/26/2018 23:59'],
['复开·魑魅魍魉','08/23/2018 05:00','08/30/2018 23:59'],
['公主1/2/3/6/7/9/13/15/17+星光币双倍','08/24/2018 05:00','08/26/2018 23:59'],
['萤光复开·回忆花火','08/27/2018 05:00','08/29/2018 23:59'],
['大喵制衣·蛇纹主题部件+特惠礼包','08/27/2018 05:00','09/02/2018 23:59'],
['奇妙侦探社','08/29/2018 05:00','09/27/2018 23:59'],  
['公主1/4/5/8/11/14/16/18/19双倍','08/31/2018 05:00','09/02/2018 23:59'],
['命运回响','08/31/2018 05:00','09/06/2018 23:59'], 
['小屋复开·猫王国的茶会','09/03/2018 05:00','09/09/2018 23:59'],
['大喵制衣·荒原兽语+公主级不限购买次数','09/03/2018 05:00','09/11/2018 23:59'],
['公主级三倍+星光币双倍','09/07/2018 05:00','09/09/2018 23:59'],
['萤光·不灭初心+补给礼包+野餐摆件礼包复刻','09/07/2018 05:00','09/11/2018 23:59'],
['清凉一元购','09/07/2018 05:00','09/16/2018 23:59'],
['复开·倾心回忆+誓言礼包+累消心意券福利','09/10/2018 05:00','09/16/2018 23:59'],
['白银战歌·了解活动','09/13/2018 5:00','09/14/2018 5:00'],
['白银战歌·报名、捐资','09/14/2018 5:00','09/16/2018 5:00'],
['白银战歌·预搭配、演习','09/14/2018 5:00','09/16/2018 9:00'],
['白银战歌·自动搭配（19点前支援）','09/16/2018 9:00','09/16/2018 21:00'],
['白银战歌·兑换','09/16/2018 21:00','09/23/2018 23:59'],
['大喵制衣·思念的颜色+特惠礼包','09/12/2018 05:00','09/20/2018 23:59'],
['充值送·魔力音符','09/13/2018 05:00','09/25/2018 23:59'],
['公主3/5/6/8/9/12/13/14/15双倍+萤光复开·舞夜前奏曲','09/14/2018 05:00','09/16/2018 23:59'],
['回溯繁星+星辰石礼包','09/17/2018 05:00','09/23/2018 23:59'],
['香满月夕','09/19/2018 05:00','09/25/2018 23:59'],
['公主2/4/7/8/10/12/17/18/19双倍','09/21/2018 05:00','09/23/2018 23:59'],
['大喵制衣·剑气凌霜+特惠礼包','09/21/2018 05:00','09/25/2018 23:59'],
['小屋复开·流音听雨榭','09/21/2018 05:00','09/30/2018 23:59'],
['大喵制衣·枫叶温度','09/26/2018 05:00','10/02/2018 23:59'],
['公主1/4/5/6/8/11/14/16/18+星光币双倍+萤光复开·呦呦鹿鸣','09/28/2018 05:00','09/30/2018 23:59'],
['复刻·夏沫海歌','09/28/2018 05:00','10/4/2018 23:59'],
['累充福利','09/28/2018 05:00','10/16/2018 23:59'],
['月下绮遇','09/28/2018 05:00','10/27/2018 23:59'],
['蝶变之谜+假期助力礼包','10/01/2018 05:00','10/07/2018 23:59'],
['大喵制衣·烈火之歌红色+特惠礼包','10/03/2018 05:00','10/14/2018 23:59'],
['萤光复开·千机变','10/05/2018 05:00','10/07/2018 23:59'],
['星法法专栏+小屋·近未来回响','10/05/2018 05:00','10/11/2018 23:59'],
['复开·倾心回忆+誓言礼包','10/08/2018 05:00','10/14/2018 23:59'],
['公主1/3/6/7/9/12/13/15/19双倍','10/12/2018 05:00','10/14/2018 23:59'],
['孤岛潮汐','10/10/2018 05:00','10/16/2018 23:59'],
['霜露一元购','10/10/2018 05:00','10/24/2018 23:59'],
['大喵制衣·苍穹之鹰+特惠礼包','10/15/2018 05:00','10/21/2018 23:59'],
['街头定格+联邦商贸限时上架+小屋复开·帆与海之诗','10/18/2018 05:00','10/24/2018 23:59'],
['公主2/5/8/10/12/13/14/17/19+星光币双倍+萤光复开·碧霄吟','10/19/2018 05:00','10/21/2018 23:59'],
['大喵制衣·复古时尚染色+特惠礼包','10/22/2018 05:00','10/28/2018 23:59'],
['南瓜派对+6元充值套+累充万圣散件','10/25/2018 05:00','10/31/2018 23:59'],
['公主1/2/5/7/10/11/16/17/18双倍','10/26/2018 05:00','10/28/2018 23:59'],
['大喵制衣·夜色星纱染色+特惠礼包','10/29/2018 05:00','11/08/2018 23:59'],
['累充·狄安娜之梦','11/01/2018 05:00','11/18/2018 23:59'],
['复刻·血月初拥+小屋复开·岚烟雪中阁','11/01/2018 05:00','11/07/2018 23:59'],
['返利狂欢+超值返利兑换','11/01/2018 05:00','11/28/2018 23:59'],
['公主3/6/7/9/11/12/13/15/16双倍+萤光复开·长夜伊始','11/02/2018 05:00','11/04/2018 23:59'],
['知识问答','11/05/2018 05:00','11/11/2018 23:59'],
['联邦商贸限时6元套','11/07/2018 05:00','11/18/2018 23:59'],
['双11超值献礼+雪原追迹','11/08/2018 05:00','11/14/2018 23:59'],
['公主2/4/8/10/12/13/14/15/19双倍','11/09/2018 05:00','11/11/2018 23:59'],
['大喵制衣·童星巡礼','11/09/2018 05:00','11/15/2018 23:59'],
['复刻·倾心回忆+誓言礼包','11/12/2018 05:00','11/18/2018 23:59'],
['复刻·永夜国之梦+小屋复刻·冒险者港湾','11/15/2018 05:00','11/21/2018 23:59'],
['签到送·蓝空回想','11/15/2018 05:00','11/22/2018 23:59'],
['公主1/2/5/7/10/11/17/19/卷二第3章双倍+萤光复刻·回忆花火','11/16/2018 05:00','11/18/2018 23:59'],
['大喵制衣·玄羽飞燕','11/16/2018 05:00','11/25/2018 23:59'],
['星法法专栏','11/19/2018 05:00','11/25/2018 23:59'],
['感恩倾情回馈+霜露一元购','11/19/2018 05:00','11/28/2018 23:59'],
['狩猎帆风+金锚勋章礼包','11/22/2018 05:00','11/28/2018 23:59'],
['星光币双倍','11/23/2018 05:00','11/25/2018 23:59'],
['大喵制衣·陆军少校染色+特惠礼包+回溯繁星+星辰石礼包','11/26/2018 05:00','12/02/2018 23:59'],
['公主级三倍+星光币双倍+萤光复刻·舞夜前奏曲','11/30/2018 05:00','12/02/2018 23:59'],
['累消送·黛羽风华','11/30/2018 05:00','12/05/2018 23:59'],
['甜蜜惊喜礼包+公主不限购买次数+小屋复刻·大喵的乐园+照片墙新赛季','11/30/2018 05:00','12/12/2018 23:59'],
['时光掠影','12/01/2018 05:00','12/12/2018 23:59'],
['大喵制衣·星之舞祭','12/03/2018 05:00','12/09/2018 23:59'],
['累充·钻石梦境+星雨祈愿','12/06/2018 05:00','12/12/2018 23:59'],
['公主级三倍+星光币双倍+萤光复刻·呦呦鹿鸣','12/07/2018 05:00','12/09/2018 23:59'],
['大喵制衣·性感丛林+特惠礼包+复刻·倾心回忆+誓言礼包','12/10/2018 05:00','12/16/2018 23:59'],
['浪漫纪行','12/12/2018 05:00','12/19/2018 23:59'],
['公主3/6/8/9/11/12/13/17/18双倍','12/14/2018 05:00','12/16/2018 23:59'],
['小屋复刻·璀璨平安夜','12/14/2018 05:00','12/20/2018 23:59'],
['圣诞限定礼包+圣诞一元购','12/14/2018 05:00','12/25/2018 23:59'],
['随机体力礼包','12/17/2018 05:00','12/19/2018 23:59'],
['大喵制衣·梦与星虹','12/17/2018 05:00','12/25/2018 23:59'],
['圣夜剧场','12/19/2018 05:00','12/25/2018 23:59'],
['充值送·雪域诗篇','12/19/2018 05:00','12/27/2018 23:59'],
['公主1/2/4/5/7/10/15/16/卷二第2章双倍+萤光复刻·不灭初心','12/21/2018 05:00','12/23/2018 23:59'],
['复刻·风林火山','12/22/2018 05:00','01/01/2019 23:59'],
['复刻·战魂灵兽礼包','12/22/2018 05:00','01/03/2019 23:59'],
['大喵制衣·落叶知音+特惠礼包','12/26/2018 05:00','01/01/2019 23:59'],
['公主1/5/7/8/11/12/13/14/19双倍+萤光复刻·千机变','12/28/2018 05:00','12/30/2018 23:59'],
['雀羽传福','12/28/2018 05:00','01/03/2019 23:59'],
['返利狂欢+复刻·千霓叠海','12/28/2018 05:00','01/17/2019 23:59'],
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
];
