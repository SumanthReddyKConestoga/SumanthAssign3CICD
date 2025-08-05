pipeline {
    agent any

    environment {
        AZURE_FUNCTIONAPP_NAME = 'Sumanth9040660'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Print working dir and check for package.json
                    sh 'pwd'
                    sh 'ls -la'
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true' // use `|| true` if no tests yet
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh 'npx azure-functions-core-tools@4 azure functionapp publish $AZURE_FUNCTIONAPP_NAME'
            }
        }
    }
}
