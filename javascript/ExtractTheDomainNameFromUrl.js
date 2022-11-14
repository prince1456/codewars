//first Solution
function domainName(url) {
  let mainDomain = url.includes("www") ? url.split(".")[1] : url.split(".")[0];
  return mainDomain.includes("http") ? mainDomain.split("//")[1] : mainDomain;
}

// second solution
/**
 * It takes a url and returns the domain name.
 * @param url - The URL to be parsed.
 * @returns The domain name of the url.
 */
function domainName2(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

// 3rd solution use regex

function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}
domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
