<?php

$nombre_archivo = '/home/ezequiel/colorgrid/tdc_color';
$tdc_color = fopen($nombre_archivo, 'r')
    or exit("No se pudo abrir el archivo ($nombre_archivo)\n");

$data = array();

if ($tdc_color) {
    while (($line = fgets($tdc_color)) !== false) {
        // process the line read.
        $line = explode(";", $line);
        $line[2] = "lalala"
        //str_replace("\n", '', $line[2]);
        print_r($line[2]);
        array_push($data, $line);
    }
    fclose($tdc_color);
	//print_r(json_encode($data)); 
} else {
    // error opening the file.
    exit("Unable to open file");
}


?>