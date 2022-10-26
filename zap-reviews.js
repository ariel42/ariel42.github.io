const scopedReviewsCss = (randomId) => `
.score_wrap {
  width: 130px;
  height: auto;
  direction: rtl;
  cursor: pointer
}

.sw_vertical {
  width: 180px;
  height: auto
}

.score_num {
  font-weight: bold;
  font-size: 22px;
  text-align: center
}

.sn_vertical {
  font-size: 28px;
  display: table-cell;
  vertical-align: middle
}

.score_text {
  font-size: 18px;
  text-align: center;
  padding-bottom: 10px
}

.st_vertical {
  font-size: 14px;
  padding-bottom: 5px
}

.score_logo {
  text-align: center
}

.score_logo img {
  width: 90px
}

.score_stars {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0;
  width: 90px
}

.score_stars_floorforce {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0;
  width: 100px
}

.score_stars_floorforce_noID {
  position: relative;
  height: auto;
  min-height: 25px;
  margin: auto;
  text-align: justify;
  bottom: 0
}

.stars {
  position: absolute !important;
  top: 0;
  left: 0;
  direction: ltr;
  font-size: 20px
}

.stars_over {
  position: absolute !important;
  color: #ebca00;
  top: 0;
  left: 0;
  direction: ltr;
  font-size: 20px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap
}

.review_wrap {
  padding: 10px;
  margin-left: auto;
  margin-right: auto
}

.review_flex_content_wrap {
  display: flex
}

.review_wrap .score_stars {
  display: inline-block;
  margin: 5px 5px 0
}

.review_date {
  display: inline-block;
  margin-top: 6px
}

.review_subtitle_f {
  align-items: center;
  display: -webkit-flex
}

.review_subtitle_flex {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column
}

.scores_stars_review {
  margin: 0 10px 0 5px
}

.review_score_text {
  display: inline-block;
  margin-top: 5px
}

.pagination {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 10px
}

.reviews_link {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 10px
}

.review_header_ff {
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: center
}

.review_headertitle {
  display: inline-block
}

.review_headertext {
  display: inline-block;
  margin-right: 10px
}

.review_imagebox {
  float: right
}

.review_imagebox_f {
  float: left
}

.review_title_wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_title_wrap .review_date {
  margin-top: 0
}

.review_leftinsidewrap {
  overflow: hidden
}

.review_rightinsidewrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  margin-left: 50px
}

.review_downinsideright {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-around;
  -webkit-justify-content: space-around;
  justify-content: space-around
}

.review_upinsideright {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_namewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_datewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_scorewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_downinsidehelpful {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_downinsideunhelpful {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_disadvantageswrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

.review_advantageswrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -o-justify-content: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

.review_insidescorewrapper {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column
}

.review_headewrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

.review_headertextwrap {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.review_advantageimage {
  max-height: 43px;
  height: 43px;
  min-width: 40px;
  max-width: 40px;
  width: 40px;
  margin-right: 30px;
  margin-left: 2px
}

.review_disadvantageimage {
  max-height: 43px;
  height: 43px;
  min-width: 40px;
  max-width: 40px;
  width: 40px;
  margin-right: 30px;
  margin-left: 2px
}

.review_unhelpfulimage {
  vertical-align: middle;
  width: 20px;
  height: 20px
}

.review_helpfulimage {
  vertical-align: middle;
  width: 20px;
  height: 20px
}

.review_nametag {
  margin-left: 5px
}

.review_datetag {
  margin-left: 5px
}

.review_headertextzap {
  min-width: 180px
}

.review_helpufl {
  width: 75px;
  max-width: 75px;
  min-width: 75px
}

.review_unhelpufl {
  width: 75px;
  max-width: 75px;
  min-width: 75px
}

.review_seperator {
  width: 1px;
  max-width: 1px;
  min-width: 1px;
  height: 20px;
  background-color: #d1cfcf;
  margin: 0 9px
}

[data-random-id="${randomId}"] {
  text-align: right;
  direction: rtl;
  color: #2b2b2b;
  font-size: 14px;
  font-family: Open Sans Hebrew;
  line-height: 23px;
}

[data-random-id="${randomId}"].reviews1_wp_outer {
  text-align: justify;
  padding-left: 20px;
  padding-right: 20px;
}

[data-random-id="${randomId}"] .reviews1_maintitle {
  font-weight: bold;
  font-size: 18px;
  padding-right: 10px;
}

[data-random-id="${randomId}"] .reviews1_title {
  font-weight: bold;
  font-size: inherit;
}

[data-random-id="${randomId}"] .reviews1_text {
  color: #767676;
}

[data-random-id="${randomId}"] .reviews1_date {
  color: #767676;
}

[data-random-id="${randomId}"] a {
  font-size: inherit;
}

[data-random-id="${randomId}"] .reviews1_pagination {
  color: #242424;
}

[data-random-id="${randomId}"].reviews1_wp_outer svg {}

[data-random-id="${randomId}"] .reviews1_maintitle svg {}

[data-random-id="${randomId}"] .reviews1_title svg {}

[data-random-id="${randomId}"] .reviews1_text svg {
  fill: #767676;
}

[data-random-id="${randomId}"] .reviews1_date svg {
  fill: #767676;
}

[data-random-id="${randomId}"] a svg {}

[data-random-id="${randomId}"] .reviews1_pagination svg {
  fill: #242424;
}

[data-random-id="${randomId}"].reviews2_wp_outer {
  text-align: justify;
  font-size: 14px;
}

[data-random-id="${randomId}"] .reviews1_maintitle {
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
}

[data-random-id="${randomId}"] .reviews1_title {
  font-weight: bold;
  font-size: 18px;
}

[data-random-id="${randomId}"] .reviews1_text {
  color: #2b2b2b;
}

[data-random-id="${randomId}"] .reviews1_date {
  color: #2b2b2b;
}

[data-random-id="${randomId}"] .reviews1_pagination {
  color: #940000;
}

[data-random-id="${randomId}"] .reviews1_text svg {
  fill: #2b2b2b;
  stroke: #2b2b2b;
}

[data-random-id="${randomId}"] .reviews1_date svg {
  fill: #2b2b2b;
  stroke: #2b2b2b;
}

[data-random-id="${randomId}"] .reviews1_pagination svg {
  fill: #940000;
  stroke: #940000;
}
`;

