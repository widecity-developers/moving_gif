copy and paste the below code inside your head tag
```
<script src ="https://cdn.jsdelivr.net/gh/widecity-developers/scroller_widy/scroll_widy.js"></script>
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
    <title>Document</title>
    <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/scroller_widy/scroll_widy.js"></script>

</head>
<body>
    <p onmouseenter="speak(this.innerText)">welcome to widecity technologies</p>
    <div id="mgif">

    </div>
    hello
</body>
<script>
    direction='right';
    speed='30';
    position='fixed';
    size='100px';
    width='100vw';
    media_url='https://webstockreview.net/images/clipart-dinosaur-dinosaur-extinction-18.gif';
    window.onload = widy_go(direction='right',speed='30',position='fixed',size='100px',width='100vw',media_url='https://webstockreview.net/images/clipart-dinosaur-dinosaur-extinction-18.gif')
</script>
</html>
````
