from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SECRET KEY'] = '455638289da72dc40b6d536f3b26ed6d1865431d07dcf796295087d3c335c6af'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120), unique = True, nullable = False)
    image_file = db.Column(db.String(20), nullable = False, default = 'rabbit.jpg')
    posts = db.relationship('post', backref = 'author', lazy = True)

    def __repr__(self):
        return f"User('{self.email}','{self.image_file}')"

class Post(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(120), unique = False, nullable = False)
    date_posted = db.Colum(db.DateTime, nullable = False, default = datetime.utcnow)
    content = db.Column(db.Text(240), unique = False, nullable = False)
    additional_img = db.Column(db.String(20), nullable = True)
    label = db.Column(db.String(12), unique = False, nullable = False, default = 'Defualt')
    status = db.Column(db.String(12), unique = False, nullable = False, default = 'Covered')
    likes = db.Column(db.Integer, default = 0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)

    def __repr__(self):
        return f"Post('{self.title}','{self.content}','{self.additional_img}','{self.label}','{self.likes}')"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ideaboard', methods=['GET', 'POST'])
def ideaboard():
    return render_template('ideaboard.html')

@app.route('/ideaboard-guest')
def ideaboard_guest():
    return render_template('ideaboard_guest.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port = 8080, debug = True)
