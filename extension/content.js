$(function() {


  // SEARCH BOX:
  let search_box_html



  let search_str = "How do I change my locks?";

  const word_section = $(".WordSection1");
  const elements_start = $(".law-level-1").first();

  const elements = elements_start.nextUntil(".line");

  let main_clauses_obj = [];
  elements.each(function() {
    main_clauses_obj.push({"text":$(this).text()});
  });









});
