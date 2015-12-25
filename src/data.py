import unirest, json


class NutrionixAgent(object):
	"""Intialize"""
	def __init__(self, api_conf):
		super(NutrionixAgent, self).__init__()
		self.conf = api_conf


	def get_data(self,search_term):
		response = unirest.get(self.conf.url + search_term, 
			headers = self.conf.headers,
			params = self.conf.parameters)

		if response.code == 200:
			data = []
			for hit in response.body["hits"]:
				data.append(hit["fields"])
			return json.dumps(data)


class ApiConfiguration:

	def __init__(self):
		self.url = ""
		self.headers = {}
		self.parameters = {}





