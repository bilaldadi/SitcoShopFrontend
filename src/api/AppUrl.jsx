class AppUrl  {
  
    static BaseUrl = "http://127.0.0.1:8000/api";

    static VisitorDetails = this.BaseUrl +"/getvisitor"

    static ContactForm = this.BaseUrl +"/sendcontactform"

    static AllSiteInfo = this.BaseUrl +"/siteinfo"

    static Categories = this.BaseUrl +"/allcategories"

    static ProductListByRemark(remark) {
        return this.BaseUrl +"/productlistbyremark/"+remark
    }

    static ProductListByCategory(category) {
        return this.BaseUrl +"/productlistbycategory/"+category
    }

    static ProductListBySubCategory(category,subcategory) {
        return this.BaseUrl +"/productlistbysubcategory/"+category+"/"+subcategory
    }

    
}

export default AppUrl
