import csv
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    # Load CSV data
    csv_data = load_csv_data('Tutorial/static/data/Averages.csv')

    return jsonify(csv_data)

def load_csv_data(filename):
    data = []
    with open(filename, 'r') as file:
        reader = csv.reader(file)
        header = next(reader)  # Read header row

        for row in reader:
            marker = {
                'state': row[0],
                'date': (row[1]),
                'precip': float(row[2]),
                'max_temp': float(row[3]),
                'min_temp': float(row[4]),
                'wind_speed': float(row[5]),
            }
            data.append(marker)

    return data

if __name__ == '__main__':
    app.run()




