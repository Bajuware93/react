<?php

$name = $_POST['name'];

$names = ["Timo","Lilly"];

foreach($names as $value){
	if( $value == $name){
		echo "Gefunden";
		break;
	}
	
}