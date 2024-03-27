const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //This is the new variable for controlling status seen.
global.autoreadgc = false;


//
global.prefa = ["."];                                    //Default prefix here. you can change if you want.


//
global.Owner = ["+212659559879", "+212679005739"];         //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.OwnerNumber = ["+212659559879", "+212679005739"];   //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.ownertag = ["+212659559879"];
global.OwnerName = "LMDELM";
global.BotName = "WAVEDIS";
global.packname = "🌊 WAVEDIS 🌊";                             //Do not change.
global.author = "LMDELM";                               //Do not change.


//
global.sessionName = "session";                          //Do not change.


//
global.openAiAPI = "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";


//
global.location = "MAROC, KENITRA";
global.reactmoji = "🌊";
global.themeemoji = "😂";
global.vidmenu = { url: 'https://tenor.com/view/its-our-moments-of-struggle-that-define-us-gif-2969355787262323985' };
global.lolhuman = "LMDELM";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = true;
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
  jobdone: 'Here you go...',
  useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
  botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
  botowner: 'Only my *Owner* can use this command, Baka!',
  grouponly: 'This command is only made for *Groups*, Baka!',
  privateonly: 'This command is only made for *Private Chat*, Baka!',
  botonly: 'Only the *Bot itself* can use this command!',
  waiting: 'Just Wait...',
  nolink: 'Please provide me *link*, Baka!',
  error: 'An error occurd!',
  banned: 'You are *Banned* fron using commands!',
  bangc: 'This Group is *Banned* from using Commands!',
  nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'

}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
