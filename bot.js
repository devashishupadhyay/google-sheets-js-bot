var token = "<YOUR-BOT-TOKEN>";
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "<YOUR-WEBAPP-URL"
var ssId = "<SSID>"

function get() {
  var url = telegramUrl + "/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function Webhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function sendText(id,text) {
  var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function dg(e) {
  return HtmlService.createHtmlOutput("Hi there");
}

function dp(e) {
  var data = JSON.parse(e.postData.contents);
  var text = data.message.text;
  var textp = text.split("#");
  var amt = textp[0]
  var mode = textp[2];
  var comment = textp[1];
  var id = data.message.chat.id;
  var name = data.message.chat.first_name + " " + data.message.chat.last_name;
  var answer = "Your Expense Sheet have been updated by ₹" + amt;
  
  if (amt.match(/^\d/)) {
    var emailreply = "Mail has been sent as Acknowledgement."
    SpreadsheetApp.openById(ssId).getSheets()[0].appendRow([new Date(),amt,comment,mode,"Entry Done by Telegram"]);
    sendText(id,answer);
    GmailApp.sendEmail("<YOUR-EMAIL>","This is to notify that your sheet has been updated by ₹" + amt , "Hi Devashish Upadhyay," + "\n" + "This is to Notify that you have made Payment of ₹" + amt + " " + "for " + comment + " " + "by " + mode + " " + "and the same has been updated to your Sheet." + "\n" + "Thank You" + "\n" + "Telegram Bot by Devashish Upadhyay");
    sendText(id,emailreply);
    }
  else if (text == "Wake") {
    sendText(id, "Yes sir.");
    }
  }
  else{
    var notuser = "You are not authorised to use this bot. Click www.thedevashish.in/contact to contact."
    sendText(id,notuser)
  }
}
