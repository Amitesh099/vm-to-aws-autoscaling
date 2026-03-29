from flask import Flask, request
import os

app = Flask(__name__)

@app.route('/alert', methods=['POST'])
def alert():
    os.system("bash /home/amitesh/project/aws/scale_to_aws.sh")
    return "Triggered", 200

app.run(host="0.0.0.0", port=5000)
