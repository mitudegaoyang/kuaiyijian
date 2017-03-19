<?php
$conn = mysqli_connect( SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);	//访问数据库
$sql = "SET NAMES UTF8";	//声明使用utf-8编码格式
mysqli_query($conn, $sql);