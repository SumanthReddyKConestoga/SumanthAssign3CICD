pipeline {
    agent any

    environment {
        AZURE_FUNCTIONAPP_NAME = 'Sumanth9040660'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh 'npx azure-functions-core-tools@4 azure functionapp publish $AZURE_FUNCTIONAPP_NAME'
            }
        }
    }
}
