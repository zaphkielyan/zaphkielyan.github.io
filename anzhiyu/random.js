var posts=["2023/07/30/One-NewBook/","2023/08/08/The-Cook/","2023/09/10/University-1/","2023/09/24/University-2/","2023/10/16/University-3/","2023/11/06/University-4/","2023/12/08/university-4-5/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};