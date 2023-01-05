pipeline{
    agent any
    tools{
        nodejs "Node"
    }
    stages{
        stage('Building'){
            steps{
                sh 'npm install'      
            }
        }
        stage('Testing'){ 
            steps{
              sh "npm run test"
            }
        }
        stage('Docker Build'){ 
            steps{
              sh "docker build -t health-app ."
            }
        }
        stage('Docker Push'){ 
            steps{
                script{
                    withCredentials([string(credentialsId: 'docker-hub-pwd', variable: 'dockerhubpwd')]){
                        sh 'docker login -u dungnguyen94 -p ${dockerhubpwd}'
                    }
                    sh 'docker tag health-app dungnguyen94/my-repository:health-app'
                    sh "docker push dungnguyen94/my-repository:health-app"
                }
            }
        }
    }
}
