const url = require('url');

const myUrl = new URL('https://mgiscrabbleleague.com?user_id=444&email=anselmleo@gmail.com');

//Show href link
console.log(myUrl.href);

//Show Host and ports if any
console.log(myUrl.host);

//Show hostname only
console.log(myUrl.hostname);

//Show query/search 
console.log(myUrl.search);

//Show query/search params
console.log(myUrl.searchParams);

//Show path
console.log(myUrl.pathname);

// See documentation for more...
