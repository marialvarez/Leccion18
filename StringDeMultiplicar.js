function stringMultiplicar(n) {
    var res=0;
    var mult="";
    
    for ( var i=1 ; i<=10 ; i++) {
        
        res=n*i;
        mult += n + "x" + i + "=" + res;
        
        if ((i+1)<=10) {
            
            mult += "/";
        }
    }  
     return mult;
}
