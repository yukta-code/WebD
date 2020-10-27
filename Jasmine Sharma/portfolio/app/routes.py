from app import app
from flask import render_template

@app.route('/')

@app.route('/index')
def index():
    return render_template('index.html' ,data = "blue" )


@app.route('/project')
def project():
    return render_template('project.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')
