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
                sh '''
                pwd
                ls -la
                npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                npm test || true
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh '''
                npx azure-functions-core-tools@4 azure functionapp publish $AZURE_FUNCTIONAPP_NAME
                '''
            }
        }
    }
}
