import logging
import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Processing request")
    name = req.params.get('name')
    if not name:
        return func.HttpResponse("Please pass a name", status_code=400)
    return func.HttpResponse(f"Hello, {name}. This is successfully.")

