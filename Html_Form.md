# **HTML Form**
_HTML Form dùng để thu tập các dữ liệu đầu vào của người dùng để gửi đến máy chủ_
## A.Các yếu tố (element)
1. Phần từ form: Thẻ form `<form></form>` chứa rất nhiều (11 thẻ) các thẻ nhập dữ liệu (input element) như:
***
    *  Thẻ input: <input type="..." id="" name="" value=""> dùng để khai báo một kiểu nhập nào đó
    Trong đó value là giá trị nhập vào
    id và name là tên hay địa chỉ của vị trí nhập dữ liệu

    *  Thẻ label: <label for"">Name:</label> dùng để xác định nhãn cho nhiều element khác, giúp người dùng dễ dàng tìm kiếm và nắm rõ yếu tố mình đang cần nhập vào.
    Thuộc tính for trong label phải giống với thuộc tính id trong input
    Ví dụ: Đoạn code sau:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <label for="message">Label</label>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>
```
    Sẽ cho ra
<!DOCTYPE html>
<html>
    <body>
    <form>
        <label for="message">TEXTAREA</label><br>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>

***
    *  Thẻ textarea: <textarea name="" rows="" cols=""> tạo ra một vùng để nhập text
    Trong đó rows để xác định số dòng, cols để xác định bề rộng
    Ví dụ: Đoạn code sau
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>
```
    Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Textarea</h2>
    <form>
        <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
    </form>
    </body>
</html>

***
    *  Thẻ button: <button type="button">Click</button> dùng để tạo ra một nút bấm
    Nút sẽ có thêm attribute onClick để cài đặt thêm hành động tiếp theo của phím bấm

    *  Thẻ fieldset và legend: 
    fieldset dùng để nhóm các dữ liệu lại trong 1 form
    legend dùng để chú thích cho fieldset
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Fieldset</h2>
    <form>
    <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value=""><br>
    </fieldset>
    </form>
    </body>
</html>
```
    Sẽ cho kết quả là
<!DOCTYPE html>
<html>
<body>
<h2>Fieldset</h2>
<form>
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value=""><br>
  </fieldset>
</form>
</body>
</html>

***
    *  Thẻ datalist: Xác định danh sách các tùy chọn từ trước cho mỗi input
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h2>The datalist Element</h2>
    <form action="/action_page.php">
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
    </datalist>
    <input type="submit">
    </form>
    </body>
</html>
```
    Sẽ cho ra:
<!DOCTYPE html>
<html>
    <body>
    <h2>The datalist Element</h2>
    <form action="/action_page.php">
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
    </datalist>
    <input type="submit">
    </form>
    </body>
</html>

***
    *  Thẻ select: <select> tạo ra một danh sách tùy chọn giống như datalist, tuy nhiên nó có thể cho phép chọn nhiều lựa chọn(multiple) hiện thị đồng thời(size) các lựa chọn và ta có thể chỉnh sửa thứ tự hiện thị các lựa chọn cũng như số lượng hiển thị
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>
<h2>Allow Multiple Selections</h2>
<p>Use the multiple attribute to allow the user to select more than one value.</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars" size="4" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select><br><br>
  <input type="submit">
</form>
<p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
</body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
<body>
<h2>Allow Multiple Selections</h2>
<p>Use the multiple attribute to allow the user to select more than one value.</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars" size="4" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select><br><br>
  <input type="submit">
</form>
<p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
</body>
</html>

***
    * Thẻ otpgroup: Dùng để nhóm các tùy chọn có liên quan đến nhau trong <select>
    Ví dụ:
