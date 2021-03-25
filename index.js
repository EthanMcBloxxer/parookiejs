// Parookie.js v1, by EthanMcBloxxer (MIT License)
exports.cookify = function(expirationTime, debug) {

if (expirationTime != 0)
{
	expirationTime = expirationTime * 1000;
	var d = new Date();
	expirationTime = new Date(d.getTime() + expirationTime);
	if (debug == true) {console.log("expirationTime formatted to " + expirationTime)}
}
else
{
	expirationTime = 0;
	if (debug == true) {console.log("expirationTime formatted to " + expirationTime)}
};

for (let p of new URLSearchParams(window.location.search))
{
	if (debug == true) {console.log("Found a parameter")}
	var name = p[0];
	var val = p[1];
	if (expirationTime == 0)
	{
		if (debug == true) {console.log("Setting cookie " + name + " to " + val)}
		document.cookie = name + "=" + val;
	}
	else
	{
		if (debug == true) {console.log("Setting cookie " + name + " to " + val + ". It expires on " + expirationTime.toUTCString())}
		document.cookie = name + "=" + val + ";" + "expires=" + expirationTime.toUTCString();
	}
}

}
