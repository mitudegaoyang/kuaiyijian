<?php
header('Content-Type:application/json;charset=UTF-8');

$output = [];
@$uname = $_REQUEST['uname'];
$uprize = 3; //默认值是3 充电宝
$uneibu = 0; //默认不是内部员工
$ulingqu = 0; //默认都是未领取
$utime = time()*1000;
if(empty($uname)){
	echo "[]";
	return;
}

require('init.php');

$sql = "INSERT INTO yumao_test VALUES(NULL,'$uname','$utime','$uprize','$uneibu','$ulingqu')";
$result = mysqli_query($conn, $sql);

$arr = [];
if($result){
	$arr['msg'] = 'succ';
	$arr['uid'] = mysqli_insert_id($conn);//获取最近执行的一条insert语句生成的自增主键
}else{
	$arr['msg'] = 'err';
	$arr['reason'] ="SQL语句执行失败：$sql";
}
$output[] = $arr;


echo json_encode($output);
?>