```
<!DOCTYPE html>
<html>
    <body>
    <h1>The optgroup element</h1>
    <p>The optgroup tag is used to group related options in a drop-down list:</p>
    <form action="/action_page.php">
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </optgroup>
    </select>
    <br><br>
    <input type="submit" value="Submit">
    </form>
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
<body>
<h1>The optgroup element</h1>
<p>The optgroup tag is used to group related options in a drop-down list:</p>
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
*** 
    *  Thẻ option: Dùng để đưa các tùy chọn vô trong thẻ <select>, <datalist>, <otpgroup>
    Tham khảo các ví dụ ở trên

    *  Thẻ output: Hiện thị kết quả
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>

<h2>The output Element</h2>
<p>The output element represents the result of a calculation.</p>

<form action="/action_page.php"
oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>

<p><strong>Note:</strong> The output element is not supported in Edge prior version 13.</p>

</body>
</html>

```
Sẽ có kết quả
<!DOCTYPE html>
<html>
<body>

<h2>The output Element</h2>
<p>The output element represents the result of a calculation.</p>

<form action="/action_page.php"
oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>

<p><strong>Note:</strong> The output element is not supported in Edge prior version 13.</p>

</body>
</html>

***
2. Các dạng input (Input Type)
    *  Textfeild: <input type="text" id="" name="" value=""> dùng để khai báo một kiểu nhập dạng text trên 1 dòng
    Ví dụ: Đoạn code sau

``` 
<!DOCTYPE html>
<html>
    <body>
    <h2>Text input fields</h2>
    <form>
        <label for="firstname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
    </form>
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Text input fields</h2>
    <form>
        <label for="firstname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
    </form>
</body>
</html>

    *  Radio Button: <input type="radio"> khai báo một ô tick hình tròn, ngoài ra nó cũng có id, name và value như textfield ở trên
    Ví dụ: Đoạn code sau
```
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Hôm nay là thứ mấy:</p>

<form>
  <input type="radio" id="hai" name="day" value="Hai">
  <label for="hai">Hai</label><br>
  <input type="radio" id="ba" name="day" value="Ba">
  <label for="ba">Ba</label><br>
</form> 

</body>
</html>
```
Sẽ có kết quả là:
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Hôm nay là thứ mấy:</p>

<form>
  <input type="radio" id="hai" name="day" value="Hai">
  <label for="hai">Hai</label><br>
  <input type="radio" id="ba" name="day" value="Ba">
  <label for="ba">Ba</label><br>
</form> 

</body>
</html>

***
    *  Checkbox: <input type="checkbox"> khai báo 1 checkbox đơn giản, ngoài ra nó cũng có id, name và value như textfield ở trên.
    Về cơ bản Thẻ checkbox gần tương tự với radio button

***
    *  Submit: <input type="submit"> khai báo một nút submit đơn giản, ngoài ra nó có thêm value.
    Ví dụ: 
```
<!DOCTYPE html>
<html>
    <body>
    <h2>Submit Button</h2>
    <form>
      <input type="submit" value="Submit">
    </form>  
    </body>
</html>
```
Sẽ có kết quả:
<!DOCTYPE html>
<html>
    <body>
    <h2>Submit Button</h2>
    <form>
        <input type="submit" value="Submit">
    </form> 
    </body>
</html>

***
    *  Color: <input type="color" id="" name="" value="">  
    Dùng để chọn màu, mã màu sẽ được hiện ở value, tùy vào sự hộ trợ của từng trình duyệt mà bảng chọn màu sẽ được hiện thị
    *  Password: <input type="password" id="" name=""> - dùng để nhập password
    *  Reset: <input type="reset"> - tạo ra phím reset để đưa các giá trị về dạng mạc định
    *  Button: <input type="button" onclick="" value=""> - tạo ra một phím
    Nó tương đối giống với thẻ Button(<button type="button">) và nó cũng có thuộc tính onclick, tuy nhiên nó sẽ ko cần thẻ đóng và tên của button sẽ được để ở thuộc tính value
    *  Date: <input type="date" id="" name="">
    Dùng để chọn ngày, tháng, năm cho đầu vào, nó sẽ hiện thị ra một bảng lịch để chọn hoặc có thể điền trực tiếp
    Chúng ta có thể dùng thuộc tính min và max để giới hạn việc lựa chọn.
    Ví dụ:
```
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form>
```
    Kiểu date sẽ ko hỗ trợ trên Interne Explore 11 hoặc Safari 14.1
    *  Datetime-local: <input type="datetime-local>
    Hộ trợ ngày và giờ 
    Ví dụ:
```
<!DOCTYPE html>
<html>
<body>
<h2>Local Date Field</h2>
<form>
  <input type="datetime-local" id="dayandtime" name="dayandtime">
  <input type="submit" value="Submit">
