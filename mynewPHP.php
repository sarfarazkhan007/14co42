<!DOCTYPE html>
<html>
    <head>
        <title>
            My php example
        </title>
    </head>
    
    
    <body>
        
        <?php
        if($_POST){
            $username=$_POST["username"];
                    $brand=$_POST["brand"];
                    if(!empty($username) && !empty($brand)){
                        echo"thank you $username! You have voted for $brand";
                    }               
                    }
                    ?>
        
        <form method="post" action="mynewPHP.php">
            
            <br> <label for="use">Username:</label>
            <input type="text" id="username" name="username"/><br><br>
            
            <label>
            Please Vote For your Favourite Mobile branded
            </label><br>
                <input type="radio" value="nokia" name="brand"/>Nokia<br>
                <input type="radio" value="apple" name="brand"/>Apple<br>
                <input type="radio" value="samsung" name="brand"/>Samsung<br>
                <input type="radio" value="htc" name="brand"/>HTC<br>
                <input type="radio" value="asus" name="brand"/>Asus<br><br>
            
                <input type="submit" value="Vote">
        </form>
        
        
    </body>
    
</html>



