# CÁC THẺ KHÁC

# Thẻ head:

* Phần tử `<head>` không có ảnh hưởng đến các tiêu đề của HTML

* Phần tử  `<head>` chứa dữ liệu meta. Dữ liệu meta không được hiển thị

* Phần tử `<head>` là một địa chỉ đặt  giữa của cặp thẻ  `<html>` và thẻ `<body>`:

## Ví dụ:

```html
    <!DOCTYPE html>
<html>
    <head>
        <title>PROPTIT</title>
        <meta charset=“UTF-8”>
    </head>
    <body>
        <p>Lập trình PROPTIT</p>
    </body>
</html>
```
## Kết quả:
![Ví dụ head](https://i.imgur.com/AWsJ4a6.png)

# Thẻ meta:

* Phần tử `<meta>` được dùng để  mô tả trang, từ khóa, tác giả, và các metadata khác.

* Metadata được sử dụng bởi các trình duyệt (làm thế nào để hiển thị nội dung), bởi công cụ tìm kiếm (từ khóa), và các dịch vụ web khác.

## Định nghĩa từ khóa cho công cụ tìm kiếm:

`<meta name=“keywords” content=“HTML, CSS, XML, XHTML, JavaScript”>`

## Định nghĩa mô tả cho trang web của bạn:

`<meta name=“description” content=“Hướng dẫn web miến phí về HTML và CSS”>`

## Định nghĩa bộ kí tự được sử dụng:

`<meta charset=“UTF-8”>`

## Định nghĩa tác giả của trang :

`<meta name=“author” content=“PROPTIT”>`

## Làm mới tài liệu 30s một lần:

`<meta http-equiv=“refresh” content=“30”>`

## Ví dụ về thẻ `<meta>`:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>PROPTIT</title>
        <meta name=“description” content=“Hướng dẫn web miến phí”>
        <meta name=“keywords” content=“HTML, CSS, XML, JavaScript”>
        <meta name=“author” content=“PROPTIT>
        <meta charset=“UTF-8”>
    </head>
    <body>
        <p>Lập trình PROPTIT</p>
    </body>
</html>
```

## Kết quả:

![Ví dụ về thẻ meta](https://i.imgur.com/biF5alL.png)

# Thẻ base:

* Phần tử `<base>` chỉ định một URL cơ sở và target cơ sở đối với tất cả các URL liên quan trong một trang:

## Ví dụ thẻ base:

```html
    <!DOCTYPE html>
    <html>
        <head>
        <base href="https://www.facebook.com" target="_blank">
        </head>
        <body>

            <h1>Page CLB</h1>

            <p><a href="clubproptit"> CLB PROPTIT</a> </p>

        </body>
    </html>
```

## Kết quả:

![Ví dụ thẻ base](https://i.imgur.com/u67aViw.png)

# Thẻ aside:

* Thẻ `<aside>` xác định một số nội dung ngoài nội dung mà nó được đặt trong đó.
* Nội dung sang một bên nên liên quan gián tiếp đến nội dung xung quanh.

**Mẹo**: Nội dung <aside> thường được đặt dưới dạng thanh bên trong tài liệu.

**Lưu ý**: Phần tử `<aside>` không hiển thị dưới dạng bất kỳ thứ gì đặc biệt trong trình duyệt. Tuy nhiên, bạn có thể sử dụng CSS để tạo kiểu cho <aside> phần tử (xem ví dụ bên dưới).

```html
    <!DOCTYPE html>
<html>
    <body>

    <h1>The aside element</h1>

    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

    <aside>
        <h4>Epcot Center</h4>
        <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>

    </body>
</html>
```
## Kết quả:

![Ví dụ aside](https://i.imgur.com/OHSi6hW.png)

# Thẻ details

* Thẻ `<details>`chỉ định các chi tiết bổ sung mà người dùng có thể mở và đóng theo yêu cầu.
* Thẻ `<details>`thường được sử dụng để tạo một widget tương tác mà người dùng có thể mở và đóng. Theo mặc định, tiện ích con bị đóng. Khi mở, nó sẽ mở rộng và hiển thị nội dung bên trong.
* Bất kỳ loại nội dung nào cũng có thể được đưa vào bên trong `<details>`thẻ. 
**Mẹo**: Thẻ `<summary>` được sử dụng `<details>`để chỉ định một tiêu đề hiển thị cho các chi tiết.

## Ví dụ thẻ details:
```html
<!DOCTYPE html>
<html>
    <body>

    <h1>The details element</h1>

    <details>
    <summary>PROPTIT</summary>
    <p>- Câu lạc bộ được thành lập ngày 9/10/2011.</br>
        - Tên đầy đủ là : Câu lạc bộ Lập trình PTIT</p>
    </details>

    </body>
</html>
```

## Kết quả: 

![Ví dụ details](https://i.imgur.com/m9J31C5.png)

# Thẻ source:
* Thẻ `<source>` được sử dụng để chỉ định nhiều tài nguyên phương tiện cho các phần tử phương tiện, chẳng hạn như `<video>` , `<audio>` và `<picture>` .
* Thẻ `<source>`cho phép bạn chỉ định các tệp video / âm thanh / hình ảnh thay thế mà trình duyệt có thể chọn, dựa trên sự hỗ trợ của trình duyệt hoặc chiều rộng khung nhìn. Trình duyệt sẽ chọn cái đầu tiên `<source>` nó hỗ trợ.

## Ví dụ source:
```html
<!DOCTYPE html>
<html>
<body>

<h1>The source element</h1>

<p>Click on the play button to play a sound:</p>
<video width="555" height="555" controls>
    <source src="https://media.istockphoto.com/videos/businessman-thinking-and-looking-for-answer-shrugs-his-shoulders-no-video-id1339089882">
  </video>

</body>
</html>
```
## Kết quả:

![Ví dụ source](https://i.imgur.com/60am1fh.png)

# Thẻ option

* Thẻ `<option>`xác định một tùy chọn trong danh sách được chọn.
* `<option>`các phần tử đi vào bên trong phần tử `<select>` , `<optgroup>` hoặc `<datalist>` .
**Lưu** ý: Có <option>thể sử dụng thẻ mà không có bất kỳ thuộc tính nào, nhưng bạn thường cần thuộc tính giá trị , cho biết những gì được gửi đến máy chủ khi gửi biểu mẫu.
**Mẹo**: Nếu bạn có một danh sách dài các tùy chọn, bạn có thể nhóm các tùy chọn liên quan trong thẻ <optgroup> . 

## Ví dụ option:
```html
<!DOCTYPE html>
<html>
<body>

<h1>The option element</h1>

<label for="cars">Choose a car:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
  
</body>
</html>
```
## Kết quả:
![Ví dụ option](https://i.imgur.com/qc0XHMA.png)

