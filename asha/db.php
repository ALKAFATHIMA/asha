<?php
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$db='ashaease';
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$db);
if ($conn->connect_error) 
{
    die("Connection failed:" . $conn->connect_error);
}
?>