# slack bot
import os
import time
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# Initialize a Web API client
client = WebClient(token=os.environ['SLACK_BOT_TOKEN']) 
def send_message(channel_id, text):
    try:
        response = client.chat_postMessage(
            channel=channel_id,
            text=text
        )
        print(f"Message sent to {channel_id}: {text}")
    except SlackApiError as e:
        print(f"Error sending message: {e.response['error']}")









