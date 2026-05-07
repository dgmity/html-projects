<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Matura</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>System informacji dla maturzystów</h1>
    </header>
    <main>
        <aside>
            <img src="ma.jpg" alt="Matura">
            <img src="tu.jpg" alt="Matura">
            <img src="ra.jpg" alt="Matura">
        </aside>
        <section id="right">
            <section id="top">
                <h3>Wybierz ucznia z listy:</h3>
                <?php
                    $db = mysqli_connect('localhost', 'root', '', 'matura');
                    $qry1 = "SELECT id, imie, nazwisko FROM maturzysta WHERE szkola = 'T3' ORDER BY nazwisko ASC;";
                    $res1 = mysqli_query($db, $qry1);
                    while ($line = mysqli_fetch_row($res1)) {
                        echo "<a href='wynik.php?id=$line[0]&imie=$line[1]&nazwisko=$line[2]'>$line[0]. $line[1] $line[2]</a><br>";
                    }
                ?>
            </section>
            <section id="bottom">
                <div class="block">
                    <h4>Przedmioty</h4>
                    <?php
                        $res = mysqli_query($db, "SELECT DISTINCT przedmiot FROM arkusz;");
                        while ($line = mysqli_fetch_row($res)) {
                            echo "$line[0] ";
                        }
                    ?>
                </div>
                <div class="block">
                    <h4>Lata</h4>
                    <?php
                        // Skrypt 1: Zapytanie 3
                        $res2 = mysqli_query($db, "SELECT MIN(rok), MAX(rok) FROM arkusz;");
                        $row2 = mysqli_fetch_row($res2);
                        echo "$row2[0] - $row2[1]";
                    ?>
                </div>
                <div class="block">
                    <h4>Najlepszy wynik</h4>
                    <?php
                        $res3 = mysqli_query($db, "SELECT AVG(punkty) FROM wynik GROUP BY maturzysta_id ORDER BY AVG(punkty) DESC LIMIT 1;");
                        $row3 = mysqli_fetch_row($res3);
                        if ($row3) echo $row3[0] . "%";
                    ?>
                </div>
                <div class="block">
                    <h4>Najgorszy wynik</h4>
                    <?php
                        $res4 = mysqli_query($db, "SELECT AVG(punkty) FROM wynik GROUP BY maturzysta_id ORDER BY AVG(punkty) ASC LIMIT 1;");
                        $row4 = mysqli_fetch_row($res4);
                        if ($row4) echo $row4[0] . "%";
                        mysqli_close($db);
                    ?>
                </div>
            </section>
        </section>
    </main>
    <footer>
        <p>Stronę wykonał: Maksim Buranok</p>
    </footer>
</body>
</html>