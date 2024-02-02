const { createApp } = Vue

  createApp({
    data() {
      return {
        apiUrl: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'milktea',
        products: [],
        tempProduct: {}
      }
    },
      methods: {
        checkAdmin(){
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
            .then(()=>{
                console.log('successed')
                this.getProducts();
            })
            .catch((err) => {
                alert(err.response.data.message)
                window.location = 'login.html';
              })
        },
        getProducts(){
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/`
            axios.get(url)
            .then((res)=>{
                this.products = res.data.products;
            })
            .catch((err)=>{
                alert(err.response.data.message);
            })
        }
    },
    mounted(){
        // 取出 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin()
    }

    
  }).mount('#app')
