from flask import Flask, render_template, Response
from data import NutrionixAgent, ApiConfiguration
import json, sys

api_conf = ApiConfiguration()
api_conf.url = "https://nutritionix-api.p.mashape.com/v1_1/search/"
api_conf.headers = {
    "X-Mashape-Key": "KwpqR4QZVFmshR2qqroKBsfi7ngTp1M3FqMjsnD02Pbpy2m1MI",
    "Accept": "application/json"
}
api_conf.parameters = {
    "fields": "item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat"}
server = Flask(__name__)


@server.route('/')
def index():
    return render_template('index.html')


@server.route('/search/<search_term>')
def search(search_term):
    agent = NutrionixAgent(api_conf)
    result = agent.get_data(search_term)
    server.logger.debug(result)
    return Response(result, mimetype='application/json')

if __name__ == '__main__':
    if len(sys.argv) == 1:
        server.run(debug=True)
    else:
        server.run(host="0.0.0.0",port=80, debug=True)

