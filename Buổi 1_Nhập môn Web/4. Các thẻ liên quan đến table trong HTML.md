Tạo bảng dùng thẻ `<table> </table>` gồm 2 phần con là `<thead> </thead>` và `<tbody> </tbody>`.  
Bên trong phần `<thead> </thead>` xác định tiêu đề từng cột dùng thẻ `<th> </th>`.  
Bên trong phần `<tbody> </tbody>` xác định nội dung từng hàng dùng thẻ `<tr> </tr>`.  
Bên trong mỗi hàng tương ứng với mỗi thẻ `<tr> </tr>` ta dùng thẻ `<td> </td>` xác định nội dung từng cột với mỗi hàng đó.  
  
### Một số thuộc tính:   
  
![thuộc tính table](https://user-images.githubusercontent.com/93191061/171989656-8f1e51e1-6e91-463b-90a9-6aa1ff3edfb8.png)  
  
ví dụ về đường viền: thêm phần code border = "..." ở thẻ table. VD: `<table border = "3">`.  
  
![border](https://user-images.githubusercontent.com/93191061/171873470-f9b0f88b-c534-4aa3-9d2f-9c3288492dd7.png)  
  
### Cách gộp các ô bên trong bảng làm một  
Thông thường, khi tạo một cái bảng thì số ô trên mỗi hàng phải bằng nhau. 
Tuy nhiên, có một vài trường hợp đặc biệt, chúng ta cần phải tạo ra những cái bảng mà số ô trên mỗi hàng có sự hơn kém nhau.
  

#### Gộp các ô theo chiều ngang  

  
Để gộp các ô theo chiều ngang thì chúng ta đặt thuộc tính colspan vào bên trong thẻ mở của cái ô mà ta muốn bắt đầu gộp nó với những ô nằm phía bên phải.  
Cú pháp: `colspan="số ô muốn gộp lại với nhau"`. 

#### Gộp các ô theo chiều dọc  
Để gộp các ô theo chiều dọc thì chúng ta đặt thuộc tính rowspan vào bên trong thẻ mở của cái ô mà ta muốn bắt đầu gộp nó với những ô nằm phía dưới.  
cú pháp: `rowspan="số ô muốn gộp lại với nhau"`.  

