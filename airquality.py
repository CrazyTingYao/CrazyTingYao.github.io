import json  #需pip install json
import eel  #需pip install eel
import requests  #需pip install requests

eel.init('bigdata')
data = requests.get("https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json").json()

@eel.expose
def get_airquality_data():
    return data

if __name__ == "__main__":
    eel.start("index.html")
    print("App killed.")