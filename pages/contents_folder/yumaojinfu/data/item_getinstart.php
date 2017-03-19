<?php
	header("Content-Type:application/json;charset=UTF-8");
  $output = [
        'recordCount'=>0,			//符合条件的总记录数
        'pageSize'=>0,				//显示的记录数
  ];  
	require('0_init.php');

	//SQL1:获取所有满足条件的总的记录行数
	$sql = "SELECT COUNT(*) FROM ym_item";
	$result = mysqli_query($conn,$sql);
	$output['recordCount'] = intval(mysqli_fetch_row($result)[0]);
	if($output['recordCount']>=10){
		$output['pageSize']=10;
	}else{
		$output['pageSize']=$output['recordCount'];
	}

	//SQL2:读取当前页面中的数据
	if($output['recordCount']>=10){
		$start = $output['recordCount']-10;	//从哪一行开始读取，从0开始
	}else{
		$start = 0;
	}
	
	$count = $output['pageSize'];													//一次最多读取的行数

	$sql = "SELECT * FROM ym_item LIMIT $start,$count";	    //MYSQL中的分页查询
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