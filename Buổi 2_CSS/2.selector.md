#  css selector
## 1. css seclector ID
* Trong css mỗi ID là duy nhất
>Cú pháp : **#ID { Nội dung cần css }**    
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        #id1{
            color:red;
        }
    </style>
</head>
<body>
    <h1 id="id1">Câu 1</h1>
    <h1 id="id2">Câu 2</h1>
</body>
</html>
```
![](/img/cssid1.png)    
## 2. css selector class
### 2.1. Lựa chọn qua 1 class
>Cú pháp : **.class { Nội dung css }**    
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .class1{
            color: blue;
        }
    </style>
</head>
<body>
    <h1 class="class1">Câu 1</h1>
    <h1 class="class1">Câu 2</h1>
    <h1 class="class2">Câu 3</h1>
</body>
</html>
```
![](/img/cssclass1.png)
### 2.2. Lựa chọn qua nhiều class
* Một thẻ có thể có nhiều class, mỗi class cách nhau bằng 1 khoảng trắng (dấu space).
>Cú pháp : **.class1.class2 { Nội dung css }**

>Lưu ý, các tên class viết liền nhau, không có khoảng trắng
* Tương tự nếu thẻ có nhiều class hơn bạn chỉ cần nối thêm tên class vào khi CSS, ví dụ: **.class1.class2.class3**
## 3. css cho các thẻ con
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .div h1{
            /* Chọn tất cả các thẻ h1 trong class div */
            color: blueviolet;
        }
    </style>
</head>
<body>
    <div class="div">
        <h1 class="c1">Câu 1</h1>
        <h1 class="c1">Câu 2</h1>
        <h1 class="c3">Câu 3</h1>
        <h1 class="c4">Câu 4</h1>
    </div>
</body>
</html>
```
![](/img/csscon1.png)
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .div h1{
            /* Chọn tất cả các thẻ h1 trong class div */
            color: blueviolet;
        }
        .div .c1{
            /* Chọn các thẻ class c1 ở trong class div */
            color: brown;
        }
    </style>
</head>
<body>
    <div class="div">
        <h1 class="c1">Câu 1</h1>
        <h1 class="c1">Câu 2</h1>
        <h1 class="c3">Câu 3</h1>
        <h1 class="c4">Câu 4</h1>
    </div>
</body>
</html>
```
![](/img/csscon2.png)
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .ul_cha > li > p{
            /* Chọn trực tiếp đến thẻ p con của li của class ul_cha */
            /* mà không ảnh hưởng đến thẻ li của class ul_con */
            color: aqua;
        }
    </style>
</head>
<body>
            <ul class="ul_cha">
                <li><p>câu 1</p></li>
                <li><p>câu 2</p></li>
                <li><p>câu 3</p></li>
                <li>
                    <p>Câu 4</p>
                    <ul class="ul_con">
                        <li><p>câu 4.1</p></li>
                        <li><p>câu 4.2</p></li>
                    </ul>
                </li>
            </ul>
</body>
</html>
```
![](/img/csscon3.png)

* **Một số Selection thường dùng**  

![](/img/selection.png)



