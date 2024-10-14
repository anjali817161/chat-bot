var data= {
    chatinit:{
        title:["Hello <span class='emoji'>&#128075;</span>","I am ERA","How can I help you?"],
        options:["Movies <span class='emoji'> &#128250; </span>","News","Shopping <span class='emoji'> &#128090; </span>","Music <span class='emoji'> &#127925; </span>"]
    },
    movies:{
        title:["Please select Category"],
        options:['hollywood', 'Bollywood','Web series','others'],
        url:{
            more:"https://www.netflix.com/in/",
            link:["https://www.hotstar.com/in/home?ref=%2Fin","https://www.netflix.com/in/"]
        }
    },
    news:{
        title:["Today's Top 5 Headlines"],
        options:["After Rolls Royce, Rs 2.5 Crore Diamond Watch Seized From Tobacco Baron",
        "Everyone Should Fall In Place: Ex-India Star On Kishan-Iyer Contract Row.",
        "NATA 2024: Registrations Begin For National Aptitude Test in Architecture.",
        "Around The World With Rashmika Mandanna - Japan Edition."],
        url:{
            more:"https://epaper.livehindustan.com/",
            link:["https://epaper.livehindustan.com/","https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa"]
        }
    },
    shopping:{
        title:["Please choose shopping category <span class='emoji'>&#128090;</span>"],
        options:['Electronics','Beauty products','Dresses'],
        url:{
            more:"https://www.amazon.in/b?node=1953602031",
            link:["https://www.flipkart.com/search?q=high+heels+shoes+for+girls&marketplace=FLIPKART&as-show=on&pageUID=1708001234831","https://www.flipkart.in","https://www.meesho.com/search?q=Formal%20tops%20and%20shirt%20for%20girls&searchType=manual&searchIdentifier=text_search","https://www.nykaafashion.com/"]
        }
    },
    music:{
         title:["These are some latest songs <span class='emoji'>&#127925;</span>"],
         options:["song 1","song 2","song 3","song 4","song 5"],
         url:{
            more:"https://open.spotify.com",
            link:["https://open.spotify.com","https://www.jiosaavn.com"]
         }        
    },
    hollywood:{
        title:["These are some latest Hollywood movies to watch","Click on movies to know more"],
         options:["Movie 1","Movie 2","Movie 3","Movie 4","Movie 5"],
         url:{
            more:"https://www.netflix.com/in/",
            link:["https://www.hotstar.com/in/home?ref=%2Fin","https://www.netflix.com/in/"]
         }
    },
    bollywood:{
        title:["These are some latest Bollywood movies to watch","Click on movies to know more"],
         options:["Movie 1","Movie 2","Movie 3","Movie 4","Movie 5"],
         url:{
            more:"https://www.netflix.com/in/",
            link:["https://www.hotstar.com/in/home?ref=%2Fin","https://www.netflix.com/in/"]
         }
    },
    web: {
        title:["Here are some latest web series to watch"],
         options:["web series 1","web series 2","web series 3","web series 4","web series 5"],
         url:{
            more:"https://www.netflix.com/in/",
            link:["https://www.hotstar.com/in/home?ref=%2Fin","https://www.netflix.com/in/"]
         }
    },
    others:{
        title:["Here are some more options for you"],
         options:["Youtube","Netflix","Amazon Prime","Hot Star"],
         url:{
            more:"https://www.youtube.com/",
            link:["https://www.hotstar.com/in/home?ref=%2Fin","https://www.netflix.com/in/"]
         }
    }
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;
function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='ASK ERA'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload()
    } 
}
function initChat(){
    j=0;
    cbot.innerHTML='';
    for (var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML=data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}
 function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp = '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click",handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
 }

 function handleOpt(){
    console.log(this);
    var str = this.innerText;
    var textArr =str.split(" ");
    var findText = textArr[0];
    document.querySelectorAll(".opt").forEach(el =>{
        el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+findText+'</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
 }

function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        var elm=document.createElement("p");
        elm.innerHTML=title[i];
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
    }

    const isObjectEmpty = (obj)=>{
        return JSON.stringify(obj)==="{}";
    }
    if(isObjectEmpty(url)){
        console.log("having more options");
        showOptions(options);
    }
    else{
        console.log("end result");
        handleOptions(options,url);
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt =document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }

    var opt= document.createElement("span");
    var inp='<a class="m-link" href="'+url.more+'">'+'see more</a>';

    const isObjectEmpty = (obj)=>{
        return JSON.stringify(obj)==="{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}
function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}
