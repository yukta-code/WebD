from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', data = "Blue")

@app.route('/project')
def project():
    return render_template('project.html')
    
