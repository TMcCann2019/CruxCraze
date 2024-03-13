from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    _password_hash = db.Column(db.String)
    review_count = db.Column(db.Integer)
    reviews = db.relationship('Review', backref='user', cascade=('all,delete'))

    serialize_rules = ('-reviews.user',)

    @validates('email')
    def validate_email(self, key, email):
        user = User.query.filter_by(email=email).first()
        if user is not None:
            raise ValueError('Email is associated with another account')
        return email
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    climbing_area_id = db.Column(db.Integer, db.ForeignKey('climbing_areas.id'))
    rating = db.Column(db.Integer)
    comment = db.Column(db.String(255))
    date = db.Column(db.DateTime)
    area = db.relationship('Climbing_Area', backref='reviews', cascade = ('all,delete'))

    serialize_rules = ('-user.reviews',)

class Climbing_Area(db.Model, SerializerMixin):
    __tablename__ = 'climbing_areas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    difficulty = db.Column(db.String, nullable=False)
    address = db.Column(db.String, unique=True)
    clip_rating = db.Column(db.Float)
    number_of_reviews = db.Column(db.Integer)
    need_own_gear = db.Column(db.Boolean)
    retail_shop = db.Column(db.Boolean)
    fitness_area = db.Column(db.Boolean)
    lead_climbing = db.Column(db.Boolean)
    bouldering = db.Column(db.Boolean)
    moon_board = db.Column(db.Boolean)
    kilter_board = db.Column(db.Boolean)

    serialize_rules = ('-reviews.area',)

    @validates('name')
    def validate_name(self, key, name):
        area = Climbing_Area.query.filter_by(name=name).first()
        if area is not None:
            raise ValueError('There is already a area with this name')
        return name

    @validates('difficulty')
    def validate_difficulty(self, key, difficulty):
        valid_difficulties = ['beginner', 'intermediate', 'advanced']
        if difficulty not in valid_difficulties:
            raise ValueError('Difficulty must be beginner, intermediate, or advanced')
        return difficulty

class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String)
    state = db.Column(db.String)
    postal_code = db.Column(db.String)
    latitude = db.Column(db.Float, unique=True)
    longitude = db.Column(db.Float, unique=True)