"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./virtualscroller");
var i2 = require("@angular/common");
var i3 = require("@angular/cdk/bidi");
var i4 = require("@angular/cdk/platform");
var i5 = require("@angular/cdk/scrolling");
var i6 = require("../common/shared");
var i7 = require("../../../../node_modules/@angular/cdk/scrolling/typings/index.ngfactory");
var VirtualScrollerModuleNgFactory = i0.ɵcmf(i1.VirtualScrollerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.PlatformModule, i4.PlatformModule, []), i0.ɵmpd(1073742336, i5.ScrollingModule, i5.ScrollingModule, []), i0.ɵmpd(1073742336, i6.SharedModule, i6.SharedModule, []), i0.ɵmpd(1073742336, i1.VirtualScrollerModule, i1.VirtualScrollerModule, [])]); });
exports.VirtualScrollerModuleNgFactory = VirtualScrollerModuleNgFactory;
var styles_VirtualScroller = [];
var RenderType_VirtualScroller = i0.ɵcrt({ encapsulation: 2, styles: styles_VirtualScroller, data: {} });
exports.RenderType_VirtualScroller = RenderType_VirtualScroller;
function View_VirtualScroller_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-virtualscroller-header ui-widget-header ui-corner-top"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
function View_VirtualScroller_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_VirtualScroller_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 5, "li", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "height": 0 }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_VirtualScroller_3)), i0.ɵdid(5, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(6, { $implicit: 0, index: 1, count: 2, first: 3, last: 4, even: 5, odd: 6 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, (_co.itemSize + "px")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _ck(_v, 6, 0, _v.context.$implicit, _v.context.index, _v.context.count, _v.context.first, _v.context.last, _v.context.even, _v.context.odd); var currVal_2 = (_v.context.$implicit ? _co.itemTemplate : _co.loadingItemTemplate); _ck(_v, 5, 0, currVal_1, currVal_2); }, null); }
function View_VirtualScroller_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-virtualscroller-footer ui-widget-header ui-corner-bottom"]], null, null, null, null, null)), i0.ɵncd(null, 1)], null, null); }
function View_VirtualScroller_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { viewPortViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 17, "div", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_VirtualScroller_1)), i0.ɵdid(5, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(6, 0, [["content", 1]], null, 10, "div", [["class", "ui-virtualscroller-content ui-widget-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 9, "ul", [["class", "ui-virtualscroller-list"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 8, "cdk-virtual-scroll-viewport", [["class", "cdk-virtual-scroll-viewport"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], [[null, "scrolledIndexChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scrolledIndexChange" === en)) {
        var pd_0 = (_co.onScrollIndexChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_CdkVirtualScrollViewport_0, i7.RenderType_CdkVirtualScrollViewport)), i0.ɵprd(6144, null, i5.CdkScrollable, null, [i5.CdkVirtualScrollViewport]), i0.ɵdid(10, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(11, { "height": 0 }), i0.ɵdid(12, 540672, null, 0, i5.CdkFixedSizeVirtualScroll, [], { itemSize: [0, "itemSize"] }, null), i0.ɵprd(1024, null, i5.VIRTUAL_SCROLL_STRATEGY, i5._fixedSizeVirtualScrollStrategyFactory, [i5.CdkFixedSizeVirtualScroll]), i0.ɵdid(14, 245760, [[1, 4], ["viewport", 4]], 0, i5.CdkVirtualScrollViewport, [i0.ElementRef, i0.ChangeDetectorRef, i0.NgZone, [2, i5.VIRTUAL_SCROLL_STRATEGY], [2, i3.Directionality], i5.ScrollDispatcher], null, { scrolledIndexChange: "scrolledIndexChange" }), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_VirtualScroller_2)), i0.ɵdid(16, 409600, null, 0, i5.CdkVirtualForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers, [1, i5.CdkVirtualScrollViewport], i0.NgZone], { cdkVirtualForOf: [0, "cdkVirtualForOf"], cdkVirtualForTrackBy: [1, "cdkVirtualForTrackBy"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_VirtualScroller_4)), i0.ɵdid(18, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-virtualscroller ui-widget"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.header; _ck(_v, 5, 0, currVal_3); var currVal_6 = _ck(_v, 11, 0, _co.scrollHeight); _ck(_v, 10, 0, currVal_6); var currVal_7 = _co.itemSize; _ck(_v, 12, 0, currVal_7); _ck(_v, 14, 0); var currVal_8 = _co.value; var currVal_9 = _co.trackBy; _ck(_v, 16, 0, currVal_8, currVal_9); var currVal_10 = _co.footer; _ck(_v, 18, 0, currVal_10); }, function (_ck, _v) { var currVal_4 = (i0.ɵnov(_v, 14).orientation === "horizontal"); var currVal_5 = (i0.ɵnov(_v, 14).orientation !== "horizontal"); _ck(_v, 8, 0, currVal_4, currVal_5); }); }
exports.View_VirtualScroller_0 = View_VirtualScroller_0;
function View_VirtualScroller_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "p-virtualScroller", [], null, null, null, View_VirtualScroller_0, RenderType_VirtualScroller)), i0.ɵdid(1, 1097728, null, 3, i1.VirtualScroller, [i0.ElementRef], null, null), i0.ɵqud(335544320, 1, { header: 0 }), i0.ɵqud(335544320, 2, { footer: 0 }), i0.ɵqud(603979776, 3, { templates: 1 })], null, null); }
exports.View_VirtualScroller_Host_0 = View_VirtualScroller_Host_0;
var VirtualScrollerNgFactory = i0.ɵccf("p-virtualScroller", i1.VirtualScroller, View_VirtualScroller_Host_0, { itemSize: "itemSize", style: "style", styleClass: "styleClass", scrollHeight: "scrollHeight", lazy: "lazy", cache: "cache", rows: "rows", first: "first", trackBy: "trackBy", totalRecords: "totalRecords", value: "value" }, { onLazyLoad: "onLazyLoad" }, ["p-header", "p-footer"]);
exports.VirtualScrollerNgFactory = VirtualScrollerNgFactory;
//# sourceMappingURL=virtualscroller.ngfactory.js.map