</form>
</body>
</html>
```
Kết quả:
<!DOCTYPE html>
<html>
<body>
<h2>Local Date Field</h2>
<form>
  <input type="datetime-local" id="dayandtime" name="dayandtime">
  <input type="submit" value="Submit">
</form>
</body>
</html>

***
    *  Email: <input type="email" id="" name="">
    Dùng để nhập email
    Tùy vào sự hộ trợ của trình duyệt mà email được lưu từ trước sẽ được ghi nhớ và hiện lên gợi ý và tự động xác thực khi bạn gửi đi, một số điện thoại sẽ tự động thêm đuôi .com vào bàn phím.
    *  File: <input type="file" id="" name=""> 
    Sẽ tạo ra nút "Duyệt" để tải ảnh từ thiết bị lên web
    *  Hidden: <input type="hidden" id="" name="" value="">
    Dữ liệu ẩn, người dùng ko nhìn thấy, tuy nhiên người dùng có thể thấy nếu mở mã nguồn của web
    *  Month: <input type="month" id="" name="">
    Dùng để chọn tháng và năm
    *  Number: <input type="number" id="" name="">
    Dùng để định dạng kiểu nhập chỉ có kiểu số
    Có thể dùng thuộc tính max và min để giới hạn số khi nhập
    *  Range: <input type="range" id="" name="">
    Tạo ra một thanh trượt để điều chỉnh giá trị
    Phạm vi giá trị có thể được cài bởi thuộc tính max, min và step
    *  Search: <input type="search" id="" name="">
    Dùng để tạo ra thanh tìm kiếm
    *  Tel: <input type="tel" id="" name="">
    Dùng để nhập số điện thoại
    Có thể dùng thuộc tính pattern để định dạng dạng đúng của số điện thoại
    *  Time: <input type="time" id="" name="">
    Dùng để nhập thời gian
    *  Url: <input type="url" id="" name="">
    Dùng để nhập đường dẫn url
    Tùy thuộc vào hỗ trợ trình duyệt, trường URL có thể được tự động xác thực khi gửi.
    Một số điện thoại thông minh nhận ra loại URL và thêm ".com" vào bàn phím để khớp với đầu vào URL. 
    *  Week: <input type="week" id="" name="">
    Dùng để nhập tuần số mấy của năm
    * Image: <input type="image">
    Có thêm các thuộc tính của image như src, alt, width, height
    Dùng để hiển thị hình ảnh đã chọn để làm công cụ đầu vào như phím, giúp input thêm sinh động hơn

## B.Các thuộc tính (attribute)
1. Các thuộc tính của form<br>
Các thuộc tính sẽ được khai báo ngay trong thẻ mở form<br>
Ví dụ
```
<form action="/action_page.php" accept-charset="utf-8">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
```
    *  accept-charset
    Chỉ định dạng mã hóa kí tự khi gửi form đi
    *  action
    Chỉ định nơi gửi dữ liệu sau khi dữ liệu được gửi
    *  autocomplete
    Chỉ định tự động điền dựa vào dữ liệu đã từng điền trước đó, kiểu ghi nhớ dữ liệu
    autocomplete có thể định dạng on|off
    *  enctype
    Chỉ định việc mã hóa dữ liệu khi gửi đến máy chủ
    *  method
    Chỉ định dạng gửi đi của dữ liệu
    method="get"- dạng URL 
    method="post"- dạng HTTP
    Ghi chú trên GET:
        Thêm dữ liệu biểu mẫu vào URL theo cặp tên/giá trị
        Độ dài của một URL bị giới hạn (khoảng 3000 ký tự)
        Không bao giờ sử dụng GET để gửi dữ liệu nhạy cảm! (sẽ được hiển thị trong URL)
        Hữu ích cho việc gửi biểu mẫu mà người dùng muốn đánh dấu kết quả
        GET tốt hơn cho dữ liệu không an toàn, như chuỗi truy vấn trong Google
    Ghi chú trên POST:
        Thêm dữ liệu biểu mẫu bên trong nội dung yêu cầu HTTP (dữ liệu không được hiển thị trong URL)
        Không có giới hạn kích thước
        Không thể đánh dấu biểu mẫu gửi bằng POST
    *  name
    Chỉ định tên của form, dùng để tham chiếu đến các element trong JavaScript hoặc đến các biểu mẫu khác
    *  novalidate
    Là một dạng boolearn, dùng để chỉ định dữ liệu ko nên được xác nhận khi gửi
    *  rel
    Biểu thị mối quan hệ giữa tài liệu hiện tại và tài liệu được kết nối
    *  target
    Chỉ định cách hiển thị phản hổi của form
    Có 4 dạng:
    _blank: hiển thị trong cửa sổ hoặc tab mới
    _self: hiện thị luôn trong khung, chuyển đến luôn(dạng mạc định)
    _parent: hiện thị đến khung mẹ
    _top: hiện thị khung mới thay thế khung cũ

2. Các thuộc tính của input<br>
    *  value: chỉ định giá trị đầu vào
    *  readonly: chỉ định trường đầu vào chỉ đọc, ko thể sửa nhưng có thể bôi đen, copy...
    *  disable: chỉ định trường đầu vào bị vô hiệu hóa, ta ko thể thay đổi dữ liệu ở đó
    *  size: chỉ định size dữ liệu (dạng kí tự) của trường nhập vào dữ liệu
    có giá trị mạc định là 20
    *  maxlength: chỉ định số lượng ký tự tối đa được nhập
    *  min, max: chỉ định lượng tối thiểu hoặc tối đa cho dữ liệu đầu vào
    *  multiple: cho phép nhập nhiều hơn 1 giá trị trong 1 trường nhập, có hiệu lực với email và file
    *  pattern: dùng để định dạng một dữ liệu, dữ liệu sẽ được kiểm tra theo định dạng đó khi gửi đi (regex)
    *  placeholder: dùng để mô tả ngắn về giá trị nhập vào của dữ liệu (đưa ra một ví dụ có sẵn ở phần nhập)
    *  require: bắt buộc phải điền input này mới được gửi
    *  step: tạo ra khoảng phù hợp cho một trường đầu vào<br>
    Ví dụ:
<!DOCTYPE html>
<html>
<body>

<h1>The input step attribute</h1>
<form action="/action_page.php">
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
</form>
</body>
</html>

    *  autofocus: chỉ định con trỏ tự động trỏ tới phần nhập dữ liệu khi load lại trang
    *  width và height: định dạng chiều rộng và cao của ảnh

3. Các thuộc tính của Input form*
    *  formenctype: chỉ định cách dữ liệu được mã hóa, chỉ dùng cho dạng form có method="post"
    Thuộc tính này sẽ override thuộc tính enctype của form
    * formmethod: chỉ định phương pháp HTTP để gửi dữ liệu đến URL
    formmethod cũng có 2 cách gửi đõ là dạng formmethod="get" hoặc formmethod="post"
    Thuộc tính này override thuộc tính method của form
    * formtarget: chỉ định cách phản hổi sau khi dữ liệu được gửi
    Thuộc tính này override thuộc tính target
    * formnovalidate: tương tự novalidate của form
    Nó được override lên novalidate của form
