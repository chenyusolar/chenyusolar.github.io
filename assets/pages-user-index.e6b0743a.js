import{A as l,C as e,o as s,f as a,w as t,h as n,G as o,i as u,t as r,j as c,H as i,x as _,u as d,r as m,c as g,e as f,_ as w}from"./index-777f4916.js";const v=w(l({__name:"index",setup(l){const{appContext:w}=i(),v=w.mixins[0].methods,p=e({avatar:"",nick_name:"",member_no:""});return(l,e)=>{const i=_,w=d,y=m(g("u-icon"),f);return s(),a(w,null,{default:t((()=>[n(w,{class:"bj_img"},{default:t((()=>[n(i,{src:o(v).getImgUrls("my-bj.png")},null,8,["src"])])),_:1}),n(w,{class:"my_container"},{default:t((()=>[n(w,{class:"my_con"},{default:t((()=>[u(" 个人中心 ")])),_:1}),n(w,{class:"my_one",onClick:e[0]||(e[0]=e=>l.torouter(2))},{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:p.avatar||o(v).ImgList_("avaImg.jpg"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[n(w,null,{default:t((()=>[u(r(p.nick_name||"游客"),1)])),_:1}),n(w,null,{default:t((()=>[u("id: "+r(p.member_no||"游客"),1)])),_:1})])),_:1})])),_:1}),n(w,{class:"my_two"},{default:t((()=>[n(w,{onClick:e[1]||(e[1]=e=>l.torouter(1))},{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).getImgUrls("my-travels.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("定制游")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1})])),_:1}),n(w,{class:"my_two",onClick:l.toRouter},{default:t((()=>[c(' v-if="isCoupon" '),n(w,null,{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).getImgUrls("my-coupon.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("优惠券")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1})])),_:1},8,["onClick"]),n(w,{class:"my_two",onClick:l.toSubscribe},{default:t((()=>[n(w,null,{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).ImgList_("yuyue.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("预约单")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1})])),_:1},8,["onClick"]),n(w,{class:"my_two"},{default:t((()=>[n(w,{onClick:l.toAddress,class:"line"},{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).getImgUrls("my_address.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("地址管理")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1},8,["onClick"]),n(w,{onClick:l.getCustomerInfo,class:"line"},{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).getImgUrls("my-kefu.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("平台客服")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1},8,["onClick"]),n(w,{onClick:l.goToProposal},{default:t((()=>[n(w,null,{default:t((()=>[n(i,{src:o(v).getImgUrls("my-suggest.png"),mode:""},null,8,["src"])])),_:1}),n(w,null,{default:t((()=>[u("投诉及建议")])),_:1}),n(w,null,{default:t((()=>[n(y,{name:"arrow-right",color:"#999999",size:"12"})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),c(' <view class="my_two">\n      <view>\n        <view>\n          <image src="../../static/index/gywm.png" mode=""></image>\n        </view>\n        <view>版本号</view>\n        <view> '),c(' <u-icon name="arrow-right" color="#999999"></u-icon> '),c(" 1.0.0 "),c("  </view>\n      </view>\n    </view> "),c(" <logo></logo> "),c(" 版本号 "),c(' <view class="edition">版本号 v1.0.0</view> '),c(' <view class="logo-content2">\n      <image :src="this.ImgList_(\'shop_logo.png\')"></image>\n      <text class="text">全球e旅提供技术支持</text>\n    </view>\n    <view class="texts">版本号 v1.0.0</view> '),n(w,{class:"versoin"},{default:t((()=>[n(w,{class:"verText"},{default:t((()=>[u(" — 版本号1.1.01 — ")])),_:1}),n(w,{class:"verTexts"},{default:t((()=>[n(w,{class:"img"},{default:t((()=>[n(i,{src:o(v).ImgList_("shop_logo.png"),mode:""},null,8,["src"])])),_:1}),n(w,{class:"text"},{default:t((()=>[u("全球e旅提供技术支持")])),_:1})])),_:1})])),_:1}),c(" 微信客服弹窗 ")])),_:1})}}}),[["__scopeId","data-v-fc59a794"]]);export{v as default};
