//超过此数量折叠，0为永不折叠
var maxHide=0;
//活动名，开始时间，结束时间
var eventList=[
['安魂曲活动','4/8/2016 5:00','4/12/2016 23:59'],
['知识问答','4/15/2016 5:00','4/19/2016 23:59'],
['登录送套装','4/15/2016 0:00','4/15/2016 0:00'],
['公主5/10/11双倍','4/15/2016 5:00','4/17/2016 23:59'],
['第十三章','4/21/2016 5:00','4/21/2016 5:00'],
['公主3/10/11+星光币双倍','4/22/2016 5:00','4/24/2016 23:59'],
['音乐会活动','4/29/2016 5:00','5/3/2016 23:59'],
['公主1/4/6双倍','4/29/2016 5:00','5/2/2016 23:59'],
['公主2/7/9双倍','5/6/2016 5:00','5/8/2016 23:59'],
['公主3/8/11+星光币双倍','5/13/2016 5:00','5/15/2016 23:59'],
['公主1/6/10双倍','5/20/2016 5:00','5/22/2016 23:59'],
['公主2/5/9+星光币双倍','5/27/2016 5:00','5/29/2016 23:59'],
['每日红包+周年庆任务','5/13/2016 5:00','5/29/2016 23:59'],
['新阁三折','5/13/2016 5:00','5/29/2016 23:59'],
['登录送套装','5/20/2016 0:00','5/20/2016 23:59'],
['分享送套装','5/13/2016 5:00','5/31/2016 23:59'],
['北地二选一','5/20/2016 5:00','5/26/2016 23:59'],
['公主4/7/11双倍','6/3/2016 5:00','6/5/2016 23:59'],
['端午节活动','6/8/2016 5:00','6/12/2016 23:59'],
['公主3/8/10+星光币双倍','6/9/2016 5:00','6/11/2016 23:59'],
['黑蔷薇之舞','6/17/2016 5:00','6/21/2016 23:59'],
['公主1/6/9双倍','6/17/2016 5:00','6/19/2016 23:59'],
['公主2/5/12+星光币双倍','6/24/2016 5:00','6/26/2016 23:59'],
['清凉一元购','6/17/2016 5:00','6/26/2016 23:29'],
['消费送金币体力','6/24/2016 5:00','6/30/2016 23:59'],
['公主4/7/9双倍+限时礼包','7/1/2016 5:00','7/3/2016 23:59'],
['满天繁星2','7/8/2016 5:00','7/14/2016 23:59'],
['公主1/6/10双倍','7/8/2016 5:00','7/10/2016 23:59'],
['公主5/8/11+星光币双倍','7/15/2016 5:00','7/17/2016 23:59'],
['知识问答','7/15/2016 5:00','7/21/2016 23:59'],
['公主3/7/12双倍','7/22/2016 5:00','7/24/2016 23:59'],
['医疗所之谜','7/22/2016 5:00','7/28/2016 23:59'],
['公主2/6/10双倍','7/29/2016 5:00','7/31/2016 23:59'],
['官博每日福利','7/29/2016 18:00','8/2/2016 23:59'],
['缘梦七夕','8/5/2016 5:00','8/9/2016 23:59'],
['公主1/4/9+星光币双倍','8/5/2016 5:00','8/7/2016 23:59'],
['公主3/5/7/8/11/12双倍','8/12/2016 5:00','8/14/2016 23:59'],
['夏沫海歌','8/12/2016 5:00','8/18/2016 23:59'],
['公主2/6/10+星光币双倍','8/19/2016 5:00','8/21/2016 23:59'],
['鹦鹉公主','8/25/2016 5:00','8/29/2016 23:59'],
['公主1/3/5/7/9/11双倍','8/25/2016 5:00','8/28/2016 23:59'],
['公主1/4/9/13+星光币双倍','9/2/2016 5:00','9/4/2016 23:59'],
['呦呦鹿鸣','9/2/2016 10:00','9/6/2016 23:59'],
['公主3/6/8/12双倍','9/9/2016 5:00','9/11/2016 23:59'],
['照片墙评选','9/7/2016 10:00','9/16/2016 23:59'],
['公主2/5/7/9/10/11双倍','9/15/2016 5:00','9/17/2016 23:59'],
['中秋月下翩跹舞','9/14/2016 5:00','9/20/2016 23:59'],
['知识问答','9/21/2016 5:00','9/27/2016 23:59'],
];
