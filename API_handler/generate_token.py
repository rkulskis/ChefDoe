import http.client

conn = http.client.HTTPSConnection("connect.instacart.com")

payload = "{\n  \"client_id\": \"string\",\n  \"client_secret\": \"string\",\n  \"grant_type\": \"string\",\n  \"scope\": \"string\",\n  \"code\": \"string\",\n  \"redirect_uri\": \"string\",\n  \"assertion\": \"string\"\n}"

headers = {
    'Accept': "application/json",
    'Content-Type': "application/json"
    }

conn.request("POST", "/v2/oauth/token", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))