const emptyDpzReviews = (customerId, tagId) => `
<div class="reviews">
  <div class="review_wrap">
    <div class="review_content_wrap reviews1_content_wrap">
      <div class="review_leftinsidewrap reviews1_leftinsidewrap">
        <div class="review_title reviews1_title">חוות דעת</div>
        <div class="review_score_text">טוען חוות דעת...</div>
        <div class="score_stars">
          <div class="stars" aria-disabled="true">
            &nbsp;
          </div>
          <div class="stars_over" aria-disabled="true" style="width: 100%">
            &nbsp;
          </div>
        </div>
        <div class="review_date reviews1_date">&nbsp;</div>
        <div class="review_text reviews1_text">&nbsp;</div>
      </div>
    </div>
  </div>
</div>
<div class='pagination reviews1_pagination'>
  <span class='currpage'>1</span>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews1.getReviews("2")'>2</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews1.getReviews("3")'>3</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews1.getReviews("4")'>4</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews1.getReviews("5")'>5</a>
  <span>&#160;&#160;</span>
  <a href='javascript:reviews_reviews1.getReviews("2")'>&gt;</a>
  <span>&#160;&#160;</span>
  <span class='reviews1' style='margin-right: 12px;float: right;'>
    <a target='_blank' href='https://www.d.co.il/${customerId}/${tagId}/#create-review-form'>כתוב חוות
      דעת</a>
    <span>&#160;&#160;&#160;</span>
    <a target='_blank' href='https://www.d.co.il/${customerId}/${tagId}/#page-block-reviews'>קרא באתר דפי
      זהב zap</a>
    <span>&#160;&#160;&#160;</span>
  </span>
</div>
`;


class ZapReviewsLoader {
  zapReviewsInstance = null;
  sResultsPerPage = null;
  sCssClass = null;
  bShowLinks = null;
  bLimitNumberOfReviews = null;
  iNumOfTotalReviews = null;
  iMinScore = null;
  bDescendingOrder = null;

  bIsExpandable = null;
  iExpendableHeight = null;
  readMoreToken = null;
  ariaLabelText = null;

