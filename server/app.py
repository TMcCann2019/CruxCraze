from flask import abort, make_response, request, session, render_template
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized

from config import app, db, api

from models import *

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.before_request
def check_auth():
    open_access = ["signup", "login", "homepage", "authorized"]
    if request.endpoint not in open_access and not session.get('user_id'):
        raise Unauthorized
    

@app.errorhandler(NotFound)
def handle_not_found(e):
    response = make_response(
        {"message" : "Not Found: Sorry the resource you are looking for does not exist"}, 404
    )
    return response

@app.errorhandler(Unauthorized)
def handle_unauthorized(e):
    response = make_response(
        {"message": "Unauthorized: you must be logged in to make that request."},
        401,
    )
    return response

@app.errorhandler(422)
def handle_unprocessable_entity(e):
    response = make_response(
        {"message": "Unprocessable Entity: something is wrong with the request"}, 422
    )
    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)