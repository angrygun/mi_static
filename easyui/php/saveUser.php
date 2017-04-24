<?php
/**
 * Created by coder meng.
 * User: coder meng
 * Date: 2016/7/29 18:29
 */
$connect=@mysql_connect('localhost','root','root') or die('数据库连接失败');
mysql_select_db('test');
mysql_set_charset('utf-8');
if(empty($_POST['id'])){
    $res=mysql_query("insert into test (name,sex,age) values(".$_POST['name'].")");
}
$res=mysql_query('update test set ');