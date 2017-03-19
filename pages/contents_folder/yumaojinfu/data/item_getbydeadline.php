<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$deadline=$_REQUEST['deadline'];
  
	$output = [
        'recordCount'=>0,			//符合条件的总记录数
        'pageSize'=>0,				//显示的记录数
  ];  

	require('0_init.php');
	
	if($deadline==0){
		$sql = "SELECT * FROM ym_item";
		$result = mysqli_query($conn,$sql);
	}else if($deadline<5){
		$sql = "SELECT * FROM ym_item  WHERE deadline='$deadline'";
		$result = mysqli_query($conn,$sql);
	}else{
		$sql = "SELECT * FROM ym_item  WHERE deadline>=5";
		$result = mysqli_query($conn,$sql);
	}
	

	if($result===false){
			echo "SQL ERR.$sql";
	}else{
			//DQL: false或结果集
			$output= mysqli_fetch_all($result,1);
			//转换为JSON字符串并输出
			echo json_encode($output);
	}
?>