#!/bin/bash

# Generalized Discord Notification Script

status=$1
discord_url=$2

environment=$3


message=""
color=3447003
title="Vam Vam Uniport Update"

if [ "$status" = "fail" ]; then
  message=" Oops!!!  ❌ ❌ ❌   Vamvam Uniport build failed on $environment. Please check the CI logs for more details"
  title="Build Failed"
  color=15549239
else
   message="W00t 🚀 🚀 🚀   VamVam Uniport  has been updated on $environment"
fi

echo "$message"

  # Construct payload
payload=$(cat <<EOF
{
  "content": "",
      "embeds": [
                 {
                   "title": "$title",
                   "description": "$message",
                   "color": "$color"
                 }
               ]
}

EOF
)

  # Send POST request to Discord Webhook
curl -H "Content-Type: application/json" -X POST -d "$payload" "$discord_url"