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
    
class Users(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                name=data['name'],
                email=data['email'],
                password=data['password'],
                review_count = 0
            )
        except:
            abort(422, "Some of the values failed")

        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        response = make_response(new_user.to_dict(), 201)
        return response

api.add_resource(Users, "/signup")

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(name = data['name']).first()
    if user and user.authenticate(data['password']):
        session['user_id'] = user.id
        response = make_response(user.to_dict(), 200)
        return response

@app.route('/logout', methods = ['DELETE'])
def logout():
    session['user_id'] = None
    return make_response({}, 204)


class Reviews(Resource):
    pass

api.add_resource(Review, "/reviews")

class Climbing_Areas(Resource):
    pass

api.add_resource(Climbing_Areas, "/climbing_areas")

class Attributes(Resource):
    pass

api.add_resource(Attributes, "/attributes")

class Locations(Resource):
    pass

api.add_resource(Locations, "/locations")

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