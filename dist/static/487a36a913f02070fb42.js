(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{271:function(t,n,e){"use strict";e.r(n);e(44),e(22);var r,o=e(3),c=e(250),d=e(258),l={layout:"incidents",components:{IncidentsHistory:e(257).a,IncidentsPaginator:d.a},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(n){var e,r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=n.params,o=new c.a(e.$axios,e.i18n.locale),t.next=4,o.getIncidentsHistory(r.page);case 4:return d=t.sent,t.abrupt("return",{periods:d.periods,pageInfo:{page:d.page,pageSize:d.page_size,totalPages:d.total_pages}});case 6:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){var t=this.$t.bind(this);return{title:"".concat(t("incidents.incidents-history")," - ").concat(t("incidents.paginator.page")," ").concat(this.pageInfo.page),meta:[{hid:"description",name:"description",content:t("incidents.incidents-history-description")}]}},validate:function(t){var n=t.params;return/^\d+$/.test(n.page)}},h=e(8),component=Object(h.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("incidents-history",{attrs:{periods:this.periods}}),this._v(" "),n("incidents-paginator",{attrs:{info:this.pageInfo}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);