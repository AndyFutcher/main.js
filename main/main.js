/* GNU General Public License v3.0
# Main JS is a modern, lightweight and portable website JavaScript framework, Copyright (C) 2025 Andy Futcher. See <https://mainjs.org/> for more
# This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>. 
## Main.JS not modified from original. Date: 2025-07-18 ### */

/* Main.JS Bootloader */
main=window.main||window['main']||{};main.js=main.js||{create:{}};let create=main.js.create; // Main Namespaces
switch(typeof main.js.loaded){case 'boolean':if(main.js.timestamp.loaded){console.warn("Main.JS has been loaded more than once, check the <head> for duplicate snippet installations or main.js script requests.");};case 'object':break;case 'undefined':main.js.loaded=null;default:let loaded=main.js.loaded; // Loading Wrapper

/* Main.JS Declarations */
main.js.version={main:0,minor:6,patch:5,branch:'main'};let version=main.js.version; // This Library Version
main.js.inherit=function(prefix,js='js'){if(!js){main[prefix]=main[prefix]||{};return main[prefix];}else{main[js][prefix]=main[js][prefix]||{};};return main[js][prefix];}; // Main.JS Inherit Function
main.js=Object.assign(main.js,{loading:false,timestamp:{init:parseInt(Date.now())}});let timestamp=main.js.timestamp; // Common Elements;
main.js.proto=Object.assign(main.js.inherit('proto'),{https:'https:',http:'http:',file:'file:',fs:'/',fs2:'//',s:'s',p:'.',px:'px',pc:"%",q:'?',a:'&',qa:'?&',e:'='});let proto=main.js.proto; // Common Protcols
main.js.types=Object.assign(main.js.inherit('types'),{div:"div",img:"img",ol:"ol",button:"button",logo:"logo",search:"search",links:"links",base:"base",main:"main",string:"string",boolean:"boolean",number:"number",integer:"integer",decimal:"decimal",currency:"currency",function:"function",object:"object",aliases:"aliases",click:"click",body:"body",nav:"nav",footer:"footer",breadcrumbs:"breadcrumbs",navigation:"navigation",dialog:"dialog",alertdialog:"alertdialog",status:"status",menu:"menu",searchbox:"searchbox",application:"application",account:"account",region:"region",colorscheme:"color-scheme",readerscheme:"reader-scheme",nocodemode:"nocode-mode",hydrate:"hydrate",internal:"internal"});let types=main.js.types; // Common Types
main.js.classes=Object.assign(main.js.inherit('classes'),{top:"top",scrolled:"scrolled",bottom:"bottom",landscape:"landscape",portrait:"portrait",light:"light",reader:"reader",nocode:"nocode"});let classes=main.js.classes; // Common Classes
main.js.listen=Object.assign(main.js.inherit('listen'),{mouseleave:'document',mouseenter:'document',click:'document',scroll:'body',resize:'window',unload:'window',beforeunload:'window',load:'window',blur:'window',focus:'window'});let listen=main.js.listen; // Common Listener
main.js.attribute=Object.assign(main.js.inherit('attribute'),{class:"class",id:"id",role:"role",loading:"loading",lazy:"lazy",lang:"lang",region:"region",dialect:"dialect",bucket:"bucket",second:"second",delay:"delay",duration:"duration"});let attribute=main.js.attribute; // Common attribute
main.js.regex=Object.assign(main.js.inherit('regex'),{base:/.*(\:\/\/|public\B|-html\b|-js\b|-dev\b|-rc\b|-main\b|-com\b|-com-[a-z]|-co-[a-z])[a-zA-Z0-9\-\_\.]*/i,domain:/.*\/\/([^:\/\?,]*)/,path:/^[a-zA-Z\-\.\/]*/i,safe:/[^a-zA-Z0-9_-]/g,scale:/scale\(.*\)/gi});let regex=main.js.regex; //
main.js.cookie=Object.assign(main.js.inherit('cookie'),{policy:{'Max-Age':31536000,SameSite:"Lax"},Secure:true});let cookie=main.js.cookie; // Common Cookie Settings
main.js.browser=Object.assign(main.js.inherit('browser'),{locale:Intl.DateTimeFormat().resolvedOptions()||{},languages:navigator.languages||['en']});let browser=main.js.browser;
main.js.network=Object.assign(main.js.inherit('network'),{capable:null,status:0,headers:{},body:{}});let network=main.js.network; // Networking Functions
main.js.font=Object.assign(main.js.inherit('font'),{config:{provider:''},preset:{google:{gateway:'https://fonts.googleapis.com/css2?',prefix:"&family=",suffix:"",options:"&display=block",separator:':'}}});let font=main.js.font; // Main.JS Defaults
main.js.track=Object.assign(main.js.inherit('track'),{domains:[],config:{id:'',preset:'gtm',autosync:true},parameter:"_mid",preset:{gtm:{datalayer:"dataLayer",gateway:'https://www.googletagmanager.com/gtm.js?',type:"id=",options:''},gtag:{datalayer:"dataLayer",gateway:'https://www.googletagmanager.com/gtag/js?',type:"id=",options:''}},datalayer:{gtm:{event:'gtm.js','gtm.start':new Date().getTime()},gtag:['js',new Date()]}});let track=main.js.track; // Main.JS Defaults
main.js.track.push={string:null,action:null,category:null,label:null,type:null,value:null,boolean:null,count:null,focus:null,timer:null,last_time_msec:null,attention:null,session:null,awareness:null,engagement:null, items:null,ecommerce:null,tax:null,method:null}; // Datalayer Push Template

/* Main.JS Consent Declaration */
main.js.consent=Object.assign(main.js.inherit('consent'),{config:{consented:false,acknowledged:false,preset:"default",posture:"consent",neccessary:"granted",url_passthrough:false,ads_data_redaction:false},terms:{denied:"denied",granted:"granted",consent:"consent",posture:"posture",neccessary:"neccessary",acknowledge:"acknowledge"},preset:{default:{functionality_storage:'neccessary',security_storage:'acknowledge',personalization_storage:'acknowledge',analytics_storage:'posture',ad_storage:'posture',ad_personalization:'posture',ad_user_data:'posture'},consent:{functionality_storage:'neccessary',security_storage:'posture',personalization_storage:'posture',analytics_storage:'consent',ad_storage:'consent',ad_personalization:'consent',ad_user_data:'consent'},denied:{functionality_storage:'neccessary',security_storage:'neccessary',personalization_storage:'denied',analytics_storage:'denied',ad_storage:'denied',ad_personalization:'denied',ad_user_data:'denied'}}});let consent=main.js.consent;
consent.message={functionality_storage:{title:"Functionality Storage",label:"Enables logins and session functionality",controls:"consent-functionality"},security_storage:{title:"Security Storage",label:"Enables security features like fraud prevention",controls:"consent-security"},personalization_storage:{title:"Personalization Storage",label:"Allows this site to remember your preferences",controls:"consent-personalization"},analytics_storage:{title:"Analytics Storage",label:"Helps us understand how you interact with the site",controls:"consent-analytics"},ad_storage:{title:"Ads Storage",label:"Used to store data for advertising purposes",controls:"consent-ads"},ad_personalization:{title:"Ads Personalization",label:"Allows for personalized advertising based on your data",controls:"consent-ads-personalization"},ad_user_data:{title:"Ads User Data",label:"Used to measure ad advertising conversions",controls:"consent-ads-user-data"},url_passthrough:{controls:"consent-url-passthrough",tag:'url_passthrough'},ads_data_redaction:{controls:"consent-ads-data-redaction",tag:'ads_data_redaction'}};
consent.message[consent.terms.neccessary]={id:"consent-banner",title:'This website uses cookies',label:'Cookie consent banner',text:'We use browser cookies and other tracking technologies to improve your browsing experience on our website, to analyze our website traffic, to understand where our visitors are coming from, and to show you personalized content and targeted ads.',reason:'<br><span class="note">Why am I seeing this? &#x1F4AC;<span role="tooltip" class="right">Geographic region; timezone and language packs</span></span>',controls:'<div class="float right align right"><button class="submit" role="button" id="consent-all">Accept All</button> <button role="button" id="consent-preferences">Preferences</button> <button class="reset cancel" role="button" id="consent-deny">Deny</button></div>'};
consent.message[consent.terms.acknowledge]={id:"consent-banner",title:'This website uses cookies',label:'Cookie acknowledgement',text:'We use browser cookies and other tracking technologies to measure, improve and under certain conditions personalise your browsing experience on our website.',reason:'',controls:'<div class="float right align right"><button class="submit" role="button" id="consent-ok">Okay</button></div>'};
consent.message[consent.terms.posture]={id:"consent-dialog",title:'Manage your consent preferences',label:'Cookie consent preferences',text:'Choose the types of storage and personalisation you are willing to consent to?',reason:'Your choices will be saved for future visits:',controls:'<div class="float right"><button role="button" id="consent-all" class="submit">Accept All</button> <button role="button" id="consent-save-close">Save & Close</button></div>'};

/* Main.JS Dependancies */
if(!document.readyState==attribute.loading){console.warn("Main.JS has been loaded without the defer attribute, performance will be negatively impacted.");}; //
if(!main.version){console.warn("Main.JS is running without <head> snippet, performance will be negatively impacted.");main.version={};}else //
if((main.version.main!=version.main)||(main.version.minor!=version.minor)||(main.version.patch!=version.patch)){console.warn("Main.JS Snippet v"+main.version.main+"."+main.version.minor+"."+main.version.patch+" & Library v"+version.main+"."+version.minor+"."+version.patch+" are out of sync.");};
version.full=version.main+"."+version.minor+(!version.patch?'':"."+version.patch)+(((version.branch=='')||version.branch=='main')?'':"-"+version.branch);main.version.full=version.full;version.htmlless=(typeof main.version.htmlless==types.boolean)?main.version.htmlless:true||true;

/* Main.JS Head Polyfil */
main.meta=main.meta||{};
document.querySelectorAll('meta[name]').forEach((meta)=>{if((typeof meta.attributes==types.object)&&(typeof meta.attributes.name==types.object)&&(typeof meta.attributes.content==types.object)){main.meta[meta.attributes.name.value]=meta.attributes.content.value;};});
main.meta.website=main.meta.website||document.querySelector('meta[property="main.meta.website"]')||document.querySelector('meta[name="website"]')||window.location.href.match(regex.domain)[1];if(main.meta.website.content){main.meta.website=main.meta.website.content;} // Get Website Name
main.meta.theme=main.meta.theme||document.querySelector('meta[name="theme"]')||document.querySelector('meta[property$=".theme"]')||'default.css';if(main.meta.theme.content){main.meta.theme=main.meta.theme.content;}; // Webpages Canonical URL
main.meta.canonical=main.meta.canonical||document.querySelector('link[rel="canonical"]')||window.location.pathname.match(regex.base)[0];if(main.meta.canonical.href){main.meta.canonical=main.meta.canonical.href;}; // Webpages Canonical URL
if(typeof create.base!=types.object){create.base=document.createElement('base');
	switch(window.location.protocol){case proto.https:main.js.create.base.href=(window.location.origin+window.location.pathname).match(main.js.regex.base)[0]+main.js.proto.fs; // Origin Execution
	break;case proto.file:create.base.href=(window.location.protocol+proto.fs2+window.location.pathname).match(regex.base)[0]+proto.fs; // Local Execution
	break;case proto.http:window.location.href=proto.https+window.location.host+window.location.pathname; // Redirect to HTTPS Version
	break;default:window.location.href=main.meta.canonical; // Unknown Protocol, Redirect to Canonical
	};main.base=create.base.href;document.head.appendChild(create.base); // Inject Base Tag
};create.wireframe=document.querySelector('#main-style,[name="main-style"]');

/* Main.JS Lookup Tables */
main.js.lookup=Object.assign({ // Lookup Tables
language:{ // Languages (IETF BCP 47) 
	/* ISO 639-1 and ISO 3166-1 Alpha-2 */
	ar:"Arabic",'ar-AE':"Arabic UAE",'ar-BH':"Arabic Bahrain",'ar-DZ':"Arabic Algeria",'ar-EG':"Arabic Egypt",'ar-IQ':"Arabic Iraq",'ar-JO':"Arabic Jordan",'ar-KW':"Arabic Kuwait",'ar-LB':"Arabic Lebanon",'ar-LY':"Arabic Libya",'ar-MA':"Arabic Morocco",'ar-OM':"Arabic Oman",'ar-QA':"Arabic Qatar",'ar-SA':"Arabic Saudi Arabia",'ar-SY':"Arabic Syria",'ar-TN':"Arabic Tunisia",'ar-YE':"Arabic Yemen",
	de:"German",'de-AT':"German Austria",'de-CH':"German Switzerland",'de-DE':"German Germany",'de-LI':"German Liechtenstein",'de-LU':"German Luxembourg",
	en:"English",'en-AU':"English Australia",'en-BZ':"English Belize",'en-CA':"English Canada",'en-CB':"English Caribbean",'en-GB':"English United Kingdom",'en-IE':"English Ireland",'en-JM':"English Jamaica",'en-NZ':"English New Zealand",'en-PH':"English Philippines",'en-TT':"English Trinidad Tobago",'en-US':"English United States",'en-ZA':"English South Africa",'en-ZW':"English Zimbabwe",
	es:"Spanish",'es-AR':"Spanish Argentina",'es-BO':"Spanish Bolivia",'es-CL':"Spanish Chile",'es-CO':"Spanish Colombia",'es-CR':"Spanish Costa Rica",'es-DO':"Spanish Dominican Republic",'es-EC':"Spanish Ecuador",'es-ES':"Spanish Spain",'es-GT':"Spanish Guatemala",'es-HN':"Spanish Honduras",'es-MX':"Spanish Mexico",'es-NI':"Spanish Nicaragua",'es-PA':"Spanish Panama",'es-PE':"Spanish Peru",'es-PR':"Spanish Puerto Rico",'es-PY':"Spanish Paraguay",'es-SV':"Spanish El Salvador",'es-US':"Spanish United States",'es-UY':"Spanish Uruguay",'es-VE':"Spanish Venezuela",
	fr:"French",'fr-BE':"French Belgium",'fr-CA':"French Canada",'fr-CH':"French Switzerland",'fr-FR':"French France",'fr-LU':"French Luxembourg",'fr-MC':"French Monaco",
	hr:"Croatian",'hr-BA':"Croatian Bosnia Herzegovina",'hr-HR':"Croatian Croatia",
	it:"Italian",'it-CH':"Italian Switzerland",'it-IT':"Italian Italy",
	ms:"Malay",'ms-BN':"Malay Darussalam",'ms-MY':"Malay Malaysia",
	nl:"Dutch",'nl-BE':"Dutch Belgium",'nl-NL':"Dutch Netherlands",
	pt:"Portuguese",'pt-BR':"Portuguese",'pt-PT':"Portuguese",
	qu:"Quechua",'qu-BO':"Quechua Bolivia",'qu-EC':"Quechua Ecuador",'qu-PE':"Quechua Peru",
	se:"Sami",'se-FI':"Sami Finland",'se-NO':"Sami Norway",'se-SE':"Sami Sweden",
	sr:"Serbian",'sr-BA':"Serbian Bosnia Herzegovina",'sr-SP':"Serbian Serbia Montenegro",
	sv:"Swedish",'sv-FI':"Swedish Finland",'sv-SW':"Swedish Sweden",
	zh:"Chinese",'zh-CN':"Chinese China",'zh-HK':"Chinese Hong Kong",'zh-MO':"Chinese Macau",'zh-SG':"Chinese Singapore",'zh-TW':"Chinese Taiwan",
	/* ISO 639-1 */
	aa:"Afar",ab:"Abkhazian",ae:"Avestan",af:"Afrikaans",ak:"Akan",am:"Amharic",an:"Aragonese",as:"Assamese",av:"Avaric",ay:"Aymara",az:"Azeri",ba:"Bashkir",be:"Belarusian",bg:"Bulgarian",bh:"Bihari",bi:"Bislama",bm:"Bambara",bn:"Bengali",bo:"Tibetan",br:"Breton",bs:"Bosnian",ca:"Catalan",ce:"Chechen",ch:"Chamorro",co:"Corsican",cr:"Cree",cs:"Czech",cu:"Church Slavonic",cv:"Chuvash",cy:"Welsh",
	da:"Danish",dv:"Dhivehi",dz:"Bhutani",ee:"Ewe",el:"Greek",eo:"Esperanto",et:"Estonian",eu:"Basque",fa:"Farsi",ff:"Fulah",fi:"Finnish",fj:"Fiji",fo:"Faroese",fy:"Frisian",
	ga:"Irish",gd:"Gaelic",gl:"Galician",gn:"Guarani",gom:"Goan Konkani",gu:"Gujarati",gv:"Manx",ha:"Hausa",he:"Hebrew",hi:"Hindi",ho:"Hiri Motu",ht:"Haitian",hu:"Hungarian",hy:"Armenian",hz:"Herero",ia:"Interlingua",id:"Indonesian",ie:"Interlingue",ig:"Igbo",ii:"Sichuan Yi",ik:"Inupiaq",in:"Indonesian",io:"Ido",is:"Icelandic",iu:"Inuktitut",iw:"Hebrew",
	ja:"Japanese",ji:"Yiddish",jv:"Javanese",jw:"Javanese",ka:"Georgian",kg:"Kongo",ki:"Kikuyu",kj:"Kuanyama",kk:"Kazakh",kl:"Greenlandic",km:"Cambodian",kn:"Kannada",ko:"Korean",knn:"Maharashtrian Konkani",kok:"Konkani",kr:"Kanuri",ks:"Kashmiri",ku:"Kurdish",kv:"Komi",kw:"Cornish",ky:"Kirghiz",kz:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lg:"Ganda",li:"Limburgan",ln:"Lingala",lo:"Laothian",ls:"Slovenian",lt:"Lithuanian",lu:"Luba-Katanga",lv:"Latvian",
	mg:"Malagasy",mh:"Marshallese",mi:"Maori",mk:"FYRO Macedonian",ml:"Malayalam",mn:"Mongolian",mo:"Moldavian",mr:"Marathi",mt:"Maltese",my:"Burmese",na:"Nauru",nb:"Norwegian Bokmal",nd:"North Ndebele",ne:"Nepali India",ng:"Ndonga",nn:"Norwegian Nynorsk",no:"Norwegian",nr:"South Ndebele",ns:"Northern Sotho",nv:"Navajo",ny:"Chichewa",oc:"Occitan",oj:"Ojibwa",om:"Afan Oromoor Oriya",or:"Oriya",os:"Ossetian",
	pa:"Punjabi",pi:"Pali",pl:"Polish",ps:"Pashto Pushto",rm:"Rhaeto Romanic",rn:"Kirundi",ro:"Romanian",ru:"Russian",rw:"Kinyarwanda",sa:"Sanskrit",sb:"Sorbian",sc:"Sardinian",sd:"Sindhi",sg:"Sangro",sh:"Serbo-Croatian",si:"Singhalese",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",ss:"Siswati",st:"Sesotho",su:"Sundanese",sw:"Swahili",sx:"Sutu",syr:"Syriac",
	ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",ti:"Tigrinya",tk:"Turkmen",tl:"Tagalog",tn:"Tswana",to:"Tonga",tr:"Turkish",ts:"Tsonga",tt:"Tatar",tw:"Twi",ty:"Tahitian",ug:"Uighur",uk:"Ukrainian",ur:"Urdu",us:"English",uz:"Uzbek",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",wo:"Wolof",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",za:"Zhuang",zu:"Zulu",
},consent:{ //
	timezones:{ //
		/* GDPR & EU-EEA  */
		'Europe/Tirane':true,'Europe/Andorra':true,'Europe/Vienna':true,'Europe/Minsk':true,'Europe/Brussels':true,'Europe/Sofia':true,'Europe/Zagreb':true,'Asia/Nicosia':true,'Europe/Nicosia':true,'Asia/Famagusta':true,'Europe/Prague':true,
		'Europe/Copenhagen':true,'Atlantic/Faroe':true,'America/Nuuk':true,'America/Godthab':true,'America/Scoresbysund':true,'America/Danmarkshavn':true,'America/Thule':true,
		'CET':true,'CEST':true,'EET':true,'EEST':true,'MET':true,'Europe/Belgrade':true,'Europe/Tallinn':true,
		'Europe/Helsinki':true,'Europe/Mariehamn':true,'Europe/Paris':true,'Europe/Monaco':true,'Europe/Berlin':true,'Arctic/Longyearbyen':true,'Europe/Athens':true,'Europe/Budapest':true,'Atlantic/Reykjavik':true,'Europe/Dublin':true,'Eire':true,
		'Europe/Rome':true,'Europe/San_Marino':true,'Europe/Vatican':true,'Europe/Riga':true,'Europe/Vaduz':true,'Europe/Vilnius':true,'Europe/Luxembourg':true,'Europe/Malta':true,'Europe/Chisinau':true,
		'Europe/Amsterdam':true,'America/Kralendijk':true,'Europe/Oslo':true,'Atlantic/Jan_Mayen':true,'Europe/Warsaw':true,'Europe/Lisbon':true,'Atlantic/Madeira':true,'Atlantic/Azores':true,'Europe/Bucharest':true,'Europe/Bratislava':true,'Europe/Ljubljana':true,
		'Europe/Madrid':true,'Africa/Ceuta':true,'Atlantic/Canary':true,'Europe/Stockholm':true,'Europe/London':true,'Europe/Gibraltar':true,'Europe/Guernsey':true,'GB-Eire':true,'GB':true,
		/* GDPR Similar */
		'America/Argentina':true,'America/Buenos_Aires':true,'America/Catamarca':true,'America/Cordoba':true,'America/Jujuy':true,'America/Mendoza':true,'America/Rosario':true,
		'America/Sao_Paulo':true,'America/Manaus':true,'America/Rio_Branco':true,'America/Noronha':true,'America/Belem':true,'America/Fortaleza':true,'America/Recife':true,'America/Araguaina':true,'America/Maceio':true,'America/Bahia':true,'America/Santarem':true,'America/Campo_Grande':true,'America/Cuiaba':true,'America/Porto_Velho':true,'America/Boa_Vista':true,'America/Eirunepe':true,'America/St_Johns':true,'America/Halifax':true,'America/Montreal':true,'America/Toronto':true,'America/Winnipeg':true,'America/Regina':true,'America/Edmonton':true,'America/Vancouver':true,'America/Atikokan':true,'America/Blanc-Sablon':true,'America/Cambridge_Bay':true,'America/Creston':true,'America/Dawson':true,'America/Dawson_Creek':true,'America/Fort_Nelson':true,'America/Glace_Bay':true,'America/Goose_Bay':true,'America/Inuvik':true,'America/Iqaluit':true,'America/Moncton':true,'America/Nipigon':true,'America/Rainy_River':true,'America/Pangnirtung':true,'America/Rankin_Inlet':true,'America/Resolute':true,'America/Swift_Current':true,'America/Thunder_Bay':true,'America/Whitehorse':true,'America/Yellowknife':true,
		'Asia/Tokyo':true,'Africa/Nairobi':true,'EAT':true,'Africa/Lagos':true,'WAT':true,'Africa/Johannesburg':true,'Asia/Seoul':true,'ROK':true,'Europe/Zurich':true,'Europe/Istanbul':true,'Asia/Istanbul':true,
		'America/Los_Angeles':true,'US/Pacific':true,'America/Mazatlan':true,'America/Tijuana':true,'PDT':true
	},languages:{ //
		/* GDPR & EU-EEA */
		'hr':true,'hr-BA':true,'hr-HR':true,'sh':true,
		'nl':true,'nl-BE':true,'nl-NL':true,
		'en-CA':true,'en-IE':true,'en-ZA':true,
		'fr':true,'fr-BE':true,'fr-CA':true,'fr-CH':true,'fr-FR':true,'fr-LU':true,'fr-MC':true,
		'de':true,'de-AT':true,'de-CH':true,'de-DE':true,'de-LI':true,'de-LU':true,
		'it':true,'it-CH':true,'it-IT':true,
		'no':true,'nb':true,'nn':true,'pt':true,'pt-pt':true,
		'se':true,'se-FI':true,'se-NO':true,'se-SE':true,
		'es-AR':true,'es-ES':true,'sv':true,'sv-FI':true,'sv-SE':true,
		/* GDPR Related */
		'sq':true,'eu':true,'be':true,'br':true,'bg':true,'ca':true,'kw':true,'co':true,'cs':true,'et':true,'fy':true,'gd':true,'el':true,'hu':true,'is':true,'ga':true,'lv':true,'lt':true,'lb':true,'mk':true,'mt':true,'oc':true,'pl':true,'rm':true,'ro':true,'ru':true,'sc':true,'sk':true,'sb':true,'cy':true,
		'af':true,'ha':true,'ki':true,'nd':true,'nr':true,'so':true,'ns':true,'st':true,'sw':true,'ts':true,'tn':true,'ve':true,'xh':true,'yo':true,'zu':true,
		'hy':true,'ka':true,'he':true,'ku':true,'tt':true,'uk':true,'ji':true,'gn':true,'qu':true
	}
},ccTLD:{ //
	com:['ac','af','ag','ai','al','am','ar','au','aw','ax','az','ba','bb','bd','bf','bh','bi','bj','bm','bn','bo','br','bs','bt','by','bz','cc','cd','cg','ci','cm','co','cu','cv','cw','cy','dm','do','dz','ec','ee','eg','er','es','et','fj','fm','fo','gh','gi','gl','gm','gn','gp','gq','gr','gt','gu','gw','gy','hk','hn','hr','ht','iq','is','jm','jo','kg','kh','ki','km','kn','kp','kw','ky','kz','la','lb','lc','li','lk','lr','lu','lv','ly','md','mg','mk','ml','mm','mo','mp','mq','ms','mt','mu','mv','mw','mx','my','na','nf','ng','ni','np','nr','nu','om','pa','pe','pf','pg','ph','pk','pl','pn','pr','ps','pt','py','qa','ro','ru','rw','sa','sb','sc','sd','sg','sh','si','sk','sl','sm','sn','so','sr','st','sv','sy','tc','td','tg','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','ua','ug','uy','uz','vc','ve','vg','vi','vn','vu','ws','ye','zm'],
	co:['ae','ag','ao','at','bi','bw','ck','cm','cr','fk','gg','gl','gy','hu','id','il','im','in','ir','je','jp','ke','kr','lc','ls','ma','me','mu','mw','mz','nz','om','pw','rs','rw','st','sz','th','tj','tm','tt','tz','ug','uk','uz','ve','vi','ye','za','zm','zw'],
	edu:['ac','af','al','am','ar','au','az','ba','bb','bd','bf','bh','bi','bj','bm','bn','bo','br','bs','bt','bz','cc','cd','cg','ci','ck','co','cu','cv','dm','do','dz','ec','eg','er','es','et','fm','gh','gi','gl','gm','gp','gq','gr','gt','gu','gw','gy','hk','hn','ht','in','iq','is','jm','jo','kg','kh','ki','km','kn','kp','kw','ky','kz','la','lb','lc','lk','lr','lv','ly','me','mg','mk','ml','mm','mn','mo','ms','mt','mv','mw','mx','my','mz','na','ng','ni','np','nr','om','pa','pe','pf','ph','pk','pl','pn','pr','ps','pt','py','qa','rs','rw','sa','sb','sc','sd','sg','sl','sn','so','sr','st','sv','sy','td','tg','tj','tl','tm','tn','to','tr','tt','tw','ua','uy','vc','ve','vn','vu','ws','za','zm'],
	ed:['ao','cr','jp','pw'],ac:['ae','at','cr','cy','fj','fk','gn','id','il','im','in','ir','jp','ke','kr','ma','mu','mw','nz','pa','pg','rs','rw','se','sz','th','tj','tz','ug','uk','vn','za','zw'],
	gov:['ac','ae','af','al','am','ar','as','au','az','ba','bb','bd','bf','bh','bj','bm','bn','br','bs','bt','by','bz','cd','cg','ck','cl','cm','co','cu','cv','cy','dm','do','dz','ec','eg','er','et','fj','fk','fm','gg','gh','gi','gm','gn','gq','gr','gu','gw','gy','hk','ht','ie','il','im','in','iq','ir','is','it','je','jm','jo','kg','kh','ki','kn','kp','kw','ky','kz','la','lb','lc','lk','lr','lt','lv','ly','ma','me','mg','mk','ml','mm','mn','mo','mr','ms','mt','mu','mv','mw','my','mz','na','ng','np','nr','om','pf','pg','ph','pk','pl','pn','pr','ps','pt','py','qa','rs','rw','sa','sb','sc','sd','sg','sh','sl','sn','so','sr','st','sx','sy','tc','td','tg','tj','tl','tm','tn','to','tr','tt','tw','ua','uk','vc','vn','vu','ws','ye','za','zm','zw'],
	govt:['nz'],gub:['uy'],gouv:['sn'],go:['ci','cr','id','jp','ke','kr','pw','th','tj','tz','ug'],gob:['ar','bo','cl','es','gt','hn','mx','ni','pa','pe','pk','sv','ve'],
	org:['ac','ae','af','ag','ai','al','am','ar','au','ax','az','ba','bb','bd','bf','bh','bi','bj','bm','bn','bo','br','bs','bt','bw','by','bz','cc','cd','cg','ci','ck','co','cu','cv','cw','cy','dm','do','dz','ec','ee','eg','er','es','et','fj','fk','fm','fo','gg','gh','gi','gl','gm','gn','gp','gq','gr','gt','gu','gw','gy','hk','hn','ht','hu','il','im','in','iq','ir','is','je','jm','jo','kg','kh','ki','km','kn','kp','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lu','lv','ly','ma','md','me','mg','mk','ml','mm','mn','mo','mp','mq','ms','mt','mu','mv','mw','mx','my','mz','na','nf','ng','ni','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pn','pr','ps','pt','py','qa','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sk','sl','sm','sn','so','sr','st','sv','sy','sz','tc','td','tg','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','ua','ug','uk','uy','uz','vc','ve','vg','vi','vn','vu','ws','ye','za','zm','zw'],or:['at','bi','cr','id','jp','ke','kr','mu','pw','th','tz','ug'],
	net:['ac','ae','af','ag','ai','al','am','ar','au','ax','az','ba','bb','bd','bf','bh','bj','bm','bn','bo','br','bs','bt','by','bz','cc','cd','cg','ci','ck','cm','co','cu','cv','cw','cy','dm','do','dz','ec','eg','er','et','fj','fk','fm','fo','gg','gl','gm','gn','gp','gq','gr','gt','gu','gw','gy','hk','hn','ht','id','il','im','in','iq','ir','is','je','jm','jo','kg','kh','ki','kn','kp','kw','ky','kz','la','lb','lc','li','lk','lr','lu','lv','ly','ma','me','mk','ml','mm','mo','mp','mq','ms','mt','mu','mv','mw','mx','my','mz','na','nf','ng','ni','np','nr','nu','nz','om','pa','pe','pg','ph','pk','pl','pn','pr','ps','pt','py','qa','ru','rw','sa','sb','sc','sd','sg','sh','sk','sl','sm','so','sr','st','sy','tc','td','tg','th','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','ua','uk','uy','uz','vc','ve','vg','vi','vn','vu','ws','ye','za','zm'],ne:['jp','ke','kr','pw','tz','ug'],
	info:['au','az','ck','ec','et','fj','ht','hu','ke','ki','md','mv','nf','nr','pl','pr','ro','sd','tj','tn','tr','tt','tz','ve','vn'],
	biz:['ck','et','fj','id','ki','mv','ng','nr','pk','pl','pr','tj','tr','tt','vn'],
	id:['au','ir','lv','ly'],in:['rs','th','ua'],ind:['br','gt','in','tn'],
	shop:['ht','hu','pl'],store:['nf','ro','st'],me:['ke','tz','uk','ye'],
	web:['id','lk','nf','pk','tj','tr','ve']
}},main.js.inherit('lookup'));let lookup=main.js.lookup;

/* Main.JS Functions */
cookie.get=function(name){return document.cookie.split(';').find((row)=>row.trim().startsWith(name+proto.e))?.split(proto.e)[1]||false;};
cookie.set=function(name,value){if((typeof main.user==types.object)&&(main.user.persistence)&&(!!navigator.cookieEnabled)&&(!!main.consent.datalayer.functionality_storage)&&(main.consent.datalayer.functionality_storage==consent.terms.granted)){document.cookie=name+proto.e+value+'; '+Object.entries(cookie.policy).map(([attr,value])=>`${attr}=${value}`).join('; ')+"; Secure";};}; //console.log(name+proto.e+value+'; '+Object.entries(cookie.policy).map(([attr,value])=>`${attr}=${value}`).join('; ')+"; Secure");

/* Main.JS Session Data */
main.page=main.page||{};
main.body=main.body||{};main.body.navigation=main.body[types.navigation]||{};
main.path=window.location.href.replace(main[types.base],'').match(regex.path)[0]; //
main.domain=window.location.hostname.split(proto.p);if((main.domain.length<=2)||(!lookup.ccTLD[main.domain[main.domain.length-2]])){main.domain=(main.domain[main.domain.length-2]||'')+proto.p+main.domain[main.domain.length-1];}else{main.domain=main.domain[main.domain.length-3]+proto.p+main.domain[main.domain.length-2]+proto.p+main.domain[main.domain.length-1];};if(main.domain.length>4){cookie.policy['Domain']=main.domain;};
main.session=Object.assign({start:timestamp.init,lang:browser.locale.locale||window.navigator.language,region:browser.locale.timeZone.replace(proto.fs,' '),language:"English"},JSON.parse(sessionStorage.getItem('main.session'))||JSON.parse(localStorage.getItem('main.session'))||{landing:main.path});

/* Main.JS Parameters & Referrals */
main.body.search=new URLSearchParams(window.location.search).forEach((value,key)=>{if(typeof value==types.string){main.session[key.replace(regex.safe,'').toLowerCase()]=value;};});delete main.session[types.internal]; // Overwrite Session Parameters
create.domains=document.querySelector('meta[property*=".track.domain"]');if(!!create.domains){track.domains.push(...(!create.domains.content?[]:create.domains.content.toLowerCase().split(',')||[]));};
track.domains.forEach((domain)=>{if((typeof domain==types.string)&&(domain.length>3)){if(document.referrer.toLowerCase().search(domain)>=0){main.session.internal=true;};};});
if(!main.session.internal){delete main.session[track.parameter];}else if(parseInt(main.session[track.parameter])<1){delete main.session[track.parameter];}; // Check Sa

/* Main.JS User Data */
main.id=(main.session[track.parameter])||localStorage.getItem('main.id')||(cookie.get("main_id"))||(parseInt(Math.random()*1e17)+1)+proto.p+(timestamp.init.toString().split('').reverse().join(''));localStorage.setItem('main.id',main.id); // Common Structs
main.user=Object.assign({start:timestamp.init,bucket:parseInt((main.id%1e3)/1e1)+1,timezone:browser.locale.timeZone,locale:main.session.lang,persistence:!!localStorage.getItem('main.id')||false,light:window.matchMedia('(prefers-color-scheme: light)').matches},JSON.parse(localStorage.getItem('main.user'))||{}); // Load User Data
main.page=Object.assign({start:timestamp.init,scrolling:false,scrollTop:0,scrollHeight:parseInt(window.innerHeight),height:parseInt(window.innerHeight),width:parseInt(window.innerWidth)},JSON.parse(sessionStorage.getItem('main.page')));
main.dismiss=JSON.parse(localStorage.getItem('main.dismiss'))||{};

/* Main.JS Stylesheet */
if(!main.css){main['css']=main.js.css||{};main.css.theme=main.meta.theme;};let css=main.js.css;
if((!create.style)){create.style=document.createElement("style");document.head.appendChild(create.style).setAttribute("id",'main-css');};
if((!create.theme)&&(!version.htmlless)){create.theme=document.createElement('link');Object.assign(create.theme,{id:"main-theme",rel:"stylesheet",href:"main/theme/"+main.css.theme+"?version="+Object.values(main.version).join('')});document.head.appendChild(create.theme);};
if((!create.wireframe)&&(!version.htmlless)){create.wireframe=document.createElement('link');Object.assign(create.wireframe,{id:"main-style",rel:"stylesheet",href:"main/main.css?version="+Object.values(main.version).join('')});document.head.appendChild(create.wireframe);};
css=Object.assign(main.js.inherit('css'),{loaded:false,sheet:create.style.sheet,index:main.js.css.index||{}});
css.add=function(id,rule=''){if(typeof id!=types.string){return false;};id=id.replace(regex.safe,'');if(id.length<3){return false;};
	if((typeof css.index[id]==types.number)&&(css.index[id]>=0)){
		if((typeof css.sheet.cssRules[css.index[id]]==types.object)&&(css.sheet.cssRules[css.index[id]].cssText.replaceAll(' ','')===rule.replaceAll(' ',''))){return;};
		css.sheet.deleteRule(css.index[id]);Object.entries(css.index).forEach((item)=>{if((typeof item[1]==types.number)&&(item[1]>css.index[id])){css.index[item[0]]-=1;};});css.index[id]=-1;
	};css.count=css.sheet.cssRules.length;css.index[id]=css.sheet.insertRule(rule,css.count);return true;
};css.remove=function(id){if(typeof id!=types.string){return false;};id=id.replace(regex.safe,'');if(id.length<3){return false;};
	if((typeof css.index[id]==types.number)&&(css.index[id]>=0)){
		css.sheet.deleteRule(css.index[id]);Object.entries(css.index).forEach((item)=>{if((typeof item[1]==types.number)&&(item[1]>css.index[id])){css.index[item[0]]-=1;};});css.index[id]=-1;
		return true;
	};return false;
};

/* Main.JS Localisation */
if(main.user.persistence){main.session.language=lookup.language[main.user.locale]||lookup.language[main.session.lang]||lookup.language[main.session.hl]||"English";}else{main.session.language=lookup.language[main.session.hl]||lookup.language[main.session.lang]||lookup.language[main.user.locale]||"English";}; // Update Language (fallbacks)
main[types.aliases]=main[types.aliases]||{};main.aliases=main[types.aliases];main.aliases['main.html']=false;main.aliases['main']=false;main.aliases['template.html']=false;

/* Main.JS Timers & Events */
main.timers={delay:500,resizing:false};main.timers.delay=Math.max(100,Math.min(5000,parseInt(main.timers.delay)))||500;
main.events=Object.assign({config:track.config,values:JSON.parse(sessionStorage.getItem('main.events.values'))||JSON.parse(localStorage.getItem('main.events.values'))||{}},main.events); // Events Defaults Recovery

/* Main.JS Fonts */
main.font=Object.assign({loaded:false,config:font.config,family:{body:'',headings:'',monospace:'',title:'',footer:''},name:{},request:''},main.font); // Fonts Defaults
create.font=document.createElement('link');Object.assign(create.font,{id:'main-font',rel:"stylesheet"}); //

/* Main.JS Switches */
main.switch=main.switch||{};main.switch=Object.assign({loaded:false,custom:{},check:"aria-checked"},main.switch);
main.switch.click=function(element){let id=element.target.id||'';main.hydrate.switch.forEach(func=>func(id));if((id)&&(typeof element.target.checked==types.boolean)){element.target.setAttribute(main.switch.check,element.target.checked);};
	if((id.split('-')[0])&&(typeof main.switch.custom[(id.split('-')[0])]==types.function)){main.switch.custom[(id.split('-')[0])](element);}else // Short Function Name
	if((id)&&(typeof main.switch.custom[id]==types.function)){main.switch.custom[id](element);}; // Full Function Name
};main.switch.custom['consent']=function(element){if((typeof element==types.object)&&(typeof element.target==types.object)){consent.update(element.target);};
};

/* Main.JS Buttons */
main.button=main.button||{};main.button=Object.assign({loaded:false,custom:{},press:"aria-pressed"},main.button);
main.button.click=function(element){let id=element.target.id||'';main.hydrate.button.forEach(func=>func(id));if(id){element.target.setAttribute(main.button.press,true);};
	if(((id.split('-')[0]))&&(typeof main.button.custom[(id.split('-')[0])]==types.function)){main.button.custom[(id.split('-')[0])](element);}else // Short Function Name
	if((id)&&(typeof main.button.custom[id]==types.function)){main.button.custom[id](element);}; // Full Function Name
};main.button.custom['consent']=function(element){if((typeof element==types.object)&&(typeof element.target==types.object)){consent.update(element.target);};
};main.button.custom['notification-dismiss']=function(element){let parent=false,update=false;
	if((typeof element==types.object)&&(typeof element.target==types.object)){
		switch(types.div.toUpperCase()){case element.target.tagName:parent=element.target;break;case element.target.parentElement.tagName:parent=element.target.parentElement;break;case element.target.parentElement.parentElement.tagName:parent=element.target.parentElement.parentElement;break;case element.target.parentElement.parentElement.parentElement.tagName:parent=element.target.parentElement.parentElement.parentElement;};
		if((typeof parent==types.object)&&(parent!=null)){update=true;parent.remove();if((typeof parent.id==types.string)&&(typeof parent.dataset==types.object)){main.dismiss[parent.id]={id:parent.id,data:{}};main.dismiss[parent.id].data=Object.assign(main.dismiss[parent.id].data,parent.dataset);main.events.gtag({event:'main.dismiss.'+parent.id});};};
	};if(update){localStorage.setItem('main.dismiss',JSON.stringify(main.dismiss));main.hydrate.resize.forEach(func=>func());if(main.body.status.innerText==''){main.body.status.innerHTML='';};};
};

/* Main.JS Consent */
main.consent=Object.assign({config:consent.config,datalayer:{functionality_storage:'denied',security_storage:'denied',personalization_storage:'denied',analytics_storage:'denied',ad_storage:'denied',ad_personalization:'denied',ad_user_data:'denied'}},JSON.parse(localStorage.getItem('main.consent'))); // Inherit Consent Settings
consent.banner=function(){if(!main.body.loaded){return;};let show=false,type=null,update=false;
	Object.entries(consent.preset[main.consent.config.preset]).forEach((item)=>{if((!item[0])||(typeof item[0]!=types.string)){}else // Skip Malformed
		if((item[1]==consent.terms.neccessary)&&(main.consent.datalayer[item[0]]!=main.consent.config.neccessary)){main.consent.datalayer[item[0]]=main.consent.config.neccessary;update=true;}else // Check Neccessary State
		if((item[1]==consent.terms.acknowledge)&&(main.consent.config.posture==consent.terms.granted)&&(main.consent.datalayer[item[0]]!=main.consent.config.posture)){main.consent.datalayer[item[0]]=main.consent.config.posture;update=true;if(!show){show=true;type=consent.terms.acknowledge;};}else // Check Neccessary State
		if((item[1]==consent.terms.acknowledge)&&(main.consent.config.posture!=consent.terms.granted)&&(!main.consent.config.acknowledged)){if(!show){show=true;type=consent.terms.acknowledge;};}else // Check Acknowledge
		if((item[1]==consent.terms.consent)&&(!main.consent.config.consented)){show=true;type=consent.terms.neccessary;}else // Check Consent
		if((item[1]==consent.terms.posture)&&(main.consent.config.posture==consent.terms.consent)){show=true;type=consent.terms.neccessary;}else // Check Posture (Consent)
		if((item[1]==consent.terms.posture)&&(main.consent.datalayer[item[0]]!=main.consent.config.posture)){main.consent.datalayer[item[0]]=main.consent.config.posture;update=true;}; // Else Posture
	});if((show)&&(main.body.dialog)&&(type!==null)&&(consent.message[type])&&(!main.consent.config.consented)&&(!document.getElementById(consent.message[consent.terms.neccessary].id))){ // Valid Container
		main.body.dialog.innerHTML+='<div id="'+consent.message[consent.terms.neccessary].id+'" class="consent" aria-label="'+consent.message[type].label+'"><div class=""><h2>'+consent.message[type].title+'</h2><p>'+consent.message[type].text+' '+consent.message[type].reason+'</p></div>'+consent.message[type].controls+'';
		if(!main.timers.resizing){main.hydrate.resize.forEach(func=>func());};main.hydrate.button.forEach(func=>func());main.events.gtag({event:'main.consent'}); // Resize Viewports & Add Event
	};if((update)&&(main.events.config.id)&&(main.events.config.gateway)){main.events.gtag('consent','update',main.consent.datalayer);};
	if(!!main.consent.config.ads_data_redaction){main.events.gtag('set',consent.message.ads_data_redaction.tag,true);};
	if(!!main.consent.config.url_passthrough){main.events.gtag('set',consent.message.url_passthrough.tag,true);};
	if(main.consent.config.consented){if(!document.body.classList.contains("consented")){document.body.classList.add('consented');};};
};consent.preferences=function(){let count=0,updates="",element=document.getElementById(consent.message[consent.terms.posture].id); //
	if(main.body.alertdialog){ // Valid Container
		if(!element){updates+='<div id="'+consent.message[consent.terms.posture].id+'" class="consent" aria-label="'+consent.message[consent.terms.posture].label+'"><div class=""><h2>'+consent.message[consent.terms.posture].title+'</h2><p>'+consent.message[consent.terms.posture].text+'</p></div><fieldset><legend>'+consent.message[consent.terms.posture].label+'</legend>';
			Object.entries(consent.preset[main.consent.config.preset]).forEach((item)=>{ //
				if((!!item[0])&&(typeof item[1]==types.string)&&(typeof consent.message[item[0]]==types.object)&&((main.consent.config.consented)||(item[1]==consent.terms.consent)||((item[1]==consent.terms.posture)&&(main.consent.config.posture==consent.terms.consent)))){ // Requires Consent (or Requires Posture & Posture=Consent)
					updates+='<div><input type="checkbox" class="toggle" id="'+consent.message[item[0]].controls+'" '+((main.consent.datalayer[item[0]]==consent.terms.granted)?'checked':'')+'><label for="'+consent.message[item[0]].controls+'"><strong>'+consent.message[item[0]].title+'</strong><br>'+consent.message[item[0]].label+'</label></div>';count+=1;
				}; //
			});updates+='</fieldset><p>'+consent.message[consent.terms.posture].reason+'</p>'+consent.message[consent.terms.posture].controls+'';main.body.alertdialog.innerHTML+=updates; // Add Alert Dialog!	
		}else{if(element.classList.contains("hide")){element.classList.remove("hide");};}; // Unhide Pre-Rendered
		if(!main.timers.resizing){main.hydrate.resize.forEach(func=>func());};main.hydrate.switch.forEach(func=>func());main.hydrate.button.forEach(func=>func());main.events.gtag({event:'main.consent.manage'}); // Resize Viewports & Add Event
	}else{};
};consent.update=function(element){let update=false,updates=null,close=false;
	if((typeof element==types.object)&&(typeof element.id==types.string)){
		switch(element.id){case consent.message.functionality_storage.controls: if(!element.checked){main.consent.datalayer.functionality_storage=consent.terms.denied;}else{main.consent.datalayer.functionality_storage=consent.terms.granted;};update=true;
		break;case consent.message.security_storage.controls: if(!element.checked){main.consent.datalayer.security_storage=consent.terms.denied;}else{main.consent.datalayer.security_storage=consent.terms.granted;};update=true;
		break;case consent.message.personalization_storage.controls: if(!element.checked){main.consent.datalayer.personalization_storage=consent.terms.denied;}else{main.consent.datalayer.personalization_storage=consent.terms.granted;};update=true;
		break;case consent.message.analytics_storage.controls: if(!element.checked){main.consent.datalayer.analytics_storage=consent.terms.denied;}else{main.consent.datalayer.analytics_storage=consent.terms.granted;};update=true;
		break;case consent.message.ad_storage.controls: if(!element.checked){main.consent.datalayer.ad_storage=consent.terms.denied;}else{main.consent.datalayer.ad_storage=consent.terms.granted;};update=true;
		break;case consent.message.ad_personalization.controls: if(!element.checked){main.consent.datalayer.ad_personalization=consent.terms.denied;}else{main.consent.datalayer.ad_personalization=consent.terms.granted;};update=true;
		break;case consent.message.ad_user_data.controls: if(!element.checked){main.consent.datalayer.ad_user_data=consent.terms.denied;}else{main.consent.datalayer.ad_user_data=consent.terms.granted;};update=true;
		break;case consent.message.url_passthrough.controls: if(typeof element.checked==types.boolean){main.consent.config.url_passthrough=element.checked;main.events.gtag('set',consent.message.url_passthrough.tag,main.consent.config.url_passthrough);}; // Set Passthrough
		break;case consent.message.ads_data_redaction.controls: if(typeof element.checked==types.boolean){main.consent.config.ads_data_redaction=element.checked;main.events.gtag('set',consent.message.ads_data_redaction.tag,main.consent.config.ads_data_redaction);}; // Set Redaction
		break;case "consent-manage": consent.preferences(); // Call Cookie Manager
		break;case "consent-deny":case "consent-denied": updates=consent.terms.denied;close=true;
		break;case "consent-all":case "consent-granted": updates=consent.terms.granted;close=true;
		break;case "consent-save-close":case "consent-ok": updates=consent.terms.consent;close=true;
			case "consent-preferences":default: updates=consent.terms.acknowledge;consent.preferences(); // Call Cookie Manager
		};switch(updates){case null: // Ignore Updates
		break;case consent.terms.granted:case consent.terms.denied: // Change All!
			Object.entries(main.consent.datalayer).forEach((item)=>{if((typeof item[1]==types.string)&&(item[1]!=consent.terms[updates])){main.consent.datalayer[item[0]]=consent.terms[updates];update=true;};});
			case consent.terms.consent: if(!main.consent.config.consented){main.consent.config.consented=true;update=true;if(!document.body.classList.contains("consented")){document.body.classList.add('consented');};}; // No Break, Consented
			case consent.terms.acknowledge: if(!main.consent.config.acknowledged){main.consent.config.acknowledged=true;update=true;}; // No Break, Acknowledged
			Object.entries(consent.preset[main.consent.config.preset]).forEach((item)=>{if((typeof item[0]==types.string)&&(typeof item[1]==types.string)&&(item[1]==consent.terms.acknowledge)&&(main.consent.datalayer[item[0]]!=consent.terms.granted)){main.consent.datalayer[item[0]]=consent.terms.granted;update=true;};});
			cookie.set("main_id",main.id); // Attempt Set Main ID
		break;default: // Individual Changes
		};if(update){if((main.events.config.id)&&(main.events.config.gateway)){main.events.gtag('consent','update',main.consent.datalayer);};localStorage.setItem('main.consent',JSON.stringify(main.consent));cookie.set("main_id",main.id);
		};if(close){let banner=document.getElementById(consent.message[consent.terms.neccessary].id),dialog=document.getElementById(consent.message[consent.terms.posture].id);
			if((!!banner)&&(typeof banner.remove==types.function)&&(main.body.dialog)){banner.remove();if(main.body.dialog.innerText==''){main.body.dialog.innerHTML='';};};
			if((!!dialog)&&(typeof dialog.remove==types.function)&&(main.body.alertdialog)){dialog.remove();if(main.body.alertdialog.innerText==''){main.body.alertdialog.innerHTML='';};};
			main.hydrate.resize.forEach(func=>func()); // Check Rendered State
		};
	}else{};	
};

/* Main.JS Hydration */
main[types.hydrate]={};main.hydrate=main[types.hydrate]; // Hydration Functions Parent
main.hydrate.load=[function(){ // Reload Hydration
	if(document.readyState=='complete'){ // Require Document Body, Trap Errors
		/* Main.JS Parent Elements */
		main.body[types.main]=document.querySelector('body>main,body>*[role="main"],body *[role="main"]:not(:has(main)),body>#main'); // Main Content
		main.body[types.navigation]=document.querySelector('body>nav[role="navigation"],body>*[role="navigation"],body>#navigation,body>#nav,body>nav,body>.navigation'); // Main Navigation
		main.body[types.footer]=document.querySelector('body>footer[role="contentinfo"],body>*[role="contentinfo"],body>footer,body>#footer'); // Main Footer
		if(!main.body.main){main.body.main=document.createElement(types.main);document.body.insertBefore(main.body.main,document.body.firstChild).setAttribute('role',"main");};
		if(!main.body.navigation){main.body.navigation=document.createElement(types.nav);document.body.appendChild(main.body.navigation).setAttribute('role',"navigation");};
		if(!main.body.footer){main.body.footer=document.createElement(types.footer);document.body.appendChild(main.body.footer).setAttribute('role',"contentinfo");};
		/* Main.JS Dialogs */
		main.body[types.status]=document.querySelector('body>dialog[role="status"],body>*[role="status"]'); // Notifications Dialog
		main.body[types.alertdialog]=document.querySelector('body>dialog[role="alertdialog"],body>*[role="alertdialog"]'); // Popup Alert Dialog
		main.body[types.dialog]=document.querySelector('body>dialog[role="dialog"],body>*[role="dialog"]'); // Banner Dialog
		main.body[types.menu]=document.querySelector('body>dialog[role="menu"],body>*[role="menu"]'); // Main Menu Dialog
		main.body[types.searchbox]=document.querySelector('body>dialog[role="searchbox"],body>*[role="searchbox"]'); // Search Results Dialog
		main.body[types.application]=document.querySelector('body>dialog[role="application"],body>*[role="application"]'); // Account Login Dialog
		main.body[types.region]=document.querySelector('body>dialog[role="region"],body>*[role="region"]'); // Gallery/Region Dialog
		if(!main.body.status){main.body.status=document.createElement(types.dialog);main.body.status.setAttribute('class',"notification");main.body.status.setAttribute('aria-label',"Notifications");main.body.status.setAttribute('open',"");document.body.insertBefore(main.body.status,document.body.firstChild).setAttribute('role',"status");};
		if(!main.body.alertdialog){main.body.alertdialog=document.createElement(types.dialog);main.body.alertdialog.setAttribute('class',"alertdialog");main.body.alertdialog.setAttribute('aria-label',"Alert Dialog");main.body.alertdialog.setAttribute('open',"");document.body.insertBefore(main.body.alertdialog,document.body.firstChild).setAttribute('role',"alertdialog");};
		if(!main.body.dialog){main.body.dialog=document.createElement(types.dialog);main.body.dialog.setAttribute('class',"banner");main.body.dialog.setAttribute('aria-label',"Banner Dialog");main.body.dialog.setAttribute('open',"");document.body.insertBefore(main.body.dialog,document.body.firstChild).setAttribute('role',"dialog");};
		if(!main.body.menu){main.body.menu=document.createElement(types.dialog);main.body.menu.setAttribute('class',"menu");main.body.menu.setAttribute('aria-label',"Main Menu");main.body.alertdialog.setAttribute('open',"");document.body.appendChild(main.body.menu).setAttribute('role',"menu");};
		if(!main.body.searchbox){main.body.searchbox=document.createElement(types.dialog);main.body.searchbox.setAttribute('class',"searchbox");main.body.searchbox.setAttribute('aria-label',"Search Results");main.body.alertdialog.setAttribute('open',"");document.body.appendChild(main.body.searchbox).setAttribute('role',"searchbox");};
		if(!main.body.application){main.body.application=document.createElement(types.dialog);main.body.application.setAttribute('class',"application");main.body.application.setAttribute('aria-label',"Account App");main.body.alertdialog.setAttribute('open',"");document.body.appendChild(main.body.application).setAttribute('role',"application");};
		if(!main.body.region){main.body.region=document.createElement(types.dialog);main.body.region.setAttribute('class',"region");main.body.region.setAttribute('aria-label',"Gallery");main.body.alertdialog.setAttribute('open',"");document.body.appendChild(main.body.region).setAttribute('role',"region");};
		/* Main.JS Navigation Elements */
		if(!version.htmlless){ // !HTMLless
			main.body.navigation[types.menu]=main.body.navigation.querySelector('body>nav>#menu,body>[role="navigation"]>#menu');
			main.body.navigation[types.logo]=main.body.navigation.querySelector('body>nav>img.logo,body>[role="navigation"]>img.logo');
			main.body.navigation[types.links]=main.body.navigation.querySelector('body>nav>.links,body>[role="navigation"]>.links');
			main.body.navigation[types.search]=main.body.navigation.querySelector('body>nav>#search,body>[role="navigation"]>#search');
			main.body.navigation[types.account]=main.body.navigation.querySelector('body>nav>#account,body>[role="navigation"]>#account');
			main.body.navigation[types.breadcrumbs]=main.body.navigation.querySelector('body>nav>#breadcrumbs,ol#breadcrumbs');
			if(!main.body.navigation.menu){main.body.navigation.menu=document.createElement(types.button);Object.assign(main.body.navigation.menu,{role:"button"});main.body.navigation.menu.setAttribute('aria-label',"Menu Button");main.body.navigation.appendChild(main.body.navigation.menu).setAttribute(attribute.id,types.menu);};
			if(!main.body.navigation.logo){main.body.navigation.logo=document.createElement(types.img);Object.assign(main.body.navigation.logo,{loading:attribute.lazy});main.body.navigation.appendChild(main.body.navigation.logo).setAttribute(attribute.class,types.logo);};
			if(!main.body.navigation.links){main.body.navigation.links=document.createElement(types.div);Object.assign(main.body.navigation.links,{role:"complementary"});main.body.navigation.links.setAttribute('aria-label',"Menu Links");main.body.navigation.appendChild(main.body.navigation.links).setAttribute(attribute.class,types.links);};
			if(!main.body.navigation.search){main.body.navigation.search=document.createElement(types.div);Object.assign(main.body.navigation.search,{role:"search"});main.body.navigation.search.setAttribute('aria-label',"Search");main.body.navigation.appendChild(main.body.navigation.search).setAttribute(attribute.id,types.search);};
			if(!main.body.navigation.account){main.body.navigation.account=document.createElement(types.div);main.body.navigation.appendChild(main.body.navigation.account).setAttribute(attribute.id,types.account);};
			if(!main.body.navigation.breadcrumbs){main.body.navigation.breadcrumbs=document.createElement(types.ol);main.body.navigation.appendChild(main.body.navigation.breadcrumbs).setAttribute(attribute.id,types.breadcrumbs);};
		}; /* Main.JS Controls */
		main.body[types.colorscheme]=document.querySelector('#color-scheme,[role="switch"][aria-label="Dark Mode"]'); // Dark Mode Switch
		main.body[types.readerscheme]=document.querySelector('#reader-scheme,[role="switch"][aria-label="Reader Mode"]'); // Reader Mode Switch
		main.body[types.nocodemode]=document.querySelector('#nocode-mode,[role="switch"][aria-label="NoCode Mode"]'); // NoCode Mode Switch
		/* Main.JS Properties */
		document.querySelectorAll('meta[property]').forEach((meta)=>{if((typeof meta.attributes==types.object)&&(typeof meta.attributes.property==types.object)&&(typeof meta.attributes.content==types.object)){
			switch(meta.attributes.property.value){case null: // Ignore
			break;case "main.timers.delay": main.timers.delay=Math.max(100,Math.min(5000,parseInt(meta.attributes.content.value)))||500;
			break;case "main.font":case "main.font.provider":case "main.font.config.provider": main.font.config.provider=meta.attributes.content.value.toLowerCase();
				if(font.preset[main.font.config.provider]){main.font.config=Object.assign(font.preset[main.font.config.provider],main.font.config);};
			break;case "main.font.family.headings": if(main.font.family){main.font.family.headings=meta.attributes.content.value;};
			break;case "main.font.family.title": if(main.font.family){main.font.family.title=meta.attributes.content.value;};
			break;case "main.font.family.body": if(main.font.family){main.font.family.body=meta.attributes.content.value;};
			break;case "main.font.family.footer": if(main.font.family){main.font.family.footer=meta.attributes.content.value;};
			break;case "main.font.family.monospace": if(main.font.family){main.font.family.monospace=meta.attributes.content.value;};
			break;case "main.body.navigation.logo.alt": if(!version.htmlless){main.body.navigation.logo.alt=meta.attributes.content.value;};
			break;case "main.body.navigation.logo.src": if(!version.htmlless){main.body.navigation.logo.src=meta.attributes.content.value;};
			break;case "main.body.navigation.logo.srcset": if(!version.htmlless){main.body.navigation.logo.srcset=meta.attributes.content.value;};
			};			
		};}); // Property Bounds & Defaults
		if(!!main.font.config.gateway){main.font.request=main.font.config.gateway;
			Object.entries(main.font.family).forEach((item)=>{selector=item[0];font=item[1];
				if((typeof font==types.string)&&(font)){main.font.request+=main.font.config.prefix+font;
					main.font.name[selector]=font.split(main.font.config.separator)[0];
					css.add("font-"+selector,':root { --font-'+selector+':"'+main.font.name[selector]+'"; }');
				};
			});main.font.request+=main.font.config.options;main.font.request.replace(proto.qa,proto.q); // Finish Request
			if((!create.font.href)||(create.font.href!=main.font.request)){create.font.setAttribute("href",main.font.request);document.head.appendChild(create.font);}; // Update Font Head Link
		}; /* Main.JS Body Classes */
		main.session.language.split(' ').forEach((item)=>{item=`${item}`.toLowerCase();if((item)&&(!document.body.classList.contains(item))){document.body.classList.add(item);};});
		main.session.region.split(' ').forEach((item)=>{item=`${item}`.toLowerCase();if((item)&&(!document.body.classList.contains(item))){document.body.classList.add(item);};});
		/* Main.JS Body Listeners */
		document.body.scrollTop=main.page.scrollTop||0;
		if(typeof main.hydrate.listeners==types.function){main.hydrate.listeners();};
		if(network.capable===null){network.fetch();}; // Networking Capable?
		/* Main.JS Loaded */
		main.body.loaded=true; // Mark Page Rendered
		if(main.user.persistence){consent.banner();}; // Call Consent Banner
		main.hydrate.dismiss.forEach(func=>func());
		if(!document.body.classList.contains("loaded")){document.body.classList.add('loaded');};
		if(!main.timers.resizing){main.hydrate.resize.forEach(func=>func());}; // Resize Viewports
		main.hydrate.switch.forEach(func=>func());
		main.hydrate.button.forEach(func=>func());
		main.events.gtag({event:'main.page.hydrated'});
	}; // Document Body Agnostic
	if(main.page.height<main.page.width){main.page.orientation=classes.landscape;}else{main.page.orientation=classes.portrait;};
}];main.hydrate.language=[function(){if(!main.body.loaded){return;}; /* Main.JS Language Switcher */
}];main.hydrate.switch=[function(){if(!main.body.loaded){return;}; /* Main.JS Switch */
	document.querySelectorAll('input[type="checkbox"]:not([aria-checked]),[role="switch"]:not([aria-checked])').forEach((element)=>{if(typeof element.checked==types.boolean){element.setAttribute(main.switch.check,element.checked);}else if(typeof element.id==types.string){element.setAttribute(main.switch.check,'');};element.addEventListener(types.click,main.switch.click);});
	switch(arguments[0]){case "color-scheme": main.user.light=!main.user.light;break;case "reader-scheme": main.user.reader=!main.user.reader;break;case "nocode-mode": main.user.nocode=!main.user.nocode; // Action Changes (if neccessary)
	};if((main.body[types.colorscheme])&&(typeof main.body[types.colorscheme].getAttribute==types.function)&&(main.body[types.colorscheme].getAttribute(main.switch.check)!==main.user.light)){main.body[types.colorscheme].setAttribute(main.switch.check,main.user.light); // Color Scheme
		if((!main.user.light)){if(document.body.classList.contains(classes.light)){document.body.classList.remove(classes.light);};}else{if(!document.body.classList.contains(classes.light)){document.body.classList.add(classes.light);};};
	};if((main.body[types.readerscheme])&&(typeof main.body[types.readerscheme].getAttribute==types.function)&&(main.body[types.readerscheme].getAttribute(main.switch.check)!==main.user.reader)){main.body[types.readerscheme].setAttribute(main.switch.check,main.user.reader); // Reader Mode
		if((!main.user.reader)){if(document.body.classList.contains(classes.reader)){document.body.classList.remove(classes.reader);};}else{if(!document.body.classList.contains(classes.reader)){document.body.classList.add(classes.reader);};};
	};if((main.body[types.nocodemode])&&(typeof main.body[types.nocodemode].getAttribute==types.function)&&(main.body[types.nocodemode].getAttribute(main.switch.check)!==main.user.nocode)){main.body[types.nocodemode].setAttribute(main.switch.check,main.user.nocode); // Reader Mode
		if((!main.user.nocode)){if(document.body.classList.contains(classes.nocode)){document.body.classList.remove(classes.nocode);};}else{if(!document.body.classList.contains(classes.nocode)){document.body.classList.add(classes.nocode);};};
	};main.switch.loaded=true;
}];main.hydrate.button=[function(){if(!main.body.loaded){return;}; /* Main.JS Button */
	document.querySelectorAll('button:not([aria-pressed]),input[type="button"]:not([aria-pressed]),input[type="reset"]:not([aria-pressed]),[role="button"]:not([aria-pressed])').forEach((element)=>{if(typeof element.id==types.string){element.setAttribute(main.button.press,'');element.addEventListener(types.click,main.button.click);};});
	main.button.loaded=true;
}];main.hydrate.dismiss=[function(){if(!main.body.loaded){return;}; /* Main.JS Dismiss Controller */
	Object.entries(main.dismiss).forEach(([item])=>{let element=false;
		if((typeof main.dismiss[item]==types.object)&&(typeof main.dismiss[item].id==types.string)){element=document.getElementById(main.dismiss[item].id);if((typeof element==types.object)&&(element!=null)){element.remove();};};
	});
}];main.hydrate.resize=[function(){if((!main.body.loaded)||(main.timers.resizing)){return;};main.timers.resizing=true;
	if((main.body.footer)&&(css.loaded)){let footRect=main.body.footer.getBoundingClientRect()||{top:0};main.page=Object.assign(main.page,{scrollHeight:parseInt(footRect.top+main.page.scrollTop),height:parseInt(window.innerHeight),width:parseInt(window.innerWidth)});};
	if((main.body.dialog)&&(main.body.status)&&(css.loaded)){
		main.page=Object.assign(main.page,{pageTop:parseInt(main.body.status.offsetHeight),pageBottom:parseInt(main.body.dialog.offsetHeight)});
		css.add("page-top",':root { --page-top:'+main.page.pageTop+'px !important; }');
		css.add("page-bottom",':root { --page-bottom:'+main.page.pageBottom+'px !important; }');
		css.add("scroll-width",':root { --scrollbar-width:'+(document.body.offsetWidth-document.body.clientWidth)+'px !important; }');
	};document.querySelectorAll('body *[data-min-width],body *[min-width]').forEach(function(item){let style='';minWidth=item.attributes.getNamedItem("min-width")?item.attributes.getNamedItem("min-width").nodeValue:item.dataset.minWidth||0;
		if((!css.loaded)||(!item.clientWidth)||(!minWidth)){}else if(main.page.width<minWidth){style="scale("+Number.parseFloat(main.page.width/minWidth).toFixed(2)+")";if((!item.style.transform)||(item.style.transform!=style)){item.style.transform=style;};}else if(item.style.transform){item.style.transform=item.style.transform.replace(regex.scale,'');};
	});main.timers.resizing=false;
}];main.hydrate.scroll=[function(){if(!main.body.loaded){return;};
	main.page.scrollTop=parseInt(document.body.scrollTop);
	if(!main.page.scrolling){main.page.focused=true; //
		window.requestAnimationFrame(()=>{ /* Main.JS scrolling:start */
			if(main.page.height<main.page.width){if(!document.body.classList.contains(classes.landscape)){document.body.classList.add(classes.landscape);document.body.classList.remove(classes.portrait);};}else if(!document.body.classList.contains(classes.portrait)){document.body.classList.add(classes.portrait);document.body.classList.remove(classes.landscape);
			};if(main.page.scrollTop<99){if(!document.body.classList.contains(classes.top)){document.body.classList.add(classes.top);};if(document.body.classList.contains(classes.scrolled)){document.body.classList.remove(classes.scrolled);};
			}else if(main.page.scrollTop>main.page.height){if(!document.body.classList.contains(classes.scrolled)){document.body.classList.add(classes.scrolled);main.events.gtag({event:'main.page.scrolled'});};if(document.body.classList.contains(classes.top)){document.body.classList.remove(classes.top);};
			}else{if(document.body.classList.contains(classes.top)){document.body.classList.remove(classes.top);};if(document.body.classList.contains(classes.scrolled)){document.body.classList.remove(classes.scrolled);};
			};if(main.page.scrollTop+main.page.height>main.page.scrollHeight){if(!document.body.classList.contains(classes.bottom)){document.body.classList.add(classes.bottom);main.events.gtag({event:'main.page.bottom'});};}else{if(document.body.classList.contains(classes.bottom)){document.body.classList.remove(classes.bottom);};
			}; /* Main.JS scrolling:end */
			main.page.scrolling=false;
		});main.page.scrolling=true;
	}; //
}];main.hydrate[types.breadcrumbs]=[function(){if(!main.body.loaded){return;};  // Update Breadcrumbs
	if((!version.htmlless)&&(main.body.navigation)&&(main.body.navigation.breadcrumbs)&&(main[types.base])){let bread=main.path.split(proto.fs),url='';
		main.body.navigation.breadcrumbs.innerHTML='<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" href="'+main[types.base]+'"><span itemprop="name">'+main.meta.website+'</span><meta itemprop="position" content="1" /></a></li>';
		for(let crumb=0;crumb<bread.length;crumb++){url+=bread[crumb];
			if((bread[crumb].trim()=='')||(typeof main[types.aliases][bread[crumb].toLowerCase()]==types.boolean)){ // Ignore
			}else if(typeof main[types.aliases][bread[crumb].toLowerCase()]==types.string){main.body.navigation.breadcrumbs.innerHTML+='<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" href="'+main[types.base]+url+'"><span itemprop="name">'+main[types.aliases][bread[crumb]]+'</span><meta itemprop="position" content="'+crumb+'" /></a></li>';url+=proto.fs;
			}else{main.body.navigation.breadcrumbs.innerHTML+='<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" href="'+main[types.base]+url+'"><span itemprop="name">'+bread[crumb].charAt(0).toUpperCase()+bread[crumb].slice(1)+'</span><meta itemprop="position" content="'+crumb+'" /></a></li>';url+=proto.fs;
			};
		};	
	};
}];main.hydrate.beforeunload=[function(){if(!loaded){return;}; //
	localStorage.setItem('main.user',JSON.stringify(main.user));
	sessionStorage.setItem('main.page',JSON.stringify(main.page));
	sessionStorage.setItem('main.session',JSON.stringify(main.session));
	localStorage.setItem('main.dismiss',JSON.stringify(main.dismiss));
	sessionStorage.setItem('main.events.values',JSON.stringify(main.events.values));
	main.events.gtag({event:'main.page.unload'});
}];main.hydrate.mouseleave=[function(){if(loaded){if(main.page.focused){main.page.focused=false;localStorage.setItem('main.user',JSON.stringify(main.user));sessionStorage.setItem('main.session',JSON.stringify(main.session));};};
}];main.hydrate.blur=[function(){if(loaded){if(main.page.focused){main.page.focused=false;localStorage.setItem('main.user',JSON.stringify(main.user));sessionStorage.setItem('main.session',JSON.stringify(main.session));};};
}];main.hydrate.mouseenter=[function(){if(loaded){main.page.focused=true;};
}];main.hydrate.focus=[function(){if(loaded){main.page.focused=true;};
}];main.hydrate.listeners=function(){ // Update Listners
	Object.entries(main.hydrate).forEach((item)=>{let key=item[0]; // Iterate Function Names
		if((!!key)&&(key!='listeners')&&(typeof main.hydrate[key]==types.object)){ // Is Valid Function
			main.hydrate[key].forEach(function(item,index){ //
				if((typeof item==types.function)&&(!main.hydrate[key][index].loaded)){ // Confirmed Function
					switch(listen[key]){case null: // Check Listener Parent (ignore=null !undefined)
					break;case 'body':if(document.readyState!=attribute.loading){document.body.addEventListener(key,main.hydrate[key][index]);main.hydrate[key][index].loaded=true;}; // Add Document Body Listener
					break;case 'document':document.addEventListener(key,main.hydrate[key][index]);main.hydrate[key][index].loaded=true; // Add Document Listener
					break;case 'window':window.addEventListener(key,main.hydrate[key][index]);main.hydrate[key][index].loaded=true; // Add Window Listener
					};item(); // Call It First Time
				};
			});
		};
	});
};main.hydrate.listeners(); // Call Listeners

/* Main.JS Networking */
network.fetch=async function(type='text/html',path='humans.txt',from='default'){if((!main.user.persistence)||(network.capable==false)){return;};
	const myRequest = new Request(main.base+path,{method:"GET",headers:{"Content-Type":type}
		,cache:(window.location.protocol==main.js.proto.https)?from:'force-cache'
		,mode:(window.location.protocol==main.js.proto.https)?'same-origin':'no-cors'
	});window.fetch(myRequest).then((response)=>{network.status=response.status;network.headers={};
		response.headers.forEach((item,key)=>{if((typeof key==types.string)&&(!!item)){network.headers[key]=item;};}); // Copy Headers
		switch(response.status){case 200: if(response.ok){network.capable=true;};//console.log(response);
		break;case 204: //console.log(Promise.resolve())
		break;case 0: if(typeof network.capable!=types.boolean){network.capable=false;};
			default: // Catch-All HTTP Responses
		}; //
	}).catch((error)=>{console.warn('Main.JS could not fetch network resources from '+(main.base+path)+', cause: '+error);});
};

/* Main.JS Timers */
(function timer(){
	if(main.page.count){main.timers.interval=main.timers.delay/1000;
		main.page.timer=main.page.timer+main.timers.interval||0;if(main.page.focused){main.page.focus=main.page.focus+main.timers.interval||0;}; // Page Timers
		main.session.timer=main.session.timer+main.timers.interval||0;if(main.page.focused){main.session.attention=main.session.attention+main.timers.interval||0;}; //
		main.user.timer=main.user.timer+main.timers.interval||0;if(main.page.focused){main.user.engagement=main.user.engagement+main.timers.interval||0;}; //
	};setTimeout(()=>{ // 
		let timing=performance.getEntriesByType(types.navigation)||window.performance.timing; //
		if(!timing.length){timing.entries=[{type:types.navigation,loadEventEnd:timing.loadEventEnd||parseInt(Date.now())}];}else{timing.entries=timing;}; // 
		if((timing.entries.length)&&(timing.entries[timing.entries.length-1].loadEventEnd>0)){ //
			if(!main.page.count){main.page.count=parseInt(main.page.count)+1||1;main.user.sessions=parseInt(main.user.sessions)+1||1;main.session.count=main.user.sessions;}; //
			main.page.navigation=timing.entries[timing.entries.length-1].type;if((main.page.navigation=types.navigation)&&(main.page.count==1)){main.page.navigation="landing";}; //
		}; //
	timer()},(main.page.count?main.timers.delay:main.timers.delay/10)||500);
	if((!css.loaded)||(!main.font.loaded)){Object.keys(document.styleSheets).forEach(([index])=>{index=parseInt(`${index}`); // Check Stylesheets
		if((!css.loaded)&&(typeof document.styleSheets[index].href==types.string)&&(document.styleSheets[index].href.search(main.base)>-1)){css.loaded=true;main.hydrate.resize.forEach(func=>func());};
		if((!main.font.loaded)&&((performance.getEntriesByType('paint').length>0)||((typeof document.styleSheets[index].href==types.string)&&(document.styleSheets[index].href.search('fonts.googleapis.com')>-1)))){css.remove(attribute.loading);main.font.loaded=true;};
	});};
})();

/* Main.JS Events */
main.js.regex=Object.assign(main.js.regex,{JSON:/([{,]\s*)(\w+)(\s*:)/g,email:/[\w-\.]+@([\w-]+\.)+[a-z][a-z][a-z\s\.$]/g,currency:/(¤|\$|€|£|¥|¢|₺|₹|₽|₩|\bR[1-9]|CHF|ZAR|NOK|USD|AUD|CAD|EUR|GBP|JPY|CNY|RMB|KRW)/u}); // Compile Event Expressions
main.events.gtag=function(){if(window[main.events.config.datalayer]){ // 
	switch(typeof arguments[0]){case "string": window[main.events.config.datalayer].push(arguments);
	break;case "object": //
		switch(Object.keys(arguments).length){case 0: // Ignore (empty)
		break;case 1: window[main.events.config.datalayer].push(arguments[0]);
		break;case 2: window[main.events.config.datalayer].push(arguments[0],arguments[1]);
		break;case 3: window[main.events.config.datalayer].push(arguments[0],arguments[1],arguments[2]);
		break;case 4: window[main.events.config.datalayer].push(arguments[0],arguments[1],arguments[2],arguments[3]);
		}; 
	break;default: // Something Else
	};};
};main.events.sync=function(){let list=[...arguments];
};main.events.add=function(){let names='',number=0,list=[...arguments],ecommerce={};timestamp.now=parseInt(Date.now()); // Flatten Argments 
	list.forEach((event,index)=>{event=`${event}`.trim(); // Foreach String Argment
		switch(index){case 0: actionEvent=false; // Reset Action Event Position
			names=event.replace(regex.safe,''); // Deduplication By Filtered Event Name
			main.events.values[names]=main.events.values[names]||{'event':event,sync:false}; // Create/Get Event Values  
			main.events.values[names]['event']=event; // Update Name (if Deduplicated)
		break;case 1: main.events.values[names].category=event.replace(regex.safe,''); // Set Event Type 
		break;default: // Event Values
			number=Number.parseFloat(event.replace(/[^0-9\.\s\-\+e]/g,'').trim()); // Get Decimal Value 
			if(event.match(regex.email)){event=event.replaceAll(regex.email,'(REDACTED)');console.warn("Main.JS events reducated a possible email address in event data.");}; // Redact Emails
			if((event==='null')||(event==="[object Object]")){console.log("Ignored"); // Ignore Objects
			}else if((/^0$/).test(event)){main.events.values[names].type=types.integer;if((main.events.values[names].value!==0)){delete main.events.values[names].string;main.events.values[names].value=0;main.events.values[names].sync=true;}; // Value is Zero
			}else if(event==='false'){main.events.values[names].type=types.boolean;if((main.events.values[names].boolean!==false)){main.events.values[names].boolean=false;main.events.values[names].sync=true;}; // Value is FALSE
			}else if(event==='true'){main.events.values[names].type=types.boolean;if((main.events.values[names].boolean!==true)){main.events.values[names].boolean=true;main.events.values[names].sync=true;}; // Value is TRUE
				sessionStorage.setItem('main.session',JSON.stringify(main.session));localStorage.setItem('main.user',JSON.stringify(main.user)); // Addtionally Save Session
				//main.events.sync(); // Call dataLayer Synchronisation
			}else if((!Number.isNaN(number))&&(event.charAt(0)!="{")){if((main.events.values[names].value!==number)){main.events.values[names].value=number;}; // Value is Number
				if(event.match(regex.currency)){main.events.values[names].type=types.currency;if((main.events.values[names].string!==event)){main.events.values[names].string=event;main.events.values[names].sync=true;};
				}else if(number!=event){main.events.values[names].type=types.decimal;if((main.events.values[names].string!==event)){main.events.values[names].string=event;main.events.values[names].sync=true;}; // Value has String
				}else{main.events.values[names].type=types.integer;if(main.events.values[names].value!==number){main.events.values[names].sync=true;}; // Value is Integer
				}; // Done Numbers
			}else{if(event.charAt(0)=="{"){try{main.events.values[names].ecommerce=JSON.parse(event.replace(regex.JSON,'$1"$2"$3').replace(/'/g,'"').replace(/,\s*}/,'}'));main.events.values[names].sync=true;} // Parse Ecommerce
					catch{console.warn("Main.JS event "+main.events.values[names].event+" failed to parse ecommerce object");}; // Ecommerce Failed Parse
				}else if((main.events.values[names].action!==event)&&(!actionEvent)){main.events.values[names].action=event;main.events.values[names].sync=true; // 1st Argument is Action [ELSE]
				}else if((main.events.values[names].label!==event)&&(actionEvent)){main.events.values[names].label=event;main.events.values[names].sync=true;}; // 2nd Argument is Label
				actionEvent=true;main.events.values[names].type=types.string; // All Values are Strings
			}; // Done Values
			if(main.events.values[names].sync){main.events.values[names]=Object.assign(main.events.values[names],{timestamp:timestamp.now,user_time_sec:main.user.duration-main.events.values[names].user_time_sec||main.user.duration||0,session_time_sec:main.session.duration-main.events.values[names].session_time_sec||main.session.duration||0,page_time_sec:main.page.duration||0});};
		};
	});
}; 

/* Main.JS Tracking */
document.querySelectorAll('meta[property]').forEach((meta)=>{
	switch(meta.attributes.property.value){case null: // Ignore
	break;case "main.events.config":case "main.events.config.preset": main.events.config.preset=meta.attributes.content.value.toLowerCase();
		if(track.preset[main.events.config.preset]){main.events.config=Object.assign(track.preset[main.events.config.preset],main.events.config);};
	break;case "main.events.config.id": if(main.events.config){main.events.config.id=meta.attributes.content.value||'';};
	break;case "main.events.config.gateway": if(main.events.config){main.events.config.gateway=meta.attributes.content.value||track.preset[main.events.config.preset].gateway;};
	break;case "main.consent.posture": if(main.consent.config){main.consent.config.posture=meta.attributes.content.value||consent.terms.denied;};
	break;case "main.consent.neccessary": if(main.consent.config){main.consent.config.neccessary=meta.attributes.content.value||consent.terms.denied;};
	break;case "main.consent.preset": if(main.consent.config){main.consent.config.preset=meta.attributes.content.value||consent.terms.denied;};
		if(!consent.preset[main.consent.config.preset]){main.consent.config.preset=consent.terms.denied;};
	};
}); // Property Bounds & Defaults
if((main.events.config.id)&&(main.events.config.gateway)){ // Valid Tracking, Create Tag Manager
	if((main.consent.config.preset!=consent.terms.consent)&&( // If Not Consent Mode
		(!!lookup.consent.timezones[browser.locale.timeZone]) // Browser Timezone Matches
		||(!!lookup.consent.timezones[main.user.timezone]) // User Timezone Matches
		||(!!lookup.consent.languages[browser.languages[0]]) // Browser Primary Language Matches
		||(!!lookup.consent.languages[browser.languages[1]]) // Browser Secondary Language Matches
		||(!!lookup.consent.languages[browser.languages[2]]) // Browser Tertiary Language Matches
	)){main.consent.config.preset=consent.terms.consent;}; // Consent Required
	window[main.events.config.datalayer]=window[main.events.config.datalayer]||[]; // Declare DataLayer
	main.events.gtag('consent','default',main.consent.datalayer); // Send Default Consent State
	main.events.gtag(track.datalayer[main.events.config.preset]); // Send Default Consent State
	create.track=window.document.createElement('script'),main.events.config.options+=main.events.config.datalayer!='dataLayer'?'&l='+main.events.config.datalayer:'';create.track.async=true;
	create.track.src=main.events.config.gateway+main.events.config.type+main.events.config.id+main.events.config.options;
	if((window.location.protocol==proto.https)&&(main.user.persistence)){document.head.appendChild(create.track);}; // Inject Tag Manager
	if(typeof gtag!=types.function){gtag=main.events.gtag;}; // Declare Global Gtag Function
};

/* Main.JS Loaded & Cleanup */
localStorage.removeItem('main.session'); 
localStorage.removeItem('main.events.values'); // Clean Outbound Form Submission
sessionStorage.removeItem('main.events.values'); // Clean Session Event Persist
sessionStorage.removeItem('main.page'); // Clean Page Refresh
timestamp.loaded=parseInt(Date.now());
loaded=true;}; // Loading Wrapper

