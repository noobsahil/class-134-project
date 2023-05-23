from flask import Flask, render_template, request, jsonify

import sentiment_analysis as sa

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/review', methods=['POST'])
def review():
    review = request.json.get('review')

    if not review:
        return jsonify({'status': 'error', 'message': 'Empty response'})
    else:
        sentiment, image_path = sa.predict(review)
        return jsonify({'sentiment': sentiment, 'image_path': image_path})


if __name__ == "__main__":
    app.run(debug=True)
