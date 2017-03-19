SET NAMES 'utf8';
DROP DATABASE IF EXISTS yumaomoney;
CREATE DATABASE yumaomoney CHARSET=UTF8;
USE yumaomoney;

CREATE TABLE ym_item(
    iid INT PRIMARY KEY AUTO_INCREMENT,		/*主键*/
    yield FLOAT(5,2),				        /*年收益率*/
    name VARCHAR(64),				        /*项目名称*/
    deadline INT,					/*期限*/
    scale FLOAT(8,2),				        /*项目规模*/
    state VARCHAR(64),				        /*状态*/
    detail VARCHAR(4096)			        /*项目详情*/
);
INSERT INTO ym_item(iid,yield,name,deadline,scale,state,detail) VALUES
(   null,
    '9',
    '上市公司办公用品应付账款转让项目',
    1,
    70,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '9',
    '深圳公司五金配件应收账款转让项目',
    1,
    43.5,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '东莞公司冷轧板应收账款转让项目',
    3,
    102,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '深圳公司采购纸箱应收账款转让项目',
    3,
    25.5,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '深圳公司气泡袋应收账款转让项目',
    4,
    38,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '武汉公司电泳涂料应收账款转让项目',
    3,
    39.5,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '上市公司边框加工应付账款转让项目',
    4,
    101,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '9',
    '东莞公司铝型材应收账款转让项目',
    1,
    44.5,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '10',
    '上市公司铝型材应付账款转让项目',
    2,
    118,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '上市公司铝制品加工应付账款转让项目',
    3,
    99,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '11',
    '深圳公司纸制品应收账款转让项目',
    4,
    33.5,
    '还款中',
    '这里是项目介绍'
),
(   null,
    '9',
    '河北公司11月应收账款转让项目',
    6,
    200,
    '还款中',
    '这里是项目介绍'
);

##SELECT * FROM ym_item;

CREATE TABLE ym_order_dongtaitext(
    tid INT PRIMARY KEY AUTO_INCREMENT,			/*主键*/
    user_text VARCHAR(64)				/*用户动态数据*/
);
INSERT INTO ym_order_dongtaitext(tid,user_text) VALUES
(NULL,'1358***刚刚投资了57297.00元'),
(NULL,'1382***刚刚投资了3880.00元'),
(NULL,'1500***刚刚投资了23947.52元'),
(NULL,'1536***刚刚投资了881.88元'),
(NULL,'1392***刚刚投资了1135.00元'),
(NULL,'1341***刚刚投资了2500.00元'),
(NULL,'1351***刚刚投资了10000.00元'),
(NULL,'1351***刚刚投资了200.00元'),
(NULL,'1870***刚刚投资了100.00元'),
(NULL,'1354***刚刚投资了2000.00元'),
(NULL,'1582***刚刚投资了1916.00元'),
(NULL,'1870***刚刚投资了100.00元'),
(NULL,'1371***刚刚投资了100.00元'),
(NULL,'1338***刚刚投资了23767.00元'),
(NULL,'1870***刚刚投资了40.40元'),
(NULL,'1870***刚刚投资了52.21元'),
(NULL,'1582***刚刚投资了300.00元'),
(NULL,'1347***刚刚投资了100.00元'),
(NULL,'1877***刚刚投资了100.00元'),
(NULL,'1889***刚刚投资了100.00元'),
(NULL,'1358***刚刚投资了57297.00元'),
(NULL,'1382***刚刚投资了3880.00元'),
(NULL,'1500***刚刚投资了23947.52元'),
(NULL,'1536***刚刚投资了881.88元');

##SELECT * FROM ym_order_dongtaitext;

CREATE TABLE ym_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,		/*主键*/
    phone VARCHAR(16),				        /*手机号*/
    user_name VARCHAR(16),			        /*用户名*/
    user_money FLOAT(10,2),			        /*总资产*/
    user_balance FLOAT(10,2),		    	/*可用余额*/
    user_earnings FLOAT(10,2),		    	/*累计收益*/
    user_hodeearnings FLOAT(10,2),	    	/*待收收益*/
    did INT    				               /*项目号*/
);
INSERT INTO ym_order(oid, phone,user_name,user_money,user_balance,user_earnings,user_hodeearnings,did) VALUES
(NULL,'13501234567','婷婷',30000,20000,0,5000,3),
(NULL,'13501234567','婷婷',30000,20000,0,5000,2),
(NULL,'13123456789','华华',35000,20000,0,15000,5),
(NULL,'13601234567','旭旭',50000,15000,0,15000,1),
(NULL,'13601234567','旭旭',50000,15000,0,20000,4);

##SELECT * FROM ym_order;