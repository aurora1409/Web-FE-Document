# <span style = "color : Yellow"> 3</span>. Block và inline elements qua phân biệt div và span 
### Trong văn bản HTML, các phần tử HTML được phân loại ra thành 2 cấp độ đó là: <span style = "color : LightSkyBlue">block</span> và <span style = "color : LightSkyBlue">inline</span>

<br>


<div >

    * Phần tử HTML cấp độ block là những phần tử chiếm hết không gian theo chiều ngang của phần tử cha (phần tử chứa nó). Còn chiều cao mở rộng theo nội dung của phần tử này. Trong trình duyệt các phần tử dạng này tạo ra các dòng mới (xuống dòng) ở trước và sau phần tử, các phần tử cấp độ block như: <h1>, <form>, <li>, <ol>, <ul>, <p>, <pre>, <table>, <div> ...

    Các phần tử block hiện thị liên tiếp theo chiều đứng của phần tử chứa nó                                                                                                                   
```
<div> Học</div> <div> lập trình</div>
```                               
<div> Học</div> <div> lập trình</div>
</div>

<div> 

    * Phần tử HTML cấp độ inline là những phần tử chiếm không gian chiều ngang theo nội dung của phần tử, không tạo ra dòng mới (xuống dòng) trước và sau phần tử. Các phần tử inline như: <b>, <a>, <strong>, <img>, <input>, <em>, <span> ...

    Các phần tử inline hiển thị liên tiếp theo chiều ngang của phần tử chứa nó
```
<span> Học</span>
<span> lập trình</span>
```
<span> Học</span>
<span> lập trình</span>
</div>

#### <span style = "color : Yellow"> 3.1</span>. Thẻ  `<div>` : là phần tử dạng block cơ bản dùng để chứa nội dung, dùng nó để phân nội dung thành các phân đoạn, thường được sử dụng làm khối để chứa các phần tử HTML khác. Thường thì div sẽ được sử dụng kết hợp với CSS để trình bày.

Cú pháp cơ bản : `<div> Nội dung </div>`

Ví dụ : 
```
<div style = "color:LightSkyBlue">Nội dung thẻ div</div>
``` 
<div style = "color:LightSkyBlue">Nội dung thẻ div</div>

> Thẻ `<div>` để định nghĩa phần từ kiểu block trong html, nó tự tạo dòng mới và ngắt dòng 

Block-level elements 

![Block_element](https://i.pinimg.com/564x/27/a3/47/27a347e98a25036c362094edd17cab1e.jpg)

<br>

#### <span style = "color : Yellow"> 3.2</span>. Thẻ `<span>` : là loại thẻ inline, thường nó được dùng để chứa văn bản, chứa phần tử inline khác. Tương tự div, span thường kết hợp với CSS để định dạng, trình bày nội dung nó chứa

Cú pháp cơ bản : `<span>Nội dung</span>` : 

Ví dụ :

```
Học 
    <span style="color:LightSkyBlue">HTML</span>
cơ bản
```

Học 
    <span style="color:LightSkyBlue">HTML</span>
cơ bản

> Thẻ `<span>` định nghĩa các inline, phần văn bản dạng inline không ngắt dòng.

Inline elements

![inline_element](https://i.pinimg.com/564x/af/0b/67/af0b67b8b4a1ac8a7f84a709b1ebcb4b.jpg)

<br>

> <h3> Lưu ý : Phần tử loại block thì có thể chứa các phần tử inline, phần tử inline thì không thể chứa phần tử block </h3>
<br>

### <span style = "color: Cyan"> Tóm tắt </span>:

1, Phần tử HTML có 2 loại: Block và inline <br>
2, Phần tử cấp độ block luôn bắt đầu trên dòng mới và chiếm hết không gian theo chiều ngang <br>
3, Phần tử cấp độ inline không tạo dòng mới và chỉ chiếm không gian bằng nội dung nó chứa <br>
4, Thẻ `<div>` là một phần tử cấp độ block và thường được dùng để chứa các phần tử HTML khác <br>
5, Thẻ `<span>` là một phần tử inline để đánh dấu một phần văn bản, tài liệu. <br>
6, Phần tử loại block thì có thể chứa các phần tử inline, phần tử inline thì không thể chứa phần tử block