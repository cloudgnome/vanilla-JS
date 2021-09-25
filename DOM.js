class DOM{
  constructor(){
    
  }
  query(selector){
    var item = document.querySelector(selector);
    if(item){
      return item;
    }
    else{
      return [];
    }
  }
  queryAll(selector){
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }
}
