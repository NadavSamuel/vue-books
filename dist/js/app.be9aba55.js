(function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],m=0,p=[];m<a.length;m++)s=a[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,a=1;a<o.length;a++){var u=o[a];0!==n[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-books/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2603:function(e,t,o){"use strict";var r=o("81a7"),n=o.n(r);n.a},"3b54":function(e,t,o){"use strict";var r=o("7dcc"),n=o.n(r);n.a},"41f8":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("user-msg"),o("div",{staticClass:"flex align-center justify-between space-between",attrs:{id:"nav"}},[o("h2",[o("router-link",{attrs:{to:"/"}},[e._v("Books 'R' Us")])],1),o("div",{staticClass:"flex"},[o("div",[o("router-link",{attrs:{to:"/addBook"}},[e._v("Add Book| ")])],1),o("div",[o("router-link",{attrs:{to:"/userProfile"}},[e._v("User Profile| ")])],1),o("div",[o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])]),o("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.uMsg?o("section",{staticClass:"user-msg",class:e.tpyeClass},[o("p",[e._v(e._s(e.uMsg.msg))]),e.uMsg.bookId?o("p",[o("router-link",{attrs:{to:"/book/"+e.uMsg.bookId}},[e._v("Go to book page ")])],1):e._e()]):e._e()},a=[],u={data:function(){return{isShown:!1}},updated:function(){var e=this;this.$store.getters.msgToShow&&setTimeout((function(){e.$store.dispatch({type:"clearMsg"})}),2500)},computed:{msgToShow:function(){if(this.$store.state.shouldMsgShow){var e=this.$store.getters.msgData;return e}},uMsg:function(){return this.$store.getters.msgToShow},tpyeClass:function(){return"success"===this.uMsg.type?"success":"faliure"}}},c=u,l=o("2877"),m=Object(l["a"])(c,s,a,!1,null,null,null),p=m.exports,d={components:{UserMsg:p}},v=d,h=(o("5c0b"),Object(l["a"])(v,n,i,!1,null,null,null)),g=h.exports,f=o("8c4f"),b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"book-app main-container"},[o("h1",[e._v("Books R Us!")]),o("BookFilter",{on:{filtered:e.setFilter}}),o("BookList",{attrs:{books:e.booksToShow},on:{onDeleteBook:e.onDeleteBook}})],1)},k=[],w=(o("96cf"),o("1da1")),y=(o("4de4"),o("7db0"),o("c740"),o("caad"),o("a434"),o("d3b7"),o("2532"),o("2909"));function C(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function x(e,t){localStorage[e]=JSON.stringify(t)}var R={loadFromStorage:C,saveToStorage:x},B={query:O,save:q,remove:j,getById:P,reviewAdd:$,reviewDelete:E},S=[{id:"OXeMG8wNskc",title:"metus hendrerit",subtitle:"mi est eros convallis auctor arcu dapibus himenaeos",authors:["Barbara Cartland"],publishedDate:1999,description:"placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",pageCount:713,categories:["Computers","Hack"],reviews:[{id:"1g434",by:"Chris Potter",rate:5,txt:"Great fkin BOKK!!!!!"}],thumbnail:"http://coding-academy.org/books-photos/20.jpg",language:"en",listPrice:{amount:109,currencyCode:"EUR",isOnSale:!1}},{id:"JYOJa2NpSCq",title:"morbi",subtitle:"lorem euismod dictumst inceptos mi",authors:["Barbara Cartland"],publishedDate:1978,description:"aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",pageCount:129,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/14.jpg",language:"sp",listPrice:{amount:44,currencyCode:"EUR",isOnSale:!0}},{id:"1y0Oqts35DQ",title:"at viverra venenatis",subtitle:"gravida libero facilisis rhoncus urna etiam",authors:["Dr. Seuss"],publishedDate:1999,description:"lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",pageCount:972,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/2.jpg",language:"he",listPrice:{amount:108,currencyCode:"ILS",isOnSale:!1}},{id:"kSnfIJyikTP",title:"dictum",subtitle:"augue eu consectetur class curabitur conubia ligula in ullamcorper",authors:["Danielle Steel"],publishedDate:1978,description:"interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",pageCount:303,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/16.jpg",language:"en",listPrice:{amount:30,currencyCode:"EUR",isOnSale:!0}},{id:"f4iuVmbuKCC",title:"sem himenaeos aptent",subtitle:"interdum per habitasse luctus purus est",authors:["Dr. Seuss"],publishedDate:2011,description:"et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",pageCount:337,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/12.jpg",language:"sp",listPrice:{amount:19,currencyCode:"USD",isOnSale:!1}},{id:"U2rfZO6oBZf",title:"mi ante posuere",subtitle:"sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",authors:["Leo Tolstoy"],publishedDate:1978,description:"senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",pageCount:748,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/1.jpg",language:"en",listPrice:{amount:91,currencyCode:"USD",isOnSale:!0}},{id:"xI0wrXaaAcq",title:"non",subtitle:"leo tortor per dapibus mattis ut conubia porttitor ligula viverra",authors:["Leo Tolstoy"],publishedDate:2011,description:"nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",pageCount:65,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/14.jpg",language:"he",listPrice:{amount:90,currencyCode:"USD",isOnSale:!1}},{id:"9laHCEdSpFy",title:"tristique",subtitle:"consectetur a eu tincidunt condimentum amet nisi",authors:["Dr. Seuss"],publishedDate:1999,description:"magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",pageCount:299,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/11.jpg",language:"he",listPrice:{amount:176,currencyCode:"EUR",isOnSale:!1}},{id:"nGhVwZvGCGp",title:"urna ornare gravida",subtitle:"sem vestibulum semper convallis pharetra tempor himenaeos ut",authors:["Jin Yong"],publishedDate:2011,description:"porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",pageCount:803,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/10.jpg",language:"sp",listPrice:{amount:116,currencyCode:"USD",isOnSale:!0}},{id:"Q8Q9Lsd03BD",title:"consequat neque volutpat",subtitle:"vel quis taciti fermentum feugiat ullamcorper curae praesent",authors:["Dr. Seuss"],publishedDate:1978,description:"curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",pageCount:891,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/5.jpg",language:"en",listPrice:{amount:145,currencyCode:"EUR",isOnSale:!1}},{id:"bd7a76kARao",title:"risus",subtitle:"pretium bibendum pharetra curabitur quisque dictumst",authors:["Danielle Steel"],publishedDate:2018,description:"auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",pageCount:86,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/16.jpg",language:"sp",listPrice:{amount:157,currencyCode:"ILS",isOnSale:!0}},{id:"qKyG0vqeO3e",title:"interdum etiam vulputate",subtitle:"velit sapien eget tincidunt nunc tortor",authors:["Danielle Steel"],publishedDate:2018,description:"aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",pageCount:882,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/17.jpg",language:"sp",listPrice:{amount:57,currencyCode:"USD",isOnSale:!0}},{id:"2RvT48ZNInj",title:"sagittis justo",subtitle:"etiam primis proin praesent placerat nisi fermentum nisi",authors:["Agatha Christie"],publishedDate:2011,description:"nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",pageCount:598,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/8.jpg",language:"en",listPrice:{amount:167,currencyCode:"ILS",isOnSale:!1}},{id:"5z2s9pDXAYj",title:"quam ullamcorper himenaeos",subtitle:"ut placerat eu dapibus sapien sodales laoreet",authors:["Danielle Steel"],publishedDate:1999,description:"etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",pageCount:608,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/3.jpg",language:"he",listPrice:{amount:150,currencyCode:"USD",isOnSale:!0}},{id:"zBZu5cDEWha",title:"quis",subtitle:"suscipit turpis etiam turpis libero lobortis",authors:["Jin Yong"],publishedDate:2011,description:"etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",pageCount:583,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/6.jpg",language:"en",listPrice:{amount:58,currencyCode:"ILS",isOnSale:!0}},{id:"aOI7tQuPZ2f",title:"aliquam aliquet dapibus",subtitle:"neque eu purus euismod placerat adipiscing odio egestas consequat",authors:["Leo Tolstoy"],publishedDate:2011,description:"dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",pageCount:497,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/7.jpg",language:"en",listPrice:{amount:78,currencyCode:"USD",isOnSale:!1}},{id:"WBooB82Uvwu",title:"class",subtitle:"elit enim ultricies amet imperdiet a molestie class elementum venenatis",authors:["Danielle Steel"],publishedDate:1999,description:"rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",pageCount:804,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/10.jpg",language:"en",listPrice:{amount:118,currencyCode:"ILS",isOnSale:!1}},{id:"xm1z5bbZjlS",title:"vitae",subtitle:"class habitant at commodo semper ligula a bibendum",authors:["Leo Tolstoy"],publishedDate:1999,description:"himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",pageCount:231,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/12.jpg",language:"he",listPrice:{amount:60,currencyCode:"EUR",isOnSale:!1}},{id:"u3j6QIKLlJb",title:"rhoncus vivamus",subtitle:"nullam class risus amet senectus scelerisque etiam curabitur",authors:["Agatha Christie"],publishedDate:1978,description:"torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",pageCount:652,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/20.jpg",language:"he",listPrice:{amount:110,currencyCode:"USD",isOnSale:!0}},{id:"vxYYYdVlEH3",title:"donec mi ullamcorper",subtitle:"varius malesuada augue molestie sollicitudin faucibus mi eu tempus",authors:["William Shakespeare"],publishedDate:2011,description:"aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",pageCount:904,categories:["Computers","Hack"],reviews:[],thumbnail:"http://coding-academy.org/books-photos/2.jpg",language:"sp",listPrice:{amount:186,currencyCode:"ILS",isOnSale:!0}}],_="books",D=A();function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=D;if(e){var o=e.title;t=D.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}))}return Promise.resolve(Object(y["a"])(t))}function P(e){var t=D.find((function(t){return t.id===e}));return Promise.resolve(t)}function j(e){var t=D.findIndex((function(t){return t.id===e}));return D.splice(t,1),R.saveToStorage(_,D),Promise.resolve()}function q(e){if(e.id){var t=D.findIndex((function(t){return t.id===e.id}));D.splice(t,1,e)}else e.id=F(),D.push(e);return R.saveToStorage(_,D),Promise.resolve(e)}function $(e,t){return I.apply(this,arguments)}function I(){return I=Object(w["a"])(regeneratorRuntime.mark((function e(t,o){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:r=e.sent,o.id=F(),r.reviews.unshift(o),q(r);case 6:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function E(e,t){return T.apply(this,arguments)}function T(){return T=Object(w["a"])(regeneratorRuntime.mark((function e(t,o){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:r=e.sent,r.reviews=r.reviews.filter((function(e){return e.id!==o})),q(r);case 5:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function A(){var e=R.loadFromStorage(_);return e&&e.length||(e=S),R.saveToStorage(_,e),e}function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}var U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"book-list"},[o("ul",{staticClass:"clean-list card-grid"},e._l(e.books,(function(t){return o("li",{key:t.id,staticClass:"book-in-list "},[o("BookPreview",{attrs:{book:t},on:{onDeleteBook:e.onDeleteBook}})],1)})),0)])},L=[],N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.book?o("article",{staticClass:"book-preview flex column justify-center align-center"},[o("button",{staticClass:"align-self-start",on:{click:e.onDeleteBook}},[e._v("X")]),o("h3",[e._v(e._s(e.book.title))]),o("book-img",{attrs:{bookImgUrl:e.bookImg,isOnSale:e.book.listPrice.isOnSale}}),o("p",[e._v("by "+e._s(e.bookAuthor))]),o("span",[e._v(e._s(e.formatedPrice))]),o("router-link",{attrs:{to:"/book/"+e.book.id}},[e._v("Book page")])],1):e._e()},M=[],H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.bookImgUrl?o("div",{staticClass:"img-wrapper flex justify-center"},[e.isOnSale?o("div",{staticClass:"ribbon-wrapper"},[o("div",{staticClass:"ribbon"})]):e._e(),o("img",{attrs:{src:e.bookImgUrl}})]):e._e()},J=[],Y={props:["bookImgUrl","isOnSale"],name:"BookImg"},G=Y,Z=Object(l["a"])(G,H,J,!1,null,null,null),z=Z.exports,K={props:["book"],created:function(){},methods:{onDeleteBook:function(){this.$emit("onDeleteBook",this.book.id),this.$store.dispatch({type:"setReviewDeletedSuccess",msgData:{msg:"Book removed succssfully!",type:"success"}})}},computed:{bookAuthor:function(){return this.book.authors[0]},formatedPrice:function(){return new Intl.NumberFormat(this.book.listPrice.currencyCode,{style:"currency",currency:this.book.listPrice.currencyCode}).format(this.book.listPrice.amount)},bookImg:function(){return this.book.thumbnail}},components:{BookImg:z}},Q=K,X=(o("ef40"),Object(l["a"])(Q,N,M,!1,null,null,null)),V=X.exports,W={props:["books"],methods:{onDeleteBook:function(e){this.$emit("onDeleteBook",e)}},components:{BookPreview:V}},ee=W,te=Object(l["a"])(ee,U,L,!1,null,null,null),oe=te.exports,re=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"book-filter "},[o("h3",[e._v("Filter")]),o("form",{staticClass:"column-layout",on:{input:e.emitFilter}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.txt,expression:"filterBy.txt"}],attrs:{type:"text",placeholder:"Enter book name"},domProps:{value:e.filterBy.txt},on:{input:function(t){t.target.composing||e.$set(e.filterBy,"txt",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.minPrice,expression:"filterBy.minPrice"}],attrs:{type:"number",placeholder:"Enter minimum price"},domProps:{value:e.filterBy.minPrice},on:{input:function(t){t.target.composing||e.$set(e.filterBy,"minPrice",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.maxPrice,expression:"filterBy.maxPrice"}],attrs:{type:"number",placeholder:"Enter maximum price"},domProps:{value:e.filterBy.maxPrice},on:{input:function(t){t.target.composing||e.$set(e.filterBy,"maxPrice",t.target.value)}}})])])},ne=[],ie={name:"BookFilter",data:function(){return{filterBy:{txt:"",minPrice:null,maxPrice:null}}},methods:{emitFilter:function(){this.$emit("filtered",JSON.parse(JSON.stringify(this.filterBy)))}}},se=ie,ae=Object(l["a"])(se,re,ne,!1,null,null,null),ue=ae.exports,ce={name:"BookApp",data:function(){return{books:[],filterBy:null}},created:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadBooks();case 1:case"end":return t.stop()}}),t)})))()},computed:{booksToShow:function(){return this.$store.getters.booksToShow}},methods:{setFilter:function(e){this.$store.commit({type:"setBooksFilterBy",filterBy:e})},loadBooks:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch({type:"loadBooks"});case 1:case"end":return t.stop()}}),t)})))()},onDeleteBook:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t.$store.dispatch({type:"removeBook",id:e});case 1:case"end":return o.stop()}}),o)})))()}},components:{BookList:oe,BookFilter:ue}},le=ce,me=Object(l["a"])(le,b,k,!1,null,null,null),pe=me.exports,de=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.book?o("section",{staticClass:"book-details main-container"},[o("h1",{staticClass:"p30"},[e._v(e._s(e.book.title))]),o("article",{staticClass:"details column-layout"},[o("book-img",{attrs:{bookImgUrl:e.bookImg,isOnSale:e.book.listPrice.isOnSale}}),o("h2",[e._v(" By:"+e._s(e.bookAuthor))]),o("ul",{staticClass:"clean-list"},[o("li",[e._v(e._s(e.determinReadingLvl))]),o("li",[e._v("Publish"+e._s(e.determinBookSeniority))]),o("li",{class:e.priceClass},[e._v("Price:"+e._s(e.formatPrice))])]),o("LongText",{class:{shortText:e.shortText},attrs:{text:e.book.description},on:{toggleShortText:e.toggleShortText}}),o("button",{on:{click:e.toggleEditModal}},[e._v(" Edit")]),o("reviews",{attrs:{bookReviews:e.book.reviews},on:{updateReviews:e.onAddReview,onDeleteReview:e.onDeleteReview}})],1)]):e._e()},ve=[],he=(o("a15b"),o("25f0"),new r["a"]),ge=he,fe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"long-text",on:{click:e.toggleShortText}},[e._v(" "+e._s(e.text)+" ")])},be=[],ke={name:"LongText",props:["text"],methods:{toggleShortText:function(){this.$emit("toggleShortText")}}},we=ke,ye=Object(l["a"])(we,fe,be,!1,null,null,null),Ce=ye.exports,xe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"reviews column-layout"},[o("add-review",{on:{onReviewAdd:e.onReviewAdd}}),o("review-list",{attrs:{reviews:e.bookReviews},on:{onDeleteReview:e.onDeleteReview}})],1)},Re=[],Be=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.reviews[0]?o("ul",{staticClass:"review-list clean-list review-grid "},[o("h1",[e._v(" Reviews for this book")]),e._l(e.reviews,(function(t){return o("book-review",{key:t.id,attrs:{review:t},on:{onDeleteReview:e.onDeleteReview}})}))],2):o("h2",{staticClass:"p60"},[e._v("No reviews for this book yet")])},Se=[],_e=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[o("li",{directives:[{name:"enter",rawName:"v-enter"}],staticClass:"review column-layout"},[o("button",{staticClass:"align-self-start",on:{click:e.onDeleteReview}},[e._v("X")]),o("h2",[e._v("By "+e._s(e.review.by))]),o("stars",{attrs:{rate:e.rate,isReadyReview:!0}}),e._v(" >"),o("br"),o("span",{staticClass:"align-self-start"},[e._v("Read at "+e._s(e.review.date))]),o("p",[e._v(e._s(e.review.txt))])],1)])},De=[],Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.rate?o("div",{staticClass:"stars",class:e.cursorPointer},e._l(5,(function(t){return o("span",{key:t,on:{click:function(o){return e.onChangeRate(t)}}},[e._v(e._s(t<=e.stars?"★":"☆"))])})),0):e._e()},Pe=[],je={name:"Stars",props:["rate","isReadyReview"],data:function(){return{stars:null,maxRate:5,fullStar:"&#x2605",blankStar:"&#x2605"}},created:function(){this.stars=this.rate},computed:{cursorPointer:function(){if(!this.isReadyReview)return"cursor-pointer"}},methods:{onChangeRate:function(e){this.isReadyReview||(this.stars=e)}},watch:{stars:function(e,t){this.$emit("changeRate",e)}}},qe=je,$e=Object(l["a"])(qe,Oe,Pe,!1,null,null,null),Ie=$e.exports,Ee={name:"BookReview",props:["review"],data:function(){return{rate:null}},created:function(){this.rate=this.review.rate},methods:{onDeleteReview:function(){this.$emit("onDeleteReview",this.review.id)}},components:{Stars:Ie}},Te=Ee,Ae=Object(l["a"])(Te,_e,De,!1,null,null,null),Fe=Ae.exports,Ue={props:["reviews"],methods:{onDeleteReview:function(e){this.$emit("onDeleteReview",e)}},components:{BookReview:Fe}},Le=Ue,Ne=Object(l["a"])(Le,Be,Se,!1,null,null,null),Me=Ne.exports,He=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"add-review"},[o("h4",[e._v("What did you think?")]),o("form",{staticClass:"column-layout",on:{submit:function(t){return t.preventDefault(),e.onSendReview(t)}}},[o("div",{staticClass:" flex space-between"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.review.by,expression:"review.by"}],ref:"input",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:e.review.by},on:{input:function(t){t.target.composing||e.$set(e.review,"by",t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.review.date,expression:"review.date"}],attrs:{type:"date"},domProps:{value:e.review.date},on:{input:function(t){t.target.composing||e.$set(e.review,"date",t.target.value)}}}),o("stars",{attrs:{rate:e.review.rate},on:{changeRate:e.changeRate}})],1),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.txt,expression:"review.txt"}],attrs:{placeholder:"Enter your opinion"},domProps:{value:e.review.txt},on:{input:function(t){t.target.composing||e.$set(e.review,"txt",t.target.value)}}}),e._v(" "),o("button",[e._v("Send")])])])},Je=[],Ye={date:function(){return{review:null}},created:function(){this.setEmptyReview()},mounted:function(){this.focusInput()},methods:{onSendReview:function(){this.$emit("onReviewAdd",this.review),this.setEmptyReview()},changeRate:function(e){this.review.rate=e},focusInput:function(){this.$refs.input.focus()},setEmptyReview:function(){this.review={by:"",rate:3,txt:"",date:""}}},components:{Stars:Ie}},Ge=Ye,Ze=Object(l["a"])(Ge,He,Je,!1,null,null,null),ze=Ze.exports,Ke={name:"reviews",props:["bookReviews"],created:function(){},components:{ReviewList:Me,AddReview:ze},methods:{onReviewAdd:function(e){this.$emit("updateReviews",e)},onDeleteReview:function(e){this.$emit("onDeleteReview",e)}}},Qe=Ke,Xe=Object(l["a"])(Qe,xe,Re,!1,null,null,null),Ve=Xe.exports,We={name:"BookDetails",data:function(){return{book:null,shortText:!1}},created:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadBook();case 1:case"end":return t.stop()}}),t)})))()},computed:{bookAuthor:function(){return 1===this.book.authors.length?this.book.authors[0]:this.book.authors.join(",")},formatPrice:function(){return new Intl.NumberFormat(this.book.listPrice.currencyCode,{style:"currency",currency:this.book.listPrice.currencyCode}).format(this.book.listPrice.amount)},bookImg:function(){return this.book.thumbnail},determinReadingLvl:function(){var e=this.book,t=function(){return e.pageCount>500?" - Long Reading":e.pageCount>200&&e.pageCount<=499?" - Descent Reading":e.pageCount<100?" - Easy Reading":""};return e.pageCount.toString()+t()},determinBookSeniority:function(){var e=this.book,t=function(){var t=new Date,o=t.getFullYear();return o-e.publishedDate>10?" - Veteran Book":o-e.publishedDate<=1?" - New Book":""};return e.publishedDate+t()},priceClass:function(){var e=this.book.listPrice.amount;return{expensive:e>=150,cheap:e<=20}}},methods:{loadBook:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.$route.params.bookId,t.next=3,B.getById(o);case 3:r=t.sent,e.book=r;case 5:case"end":return t.stop()}}),t)})))()},toggleShortText:function(){this.shortText=!this.shortText},onAddReview:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,B.reviewAdd(t.book.id,e);case 3:return o.next=5,t.loadBook();case 5:t.$store.dispatch({type:"setReviewAddedSuccess",msgData:{msg:"Review added succssfully!",type:"success"}}),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),ge.$emit("showMsg",{msg:"OOPS! Somthing went wrong",type:"faliure"});case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()},onDeleteReview:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,B.reviewDelete(t.book.id,e);case 3:return o.next=5,t.loadBook();case 5:t.$store.dispatch({type:"setReviewDeletedSuccess",msgData:{msg:"Review removed succssfully!",type:"success"}}),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),ge.$emit("showMsg",{msg:"OOPS! Somthing went wrong",type:"faliure"});case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()}},components:{LongText:Ce,BookImg:z,Reviews:Ve}},et=We,tt=(o("2603"),Object(l["a"])(et,de,ve,!1,null,"28d20036",null)),ot=tt.exports,rt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"add-book-container main-container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookName,expression:"bookName"}],ref:"input",attrs:{list:"books",type:"text",placeholder:"Enter book name"},domProps:{value:e.bookName},on:{input:[function(t){t.target.composing||(e.bookName=t.target.value)},e.getRelevantBooks]}}),e._l(e.relevantBooks,(function(t,r){return o("div",{key:r,staticClass:"book-option flex align-center space-around",attrs:{"v-if":e.relevantBooks}},[o("h2",[e._v(e._s(t.title))]),t?o("img",{attrs:{src:t.thumbnail}}):e._e(),o("button",{on:{click:function(o){return e.addBook(t)}}},[e._v("+")])])}))],2)},nt=[],it=(o("99af"),o("d81d"),o("bc3a")),st=o.n(it),at="AIzaSyChwuC7vESsz_dijDCMrwCLHcKyANzL2q4",ut={getArrangedBooks:mt};function ct(e){return lt.apply(this,arguments)}function lt(){return lt=Object(w["a"])(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,st.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&key=").concat(at));case 3:return o=e.sent,e.abrupt("return",o.data.items);case 7:e.prev=7,e.t0=e["catch"](0),console.log("Error in  google API");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),lt.apply(this,arguments)}function mt(e){return pt.apply(this,arguments)}function pt(){return pt=Object(w["a"])(regeneratorRuntime.mark((function e(t){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ct(t);case 2:return o=e.sent,r=o.map((function(e){return{title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,authors:Object(y["a"])(e.volumeInfo.authors),publishedDate:e.volumeInfo.publishedDate,pageCount:e.volumeInfo.pageCount,categories:e.volumeInfo.categories,reviews:[],thumbnail:e.volumeInfo.imageLinks.thumbnail||"",language:e.volumeInfo.language,listPrice:{amount:55,currencyCode:"EUR",isOnSale:!0}}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),pt.apply(this,arguments)}var dt={name:"AddBook",data:function(){return{bookName:"",relevantBooks:null}},created:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){this.focusInput()},methods:{getRelevantBooks:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.bookName){t.next=4;break}return e.relevantBooks=null,t.abrupt("return");case 4:return t.next=6,ut.getArrangedBooks(e.bookName);case 6:o=t.sent,e.relevantBooks=o,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("aaaa");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},addBook:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.$store.dispatch({type:"saveBook",book:e});case 3:r=o.sent,console.log("newBook, ",r),t.$store.dispatch({type:"setReviewDeletedSuccess",msgData:{msg:"Book added succssfully!",type:"success",bookId:r.id}}),o.next=10;break;case 8:o.prev=8,o.t0=o["catch"](0);case 10:case"end":return o.stop()}}),o,null,[[0,8]])})))()},focusInput:function(){this.$refs.input.focus()}},computed:{}},vt=dt,ht=Object(l["a"])(vt,rt,nt,!1,null,null,null),gt=ht.exports,ft=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"about-page flex align-center justify-center vh100 "},[o("section",{staticClass:"about-container  main-container "},[o("article",{staticClass:"about column-layout"},[o("h1",[e._v("Hi! my name is Nadav Samuel, and i'm a Full-Stack developer! ")]),o("img",{attrs:{src:e.myImg}})])])])},bt=[],kt={computed:{myImg:function(){var e=o("b0df");return e}}},wt=kt,yt=(o("b1b0"),Object(l["a"])(wt,ft,bt,!1,null,"82f67a5e",null)),Ct=yt.exports,xt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"user-profile main-container"},[o("h1",{style:{color:e.userColor}},[e._v("User Profile")]),o("color-picker",{on:{setFavoriteColor:e.setFavoriteColor}})],1)},Rt=[],Bt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"color-picker  "},[o("h1",[e._v("Pick your color:")]),o("ul",{staticClass:"card-grid"},e._l(e.colors,(function(t){return o("color",{key:t,attrs:{color:t},model:{value:e.pickedColor,callback:function(t){e.pickedColor=t},expression:"pickedColor"}})})),1)])},St=[],_t=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"color cursor-pointer",style:{backgroundColor:e.color},on:{click:e.pickColor}},[o("input",{attrs:{type:"checkbox"}})])},Dt=[],Ot={props:{color:String},methods:{pickColor:function(){this.$emit("input",this.color)}}},Pt=Ot,jt=(o("3b54"),Object(l["a"])(Pt,_t,Dt,!1,null,null,null)),qt=jt.exports,$t={data:function(){return{colors:["#4D4D4D","blue","yellow","orange","#999999","green",,"#F44E3B","lightsalmon"],pickedColor:null}},methods:{colorPicked:function(e){this.$emit("setUserColor",e)}},components:{Color:qt},watch:{pickedColor:function(e,t){this.$emit("setFavoriteColor",e)}}},It=$t,Et=Object(l["a"])(It,Bt,St,!1,null,null,null),Tt=Et.exports,At={name:"UserProfile",date:function(){return{favColor:null}},computed:{userColor:function(){var e=this.$store.getters.pickedColor;return e}},components:{ColorPicker:Tt},methods:{setFavoriteColor:function(e){this.$store.dispatch({type:"setPickedColor",pickedColor:e})}}},Ft=At,Ut=Object(l["a"])(Ft,xt,Rt,!1,null,null,null),Lt=Ut.exports;r["a"].use(f["a"]);var Nt=[{path:"/",name:"BookApp",component:pe},{path:"/book/:bookId",name:"BookDetails",component:ot},{path:"/addBook",name:"AddBook",component:gt},{path:"/about",name:"about",component:Ct},{path:"/userProfile",name:"userProfile",component:Lt}],Mt=new f["a"]({routes:Nt}),Ht=Mt,Jt=o("2f62"),Yt={state:{books:null,booksFilterBy:null},getters:{booksToShow:function(e){var t=e.books;return e.booksFilterBy?(e.booksFilterBy.txt&&(t=t.filter((function(t){return t.title.toLowerCase().includes(e.booksFilterBy.txt.toLowerCase())}))),e.booksFilterBy.minPrice&&(t=t.filter((function(t){return t.listPrice.amount>e.booksFilterBy.minPrice}))),e.booksFilterBy.maxPrice&&(t=t.filter((function(t){return t.listPrice.amount<e.booksFilterBy.maxPrice}))),t):t}},mutations:{setBooks:function(e,t){var o=t.books;e.books=o},removeBook:function(e,t){var o=t.id,r=e.books.findIndex((function(e){return e.id===o}));e.books.splice(r,1)},saveBook:function(e,t){var o=t.book,r=e.books.findIndex((function(e){return o.id===e.id}));-1===r?e.books.push(o):e.books.splice(r,1,o)},setBooksFilterBy:function(e,t){var o=t.filterBy;e.booksFilterBy=o}},actions:{loadBooks:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.query();case 2:o=t.sent,e.commit({type:"setBooks",books:o});case 4:case"end":return t.stop()}}),t)})))()},removeBook:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.commit,n=t.id,o.next=4,B.remove(n);case 4:r({type:"removeBook",id:n});case 5:case"end":return o.stop()}}),o)})))()},saveBook:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function o(){var r,n,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.commit,n=t.book,o.next=4,B.save(n);case 4:return i=o.sent,r({type:"saveBook",book:i}),o.abrupt("return",i);case 7:case"end":return o.stop()}}),o)})))()}},modules:{}},Gt={state:{msgData:null},getters:{msgToShow:function(e){return e.msgData}},mutations:{clearMsg:function(e){e.msgData=null},setReviewAddedSuccess:function(e,t){e.msgData=t.msg.msgData},setReviewRemovedSuccess:function(e,t){e.msgData=t,e.msgData=t.msg.msgData}},actions:{clearMsg:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit({type:"clearMsg"});case 1:case"end":return t.stop()}}),t)})))()},setReviewAddedSuccess:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=e.commit,r({type:"setReviewAddedSuccess",msg:t});case 2:case"end":return o.stop()}}),o)})))()},setReviewDeletedSuccess:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=e.commit,r({type:"setReviewRemovedSuccess",msg:t});case 2:case"end":return o.stop()}}),o)})))()}},modules:{}},Zt={state:{pickedColor:null},getters:{pickedColor:function(e){return e.pickedColor}},mutations:{setPickedColor:function(e,t){var o=t.pickedColor;e.pickedColor=o},removeBook:function(e,t){var o=t.id,r=e.books.findIndex((function(e){return e.id===o}));e.books.splice(r,1)},saveBook:function(e,t){var o=t.book,r=e.books.findIndex((function(e){return o.id===e.id}));-1===r?e.books.push(o):e.books.splice(r,1,o)},setBooksFilterBy:function(e,t){var o=t.filterBy;e.booksFilterBy=o}},actions:{setPickedColor:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=t.pickedColor,e.commit({type:"setPickedColor",pickedColor:r});case 2:case"end":return o.stop()}}),o)})))()}},modules:{}};r["a"].use(Jt["a"]);var zt=new Jt["a"].Store({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{bookModule:Yt,usrMsgModule:Gt,userProfile:Zt}});o("b7e3");r["a"].config.productionTip=!1,new r["a"]({router:Ht,store:zt,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var r=o("9c0c"),n=o.n(r);n.a},"7dcc":function(e,t,o){},"81a7":function(e,t,o){},"9c0c":function(e,t,o){},b0df:function(e,t,o){e.exports=o.p+"img/me.36e27b4d.jpg"},b1b0:function(e,t,o){"use strict";var r=o("41f8"),n=o.n(r);n.a},b7e3:function(e,t,o){},ef40:function(e,t,o){"use strict";var r=o("f5d3"),n=o.n(r);n.a},f5d3:function(e,t,o){}});
//# sourceMappingURL=app.be9aba55.js.map