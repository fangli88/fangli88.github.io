(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[83,138],{697:function(e,n,t){"use strict";t.r(n),t.d(n,"hydratedAdapter",(function(){return c}));var r=t(33),a=t(37),i=t(134),u=t(78),o=t(79);const c={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),i=e.hasM(n),u=new r.a({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,t){const r=new u.a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportPolyline:function(e,n,t){const r=new o.a({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportMultipoint:function(e,n,t){const r=new i.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return r.cache._geVersion=n,r},exportExtent:function(e,n,t){const r=e.hasZ(n),i=e.hasM(n),u=new a.a({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(r){const t=e.getZExtent(n);u.zmin=t.vmin,u.zmax=t.vmax}if(i){const t=e.getMExtent(n);u.mmin=t.vmin,u.mmax=t.vmax}return u.cache._geVersion=n,u}}},790:function(e,n,t){"use strict";t.r(n),t.d(n,"buffer",(function(){return Z})),t.d(n,"clip",(function(){return o})),t.d(n,"contains",(function(){return d})),t.d(n,"convexHull",(function(){return v})),t.d(n,"crosses",(function(){return f})),t.d(n,"cut",(function(){return c})),t.d(n,"densify",(function(){return N})),t.d(n,"difference",(function(){return E})),t.d(n,"disjoint",(function(){return g})),t.d(n,"distance",(function(){return s})),t.d(n,"equals",(function(){return l})),t.d(n,"extendedSpatialReferenceInfo",(function(){return u})),t.d(n,"flipHorizontal",(function(){return D})),t.d(n,"flipVertical",(function(){return H})),t.d(n,"generalize",(function(){return L})),t.d(n,"geodesicArea",(function(){return Y})),t.d(n,"geodesicBuffer",(function(){return I})),t.d(n,"geodesicDensify",(function(){return O})),t.d(n,"geodesicLength",(function(){return j})),t.d(n,"intersect",(function(){return R})),t.d(n,"intersects",(function(){return p})),t.d(n,"isSimple",(function(){return m})),t.d(n,"nearestCoordinate",(function(){return S})),t.d(n,"nearestVertex",(function(){return z})),t.d(n,"nearestVertices",(function(){return _})),t.d(n,"offset",(function(){return P})),t.d(n,"overlaps",(function(){return A})),t.d(n,"planarArea",(function(){return G})),t.d(n,"planarLength",(function(){return X})),t.d(n,"relate",(function(){return x})),t.d(n,"rotate",(function(){return b})),t.d(n,"simplify",(function(){return w})),t.d(n,"symmetricDifference",(function(){return M})),t.d(n,"touches",(function(){return h})),t.d(n,"union",(function(){return V})),t.d(n,"within",(function(){return y}));var r=t(588),a=t(697);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function u(e){return r.a.extendedSpatialReferenceInfo(e)}function o(e,n){return r.a.clip(a.hydratedAdapter,i(e),e,n)}function c(e,n){return r.a.cut(a.hydratedAdapter,i(e),e,n)}function d(e,n){return r.a.contains(a.hydratedAdapter,i(e),e,n)}function f(e,n){return r.a.crosses(a.hydratedAdapter,i(e),e,n)}function s(e,n,t){return r.a.distance(a.hydratedAdapter,i(e),e,n,t)}function l(e,n){return r.a.equals(a.hydratedAdapter,i(e),e,n)}function p(e,n){return r.a.intersects(a.hydratedAdapter,i(e),e,n)}function h(e,n){return r.a.touches(a.hydratedAdapter,i(e),e,n)}function y(e,n){return r.a.within(a.hydratedAdapter,i(e),e,n)}function g(e,n){return r.a.disjoint(a.hydratedAdapter,i(e),e,n)}function A(e,n){return r.a.overlaps(a.hydratedAdapter,i(e),e,n)}function x(e,n,t){return r.a.relate(a.hydratedAdapter,i(e),e,n,t)}function m(e){return r.a.isSimple(a.hydratedAdapter,i(e),e)}function w(e){return r.a.simplify(a.hydratedAdapter,i(e),e)}function v(e,n=!1){return r.a.convexHull(a.hydratedAdapter,i(e),e,n)}function E(e,n){return r.a.difference(a.hydratedAdapter,i(e),e,n)}function M(e,n){return r.a.symmetricDifference(a.hydratedAdapter,i(e),e,n)}function R(e,n){return r.a.intersect(a.hydratedAdapter,i(e),e,n)}function V(e,n=null){return r.a.union(a.hydratedAdapter,i(e),e,n)}function P(e,n,t,u,o,c){return r.a.offset(a.hydratedAdapter,i(e),e,n,t,u,o,c)}function Z(e,n,t,u=!1){return r.a.buffer(a.hydratedAdapter,i(e),e,n,t,u)}function I(e,n,t,u,o,c){return r.a.geodesicBuffer(a.hydratedAdapter,i(e),e,n,t,u,o,c)}function S(e,n,t=!0){return r.a.nearestCoordinate(a.hydratedAdapter,i(e),e,n,t)}function z(e,n){return r.a.nearestVertex(a.hydratedAdapter,i(e),e,n)}function _(e,n,t,u){return r.a.nearestVertices(a.hydratedAdapter,i(e),e,n,t,u)}function J(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function b(e,n,t){var a;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(t=null!=(a=t)?a:J(e)))throw new Error("Illegal Argument Exception");const u=e.constructor.fromJSON(r.a.rotate(e,n,t));return u.spatialReference=i,u}function D(e,n){var t;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(n=null!=(t=n)?t:J(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.a.flipHorizontal(e,n));return i.spatialReference=a,i}function H(e,n){var t;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(n=null!=(t=n)?t:J(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.a.flipVertical(e,n));return i.spatialReference=a,i}function L(e,n,t,u){return r.a.generalize(a.hydratedAdapter,i(e),e,n,t,u)}function N(e,n,t){return r.a.densify(a.hydratedAdapter,i(e),e,n,t)}function O(e,n,t,u=0){return r.a.geodesicDensify(a.hydratedAdapter,i(e),e,n,t,u)}function G(e,n){return r.a.planarArea(a.hydratedAdapter,i(e),e,n)}function X(e,n){return r.a.planarLength(a.hydratedAdapter,i(e),e,n)}function Y(e,n,t){return r.a.geodesicArea(a.hydratedAdapter,i(e),e,n,t)}function j(e,n,t){return r.a.geodesicLength(a.hydratedAdapter,i(e),e,n,t)}}}]);
//# sourceMappingURL=83.ebe9fdf8.chunk.js.map