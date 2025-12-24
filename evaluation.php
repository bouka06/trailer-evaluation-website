<?php
$db = mysqli_connect("127.0.0.1", "root", "", "bd<film>");

$password = $_POST["mdp"];
$email = $_POST["email"];

$authQuery = "SELECT * FROM membres WHERE MotPasse='$password' AND email='$email'";
$authResult = mysqli_query($db, $authQuery) or die(mysqli_error($db));

if (mysqli_num_rows($authResult) == 0) {
    echo "Authentication failed";
} else {

    $movieId = (int) $_POST["film"];
    $screenplayScore = (int) $_POST["sc"];
    $imageScore = (int) $_POST["im"];
    $soundScore = (int) $_POST["so"];

    $totalScore = $screenplayScore + $imageScore + $soundScore;

    if (isset($_POST["check"])) {
        $totalScore = $totalScore * 2;
    }

    $evaluationDate = date("Y-m-d", time());

    $checkQuery = "SELECT * FROM evaluations WHERE numFilm=$movieId AND email='$email'";
    $checkResult = mysqli_query($db, $checkQuery) or die(mysqli_error($db));

    if (mysqli_num_rows($checkResult) != 0) {
        $updateQuery = "UPDATE evaluations SET DateEva='$evaluationDate', Note=$totalScore WHERE numFilm=$movieId AND email='$email'";
        $updateResult = mysqli_query($db, $updateQuery) or die(mysqli_error($db));
        echo "Update completed successfully";
    } else {
        $insertQuery = "INSERT INTO evaluations VALUES ('$movieId', '$email', $totalScore, '$evaluationDate')";
        $insertResult = mysqli_query($db, $insertQuery) or die(mysqli_error($db));
        echo "Evaluation added successfully";
    }
}

mysqli_close($db);
?>
