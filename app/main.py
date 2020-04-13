from flask import Flask, jsonify

app = Flask(__name__)

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


@app.route('/')
def get_tasks():
    return jsonify({'lovers': lovers})



