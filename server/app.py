from flask import abort, make_response, request, session, render_template
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized
from datetime import datetime

from config import app, db, api

from models import *

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.route('/authorized')
def authorized():
    user = User.query.filter_by(id = session.get('user_id')).first()
    print(user)
    if not user:
        raise Unauthorized
    return make_response(user.to_dict(), 200)

class Users(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                name=data['name'],
                email=data['email'],
                password_hash=data['password'],
                review_count = User.review_count(),
            )
        except:
            abort(422, "Some of the values failed")

        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        response = make_response(new_user.to_dict(), 201)
        return response

api.add_resource(Users, "/signup")

class User_By_Id(Resource):
    def patch(self, user_id):
        data = request.get_json()
        user = User.query.filter_by(id = user_id).first()
        if not user:
            abort(404, "User not found")
        if 'name' in data:
            user.name = data['name']
        if 'email' in data:
            user.email = data['email']
        if 'password' in data:
            user.password_hash = data['password']
        db.session.commit()
        return make_response(user.to_dict(), 200)
    
api.add_resource(User_By_Id, "/users/<int:user_id>")

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
        date_str = data['date']
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        print(date_obj)
        try:
            new_review = Review(
                user_id = session.get('user_id'),
                climbing_area_id = data['climbing_area_id'],
                rating = data['rating'],
                comment = data['comment'],
                date = date_obj
            )
            print('rating:', new_review.rating)
            print('comment:', new_review.comment)
            print('area_id:', new_review.climbing_area_id)
            print('user_id:', new_review.user_id)
        except:
            abort(422, "Some of the values failed")
        db.session.add(new_review)
        db.session.commit()
        return make_response(new_review.to_dict(), 201)

api.add_resource(Reviews, "/reviews")

class Reviews_By_Id(Resource):
    def get (self, review_id):
        review = Review.query.get(review_id)
        if not review:
            abort(404, "Review not found")
        return make_response(review.to_dict(), 200)
    
    def patch(self, review_id):
        review = Review.query.get(review_id)
        if not review:
            abort(404, "Review not found")
        data = request.get_json()
        date_str = data['date']
        if date_str:
            try:
                date_obj = datetime.strptime(date_str, '%Y-%m-%d')
            except ValueError:
                abort(400, "Invalid date formate")
            review.date = date_obj
        for attr, value in data.items():
            if attr != 'date':
                setattr(review, attr, value)
        db.session.commit()
        return make_response(review.to_dict(), 200)

    def delete(self, review_id):
        review = Review.query.get(review_id)
        if not review:
            abort(404, "Review not found")
        db.session.delete(review)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(Reviews_By_Id, "/reviews/<int:review_id>")

class Climbing_Areas(Resource):
    def get(self):
        areas = Climbing_Area.query.all()
        return make_response([areas.to_dict() for areas in areas])

api.add_resource(Climbing_Areas, '/climbing_areas')

@app.route('/create_climbing_area', methods=['POST'])
def create_climbing_area():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        latitude = data['location']['latitude']
        location = Location.query.filter_by(latitude = latitude).first()
        if not location:
            new_location = Location(
                city = data['location']['city'],
                state = data['location']['state'],
                postal_code = data['location']['postal_code'],
                latitude = data['location']['latitude'],
                longitude = data['location']['longitude']
            )
            db.session.add(new_location)
            db.session.commit()
            location = new_location

        new_area = Climbing_Area(
            name=data['name'],
            location_id=location.id,
            difficulty=data['difficulty'],
            address=data['address'],
            clip_rating=data['clip_rating'],
            number_of_reviews=data['number_of_reviews'],
            need_own_gear=data['need_own_gear'],
            retail_shop=data['retail_shop'],
            fitness_area=data['fitness_area'],
            lead_climbing=data['lead_climbing'],
            bouldering=data['bouldering'],
            moon_board=data['moon_board'],
            kilter_board=data['kilter_board']
        )
        db.session.add(new_area)
        db.session.commit()
        return make_response(new_area.to_dict(), 201)
    else:
        return make_response({'error' : 'Method not allowed'}, 405)

class Climbing_Areas_By_Id(Resource):
    def get(self, area_id):
        area = Climbing_Area.query.filter(id == area_id).first()
        if not area:
            abort(404, "Area not found")
        return make_response(area.to_dict(), 200)
    
api.add_resource(Climbing_Areas_By_Id, "/climbing_areas/<int:id>")

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