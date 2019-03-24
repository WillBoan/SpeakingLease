$(function() {


  let search_str = "How do I change my locks?";

  const word_section = $(".WordSection1");
  const elements_start = $(".law-level-1").first();
  // console.log(elements_start.text());
  const elements = elements_start.nextUntil(".line");
  // console.log(elements.length);
  let main_clauses_obj = [];
  elements.each(function() {
    main_clauses_obj.push({"text":$(this).text()});
  });
  console.log(main_clauses_obj);
  console.log(main_clauses_obj[1]);









});
