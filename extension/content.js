$(function() {


  // SEARCH BOX:
  let search_box = document.createElement("input");  // Create with DOM
  search_box.classList = "search_box";
  $("body").prepend(search_box);



  // let search_str = "How do I change my locks?";

  const word_section = $(".WordSection1");
  const elements_start = $(".law-level-1").first();

  const elements = elements_start.nextUntil(".line");

  let main_clauses_obj = [];
  elements.each(function() {
    main_clauses_obj.push({"text":$(this).text()});
  });

  let fuse = new Fuse(main_clauses_obj, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["text"]
  });

  $(document).keypress(function(event){
	
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      let query = document.getElementById('search_box').innerHTML;
      let result = fuse.search(query);	
      console.log(result);
    }
    
  });

});
