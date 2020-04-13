from flask import Flask, jsonify
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)

lovers = [
    {
        'id': 'male',
        'name': 'ravikiran',
        'email':'proraviki@gmail.com'
    },
    {
        'id':'female',
        'name': 'preethi',
        'email':'preethiramkumar@gmail.com'
    }
]


@app.route('/api/my', methods=['GET','POST'])
def get_tasks():
    return jsonify({'lovers': lovers})



