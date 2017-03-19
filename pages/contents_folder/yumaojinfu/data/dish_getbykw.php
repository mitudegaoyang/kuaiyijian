<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$keywords=$_REQUEST['keywords'];
	  
	require('0_init.php');

	$sql = "SELECT * FROM kf_dish WHERE name LIKE '%$keywords%' OR material LIKE '%$keywords%'";	    //MYSQL中的分页查询
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