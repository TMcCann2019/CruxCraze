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
    user = User.query.filter_by(email = data['email']).first()
    if user and user.authenticate(data['password']):
        session['user_id'] = user.id
        response = make_response(user.to_dict(), 200)
        return response
    else:
        abort(401, "Invalid email or password")

@app.route('/logout', methods = ['DELETE'])
def logout():
    session['user_id'] = None
    return make_response({}, 204)


class Reviews(Resource):
    def get(self):
        reviews = Review.query.all()
        return make_response([review.to_dict() for review in reviews])

    def post(self):
        data = request.get_json()
        try:
            new_review = Review(**data)
        except:
            abort(422, "Some of the values failed")
        db.session.add(new_review)
        db.session.commit()
        return make_response(new_review.to_dict(), 201)
    
    def patch(self):
        review_id = request.args.get('id')
        if not review_id:
            abort(400, "Review ID not provided")
        review = Review.query.get(review_id)
        if not review:
            abort(404, "Review not found")
        data = request.get_json()
        for attr in data:
            setattr(review, attr, data[attr])
        db.session.commit()
        return make_response(review.to_dict(), 200)

    def delete(self, review_id):
        review = Review.query.get(review_id)
        if not review:
            abort(404, "Review not found")
        db.session.delete(review)
        db.session.commit()
        return make_response({}, 204)

api.add_resource(Review, "/reviews", endpoint = "reviews")
api.add_resource(Review, "/reviews/<int:review_id>", endpoint = "review")

class Climbing_Areas(Resource):
    def get(self):
        areas = Climbing_Area.query.all()
        return make_response([areas.to_dict() for area in areas])

    def post(self):
        data = request.get_json()
        try:
            new_area = Climbing_Area(**data)
        except:
            abort(422, "Some of the values failed")
        db.session.add(new_area)
        db.session.commit()
        return make_response(new_area.to_dict(), 201)

    def delete(self, area_id):
        area = Climbing_Area.query.get(area_id)
        if not area:
            abort(404, "Area not found")
        db.session.delete(area)
        db.session.commit()
        return make_response({}, 204)

api.add_resource(Climbing_Areas, "/climbing_areas", endpoint = "climbing_areas")
api.add_resource(Climbing_Areas, "/climbing_areas/<int:area_id>", endpoint = "climbing_area")

class Locations(Resource):
    def get(self):
        locations = Location.query.all()
        return make_response([location.to_dict() for location in locations])

    def post(self):
        data = request.get_json()
        try:
            new_location = Location(**data)
        except:
            abort(422, "Some of the values failed")
        db.session.add(new_location)
        db.session.commit()
        return make_response(new_location.to_dict(), 201)

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