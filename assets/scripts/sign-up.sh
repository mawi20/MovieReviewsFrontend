#!/bin/bash

# sh scripts/sign-up.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/sign-up"

curl --include --request POST http://localhost:7165/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'
