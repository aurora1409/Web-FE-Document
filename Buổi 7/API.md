
>-   API là viết tắt của Giao diện lập trình ứng dụng (Application Programming Interface).  
>-   API là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức  
>-   Kiến trúc API thường được giải thích dưới dạng máy chủ và máy khách. Ứng dụng gửi yêu cầu được gọi là máy khách, còn ứng dụng gửi phản hồi được gọi là máy chủ.   
>![](https://lh3.googleusercontent.com/6-zRB8v9lr2qLKjGST8Ck3Aou8zr0J1Q0lGhk8WClaAjVKNb-i4t0SHZaipRR26XGIjpSPPVESORkFODj20heSUnuoUq7VWKD6uHDOINwg53CuPcTuLQkL6LltkT_6F5vnyrVaykeOcP_k0QcRdTi3Q)

### 1. Promise là gì? Cách tạo 1 Promise? Cách sử dụng Promise?

-   Promise sinh ra để xử lý kết quả của một hành động cụ thể, kết quả của mỗi hành động sẽ là thành công hoặc thất bại và Promise sẽ giúp chúng ta giải quyết câu hỏi "Nếu thành công thì làm gì? Nếu thất bại thì làm gì?". Cả hai câu hỏi này ta gọi là một hành động gọi lại (callback action).
    
-   Ví dụ việc xử lý hành động load hình ảnh của trình duyệt, nếu hình ảnh load không được thì sẽ làm thao tác bổ sung hình mặc định, đây là một hành động callback. Nói trong lập trình thì đây là một callback function.
    
-   Khi một Promise được khởi tạo thì nó có một trong ba trạng thái sau:
    

	-   ***Fulfilled:*** Hành động xử lý xong và thành công, trạng thái này xảy ra khi bạn sử dụng ***resolve***.
    
		````
		var  promise = new  Promise(function(resolve, reject){
		resolve();
		});		
		console.log(promise);
		````

		![](https://lh6.googleusercontent.com/c7R-4_BbWqvLClx04T6mynROceSQtjVjLOmh_s2iTCo1cIHDOgClfAlWp8Hq5ISvUWSn5Os8wlhm9M9tC43sE3PL9Fidw2NMhCGN46UOgFACREL5TQ1U1FiB2Eom4IZrzBbVBF96LtL7MtI1PtrMLew)

	-   ***Rejected:*** Hành động xử lý xong và thất bại, trạng thái này xảy ra khi bạn sử dụng ***reject***. Khi bạn sử dụng reject thì bắt buộc phải khai báo hành động xử lý cho nó (tức sử dụng `then` hoặc `catch`).
    
		````
		var  promise = new  Promise(function(resolve, reject){
		reject();
		});
		promise.catch(function(){
		// Something
		});
		console.log(promise);
		````

	-   ***Pending:*** Hành động đang chờ xử lý hoặc bị từ chối, là trạng thái khi bạn khởi tạo một Promise nhưng chưa thiết lập kết quả cho nó, tức là chưa sử dụng `resolve` và `reject`.
    
		````
		var  promise = new  Promise(function(resolve, reject){
		});
		console.log(promise);
		````

		Hai trạng thái `Reject` và `Fulfilled` ta gọi là ***Settled***, tức là đã xử lý xong.

		![](https://lh4.googleusercontent.com/W-AqZsi5IAi3kML7ete3KiJasgyxMgoH789aOYqK4Oh_-3puOc1H6rulRCGwoZ0c9MWqaOscxnq-gLFvKQj1kYDwgbVy0-SKIWc8sB578D0dvsBf2HqyZydKynRw_z6arGe68KOmp9mBorrr2SS9VD4)



**-   Cách tạo một promise:**
    

Để tạo một Promise bạn sử dụng cú pháp sau:

`var  promise = new  Promise(callback);`

Trong đó `callback` là một function có hai tham số truyền vào như sau:
````
var  promise = new  Promise(function(resolve, reject){
});
````
***Trong đó:***

-   resolve là một hàm callback xử lý cho hành động thành công.
    
-   reject là một hàm callback xử lý cho hành động thất bại.
    

-   Thenable trong promise:
    

	-   Thenable là một phương thức ghi nhận kết quả của trạng thái (thành công hoặc thất bại) mà ta khai báo ở Reject và Resolve. Nó có hai tham số truyền vào là 2 callback function. Tham số thứ nhất xử lý cho Resolve và tham số thứ 2 xử lý cho Reject.
    
		````
		var  promise = new  Promise(function(resolve, reject){
			resolve('Success');
			// OR
			reject('Error');
		});

		promise.then(
			function(success){
				// Success
			},
			function(error){
				// Error
			}
		);
		````
	-   Hai hàm callback resolve và reject trong then chỉ xảy ra một trong hai mà thôi, điều này tương ứng ở Promise sẽ khai báo một là Resolve và hai là Reject, nếu khai báo cả hai thì nó chỉ có tác dụng với khai báo đầu tiên.
    
		````
		var  promise = new  Promise(function(resolve, reject){
			reject('Error!');
			resolve('Success!');
		});
		promise.then(
			function(success){
				console.log(success);
			},
			function(error){
				console.log(error);
			}
		);
		````

		![](https://lh4.googleusercontent.com/h6zH9-4TjMBjjB-BamznBx2q2Ptjwb-sSUBMO0kh-8SrfCGNbLC7XJJmow0bJ5ot5A9XyXGaT57zdhRt5bLUVJlTY0oB7K2BGCtexmy9SAlwRD-XVqKmVfSy3ktgxdiWAULQ7OHmh_gqvgR6cB9ALuE)

		Chạy lên nó cũng chỉ nhận đúng một giá trị là Error! => callback error đã hoạt động.

**-   Catch trong promise:** then có hai tham số callbacks đó là success và error. Tuy nhiên bạn cũng có thể sử dụng phương thức catch để bắt lỗi.
    
````
promise.then().catch();
	var  promise = new  Promise(function(resolve, reject){
	reject('Error!');
});
promise
	.then(function(message){
		console.log(message);
	})
	.catch(function(message){
		console.log(message);
	});
````
Chạy lên kết quả sẽ là Error!.

Nếu ta vừa truyền callback error và vừa sử dụng catch thì  nó sẽ chạy hàm callback error và catch sẽ không chạy.
````
var  promise = new  Promise(function(resolve, reject){
	reject('Error!');
});
promise
	.then(function(message){
		console.log(message);
	}, function(message){
		console.log('Callback Error!');
		console.log(message);
	})
	.catch(function(message){
		console.log('Catch!');
		console.log(message);
	});
````

![](https://lh4.googleusercontent.com/PIn-jdzC5Na3ItwSy6ZeSocVCBHM2zF6a8j-_XQS9B9mOhPjfo-n_9GyQWt5qu8VeNzJGdIGNkXUTxWkrAiABMB4iqxazPtoMOJHsiGlwRWPDbBq5dQ-kjh7Umw9zMOCm9rKwuaGX1mX39EULZGJrTQ)

### 2. Async, await là gì? Cách dùng và điểm so với Promise như thế nào?

-   Async/Await là bước kế tiếp trong công cuộc xử lý thao tác bất đông bộ trong JavaScript. Nó cho bạn 2 từ khóa mới là: async và await. Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ, và await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async. Do đó async sẽ được sử dụng trước hàm, còn await sẽ được sử dụng ở trước các thao tác cần đồng bộ. Và điểm lưu ý đó chính là kết quả trả về của async function luôn luôn là một Promise.
    
    
	-   ***Async*** được dùng để khai báo một hàm bất đồng bộ (async function someName(){...}). Các hàm bất đồng bộ sẽ luôn trả về một giá trị. Việc sử dụng async chỉ đơn giản là ngụ ý rằng một lời hứa sẽ được trả lại và nếu một lời hứa không được trả lại, JavaScript sẽ tự động kết thúc nó.
    

		-   Tự động biến đổi một hàm thông thường thành một Promise.
    
		-   Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.    
		-   Async cho phép sử dụng Await.
    

	-   ***Await*** - tạm dừng việc thực hiện các hàm async, được sử dụng để chờ một Promise. (Var result = await someAsyncCall ().
    

		Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả. Cần lưu ý rằng nó chỉ làm cho khối chức năng không đồng bộ chờ đợi chứ không phải toàn bộ chương trình thực thi.

		-   Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
    
		-   Await chỉ có thể được sử dụng bên trong các function async.
		    

		-   Một điều tuyệt vời khác về Async / Await là nó cho phép chúng ta bắt các lỗi không mong đợi bằng cách sử dụng try / catch. Chúng ta chỉ cần để các await call của chúng ta vào trong khối try/catch như sau:
    

				async function doSomethingAsync(){
					try {
						// This async call may fail.
						let result = await someAsyncCall();
					}
					catch(error) {
						// If it does we will catch the error here.
					}
				}

			Mệnh đề catch sẽ xử lý các lỗi gây ra bởi các hàm bất đồng bộ hoặc bất kỳ lỗi nào chúng ta có thể đã viết bên trong khối try.

***-   Cú pháp Async/await:***
    

**1. Async**

Từ khóa Async được đặt trước 1 hàm làm cho hàm trả về promise.
````
async  function  myFunction() {
	return  "Hello";
}
````
#### 2. Await

Từ khóa Await được đặt trước 1 hàm làm cho hàm chờ một promise.

`let value =  await promise;`

### 3. Fetch API, REST API là gì?

***3.1. Fetch API***

-   Rất thường xuyên trong lập trình Javascript bạn cần lấy dữ liệu từ một URL. ES6 có rất nhiều tính năng mới được đưa vào trong đó có Promise. Và Fetch API là một tiêu chuẩn mới để tạo một yêu cầu (request) gửi đến server và nhận về một dữ liệu. Fetch API được viết dựa trên khái niệm Promise.
    
-   Muốn tạo một HTTP Request bạn chỉ cần sử dụng duy nhất một phương thức fetch() của Fetch API
    
-   Dùng fetch API cho phép chỉ dùng Javascript thuần vẫn tương tác được với Server API
    
-   Tham số đầu tiên của phương thức fetch() là API URL, phương này trả về một Promise, chúng ta cần xử lý nó để lấy kết quả trả về theo mong muốn.
    
	````
	fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
		console.log(res)
	);
	````
	Đây là kết quả của request trên

	![](https://lh6.googleusercontent.com/4XLsS_BdNC1vqR1GNV4IM8mbihgpV1qaa3SEdAJtHWenwwN2jEusb3L1nN3bRio6yAo9b_v66uhfHg0Mz0MLZifIIBgymBkJXkbVXKoL20toL0E1d2Qd434Ng7zep4zytO8Nu1_dspBiBfp-pwRqYXM)

-   Trong Response Object có một vài phương thức giúp chung ta format kiểu dữ liệu theo mong muốn như: json, text, blob, formData, hay arrayBuffer
    
-   Ví dụ như để get dữ liệu với kiểu text format chúng ta làm như sau:
    
	````
	fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.text()).then(data => console.log(data)); 
	````

***-   Sử dụng HTTP Post Request:***
    

-   Phương thức request mặc định được sử dụng trong fetch() là GET. Như ở ví dụ trên chúng ta đang sử dụng GET method hay nói cách khác: Khi chỉ truyền một tham số vào fetch() method thì nó sẽ nhận mặc định là phương thức request GET.
    
-   Để sử dụng POST request bạn chỉ cần truyền vào tham số thứ 2 của fetch() method như sau:
    
	````
	const options = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({title: 'new', post: 'new post'})
	};
	fetch('https://jsonplaceholder.typicode.com/posts', options).then((res) => res.json()).then(data => console.log(data));
	````

	Content-Type của headers mặc định là text/plain. Để gửi dữ liệu là Json thì bạn set nó về application/json và tương tự cho các kiểu dữ liệu khác

***3.2 REST API***

-   [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) (còn được biết với tên gọi RESTful API) là một giao diện lập trình ứng dụng (API) tuân thủ các ràng buộc và quy ước kiến trúc REST được sử dụng trong việc giao tiếp giữa client và server. REST là viết tắt của REpresentational State Transfer, nó được tạo ra bởi nhà khoa học máy tính Roy Fielding.
    

  ![](https://lh5.googleusercontent.com/8Kxgfe6a8mmQiNTTmXnjK27BgPW0qZGVaQSeZlo5MlNG0hGSZKVGSVvH7Bemk9_vTyVUXz7shK-SZ-Q6645c1WXEawjffXPiiE5_CKv1aeAMtGibspY_blwujXtp1x_OzY9JmYm-toLoa0xw1Xu_Has)
    
-   2 thành phần của Rest API:
    

	-   REST (REpresentational State Transfer) là một đại diện cho sự chuyển đổi dữ liệu. Trong kiến trúc này client và server hoàn toàn độc lập, chúng không biết gì về nhau. Mỗi một request REST API đều không mang theo trạng thái trước đó (stateless). Như vậy để đôi bên trao đổi state, chúng sẽ phải thông qua các resources. Các resource này chính là phần đại diện cho sự thay đổi dữ liệu.
    
	-   API (Application Programming Interface) là giao diện lập trình ứng dụng. Giao diện này không dành cho người dùng cuối mà dành cho các nhà phát triển (developer). Nó là cái “bề mặt”, chỉ thấy được phần khai báo (tên, tham số, kiểu trả về), bộ đồ lòng body thì không biết
    

-   Request và Response trong REST API:
    

	Như đã đề cập ở trên, để trao đổi state chúng sẽ cần giao tiếp resource thông qua việc gửi các request response thông qua HTTP/1. Cụ thể việc giao tiếp này là thế nào thì chúng cần chỉ định các method tương ứng bao gồm:

	-   GET: Trả về một Resource hoặc một danh sách Resource.
	    
	-   POST: Tạo mới một Resource.
	    
	-   PUT: Cập nhật thông tin cho Resource (toàn bộ resource).
	    
	-   PATCH: Cập nhật thông tin cho resource (một phần resource).
	    
	-   DELETE: Xoá một Resource.
    


