<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">MEVN Stack</h1>
        <p
          class="lead"
        >Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Codebook Inc.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-dark text-white">
          <div class="card-body">
            <h5 class="card-title">MongoDB</h5>
            <p
              class="card-text"
            >MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.</p>
            <a href="https://www.mongodb.com/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-info text-white">
          <div class="card-body">
            <h5 class="card-title">Express.js</h5>
            <p
              class="card-text"
            >Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.</p>
            <a href="https://expressjs.com/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-danger text-white">
          <div class="card-body">
            <h5 class="card-title">Vue.js</h5>
            <p
              class="card-text"
            >Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing...</p>
            <a href="https://vuejs.org/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-success text-white">
          <div class="card-body">
            <h5 class="card-title">Node.js</h5>
            <p
              class="card-text"
            >As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.</p>
            <a href="https://nodejs.org/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>