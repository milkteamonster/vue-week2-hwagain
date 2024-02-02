// const { createApp } = Vue
//   createApp({
//     data() {
//       return {
//         user: {
//             username: "",
//             password: ""
//         }
//       }
//     },
//     methods: {
//         login(){
//             if (this.user.username && this.user.password){
//                 console.log('ok')
//                 const url = `https://vue3-course-api.hexschool.io/v2/admin/signin`;
//                 axios.post(`${url}`, this.user)
//                 .then((res)=>{
//                     const {token, expired} = res.data; //用解構的方法取出來
//                     //console.log(token, expired);// 這兩個值要存到cookie裡
//                     document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;// 存的方法
//                     // cdn上的cookie https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
//                     console.log('ok')
//                     //location.href = "product.html";// 成功就會導向產品頁
//                     // or window.location = "product.html";
//                 })
//                 .catch((err)=>{
//                     console.dir(err)
//                 })
//             } else{
//                 alert("請輸入帳號與密碼");
//                 return
//             }
//         }
//     },
//     mounted(){
//         const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
//         if(token){
//             //location.href = "product.html";
//         }
//     }
//   }).mount('#app')


// const App = {
//     data(){
//         return {
//             user: {
//                 username: "",
//                 password: ""
//             }
//         };
//     },
//     methods: {
//         login(){
//             if (this.user.username && this.user.password){
//                 const url = `https://vue3-course-api.hexschool.io/v2/admin/signin`;
//                 axios.post(`${url}`, this.user)
//                 .then((res)=>{
//                     console.log('OK')
//                     const {token, expired} = res.data; //用解構的方法取出來
//                     //console.log(token, expired);// 這兩個值要存到cookie裡
//                     document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;// 存的方法
//                     // cdn上的cookie https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
//                     //location.href = "product.html";// 成功就會導向產品頁
//                     // or window.location = "product.html";
//                 })
//                 .catch((err)=>{
//                     console.dir(err)
//                 })
//             } else{
//                 alert("請輸入帳號與密碼");
//                 return
//             }
//         }
//     },
//     mounted(){
//         const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
//         if(token){
//             //location.href = "product.html";
//         }
//     }
// };
// Vue.createApp(App).mount('#app');


const { createApp } = Vue

  createApp({
    data() {
      return {
        user: {
            username: "",
            password: ""
        }
      }
    },
      methods: {
        login(){
            if(this.user.username != "" && this.user.password != ""){ 
            const url = `https://ec-course-api.hexschool.io/v2/admin/signin`;
            axios.post(url, this.user)
            .then((res)=>{
                const {token, expired} = res.data;
                console.log(token, expired)
                document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
                window.location = "index.html";
            })
            .catch((err)=>{
                console.log(err)
            })
        } 
        else {
            alert('請輸入帳號和密碼')
            return
        }
        }
      }

    
  }).mount('#app')


// const app = createApp({
//     data(){
//         return {
//             text: '123'
//         }
//     },
//     methods:{

//     },
//     mouted(){

//     }
// });
// app.mount('#app')