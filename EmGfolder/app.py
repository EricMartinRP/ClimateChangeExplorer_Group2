from flask import Flask, render_template, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)

uri = 'mongodb://localhost:27017/'
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Get data from MongoDB
db = client['project3']
collection = db['tempdata']

@app.route('/')
def index():
    return render_template('testing.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    data = list(collection.find())  # Retrieve all documents from the collection
    # return jsonify(data)
    return render_template('ClimateChangeDashboard.html', test_data=data)

if __name__ == '__main__':
    app.run()



