<?php
	header("Content-Type:application/json;charset=UTF-8");
	require('0_init.php');

	//SQL1:获取所有满足条件的总的记录行数
	$sql = "SELECT * FROM ym_order_dongtaitext";
	$result = mysqli_query($conn,$sql);
	

	if($result===false){
			echo "SQL ERR.$sql";
	}else{
			//DQL: false或结果集
			$output = mysqli_fetch_all($result,1);
			//转换为JSON字符串并输出
			echo json_encode($output);
	}
?>