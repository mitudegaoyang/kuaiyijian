<?php
	header("Content-Type:application/json;charset=UTF-8");
	@$pages=$_REQUEST['pages'];
    	if(!$pages){
    		$pages = 1;
    	}else{
    		$pages = intval($pages);//解析为整数
    	}
    $output = [
        'recordCount'=>0,			//符合条件的总记录数
        'pageSize'=>5,				//每页最多显示的记录数
        'pageCount'=>0,				//总页数
        'pageNum'=>$pages,		    //当前显示的页号
        'data'=>[],					//当前页的记录行
    ];
    
		require('0_init.php');

    //SQL1:获取所有满足条件的总的记录行数
    $sql = "SELECT COUNT(*) FROM kf_dish";
    $result = mysqli_query($conn,$sql);
    $output['recordCount'] = intval(mysqli_fetch_row($result)[0]);
    $output['pageCount'] = ceil( ($output['recordCount'])/($output['pageSize']) );

    //SQL2:读取当前页面中的数据
    $start = ($output['pageNum']-1)*$output['pageSize'];	//从哪一行开始读取，从0开始
    $count = $output['pageSize'];							//一次最多读取的行数

    $sql = "SELECT * FROM kf_dish LIMIT $start,$count";	    //MYSQL中的分页查询
    $result = mysqli_query($conn,$sql);

    if($result===false){
        echo "SQL ERR.$sql";
    }else{
        //DQL: false或结果集
        $output['data'] = mysqli_fetch_all($result,1);
        //转换为JSON字符串并输出
        echo json_encode($output);
    }
?>