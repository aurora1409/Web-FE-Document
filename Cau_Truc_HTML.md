# **CẤU TRÚC CỦA HTML**

  

-   HTML là chữ viết tắt của cụm từ Hyper Text Markup Language (Ngôn ngữ đánh dấu siêu văn bản) được sử dụng để tạo một trang web, trên một website có thể sẽ chứa nhiều trang và mỗi trang được quy ra là một tài liệu HTML. HTML là một trong những ngôn ngữ quan trọng trong lĩnh vực thiết kế website (được xem là bộ khung của website), đây là ngôn ngữ duy nhất mà các trình duyệt cốc cốc , chrome, opera… có thể hiểu và thực hiện được
    
>   ***Lưu ý:*** *HTML không phải là ngôn ngữ lập trình.*
 
-  Cấu trúc cơ bản của trang HTML thường gồm 3 phần:  
	- \<!Doctype>: Phần khai báo chuẩn của html hay xhtml.    
	-   \<head>\</head>: Phần khai báo ban đầu, khai báo về  [meta](https://hocwebchuan.com/reference/tag/tag_meta.php), [title](https://hocwebchuan.com/reference/tag/tag_title.php), [css](https://hocwebchuan.com/tutorial/tut_css.php), javascript…    
	-   \<body>\</body>: Phần chứa nội dung của trang web, nơi hiển thị nội dung.
    

	![](https://lh4.googleusercontent.com/RjGP8SPFEeF-MAY8FzAVrVpnln1aGZagC-hbSh6p7TaKqGA6eOOBDOb7SIPwqf2WgmWJBZtMSZ0gkmnoJxTNH3sUI_3gSFr0GBrOP_-TobfSDcMZpXDRH-SEopHo0H27sZYdMEg-RWhdDjC-Eg)

-   Cụ thể:
    

	-   Đầu tiên, trước khi khai báo các thẻ khác trong HTML chúng ta cần khai báo dạng tài liệu bằng thẻ `<!DOCTYPE>`, cách khai báo này là khác nhau cho các phiên bản HTML.
    

		Trong HTML4 chúng ta khai báo nội dung tiếp theo viết theo tiêu chuẩn HTML4 bằng cách đưa cú pháp sau vào dòng đầu tiên của mã nguồn:

		*\<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" \"[http://www.w3.org/TR/html4/strict.dtd]">*

		Với HTML5, cách khai báo đơn giản hơn do HTML5 không còn dựa trên SGML nên không phải khai báo DTD:

		![](https://lh3.googleusercontent.com/bZcVaG1WDK-tBbdfVRhPIVL99xnsd72Yvc80ApsJASGjpb_FSkwOxPeL5OQ22Hh7MbBdKJF-vW5nK6U3VtbT1rnIVQdOXNlGYPEl0iVnW5Sgjhqrgb06ozf4IZQh7zSqy_IBDXjyA68-3O7aCw)

-   Tiếp theo, toàn bộ nội dung trong thẻ `<html>` chính là nội dung siêu văn bản. Trong nội dung này chúng ta nhìn bố cục sẽ có hai phần:    

	-   Phần đầu được khai báo bằng thẻ `<head>`. Trong phần này, chúng ta có thể khai báo một số vấn đề như:
    
		-   Tiêu đề của văn bản
    
		-   Văn bản sử dụng bảng mã ký tự nào
    
		-   Các thông tin thêm cho văn bản chính (metadata) như thông tin tác giả, mô tả bài viết, từ khóa bài viết…
    
		-   Các file css, javascript có thể chèn vào tại đây.
    

	-   Phần nội dung được khai báo bằng thẻ `<body>`, đây là phần sẽ hiển thị trên trình duyệt.
    

-

