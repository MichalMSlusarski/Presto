from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#app.config['SECRET KEY']
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

class user(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120), unique = True, nullable = False)
    image_file = db.Column(db.String(20), nullable = False, default = 'rabbit.jpg')

idea = {
    'author': 'anonymous1',
    'premise': 'I think we should ',
    'content': 'use singleton pattern here',
    'author-id': 'anon@',
    'current-upvotes': 3
}

idea2 = {
    'author': 'anonymous1',
    'premise': 'I think we should ',
    'content': 'use singleton pattern here',
    'author-id': 'anon@',
    'current-upvotes': 3
}

ideas = [
    idea, idea2
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ideaboard', methods=['GET', 'POST'])
def ideaboard():
    if request.method == 'POST':
        if request.form.get('create_presto') == 'VALUE1':
            pass # do something
        elif  request.form.get('action2') == 'VALUE2':
            pass # do something else
        else:
            pass # unknown
    elif request.method == 'GET':
        return render_template('ideaboard.html')
    
    return render_template('ideaboard.html')

@app.route('/ideaboard-guest')
def ideaboard_guest():
    return render_template('ideaboard_guest.html')

@app.route('/add')
def add():
    return render_template('add_idea.html', idea = idea)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port = 8080, debug = True)
