# ulol.js
A small JavaScript Library to work easily with HTML List using Javascript

## Description

**Ulol** or(unordered list and ordered list) is library that let you to dynamically add list into your webpages.
You can easily add,delete,update item in the list directly using javascript code.

## Linking ulol.js -- CDN

```HTML  
<script src="https://cdn.jsdelivr.net/gh/Ayush-Rajniwal/ulol.js/src/ulol_mini.js"></script>

<script src="https://cdn.jsdelivr.net/gh/Ayush-Rajniwal/ulol.js/src/ulol.js"></script>
```

### Download ulol

* [ulol_mini.js](https://raw.githubusercontent.com/Ayush-Rajniwal/ulol.js/master/src/ulol_mini.js)

* [ulol.js](https://raw.githubusercontent.com/Ayush-Rajniwal/ulol.js/master/src/ulol.js)

## How to use

### Creating Object
```javascript
var list = ulol(tagId,tyeOfList,content);
list.run();
```

*(String)* **tagId** - The HTML id tag name under which list wiil be added.

*(String)* **tyeOfList** - Can have 2 values ul(Unordered List) and ol(Ordered List).

*(Array)* **content** - Array which containt the bullet points to show in list.

### Adding more element to list
```javascript
list.update(newValue);
```
*(Array)* **newValue** - The new values you want to insert into list.
The newValue must be a non empty array.

### Deleting Element form List
```javascript
list.remove();    //This will pop the last element from the list
```

```javascript
list.remove(pos);   //Position from where the element to be removed 
```
### Length of list
```javascript
list.listLength();  //return length of list 
```
## Example

### HTML
```HTML
<html>
    <head>
      <title>ulol</title>     
    </head>
    <body>
      <h1>Ulol Example</h1>

        <div id='exp'></div>
        <script src="https://raw.githubusercontent.com/Ayush-Rajniwal/ulol.js/master/src/ulol_mini.js"></script>
        <script src="app.js"></script>
      
    </body>
</html>  
```
### Javascript (app.js file)

```javascript
var list = ulol('exp','ol',['Buy an apple','Sell a banana','Shoot a star']).run();
```
![](https://github.com/Ayush-Rajniwal/ulol.js/blob/master/img/screen1.png)

```javascript
list.update(['Love for rainbow','Humans are crazy','JS Rocks!!']);
```
![](https://github.com/Ayush-Rajniwal/ulol.js/blob/master/img/screen2.png)

```javascript
list.remove(5);
```
![](https://github.com/Ayush-Rajniwal/ulol.js/blob/master/img/screen3.png)

## Versioning
* Version 0.1.0 - Update List, Remove Element from List, list_length functions are added.

## Upcoming
* Adding new item to any position.
* Sub-list option

## Authors

**Ayush Rajniwal** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
