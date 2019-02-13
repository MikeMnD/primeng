"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./progressspinner");
var i2 = require("@angular/common");
var ProgressSpinnerModuleNgFactory = i0.ɵcmf(i1.ProgressSpinnerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.ProgressSpinnerModule, i1.ProgressSpinnerModule, [])]); });
exports.ProgressSpinnerModuleNgFactory = ProgressSpinnerModuleNgFactory;
var styles_ProgressSpinner = [];
var RenderType_ProgressSpinner = i0.ɵcrt({ encapsulation: 2, styles: styles_ProgressSpinner, data: {} });
exports.RenderType_ProgressSpinner = RenderType_ProgressSpinner;
function View_ProgressSpinner_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ui-progress-spinner"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 1, ":svg:svg", [["class", "ui-progress-spinner-svg"], ["viewBox", "25 25 50 50"]], [[4, "animation-duration", null]], null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, ":svg:circle", [["class", "ui-progress-spinner-circle"], ["cx", "50"], ["cy", "50"], ["r", "20"], ["stroke-miterlimit", "10"]], [[1, "fill", 0], [1, "stroke-width", 0]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ui-progress-spinner"; var currVal_1 = _co.styleClass; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.animationDuration; _ck(_v, 3, 0, currVal_3); var currVal_4 = _co.fill; var currVal_5 = _co.strokeWidth; _ck(_v, 4, 0, currVal_4, currVal_5); }); }
exports.View_ProgressSpinner_0 = View_ProgressSpinner_0;
function View_ProgressSpinner_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-progressSpinner", [], null, null, null, View_ProgressSpinner_0, RenderType_ProgressSpinner)), i0.ɵdid(1, 49152, null, 0, i1.ProgressSpinner, [], null, null)], null, null); }
exports.View_ProgressSpinner_Host_0 = View_ProgressSpinner_Host_0;
var ProgressSpinnerNgFactory = i0.ɵccf("p-progressSpinner", i1.ProgressSpinner, View_ProgressSpinner_Host_0, { style: "style", styleClass: "styleClass", strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration" }, {}, []);
exports.ProgressSpinnerNgFactory = ProgressSpinnerNgFactory;
//# sourceMappingURL=progressspinner.ngfactory.js.map