  constructor(zapReviewsInstance, sResultsPerPage, sCssClass, bShowLinks,
    bLimitNumberOfReviews, iNumOfTotalReviews, iMinScore, bDescendingOrder,
    bIsExpandable, iExpendableHeight, readMoreToken, ariaLabelText) {

    this.zapReviewsInstance = zapReviewsInstance;
    this.sResultsPerPage = sResultsPerPage;
    this.sCssClass = sCssClass;
    this.bShowLinks = bShowLinks;
    this.bLimitNumberOfReviews = bLimitNumberOfReviews;
    this.iNumOfTotalReviews = iNumOfTotalReviews;
    this.iMinScore = iMinScore;
    this.bDescendingOrder = bDescendingOrder;

    this.bIsExpandable = bIsExpandable;
    this.iExpendableHeight = iExpendableHeight;
    this.readMoreToken = readMoreToken;
    this.ariaLabelText = ariaLabelText;

    // if (this.bIsExpandable) {
    //   $('.' + this.sCssClass + '_text').readmore({
    //     maxHeight: this.iExpendableHeight,
    //     moreLink: '<a aria-label="' + this.ariaLabelText + '">' + this.readMoreToken + '</a>',
    //     lessLink: '',
    //     heightMargin: 1
    //   });
    // }
  }

  async getReviews(sPageNum) {
    const serviceUrl = 'https://cohen.dbusiness.co/reviews.asmx/GetReviews';

    const params = {
      sCustomerId: this.zapReviewsInstance.customerId,
      iSiteID: this.zapReviewsInstance.siteId,
      sHeadingCode: this.zapReviewsInstance.tagId,
      sPageNum,
      sResultsPerPage: this.sResultsPerPage,
      sCssClass: this.sCssClass,
      bShowLinks: this.bShowLinks,
      bLimitNumberOfReviews: this.bLimitNumberOfReviews,
      iNumOfTotalReviews: this.iNumOfTotalReviews,
      iMinScore: this.iMinScore,
      bDescendingOrder: this.bDescendingOrder
    };

    const response = await fetch(serviceUrl, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    const data = await response.json();

    this.zapReviewsInstance.setReviewsContent(data.d, true);

    //   if (this.bIsExpandable) {
    //     $('#' + this.sCssClass + ' .' + staticCssClass + '_text').readmore({
    //       maxHeight: this.iExpendableHeight,
    //       moreLink: '<a>' + this.readMoreToken + '</a>',
    //       lessLink: '',
    //       heightMargin: 1
    //     });
    //   }
    // });
  }
}

class ZapReviewsElement extends globalThis.HTMLElement {
  randomId = Math.floor(Math.random() * 1000000);
  gotData = false;
  reviewsLoader = null;

  customerId = null;
  siteId = null;
  tagId = null;

  constructor() {
    super();
  }

  renderDefaultHtml() {
    const emptyReviewsHtml = emptyDpzReviews(this.customerId, this.tagId);
    this.setReviewsContent(emptyReviewsHtml);
  }

  connectedCallback() {
    this.setAttribute('data-random-id', this.randomId);

    if (!this.gotData) {
      this.renderDefaultHtml();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const camelCased = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    this[camelCased] = newValue;

    this.renderDefaultHtml();
    this.gotData = false;

    if (this.customerId && this.siteId && this.tagId) {
      this.loadFirstReview();
    }
  }

  loadFirstReview() {
    this.initLoader();
    this.reviewsLoader.getReviews("1");
  }

  initLoader() {
    if (!this.reviewsLoader) {
      window["reviews_reviews1"] = this.reviewsLoader =
        new ZapReviewsLoader(this, "1", "reviews1", "True",
          "False", 10, 3, true,
          false, 45, 'קראו עוד...', 'לחצו להרחיב ולקרוא עוד');
    }
  }

  setReviewsContent(reviewsHtml, isRealData) {
    this.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/opensanshebrew.css">
      ${reviewsHtml.replaceAll(`src="/images`, `src="https://cohen.dbusiness.co/images`)}
    `;

    const reviewsCss = scopedReviewsCss(this.randomId);
    const styleElement = globalThis.document.createElement('style');
    styleElement.innerHTML = reviewsCss;
    this.appendChild(styleElement);

    if (isRealData) {
      this.gotData = true;
    }
  }

  static get observedAttributes() {
    return ['customer-id', 'site-id', 'tag-id'];
  }
}

customElements.define('zap-reviews', ZapReviewsElement);
