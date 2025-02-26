pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-react-app"
        REGISTRY = "mydockerhub"
        BRANCH = "main"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git branch: 'main', url: 'https://github.com/oro23/react-typescript.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t ${DOCKER_IMAGE}:${BRANCH} .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests in a Docker container (you can replace this with your actual test command)
                    sh 'docker run --rm ${DOCKER_IMAGE}:${BRANCH} npm run test'
                }
            }
        }

        stage('Deploy to Dev') {
            when {
                branch 'dev'
            }
            steps {
                script {
                    // Deploy the app to the Dev environment (you can customize this for your dev server)
                    sh 'docker run -d --name ${DOCKER_IMAGE}-dev -p 8081:80 ${DOCKER_IMAGE}:${BRANCH}'
                }
            }
        }

        stage('Deploy to Test') {
            when {
                branch 'test'
            }
            steps {
                script {
                    // Deploy the app to the Test environment (you can customize this for your test server)
                    sh 'docker run -d --name ${DOCKER_IMAGE}-test -p 8082:80 ${DOCKER_IMAGE}:${BRANCH}'
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Deploy the app to the Production environment (you can customize this for your production server)
                    sh 'docker run -d --name ${DOCKER_IMAGE}-prod -p 8083:80 ${DOCKER_IMAGE}:${BRANCH}'
                }
            }
        }
    }

    post {
        always {
            // Cleanup: remove any containers
            sh 'docker container prune -f'
        }
    }
}
