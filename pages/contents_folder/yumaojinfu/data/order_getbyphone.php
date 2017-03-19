<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$uPhone=$_REQUEST['uPhone'];
    	
	require('0_init.php');

	$sql = "SELECT kf_order.oid,kf_order.did,kf_order.order_time,kf_order.user_name,kf_dish.img_sm FROM kf_order,kf_dish WHERE kf_order.did=kf_dish.did AND kf_order.phone='$uPhone'";
	$result = mysqli_query($conn,$sql);

	if($result===false){
			echo "SQL ERR.$sql";
	}else{
			//DQL: false或结果集
			$output= mysqli_fetch_all($result,1);
			//转换为JSON字符串并输出
			echo json_encode($output);
	}
?>