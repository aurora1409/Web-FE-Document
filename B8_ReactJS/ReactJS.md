
>***React là gì?***
>-   React.JS là một thư viện Javascript dùng để xây dựng giao diện người dùng, nó không phải là 1 framework js nào hết.    
>-   React hỗ trợ việc xây dựng những thành phần (components) UI có tính tương tác cao, có trạng thái và có thể sử dụng lại được.    
>-   React được xây dựng xung quanh các component.    
>-   React không chỉ hoạt động trên phía client, mà còn được render trên server và có thể kết nối với nhau…    
>-   Mục đích cốt lõi của ReactJS không chỉ khiến cho trang web phải thật mượt mà còn phải nhanh, khả năng mở rộng cao và đơn giản.    
>-   Sức mạnh của nó xuất phát từ việc tập trung vào các thành phần riêng lẻ. Chính vì vậy, thay vì làm việc trên toàn bộ ứng dụng web, ReactJS cho phép một developer có thể phá vỡ giao diện người dùng phức tạp thành các thành phần đơn giản hơn.
    

### Component:

-   Components giúp phân chia các UI (giao diện người dùng) thành các phân nhỏ để dễ dàng quản lý và tái sử dụng. Giả sử mình có một website gồm nhiều phần bố cục khác nhau và mình muốn chia nhỏ các phần ra để dễ quản lý.
    
-   Trong React, các component hoạt động giống như các hàm trả về các thành phần HTML
    
-   Các component là các thành phần độc lập và có thể sử dụng lại.
    
-   Các component thực hiện công việc giống như các functions trong JavaScript nhưng chúng độc lập và nhiệm vụ chính là trả về HTML thông qua hàm render
    
-   Có 2 loại component là Function Component và Class Component.
    

