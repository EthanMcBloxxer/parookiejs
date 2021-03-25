// Parookie.js v1.2, by EthanMcBloxxer (MIT License)

var expirationTime = 0; // in seconds, you can edit this, leave as 0 for never, 1 is a good option to make it on just page load
var useSessionStorage = false; // change this to `true` if you want to use SessionStorage instead of a cookie
var whitelist = []; // add values to this, eg ["1", "2"], for each of those values to be the only creatable objects (blank = disabled)
var debug = false; // make this `true` if you want console logs each time an event completes

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
