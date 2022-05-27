node {
    def app

    stage('Clone repository') {

        /* Clone our repository */
        /* checkout scm */
    }

    stage('Build image') {
      dir('vue-chess') {
       
        /* Build the docker image */
        sh "pwd"
        sh "ls -la ${pwd()}"
        app = docker.build("zallegro/vue-chess-img", "./vue-chess")
      }
    }


    stage('Push image') {

        /* Push images: First is tagged with the build BUILD_NUMBER
         the second is just tagged latest !*/
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Deploy to K8s') {

      /* Apply all manifest files */
      sh "kubectl apply -f ./kube/"
    }

}
