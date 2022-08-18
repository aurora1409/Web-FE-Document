
### 1.  Props:
    

-   Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element.
    
-   Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
    

-   Các giá trị của props không bị thay đổi, khi muốn thay đổi trạng thái của component thì người ta chỉ thay đổi state của component chứ props thì không thay đổi được.
    

	***-   Cách truyền một props:***
    

	-   Cách truyền một props cũng giống như cách mà bạn thêm một attributes cho một element HTML.
    

		![](https://lh4.googleusercontent.com/3h5Tfi1tyUwsRQfcTc7n56LXaBkPvjixp5D9sWS8w7ZETGt5fRU_yj8QBAP2dX6npxvG5IhSVXY9meWgLSBHDzr6HOanqH5yps7gkm-YLaTwP5h7J3zGSWQhbE7rJFnkZAvh5IFF0ngGjZwKMGY5Yj0)

	-   Ví dụ:
    

		![](https://lh5.googleusercontent.com/BjUJTF61QYgbktoPe7E5aew1zO_erbS-1P3st46eSNps_MaknxooCwrDyo_t_WnySsLVdzKDJen9h8hrfrY0OD03Ifokymwp17_59NHhdx08eAvW8vasYoRpUIsemVDz57zMThjE9prJfDCyUCKv6Ns)

		Trong ví dụ bên trên, component có tên Welcome sẽ nhận được giá trị của props có tên name vừa mới được truyền vào.

	-   Ví dụ:
    

		![](https://lh6.googleusercontent.com/HxAdj_Df4QbE5dsSQga6UdNjN3JtC4grxqiXl0PdcB2EEygGRXv-5QJTtHgMszg-u4PE0uWYQefYOqQZBYmYit_3CnVJLIkc1ZN7ywHnits2wJvozK57dG-RoLW5rGslI8JMfSbi_4LIWrYDaWBJLW4)

		Vậy trong components Welcome giá trị của props sẽ là một object bao gồm các giá trị truyền vào :

		![](https://lh5.googleusercontent.com/n5foFislRAci6k3WoRyxDJ8OkKBT7pvVVQ63tR2qOEVa9_WevyOOKaebNFJpBIwybSqYy4lN7n8y-jCv4VIWT-2zfoDXyIAj-r_Qs2gSrtWtbsPK3xbqe2kQgcpLAjfRyOdLCnJxf80gUu5vv26Wc5c)

		Khi bạn truyền một giá trị bên trong một tags thì nó sẽ là giá trị của thuộc tính chirlden trong object props

	***-   Nhận props trong component:***
    

	-   Chúng ta có thể nhận giá trị của một props bằng cách nhận vào tham số trong functional components và this.props trong một class components.
    

		![](https://lh3.googleusercontent.com/nEmdTDXV8X0uZ9qWEwx-3BSYLKpn1g5ss_ISjpIt5fLCDNHXTvJMZyE2iVDRdBMwpByjbv1sRuKQb7qp0SxXj1q3TXJKu2QLsPPNY2YNQ9GWgZMIG9q_r3UTPqZpHgkX1PFDQIT2m2TPKifXfhW9K3k)

### 2.  State
    

-   State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. State có thể được thay đổi bất cứ khi nào mong muốn. Khác với props bạn có thể truyền props sang các components khác nhau thì state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.
    
-   Trong các dự án React, state được dùng để phản hồi các yêu cầu từ người dùng, hay lưu trữ một dữ liệu nào đó trong components.
    
-   Chúng ta có thể thao tác với state trong một component rất dễ dàng bằng cách sử dụng class components.
    
	***-   Khởi tạo state:***
    

	-   Chúng ta có thể khởi tạo một state bằng cách gán giá trị cho biến this.state và lấy giá trị của state bằng cách gọi this.state:
    

		![](https://lh5.googleusercontent.com/wnHmqu3u7CULAEYLUEJCRUHQNqbR1qmAefprvM4tvc7Pk5L2fc-sM8qsvAjm63W9-8sQ3xBkvDgk66jJszyQOWUeafsxMr7nm9tkuVBXsUnB_X7aT1H6z3ryCzbk8zpBt-FcY0BSd0Irxw_xW5WmIGQ)

		![](https://lh4.googleusercontent.com/2_IwwXExV8Z3HkS2_sKOkwSqe8lt6Gfv29CqM9ORElULhq6SJdyKq-qf0LzciHpbFINn2b_Mq8adoamxOAX2rgDFVdf0FnaGmwrzX5PT5FLhdb80N4fIyOBqkAIVTHRmOgh-vTQ3TGUfWQg9cRoxuPM)

	-   VD:
    

		![](https://lh6.googleusercontent.com/lZ7lDWn-iNUgKkpUNHQQ6Jdozy0nZlhD4VXGqOU8xD2CgwTdQafUlZTkYQ11RAsjcKEk58a8QsIbWCin48BNKRb6XwAPPVZDFnqvVq2aPRCtdxVsswtvB_2RzfG7q-eaRsMsoJK9NFuRQGkNRPMFmSg)

		Trong hầu hết các trường hợp bạn nên khởi tạo state bên trong hàm constructor() để tránh gặp các lỗ không mong muốn. Vì đây sẽ là hàm khởi chạy đầu tiên khi một components được gọi.

	***-   Cập nhật 1 state:***
    

	-   Trong các components bạn cần phải thao tác với state rất nhiều , ngoài thêm và lấy giá trị của state bạn còn phải cập nhật các states để ReactJS có thể tự động re-render lại components. Điều này khá quan trọng, giả sử bạn đang cho người dùng nhập vào môt form nào đó và khi click Lưu thì nội dung được điền trong form lúc này sẽ phải hiển thị ra màn hình. Đây là lúc bạn cần dùng đến cách thay đổi giá trị của một state.
    
	-   Để cập nhật một state bạn sử dụng phương thức:
    

		![](https://lh6.googleusercontent.com/vdJf6VmeFxe1XyGLuuRULiBojx6q9P--O92JJgG82l98XK_uoKsbJk9i7tpK_NaCiWw49rDnvYQWxJXy57-CLIvot0YVtrd31DplIbDHPrNPzzXUSkKtiOikqncn3IPdBtKza5txd0HUQjzDr_Adiy8)

	-   Ngoài ra bạn cũng có thể lấy giá trị của state trước khi cập nhật:
    

		![](https://lh4.googleusercontent.com/-Xi62piWw-CUr3aTaCSbVeuWNXTH9L9jyZ8iTX_NwXa7iSV2OY5ObKYMXS8qgIah-sDHlUIgbgAmYKI946x4s3j4IuBCkIK1L8acdY7ytpv2OiSgvb-N87OaD9vnEfpmbLiMqq6MDo7uMtLKM6oL0QA)

	>***Phân biệt props và state:***
	>-   State - Dữ liệu chỉ nằm trong phạm vi của một component. Nó được sở hữu bởi một components cụ thể và chỉ là của component đó thôi.Và mỗi khi state thay đổi thì component cũng phải thay đổi theo.    
	>-   Props - Dữ liệu đường truyền từ component cha cho component con, components con khi nhận được sẽ chỉ được đọc mà không thể thay đổi dữ liệu đó.   
	>-   Sự khác nhau chính của 2 khái niệm này là component sở hữu dữ liệu. State là chỉ riêng nó có thể sử dụng. Props là dữ liệu mà component con được nhận về từ một component cha.    
	>-   Vì phạm vi của state chỉ nằm trong components nên việc truyền dữ liệu từ các components với nhau người ta thường dùng props.
    

### 3.  useState
    

-   useState là một hook cho phép chúng ta quản lý các state trong một functional component, Bằng cách gọi React.useState bên trong một functional component, bạn đã có thể làm việc với state một cách nhanh chóng.
    
-   Để sử dụng useState, trước tiên chúng ta cần import nó vào component.
    

	![](https://lh4.googleusercontent.com/UANKDkdErC3ClnNL68fGdZZyAlQJKR-TRP8oWXYRwY-ORBmlUC0EUAkcQ43CCAdF_la-48AoLmwXQjYRP8zzZloAUeQ3NmzpOKewxhUXBcBEH5f3yTJxMSuvaBrZCWQUhe4k9nIv-TiwT3sKyoK8VPc)

-   Tiếp theo, sử dụng useState bằng cú pháp:
    

	![](https://lh5.googleusercontent.com/HMj5EHczE_2BE_QvmF0hOoeuCZvl2WMO0m_T5J8EGaMujDjfhRp9rKiBHrNq64HERcL8RT3LrYjpChEMjADdBHZyOuvLuH89qrui3reCx5Zir5vimeq7Xz4SPMcukLOY0lWC7PsDKWwY4oPt-c4Lguw)

>***Trong đó:***
>-   nameState: đây là gía trị mặc định của state.    
>-   funcUpdate: function dùng để cập nhật state. Giả sử mình muốn cập nhật giá trị của state mình chỉ cần gọi funcUpdate('giá trị mới của state').    
>-   defaultState: giá trị mặc định của state khi được khởi tạo lần đầu.
-   Khi sử dung state trong một class component, state được khởi tạo đó luôn luôn là một object, chúng ta chỉ có thể lưu trữ giá trị trong object đó. Nhưng với hooks, chúng ta có thể lưu trữ bất cứ kiểu dữ liệu nào trong state như object, number, string,....Khi thực hiện gọi useState đồng nghĩa với nó là state đã được khởi tạo thành công.
    

	![](https://lh6.googleusercontent.com/HgWu6rDlUca8wkEWYGRKL8_8i8iIMgni4PmFCSwUYswZqRg02tb10hi2gl46JhJGvdUH3x_rOCHiy5DpQVbifFYACZXd3_PySIvwWK2wEDr7o5QIEaCKUsxT-Gp5q71NbYMDyrwD4u1LnL-HnptNTSU)

	Dùng useState:

	![](https://lh3.googleusercontent.com/9IVg4DOXGBQPQdCmL-aFYPpVgAgV6YKwJzzSK7bsRHaYRbBwZaqPiuVgINQpl_3w_WfIOALt3IgyyE2ce5uQwAXDH3mf4bZdkAoKvmY7BxyV1LiQwmMBjcU1MtzM833H5gjscoSCMFLNrNt4XDVz1tE)

### 4.  Handling event (xử lý sự kiện)
    

-   Xử lý các sự kiện trong React rất giống với xử lý các sự kiện trên các phần tử DOM. Có một số khác biệt về cú pháp:
    

-   Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
    
-   Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
    
-   VD với html:
    

	![](https://lh3.googleusercontent.com/K9WqlNESOXvUEkotVRrexu-VBwlgOpvPB0h6kZx7C5tse1BLh02_8-aamYVx9c1Urz8E4t96ALVOAqI-if6ex8KkHQiTUfwXV1DKuZSHA06KB13wqCjDEQFXXY8ZPYB9_9XOUaU7Qs26snzNN55VVvc)

-   Với JSX trong React
    

	![](https://lh4.googleusercontent.com/r4F5ezElKfcnQOiEfaCNS3EAGqikCRWZE9tc_29SUUdMsI8Pa2Eodl3BOf1rJ4ZlHMVNHXgkNNif219Lp4oShFMV2P5scbw2HaCJO7ZOLqFMFt_mT6StcGiSQQnaDLllsoJIYq5EB6IngBIK-g7do18)

-   Một điểm khác biệt nữa giữa React và Dom là bạn không thể gọi return false để dừng hành động mặc định (prevent default) trong React. Bạn phải gọi preventDefault. Ví dụ, trong HTML để ngăn chặn việc mở 1 trang mới khi bạn click vào link.
    

	![](https://lh5.googleusercontent.com/cV4GsojnxyV0FVM4PNSq5Fnus1SzeygNgYVmIhNdDOrodeJ6haXx9mlnc1UsosWENqfOrQLa50_a2_qFKS9XhOGik62FMTMePqCTKtQJWt0yIvweM58hB-2jJ5hLu1IUSdh8741xme1IZnJdaK0wD80)

	Nhưng trong React

	![](https://lh4.googleusercontent.com/ushdWQoq6kdWr2o67g7YbUZMFY8cggNJ8deplyBBzSxZ23SW9-I0WoAJI9ipXq7ymbRMD-kqXaSNwlm4eMjCROQCkcVCO0Cqi8RIkyp7gwp5nWww9ESrYD4-hg1B32734c8FjOxL56FtABIboZOMn2k)
