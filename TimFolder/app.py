from flask import Flask, render_template
from pymongo import MongoClient
from bson.json_util import dumps, ObjectId
import json

app = Flask(__name__, static_url_path='')

# Mongo connection parameters
mongo_uri = 'mongodb://localhost:27017/'
db = 'climate'
collection = 'climate'

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client[db]
collection = db[collection]

# Retrieve the data from the collection
data = list(collection.find())

# Convert the data to JSON
json_data = dumps(data)


# Remove the _id field from json_data
json_data = json.loads(json_data)
for i in json_data:
    i.pop('_id', None)


@app.route('/')
def index():
    return render_template('ClimateChangeDashboard.html',data=json_data)
   

if __name__ == '__main__':
    app.run()







