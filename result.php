<?php
$db = mysqli_connect("127.0.0.1", "root", "", "bd<film>");

$query = "select  titre,AVG(Note) from films f,evaluations e
where f.numFilm=e.numFilm 
group by titre 
order by AVG(Note) desc";

$result = mysqli_query($db, $query) or die(mysqli_error($db));

echo " <table border=1> <tr>
<th>Movie Title</th>
<th>Average</th>
</tr>";

while ($row = mysqli_fetch_array($result)) {
    echo "<tr>
    <td>$row[0]</td>
    <td>$row[1]</td>
    </tr>";
}

echo "</table>";

mysqli_close($db);
?>
