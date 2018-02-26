/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve 
 * function signatures and comments starting with 'Edge' to maintain the 
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    //Edge symbol: 'stage'
    (function(symbolName) {
        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
            //$.scrolledIntoView(sym,targetSectionId);
            $.scrolledIntoView(sym, "#section_2");
        });

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'Down-level'
    (function(symbolName) {

    })("Down-level");
    //Edge symbol end:'Down-level'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "solution_diagram_vm1600");