![](https://lh3.googleusercontent.com/0VsT9ejtlRDB3XwTcYZpLxgESAU9FRhqkvZNt3_ovbyxjpZmceOewBV14P6IottbkygHD9QgBdYcuLmwSuzS8r-nTVSoK_1i5nq9_bUSl4xM7IKMiAEy9180M21GF7CrouxZ3OD0utjB4DQ8e5zYBVo)

Ở hình ảnh bên trên chúng ta có thể chia nó thành 2 components, đó là phần "khóa học nổi bật" và "xu hướng kiếm tiền". Mỗi components sẽ đảm nhiệm phần hiển thị khác nhau. Khi bạn muốn làm một trang hoàn chỉnh chỉ ghép các components này lại với nhau.

-   Trong mỗi React App đều có thể chứa rất nhiều components, mỗi components trong đó thường nhận về các props và trả về React elements từ đó hiển thị ra cho UI. Components trong React thường được viết theo 2 loại chính đó là functional component và class components. Bên dưới là một functional components:
    

![](https://lh4.googleusercontent.com/K53ROOnY-KHwGApuw_MPl71IfjCe128TO_ywwj1ASwi0XjCg3c41wzvR-ZqffZwgTMfc-3LAZuTB1B0Cb5I39vjG0sScGVpldecWuGbravgwDGhSiX16v_eLlBT5eR1ReTXdLN8MSpkRepsNMGD2GEs)

Components bên trên được viết theo cú pháp ES6, không nhận bất cứ props nào và trả về một react element.

***-   Class Component:***
    

![](https://lh3.googleusercontent.com/ndL3hvGuvntrDrYhZNeyegzLQJfCu-5GvkdwBrThoHuVWtH6qpDwLAiZI-3iw6_NgofejmtVYxSkVtZJ9vBOfGpN7VBupuJFOCIvueeswBdlrd-0xRInWnhdqwLl_Goil2FBDsdJgaz9ZnSoGcagRWU)

***-   Rendering a component:***
    

-   Trong React, Các phần tử có thể đại diện cho các components người dùng tự định nghĩa:
    

	![](https://lh5.googleusercontent.com/_0Lhy0EheyKXdDgXYutN4EwuVjr5wcg_D3bg062oG1Ztw1P62hBdsghXRY43gbQMcs4cP5ywMUW7Z5vl4EdvhpKcM1oCt8jolhW05WvtyMSdEexkKYDpRHftMiN51rjzNyJOPgYDvYMSCoen80N4gkw)

-   Khi React nhận thấy 1 phần tử đại diện cho 1 component người dùng định nghĩa, nó sẽ chuyển các thuộc tính JSX và thằng con vào component như 1 đối tượng duy nhất.
    
-   VD:
    

![](https://lh3.googleusercontent.com/BOaahLqqTU5ToDuXCagvSwb2f3oljrA1VzJQYYyRmlx_csVItp7IpByFe8enKcOJWH2p_DzrGV6HTwCAd-J8IyWsU9G7hbJOInMsLCQSyLKr3pPpJfagRJg-shMBcAFRW6ITJP4G02qx75HlxLuuHXE)

Ví dụ trên sẽ render ra màn hình "Hello, Minh" với các bước sau:

1.  Đầu tiên, chúng ta gọi ReactDOM.render() với phần tử `<Welcome name="Minh" />`.
    
2.  React gọi component Welcome với props: {name: "Minh"}.
    
3.  Component Welcome trả về phần tử `<h1>Hello, Minh</h1>`.
    
4.  ReactDOM sẽ update lại DOM cho khớp với `<h1>Hello, Minh</h1>`.
    

>***Chú ý:*** Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. 
>Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component

### Props:

-   Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element.
    
-   Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
    
-   Khi một components cha truyền cho component con một props thì components con chỉ có thể đọc và không có quyền chỉnh sửa nó bên phía components cha.
    
-   Cách truyền một props cũng giống như cách mà bạn thêm một attributes cho một element HTML. Ví dụ:
    

![](https://lh4.googleusercontent.com/I0r9I2uAObxx6emzAyWR2rl-mbmECVEKvXZ0ZfqdbxFQdnaK4iqrhaotJO90DbjnqyHJDx3ZF9n5E_6AQTVNgLJqRTVoegI9iAk3stG1ZyjhfwyeTmjgyUOi2BmsYAjx3wdZEJKduXTRFpCpVSjiKf0)

Trong ví dụ bên trên, component có tên Welcome sẽ nhận được giá trị của props có tên name vừa mới được truyền vào.

### JSX là gì?

-   JSX không phải một ngôn ngữ template, Hiểu một cách đơn giản, JSX chính là cú pháp để thay thế Javascript, cách viết gần giống XML. (JSX= Javascript + XML)
    
-   JSX là một phần quan trọng trong ReactJS. JSX giống như một syntax extension giúp code trở lên dễ mượt và dễ đọc hơn.
    
-   JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.
    
    

	![](https://lh6.googleusercontent.com/vAsUXgibAhnapp9_aOMz-gcaPf4lu27mf_NH5yD3TtE8GeuTgHX1wNv56YuG0xxpWX0Gx_Bh3-NI7ToeSFE6fhdnHzGL7fYwl0lP9oDpIJ6WSNwRUvBD2GAK7letr6qE5F7mLRo0GwmJJdO444g66t8)

	![](https://lh6.googleusercontent.com/lYlmNJVXqwZ-G1TFmk9y6IGxl9uBRCzwFBz0zlkCCM7vZ2e3Je9qXKDJ4wbKVqdf4WTEsSHNy45flfqLkVGAw6vFK9BflTJHfi2UpZA_FQ-l5UOfICjvkPO41SJY1qt4YAp_oPNtpBqhsL7CsHIvKOM)

-   JSX cho phép lập trình viên viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức nào createElement() và/hoặc appendChild().
    
-   VD:
    

	-   Có JSX:
    

	![](https://lh5.googleusercontent.com/1OIC1WDxia0CnmTPhM1RqqHdh-5s3BCbVW8xChmyY3bu_lBnCIEhqpY6ZszTZcf9dC7itwW_UHO7t1kf9xz2wAsssan3s7semXnszWdPRezssfMzxQrZ7dd-zGyvvkQbggyPapaAx4DRblmOIlyvc9U)

	-   Không có JSX:
    

	![](https://lh3.googleusercontent.com/GJJpiPmWfSDK9qahKTLdsL9PFzKTuXeV_jkkvJG96YnpT3HaBEBLj4HH_c4cmjLTN05QsQ2o5S0BZCmXh20x71_w65EGVXlWIlfrz9_6-e3Pa1XNLrSduznDFnbMzmYcaS54BfVbTxyzd3lXr1URH14)

-   Có thể thấy, trong ví dụ đầu tiên, JSX cho phép chúng ta viết HTML trực tiếp trong JavaScript.
    
-   JSX là một phần mở rộng của ngôn ngữ JavaScript dựa trên ES6 và được dịch sang JavaScript thông thường trong thời gian chạy mã.
    

-   Trong ReactJS không bắt buộc bạn phải sử dụng JSX nhưng hầu hết mọi nguời đều sử dụng nó bởi đây là cách hữu ích nhất để làm việc với các UI bên trong Javascript code. JSX cũng cho phép React hiển thị đầy đủ các lỗi nhất và hiệu quả hơn.
    

### Rendering Elements:

-   ReactJS sử dụng phương thức render để tạo ra cấu trúc DOM ảo trên một vị trí bất kỳ trên DOM thật.
    

	![](https://lh3.googleusercontent.com/qkBVQaDin5OxkfzYQLw2gz6Qs7gmsbjJBayxFPrIcrBbgmgrekvK9An1AI9iUTq2JTeazWNhQ3wbIDrB9g_58opl4BX2-7N11IkmwccRT8H7v7nGeWMJ2fs6CEH0v_5-Ku80_vfaTVrb9uAUp9TwZFM)

	Đoạn mã trên sẽ tạo ra một thẻ “Hello, world” bên trong định danh #root trên DOM thật.

### Virtual DOM:

-   DOM: DOM đại diện cho giao diện của ứng dụng của bạn. Mỗi khi có sự thay đổi về trạng thái của giao diện người dùng ứng dụng của bạn, DOM sẽ được cập nhật để thể hiện sự thay đổi đó. Bây giờ việc bắt thường xuyên thao tác DOM sẽ ảnh hưởng đến hiệu suất, khiến nó trở nên chậm chạp.
    
-   DOM được biểu diễn dưới dạng cấu trúc dữ liệu cây. Bởi vì điều đó, các thay đổi và cập nhật đối với DOM diễn ra nhanh chóng. Nhưng sau khi thay đổi phần tử được cập nhật và phần tử con của nó phải được kết xuất lại để cập nhật giao diện người dùng ứng dụng. Việc kết xuất (re-rendering) hoặc sơn lại (re-painting) giao diện người dùng là nguyên nhân làm cho giao diện người dùng trở nên chậm chạp. Vì vậy, bạn càng có nhiều thành phần giao diện người dùng, thì các bản cập nhật DOM càng hao hơn, vì chúng sẽ cần được hiển thị lại cho mỗi bản cập nhật DOM.
    
-   Khái niệm DOM ảo xuất hiện và hoạt động tốt hơn đáng kể so với DOM thực. DOM ảo chỉ là một đại diện ảo của DOM. Mỗi khi trạng thái ứng dụng của chúng tôi thay đổi, DOM ảo sẽ được cập nhật thay vì DOM thực.
    

-   Virtual DOM không được tạo ra bởi React tuy nhiên nó được React sử dụng và cung cấp miễn phí.
    
-   Một cách tổng quát thì nó là một định dạng dữ liệu JavaScript nhẹ được dùng để thể hiện nội dung của DOM tại một thời điểm nhất định nào đó. Nó có tất cả các thuộc tính giống như DOM nhưng không có khả năng tương tác lên màn hình như DOM.
    
-   Ở DOM có thẻ div và các thẻ p ở trong, ReactJs sử dụng Virtual DOM bằng cách tạo ra các object  React.div và React.p và khi tương tác, ta sẽ tương tác qua các object đó một cách nhanh chóng mà không phải đụng tới DOM hay DOM API của nó.
    

	![](https://lh3.googleusercontent.com/zha58Jwgkntj9D1kWaocD4WkuVQ53pgENbl7EpcCeGv1thm77pEaGR5lZrjyKHNLMOxIM6ora4366JfsLm_PRUs_P7sPwgn0BoiJ_gtbo4pTd9EK2QADDgtG9I6-emx1Cc1BSH-cc07qCx6sLHjoZJc)
