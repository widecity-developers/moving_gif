copy and paste the below code inside your head tag
```
 <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/scroller_widy/scro_widy.js"></script>
```

you can call the function 
```
widy_go(direction,speed,position,size,width,media_url);
```
You should pass all the arguments to get the proper result. if you have any doughts in this please use the below code.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scro widy</title>
    <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/scroller_widy/scro_widy.js"></script>
</head>
<body>
    Your widy character is moving below this sentence. support wideicity for easy accessing these kinds of technologies at your fingertips.
        <div id="widy_character">
        </div>
    your character is above this sentence
</body>
<script>
    window.onload = widy_character_go()
</script>
</html>
````
