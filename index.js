// Parookie.js v1.2, by EthanMcBloxxer (MIT License)
exports.cookify = function(expirationTime, useSessionStorage, whitelist, debug) {

if (expirationTime != 0)
{
	expirationTime = expirationTime * 1000;
	var d = new Date();
	expirationTime = new Date(d.getTime() + expirationTime);
	if (debug == true) {console.log("[parookie.js] expirationTime formatted to " + expirationTime)}
}
else
{
	expirationTime = 0;
	if (debug == true) {console.log("[parookie.js] expirationTime formatted to " + expirationTime)}
};

for (let p of new URLSearchParams(window.location.search))
{
	var name = p[0];
	var val = p[1];
	if (whitelist != "" && whitelist.indexOf(name) == -1) {
		if (debug == true) {console.log("[parookie.js] Found '" + name + "'. Skipping... (not whitelisted)")}
		continue;
	}
	if (!useSessionStorage)
	{
		if (expirationTime == 0)
		{
			if (debug == true) {console.log("[parookie.js] Setting cookie " + name + " to " + val)}
			document.cookie = name + "=" + val;
		}
		else
		{
			if (debug == true) {console.log("[parookie.js] Setting cookie " + name + " to " + val + ". It expires on " + expirationTime.toUTCString())}
			document.cookie = name + "=" + val + ";" + "expires=" + expirationTime.toUTCString();
		}
	}
	else
	{
		if (debug == true) {console.log("[parookie.js] Setting sessionStorage object " + name + " to " + val)}
		sessionStorage.setItem(name, val);
	}
}

}
