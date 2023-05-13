var app = new Vue({
    el: '#app',
    data: {
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    },
    computed: {
      loggedIn: function() {
        return localStorage.getItem('loggedIn') === 'true';
      }
    },
    methods: {
        login: function() {
          // Check if email and password are valid
          // If valid, set loggedIn to true and redirect to dashboard
          // If invalid, display error message
          if (this.loginEmail === 'wushaohui5825@qq.com' && this.loginPassword === '1111') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'dashboard.html';
          } else {
            alert('Invalid email or password');
          }
        },
        register: function() {
          // Check if name, email and password are valid
          // If valid, set loggedIn to true and redirect to dashboard
          // If invalid, display error message
          if (this.registerName && this.registerEmail && this.registerPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'dashboard.html';
          } else {
            alert('Please fill out all fields');
          }
        }
      }
    });
      