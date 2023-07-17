class AppUrl  {
  
    static BaseUrl = "http://127.0.0.1:8000/api";

    static VisitorDetails = this.BaseUrl +"/getvisitor"

    static ContactForm = this.BaseUrl +"/sendcontactform"

    static AllSiteInfo = this.BaseUrl +"/siteinfo"
}

export default AppUrl
