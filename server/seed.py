from app import app
from models import *

if __name__ == '__main__':
    with app.app_context():
        User.query.delete()
        Climbing_Area.query.delete()
        Location.query.delete()
        Review.query.delete()
        print("Starting seed...")
        
        areas = []
        locations = []

        area1 = Climbing_Area(
            name = 'Gravity Vault Chatham',
            location_id = 1,
            difficulty = 'beginner',
            address = '40 Watchung Avenue',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = False
        )

        areas.append(area1)

        area2 = Climbing_Area(
            name = 'Gravity Vault Hoboken',
            location_id = 2,
            difficulty = 'beginner',
            address = '1423 Clinton Street',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = False
        )

        areas.append(area2)

        area3 = Climbing_Area(
            name = 'Gravity Vault Flemington',
            location_id = 3,
            difficulty = 'beginner',
            address = '17 Minneakoning Road',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = False
        )

        areas.append(area3)

        area4 = Climbing_Area(
            name = 'Gravity Vault Brick',
            location_id = 4,
            difficulty = 'beginner',
            address = '110 Brick Plaza',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = False,
            kilter_board = False
        )

        areas.append(area4)

        area5 = Climbing_Area(
            name = 'Gravity Vault Upper Saddle River',
            location_id = 5,
            difficulty = 'beginner',
            address = '107 Pleasant Avenue',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = True
        )

        areas.append(area5)

        area6 = Climbing_Area(
            name = 'Gravity Vault Middletown',
            location_id = 6,
            difficulty = 'beginner',
            address = '37 Kanes Lane',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = False
        )

        areas.append(area6)

        area7 = Climbing_Area(
            name = 'Gravity Vault Montclair',
            location_id = 7,
            difficulty = 'beginner',
            address = '8 Seymour Plaza',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = False,
            bouldering = True,
            moon_board = True,
            kilter_board = True
        )

        areas.append(area7)

        area8 = Climbing_Area(
            name = 'Gravity Vault Voorhees',
            location_id = 8,
            difficulty = 'beginner',
            address = '333 Preston Avenue',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = True,
            kilter_board = False
        )

        areas.append(area8)

        area9 = Climbing_Area(
            name = 'Goat Climbing',
            location_id = 9,
            difficulty = 'intermediate',
            address = '77 River Street',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = False,
            retail_shop = True,
            fitness_area = True,
            lead_climbing = True,
            bouldering = True,
            moon_board = False,
            kilter_board = False
        )

        areas.append(area9)

        area10 = Climbing_Area(
            name = 'The Gunks',
            location_id = 10,
            difficulty = 'intermediate',
            address = '800 Clove Road',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = True,
            retail_shop = False,
            fitness_area = False,
            lead_climbing = False,
            bouldering = True,
            moon_board = False,
            kilter_board = False
        )

        areas.append(area10)

        area11 = Climbing_Area(
            name = 'The Powerlinez',
            location_id = 11,
            difficulty = 'intermediate',
            address = 'Torne Brook Road',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = True,
            retail_shop = False,
            fitness_area = False,
            lead_climbing = True,
            bouldering = True,
            moon_board = False,
            kilter_board = False
        )

        areas.append(area11)

        area12 = Climbing_Area(
            name = 'Thacher',
            location_id = 12,
            difficulty = 'intermediate',
            address = '60-76 Hales Cave Road',
            clip_rating = 0,
            number_of_reviews = 0,
            need_own_gear = True,
            retail_shop = False,
            fitness_area = False,
            lead_climbing = True,
            bouldering = False,
            moon_board = False,
            kilter_board = False
        )

        areas.append(area12)

        location1 = Location(
            city = 'Chatham',
            state = 'New Jersey',
            postal_code = '07928',
            latitude = 40.73179420687743,
            longitude =-74.38131096099767
        )

        locations.append(location1)

        location2 = Location(
            city = 'Hoboken',
            state = 'New Jersey',
            postal_code = '07030',
            latitude =40.75491954293622,
            longitude =-74.03024387634063
        )

        locations.append(location2)

        location3 = Location(
            city = 'Flemington',
            state = 'New Jersey',
            postal_code = '08822',
            latitude =40.53121702934596,
            longitude =-74.85046046100769
        )

        locations.append(location3)

        location4 = Location(
            city = 'Brick',
            state = 'New Jersey',
            postal_code = '08723',
            latitude =40.05803196593662,
            longitude =-74.14212141499868
        )

        locations.append(location4)

        location5 = Location(
            city = 'Upper Saddle River',
            state = 'New Jersey',
            postal_code = '07458',
            latitude =41.05128023402393,
            longitude =-74.11741533214568
        )

        locations.append(location5)

        location6 = Location(
            city = 'Middletown',
            state = 'New Jersey',
            postal_code = '07748',
            latitude =40.38622611107934,
            longitude =-74.0882658168346
        )

        locations.append(location6)

        location7 = Location(
            city = 'Montclair',
            state = 'New Jersey',
            postal_code = '07042',
            latitude =40.812555435253266,
            longitude =-74.21626437448555
        )

        locations.append(location7)

        location8 = Location(
            city = 'Voorhees',
            state = 'New Jersey',
            postal_code = '08043',
            latitude =39.85316101749673,
            longitude =-75.01349643035289
        )

        locations.append(location8)

        location9 = Location(
            city = 'Hackensack',
            state = 'New Jersey',
            postal_code = '07601',
            latitude =40.88035121165677,
            longitude =-74.04181467262997
        )

        locations.append(location9)

        location10 = Location(
            city = 'Gardiner',
            state = 'New York',
            postal_code = '12525',
            latitude = 41.74442,
            longitude = -74.19717
        )

        locations.append(location10)

        location11 = Location(
            city = 'Ramapo',
            state = 'New York',
            postal_code = '10901',
            latitude = 41.14357,
            longitude = -74.16222
        )

        locations.append(location11)

        location12 = Location(
            city = 'Altamont',
            state = 'New York',
            postal_code = '12009',
            latitude = 42.66346,
            longitude = -74.0209
        )

        locations.append(location12)

        db.session.add_all(areas)
        db.session.add_all(locations)
        db.session.commit()