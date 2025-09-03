
        document.getElementById("btn1").addEventListener("click",mypass);
        function mypass(){
            let str = "abcdefghijklmnopqrstuwxyxQWERTYUIOPASDFGHJKLZXCVBNM!@#$()";
            let strlen= str.length;
            let password="";

            for(var i=0;i<=7;i++){
                const idno=Math.floor((Math.random()*strlen));
                const ans=str.charAt(idno);
                password+=ans;
            }
            document.getElementById("demo").innerHTML=password;

        }
