<?php

// Prendo i dati dal file

$disksList = file_get_contents('../db/dischi.json');

header('Content-Type: application/json');

echo $disksList;