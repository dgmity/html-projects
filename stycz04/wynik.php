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
                <?php
                    if(isset($_GET['id'])) {
                        $db = mysqli_connect('localhost', 'root', '', 'matura');
                        $id = $_GET['id'];
                        $imie = $_GET['imie'];
                        $nazwisko = $_GET['nazwisko'];

                        echo "<h2>$imie $nazwisko</h2>";

                        $qry = "SELECT rok, sesja, przedmiot, punkty FROM arkusz 
                                INNER JOIN wynik ON wynik.symbol = arkusz.symbol 
                                WHERE wynik.maturzysta_id = '$id';";
                        
                        $res = mysqli_query($db, $qry);

                        while ($row = mysqli_fetch_row($res)) {
                            echo "<h3>$row[0] $row[1]</h3>";
                            echo "<p>$row[2]: $row[3]</p>";
                        }
                    }
                ?>
            </section>
            <section id="bottom">
                <div class="block">
                    <h4>Przedmioty</h4>
                    <?php
                        $res_p = mysqli_query($db, "SELECT DISTINCT przedmiot FROM arkusz;");
                        while ($lp = mysqli_fetch_row($res_p)) echo "$lp[0] ";
                    ?>
                </div>
                <div class="block">
                    <h4>Lata</h4>
                    <?php
                        $res_l = mysqli_query($db, "SELECT MIN(rok), MAX(rok) FROM arkusz;");
                        $rl = mysqli_fetch_row($res_l);
                        echo "$rl[0] - $rl[1]";
                    ?>
                </div>
                <div class="block">
                    <h4>Najlepszy wynik</h4>
                    <?php
                        $res_max = mysqli_query($db, "SELECT AVG(punkty) FROM wynik GROUP BY maturzysta_id ORDER BY AVG(punkty) DESC LIMIT 1;");
                        $rmax = mysqli_fetch_row($res_max);
                        if ($rmax) echo $rmax[0] . "%";
                    ?>
                </div>
                <div class="block">
                    <h4>Najgorszy wynik</h4>
                    <?php
                        $res_min = mysqli_query($db, "SELECT AVG(punkty) FROM wynik GROUP BY maturzysta_id ORDER BY AVG(punkty) ASC LIMIT 1;");
                        $rmin = mysqli_fetch_row($res_min);
                        if ($rmin) echo $rmin[0] . "%";
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