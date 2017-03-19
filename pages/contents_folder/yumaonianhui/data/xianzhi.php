<?php
header('Content-Type:application/json');
$output = [];

require('init.php');

//查找未中奖的名单 
$sql = "SELECT uname,uid FROM  yumao_test WHERE uprize = 3 and uneibu = 0";
$result = mysqli_query($conn, $sql);

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