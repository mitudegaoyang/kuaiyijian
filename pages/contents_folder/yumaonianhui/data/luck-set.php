<?php
header('Content-Type:application/json;charset=UTF-8');
$output = [];
@$uid = $_REQUEST['uid'];
if(empty($uid)){
	echo "[]";
	return;
}
@$uprize = $_REQUEST['uprize'];
if(empty($uprize)){
	echo "[]";
	return;
}

require('init.php');

$sql = "UPDATE yumao_test SET uprize = '$uprize' WHERE uid = '$uid'";
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