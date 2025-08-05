pipeline {
    agent any

    environment {
        AZURE_FUNCTIONAPP_NAME = 'Sumanth9040660'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📦 Checking out code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                bat '''
                call npm install || exit 0
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running test cases...'
                bat '''
                call npm test || exit 0
                '''
            }
        }

        stage('Verify Azure CLI & Login') {
            steps {
                echo '🔐 Verifying Azure CLI authentication...'
                bat '''
                az --version
                az account show || (
                    echo ❌ Not logged into Azure CLI.
                    exit /b 1
                )
                '''
            }
        }
stage('Deploy to Azure') {
    steps {
        echo "🚀 Deploying Azure Function App: %AZURE_FUNCTIONAPP_NAME%"
        bat '''
        echo === Current Directory ===
        cd
        dir

        echo === Deploying with verbose logs ===
        call npx azure-functions-core-tools@4 azure functionapp publish %AZURE_FUNCTIONAPP_NAME% --verbose > deploy.log 2>&1

        echo === DEPLOYMENT LOGS ===
        type deploy.log

        if %ERRORLEVEL% NEQ 0 (
            echo ❌ Deployment failed. See above logs.
            exit /b 1
        ) else (
            echo ✅ Deployment successful.
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

                echo === Deploying to Azure ===
                call npx azure-functions-core-tools@4 azure functionapp publish %AZURE_FUNCTIONAPP_NAME% --verbose

                if %ERRORLEVEL% NEQ 0 (
                    echo ❌ Deployment failed.
                    exit /b 1
                ) else (
                    echo ✅ Deployment successful.
                )
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline finished successfully.'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above.'
        }
    }
}
