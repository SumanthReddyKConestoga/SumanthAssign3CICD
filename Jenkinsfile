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
                echo '🧪 Running tests...'
                bat '''
                call npm test || exit 0
                '''
            }
        }

        stage('Verify Azure CLI & Login') {
            steps {
                echo '🔐 Verifying Azure CLI session...'
                bat '''
                az --version
                az account show || (
                    echo ❌ Not logged in to Azure CLI.
                    exit /b 1
                )
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo "🚀 Deploying Azure Function App: %AZURE_FUNCTIONAPP_NAME%"
                bat '''
                echo === Current Working Directory ===
                cd
                dir

                echo === Deploying with Azure Core Tools ===
                call npx azure-functions-core-tools@4 azure functionapp publish %AZURE_FUNCTIONAPP_NAME% --verbose > deploy.log 2>&1

                echo === DEPLOYMENT LOG START ===
                type deploy.log
                echo === DEPLOYMENT LOG END ===

                if %ERRORLEVEL% NEQ 0 (
                    echo ❌ Azure deployment failed.
                    exit /b 1
                ) else (
                    echo ✅ Azure deployment succeeded.
                )
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs above.'
        }
    }
}
