<?php
header('Content-Type:application/json;charset=UTF-8');

$output = [];
@$checkName = $_REQUEST['checkName'];
if(empty($checkName)){
	echo '[]';
	return;
}

require('init.php');

$sql = "SELECT * FROM yumao_test WHERE uname = '$checkName'";
$result = mysqli_query($conn, $sql);

@$row = mysqli_fetch_assoc($result);  //此处无需循环
if(empty($row)){
   echo '[1]';
}else{
   echo '[]';
}
?>