<?php
/**
 * Created by coder meng.
 * User: coder meng
 * Date: 2016/7/29 17:07
 */
$connect = @mysql_connect('localhost', 'root', 'root') or die('数据库连接失败');
mysql_select_db('test');
mysql_set_charset('utf-8');
$res = mysql_query('select * from easyuitest');
$result = array();
while ($rows = mysql_fetch_object($res)) {
	array_push($result, $rows);
}
echo json_encode($result);