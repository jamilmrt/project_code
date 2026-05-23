

function SetCookie(cookieName, cookieValue, daysToExpire){
    const date  = new Date();

    // Calculate the Expiring time in miliseconds
    date.setTime(date.getTime()+ daysToExpire*24*60*60*1000)
    
    const expires  ="Expires = "+ toString();

    //Store cookie with a secure path

    document.cookie = cookieName + "=" + cookieValue + ";" +  expires +   "; path=/";

    // Exmple usage: a username that expire in 7 days

    SetCookie("jamilmrt", "JamilFdra", 7);

}