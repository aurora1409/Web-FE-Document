
>   ES6 là một tập hợp kỹ thuật nâng cao của javascript và nó là 1 chuẩn mực để làm theo. Trong một project, nếu mỗi người code 1 loại ngôn ngữ, code 1 phong cách khác nhau thì project sẽ rất loạn, => ES6 là một chuẩn mực để cho các framework từ đó mà phát triển lên hay để cho các lập trình viên code js một các tốt ưu và clear nhất.
    
>   ***Các tính năng tốt nhất của ES6:***    
>-   Block - Scoped Constructs Let and Const
>-   Arrow Function    
>-   Rest Parameter    
>-   Destructuring Assignment in ES6 
>-   Default Parameters in ES6 
>-   Template Literals in ES6
>-   Multi-line String in ES6   
>-   Enhanced Object Literals in ES6
>-   Promises in ES6
>-   Classes in ES6
    

**1.  Block - Scoped Constructs Let and Const**
    

-   Block Scoped là phạm vi trong một khối, nghĩa là chỉ hoạt động trong phạm vi được khai báo bời cặp {}
    
-   Nếu sử dụng một biến cho toàn ứng dụng và biến đó thay đổi liên tục thì bắt buộc phải sử dụng var để khai báo, ngược lại, nếu biến chỉ sử dụng trong khối thì nên khai báo bằng let để tiết kiệm bộ nhớ và tối ưu hơn.
    

	![](https://lh4.googleusercontent.com/0ngSh1TRUt8FZmi2P1iodJJpTEs4zuYjC7kRx_3qjJweKQ2tCmfTn8Fp1J3rB8ZWCCumylQxIo7CHDwgrWBcsQa3h3j_yFRC1wymRwadaMX6xBVk_kxg-MFV4CjEWj_-VFL8Cm--I3x9wJooqhg)

-   Biến const : dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
    

	![](https://lh3.googleusercontent.com/JdzHlejQC3ckjJljGiwRtwL9wAEJyw8vRmRnp5C4oqo58gdwUaKK6aQD-m0M6KAiodldqLzJvoUypb6NsRlY4bYbiRDqr2HvUnwi0XkaAQW4_w5HrfEptc79IIy3CIcQBGYHHelaGTaPgd2i70xHGG0)

>***Chú ý:***
>-   Trong es6 hạn chế dùng biến var thay vào đó là ta dùng biến let  
>-   Nếu bạn sử dụng Jquery trong Es6 thì $(this) trong ES6 sẽ được hiểu là (window) 
>-   Để sửa chữa khi bạn sử dụng $(this) sẽ thay bằng $(e.currentTarget)   

**2.  Arrow Function:** có thể tạo hàm bằng cách sử dụng dấu mũi tên =>
    

-   Arrow là một dạng viết tắt của các function sử dụng dấu =>, tương tự như trong C#, Java 8,…
    
-   Trong Javascript để tạo một function thì thông thường chúng ta sử dụng hai cách sau:
    

	![](https://lh5.googleusercontent.com/KdyZlkv18V1ytNHlrY9JgwcxJHjfNbtdBj6iuQ5FLYcG2MvOo01BnUd1pn-u6QlmdF9pgGesd0xB5EVKNi3u_9U5jYX0ygloqNnLgx6tDCL8_iTeaUB_DJgjux7t3K_EoqKxgkZ37E2EVs-bn-fUrG0)

-   Khi đến với ES6 chúng ra có cách định nghĩa mới:
    

	![](https://lh6.googleusercontent.com/zGwJX6d38h5nIo7uaVQNCtHCea7SWwu8stpuZX4_iz1EhlW3ltb2s12ROQjeGQQofGUUxAHzFIlugubqbpn0JJyKA4uOvZ2Un6iks7e-pfzq8CB2TIiP6VIXBkyYnTEqIytLK-YHJYuLPkxHNx4)

VD:

![](https://lh3.googleusercontent.com/DWdFA5pw5wd9kAeC1s0LgX9piyvxgIOVorN--9QBXEevsmSGWsSZQm5YlK4nX1GP3Yh-XVAHR-SatehrM63ay4c39u_s2jmkj-y4bKRyw6v6mvWEhPDE-jy_KGv5QxGkpIMsjAT7L8w8gt4v-ZW_GfA)

-   Nếu nội dung là một câu lệnh đơn:
    

Trường hợp trong thân của hàm chỉ có một lệnh duy nhất thì bạn có thể sử dụng theo ví dụ dưới đây:

![](https://lh5.googleusercontent.com/1DWc4DQf_6qHr0vMsEmRxLC2ZVFAYNXhiUwA_3dmvGZDRHJYApKcFxwdmwDzwINbCQZVkFwlR7Vn8JY6y4EqTMDVUEUYXDxToRucAdljN2Bws7oQ1EKs-zFF6BnjtoM2i-PEkshfq4VdKL641yjbq58)

Nghĩa là bạn có thể bỏ đi cặp dấu {}

-   Trường hợp 1 tham số:
    

Trường hợp truyền vào chỉ một tham số thì có thể bỏ cặp ()

![](https://lh6.googleusercontent.com/KbvDeZsKCbAg_5lij1Ht69UvSaT3FqxBU9TBuzDhx4lvrHoYPnp49E3rl8LAnIK6zMZWcdW2VgtzGpkS7pXTvcQq_QsH7huBH1V5xL0TBCDqHj-EZUygp5ZCl5W_P5_M9OVSrG-bbzoZjR1SOtw)

-   Trường hợp không có tham số truyền vào:
    

Trường hợp không có tham số truyền vào thì sử dụng cặp () rỗng:

![](https://lh6.googleusercontent.com/JwMgx44N0Dly_qhSDyvqur_xlPnpnrrt45XbBvdmQKnohgTlMV1nwjG5PmJVZRoIbzUFzcnwdVomBPQlVAOsq2tC54jf6oHHjD9qSZR9sZjHESq1_SlACGR-gefv9oN6joFRPkaf-TwEWOvoVOY)

>-   Note: Khi dùng Arrow Function bạn phải chú ý đến Ràng buộc mũi tên:
![](https://lh4.googleusercontent.com/nCrZLcG4DWWYfYHMu2jQzHE_Vi9DQd-EVHw4h0ekbpjODgr0tHshNxWud4MHohUn3dmAB97xZtWqZHKvPMQ1kxMJM3XIv0tz-_-m-6MHt9nhJIGfqjYSm5M_ifEeObxxPc2KmlqwOFAfdC9ptDQ)
>Nếu như bạn muốn xuống dòng mà không bị lỗi:
![](https://lh3.googleusercontent.com/JFCLfPLtbiamlnlGDv--kD9Tu5EzilkXeHhRA81Z7sufn60uZ5EJtgIztitSNUZ6XpuOdEHEiWUgdEUSynRIKjjXVACuY5MYV56m3JtVihKF3ZDlzzQ7aWHnsWDr5nlJLpF5hgV-WcT7Fj5-KFQ)

**3.  Rest Parameter**
    

-   Rest Parameters có nghĩa là tham số còn lại, có nghĩa là bạn có thể khai báo một hàm với số lượng tham số không xác định,
    
-   Để khai báo các tham số còn lại của một function thì bạn đặt 3 dấu chấm . trước biến đại diện.
    

	![](https://lh3.googleusercontent.com/9pFZBJBKWj2_rCodLT30LqtL4C5XD9ceDlNIvKCLrnT1iKCdeQr1e5wNWMOozH9BU0-q3nYN3NH1j3lV3ZI2vhbzawTm5wnFGUGOXDu8ZxaZq54B_1jhcg1MhU2BxK2ZgYXDvv32Au6P-xUNBCiUaaY)

	Trong đó tham số tên other là một Rest Parameter vì nó có 3 dấu chấm đặt ở trước.

	![](https://lh3.googleusercontent.com/Z7x2JdtrrO7e4OsDYiC791KnSMkxrponflUotFvG_ie3xzgbfD4leAQ9CT2jW7w6KJ6SCASafBQJHVUaD2hcC2tlS3VCHo_cRFfEd0toQ3kAKEXMbdvL2Rf2YYq1lQ-0SzZE-ZNSnbyH1-5Ri3jfumU)

	![](https://lh4.googleusercontent.com/k0PkYv9joQ2sxzxo_LlhuiQG79-yewW0oJr58eCAwC0rv3C9NBCHqZ_Y-55PyrGgK2hg17VXTTrZIoHa4yDO6vJvC2fP5vHcfBi7yKRLpQGQPwyqLRgiY0u16sQgPz6g1vNN68FdZYC8yF3RJIc)

**4.  Destructuring Assignment**
    

-   Phân các giá trị trong mảng vào các biến theo thứ tự hay nói cách khác nó sẽ tách các phần tử của Array hoặc Object thành nhiều biến chỉ bằng một đoạn code duy nhất.
    

	![](https://lh3.googleusercontent.com/T1UzORUnaAirO4Ew2uIHwkWtjIjFeNt2J-xM02Ga9jA_PNn8DDrxIX0SxItbZnyf1QyMvCxVcADjYucVJC1MqynUi4hu3yId_MK6gTUgCbQvP3YUk99_bwe80k9-7Y3u3hcageekaYx1nqwpmx0)

	![](https://lh5.googleusercontent.com/mnR7FFxKIs4vU26fJqpoCx2PytWPBrLuv5cy_f6aidjMt7bjYz4Uu50v3a10wRhP_l_ISZNWQg3DJ0uzl4VUq0LDunNI7eGK68guo5c6RKLBUFCItOXq9WM2BM34mNW-NED6feNsWqYwud8Wbbw42o8)

-   Nếu bạn muốn lấy một phần tử thôi thì hãy bỏ trống các phần tử không muốn lấy
    

	![](https://lh3.googleusercontent.com/grTkt56LRy7ONXww1Stnj03JnvdicOWXIeNLtqrvGTOkljmrd0EDjUDZWlQKlpkG5VN9EKbBhjX3SWPPCggKP3-Gz8lqKQpfa0pNVqEubXK77VbW7D3_qX6VF9qF9Ni7E5UPEobZTWmYn5lnRj8)

	![](https://lh4.googleusercontent.com/Pqeb_YHTalOnRTufp1T-1ZVZJQ7crvje1l-2JJtA3skVKfXQO9_QCPkyibavpLx-nhncfwjuXj7a2ZMxEP9Ip3SD-RxnoALsFLJb-imQiEtZ9alDvPB3D59N79IxM-gVBw2SJlxuei4A_7nO9yxFp8s)

	d, m, y gọi là các key

>Note: Nếu truy cập vào một key không tồn tại sẽ bị lỗi undefined
![](https://lh3.googleusercontent.com/TbfZ-3Gv1gKyOw_ym4Yl1bxPEixlqH027aVG1_3I_qBdsUSkgPrTyfbUerA1MvadUsU9v1Vq5YbJOAvwXYnkeFS-d9vGfel4Z0UangWXpmaL1jdynCHrBXg2Xs72zXPvws8Lx8wxR0WGJtVSatE)
![](https://lh3.googleusercontent.com/0SRg7jvjZS4WiccC6sGMxbUh839ID6CsliLAbw_Y5ZXdaNh9KCtekXH1zAwvZTyvFKVxKuujC3274z8Ze4IK9CR1U-r2K048vJEFY9wGHQHnmvt6GObuZSUWVuZ_CJmpJbkwncmM4eaiWAJWYwOfXWo)
Khi gặp những lỗi thế này thì các bạn chỉ cần gán luôn giá trị cho biến trong mảng:
![](https://lh5.googleusercontent.com/FuZ6wa6bAwg3edat1dAUGkluE5ModC-PccMoGBntl1xs2kfUxsfggjyeodbkF5p3nKvVmL4QCbSgMVA7QkIdE1tGUnVZeizIzA2e9y97cldOUBXRiKv8dZn9EZzG7LhTJVz-9gDB9YIlHmfd2yQ)

**5.  Default Parameters**
    

-   Default Parameter là giá trị mặc định của tham số khi truyền vào các function.
    
-   Khai báo bằng cách sử dụng phép gán ngay tại vị trí khai báo tham số cho function
    

	![](https://lh6.googleusercontent.com/jIL3KtKHS7FJ2Iv-YLxpZnXU-_wB3g05y_bWq32AaBGD2qncoryxV1_zATSCLdV1Q-X1EFmAPucKu8gh4K-Nx6zvfGvDmNbORB07v263KdgQM4ry8JFbW1w8-0Eui2hzPaqeM25iVHghRDSglcioW9Y)

	![](https://lh3.googleusercontent.com/6tbLnyo8h9HsLXjATzy_h40V72t_jnkc2YH9TJ2u8hfBixgX93vC-dfs6KS0WVCEzZdhP08w6S-ZqU8_sZsBk-hI1_1-53UNWeOHZVHYTb9ZxjZNsgvlYypNVcK3Lfuq5KErNdgdHLvfuhaUtnlXfOo)

**6.  Template Literals**
    

-   Template Literals hay interpolation là một cách hiển thị các biến trong chuỗi.
    
-   ES6 dùng cặp dấu `` và truyền biến vào ${biến}
    

	![](https://lh6.googleusercontent.com/aAj4M4fLPB0Da8IY6QTAw3KZ6oAQouH2lNn1rMEijhtLmbTKl6fUMVf1EIHj_g4xxFk0jbIfReOoNmmrFay3FwzeSsqxbZK-SSW14uCNrvkL4ZHneI_pjIvDFS6qfx13ULlR0SHCWFyfrDf2IY8)

**7.  Multi-line String**
    

-   Tách dòng cho đoạn code quá dài
    

	![](https://lh4.googleusercontent.com/Vj9cgCDSokGyjItyj0ehChGaAgcYTocW2VSYVm9DIbLOcaFEp5Pklh7g04OBFUAKL0nH0DAQp6_X7Z3P6xsOSmGcgZ-1YxZP8hTIiL5JZyf-ilrcE7UlIw5YuF5CUVUt8AYO1Bkl0bsQHHYnsVcng1Y)

	![](https://lh3.googleusercontent.com/GtNRcmgoIII5ikmnyJX8d7BbGrwXJ6KoyVYLu_Fgh4rGqR6vzjfWhqC94HLC6TRXiVzr2eUiZktCpB9KK47cQjeVbDqqdYmWfDWzWmgA52JB6ZDS9TQ-EGBdQboTrkAOm98E8JLHY2PcxvoaTtA)

**8.  Enhanced Object Literals**
    

-   Mô tả object một cách gọn gàng hơn.
    
-   Property value shorthand: ES6 mặc định gán giá trị cho property khi property có tên match với tên của biến. Với ES5
    

	![](https://lh6.googleusercontent.com/DUVyNMIzo6WVBu1HVoIbHS8brdpKEupzCVY8QDfjUWpWzPvAWvojwRQ_QwUdVzU-5b4Z4_w2bN8f4Uq8tGyX2Um8CecUNRyLfvgU3dF40R5kC7UVwkZfTORc8itppgtuywhUVNWoFVWeM8Q9nncD-gQ)

	Với ES6

	![](https://lh3.googleusercontent.com/xJosYPjNU5uPDgOh3CRaGZb6iWjWNPStKdyqrQoOB6AfQTXv3S_QmKUiNB9oy5GsJl0xbaiHrAk2LyTDgI2p11tDgXBremdJeKFvtyAB4ktXQQDrgEVCWTVp4sfFT4UpDwhq-8QCNf0qejFDsx0)

-   Computed property key: Với khả năng này ta có thể set tên của property một cách linh hoạt hơn. Ví dụ với ES5
    

	![](https://lh4.googleusercontent.com/wmlVPBhODfNp4ct7z0nRC6STX_7sXA_SP4SnWxXhpcEa6C2q2lJoRkm9Zer_qNNJgrlvdzZPbyRTPwTqs5_asuJFjFrV4wgJXv2vtoLUTfC1vG6KgTkXTTukfsQ9XrjIxD0swMaksvT2ArIjhlV22bI)

	Với ES6

	![](https://lh4.googleusercontent.com/jsC0wQQNM_NnsWwUE1Wlh4BYGoZo-lvEFwp8okKNOT83yQPOTEyOcdDDDcsp3wXwaHxgvAN7FfqZv_haYKFZ968ypZdGx888bryVvg5L_t73ZDuIR3YYYvNQkVdSvcPRz3IwNOIOy4vMudE_96U)
