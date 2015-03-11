<?php
	header('Content-type: application/json; charset=UTF-8');
	
	$page = $_GET['page'] ?: '1';
	$fileName = 'test-data_' . $page . '.json';

	$fileStr = file_get_contents($fileName);
	echo $fileStr;

?>