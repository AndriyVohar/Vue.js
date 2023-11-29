<template>
  <div class="page">
    <div class="container">
      <p class="number">404</p>
      <p class="message">
        Oops! The page you're looking for could not be found.
      </p>
      <a href="/" class="home-link">Go Home</a>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
}

.number {
  font-size: 8em;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.message {
  font-size: 1.5em;
  color: #666;
  margin: 10px 0;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #2980b9;
}
</style>