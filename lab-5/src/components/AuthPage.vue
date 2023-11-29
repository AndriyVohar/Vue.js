<template>
  <div class="login-container">
    <h2>Login</h2>
    <form class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" name="password" required />
      </div>
      <div class="form-group">
        <button @click="onLogin">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: 'AuthPage',
    data() {
        return {
            username: null,
            password: null,
        }
    },
    methods: {
        onLogin() {
            window.username = this.username
            if(this.$route.query.redirect){
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            }else{
                this.$router.push('/home')
            }
        },
    },
};
</script>

<style>
.login-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-container h2 {
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-group button:hover {
  background-color: #2980b9;
}
</style>