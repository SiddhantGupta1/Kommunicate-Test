function getUrlParameterValue(url, parameter) {
    //This is a very simple way of doing it using URLSearchParams()
    
    /*const urlParams = new URLSearchParams(url);
    console.log(urlParams.get(parameter)); */

    //This is a way of solving the question using strings
    let res="",str="",j=0,i;
    const n=url.length;
    const m=parameter.length;
    for(i=0;i<n;i++)
    {
        str=str+url[i];
        res=res+parameter[j];
        if(j==m)
        {
            break;
        }
        if(str==res)
        {
            j++;
        }
        else
        {
            j=0;
            res="";
            str="";
        }
    }

    res="";
    i++;
    while(url[i]!='&')
    {
        res=res+url[i];
        i++;
    }
    return res;
}

var url="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var parameter="utm_medium";

console.log( getUrlParameterValue(url,parameter) )