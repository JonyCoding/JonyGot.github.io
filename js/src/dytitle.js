 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '❌ 404 页面出错了 ~';
         clearTimeout(titleTime);
     }
     else {
         document.title = '🥳 噫，又好惹~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });