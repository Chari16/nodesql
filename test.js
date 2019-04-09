first(2,function(firstresult,err){
    if(!err){
        second(firstresult,function(secondresult,err){
            if(!err){
                third(secondresult,function(thirdresult,err){
                    if(!err){
                        console.log(thirdresult);
                    }
                });    
            }
        });    
    }

});





function first(value,callback){
    callback(value+2, false);
}

function second(value,callback){
    callback(value+2, false);
}


function third(value,callback) {
    callback(value+2, false);
}
