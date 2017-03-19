<?php
header('Content-Type:application/json');

$output = [];

@$start = $_REQUEST['start']; //@符号可以颜值当前行的错误提示
if(empty($start)){//若$start变量为空
	$start=0;
}
$pageSize = 40; //一次可以返回的最大记录数

require('init.php');

$sql = "SELECT * FROM  yumao_test  LIMIT  $start,$pageSize";
$result = mysqli_query($conn, $sql);
//var_dump($result); //提示：若显示bool(false)说明SQL语句语法错误
while( true ){
    //从结果集中读取一行记录
    $row = mysqli_fetch_assoc($result);
    if(! $row ){  //没有获取到更多记录行
        break;
    }
    $output[] = $row;
}

echo json_encode($output);
?>