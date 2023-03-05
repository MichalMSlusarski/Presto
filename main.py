from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ideaboard')
def ideaboard():
    return render_template('ideaboard.html')

@app.route('/ideaboard-guest')
def ideaboard_guest():
    return render_template('ideaboard_guest.html')

@app.route('/add')
def add():
    return render_template('add_idea.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port = 8080, debug = True)
