function longestsubstring(s){
    //sliding window approach
  
    if(!s){
      return 0;
    }
    let start = 0;
    let end = 0;
    let maxlength = 0;
  
    const uniqueset = new Set();
  
    while(end  < s.length){
  
      if(!uniqueset.has(s[end])){
        uniqueset.add(s[end]);
        end++;
        maxlength = Math.max(maxlength,uniqueset.size);
      }else{
        uniqueset.delete(s[start]);
        start++;
      }
    }
    return maxlength;
  
  }
  
  const res = longestsubstring("bbbbbb");
  console.log(res);