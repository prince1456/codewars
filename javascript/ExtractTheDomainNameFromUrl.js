function domainName(url){
    let mainDomain = url.includes("www") ? url.split('.')[1] : url.split('.')[0]
    return mainDomain.includes("http") ? mainDomain.split('//')[1] : mainDomain
  }


 domainName("http://google.com")
 domainName("http://google.co.jp")
 domainName("www.xakep.ru")
 domainName("https://youtube.com")