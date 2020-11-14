# Telegram Bot to maintain Google Sheets
This bot update Google Sheets from Telegram bot and also sends an email as confirmation
# Pre-requisites:
1. Id of the Google Sheet. (It is embeded in the url of google sheets)
2. Web-app Url (You need to Generate Through google script)
3. Telegram Bot TOKEN
4. Gmail Account
# Fill:
	var token = "<YOUR-BOT-TOKEN>";
	var webAppUrl = "<YOUR-WEBAPP-URL"
	var ssId = "<SSID>"
# Steps to get things done
1. Make a google script.
2. Copy-paste the bot.js code in you script and fill the above details carefully.
3. You will be poped up for google authentication to complete it.
4. Add items by sending a message to telegram bot like "$500 FRUITS BANK"
# Credits:
https://thedevashish.in
