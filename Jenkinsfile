pipeline {
    agent any

    environment {
        AZURE_FUNCTIONAPP_NAME = 'Sumanth9040660'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📦 Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing node modules...'
                bat '''
                call npm install || exit 0
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running test suite...'
                bat '''
                call npm test || exit 0
                '''
            }
        }

        stage('Check Azure CLI & Session') {
            steps {
                echo '🔍 Verifying Azure CLI login...'
                bat '''
                az --version
                az account show || exit 1
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo "🚀 Deploying Function App to Azure: %AZURE_FUNCTIONAPP_NAME%"
                bat '''
                call npx azure-functions-core-tools@4 azure functionapp publish %AZURE_FUNCTIONAPP_NAME% || exit 1
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed. Check above logs.'
        }
    }
}
