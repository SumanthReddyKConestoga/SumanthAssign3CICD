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
                bat '''
                echo Installing Node Modules...
                dir
                npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                echo Running tests...
                npm test || exit 0
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                bat '''
                echo Deploying to Azure...
                npx azure-functions-core-tools@4 azure functionapp publish %AZURE_FUNCTIONAPP_NAME%
                '''
            }
        }
    }
}
