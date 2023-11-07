<?php
    $email = $_POST['email'];
    $voornaam = $_POST['voornaam'];
    $achternaam = $_POST['achternaam'];
    $adres = $_POST['adres'];
    $toevoeging = $_POST['toevoeging'];
    $postcode = $_POST['postcode'];
    $stad = $_POST['stad'];
    $telefoonnummer = $_POST['telefoonnummer'];
    $selecteer_datum = $_POST['datum'];
    $myTextarea = $_POST['myTextarea'];

    $conn = new mysqli('dbhost','dbuser','password','dbname');
    if ($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO offertes (email, voornaam, achternaam, adres, toevoeging, postcode, stad, telefoonnummer, selecteer_datum, myTextarea) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssssss", $email, $voornaam, $achternaam, $adres, $toevoeging, $postcode, $stad, $telefoonnummer, $selecteer_datum, $myTextarea); 
        $stmt->execute();
        $stmt->close();
        $conn->close();
        header('Location: contact.html?succes=true');
        exit();

    }
?>
