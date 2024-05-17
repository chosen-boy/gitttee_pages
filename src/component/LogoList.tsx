import  '../pages/Login/login.less'
import * as React from "react";

function  LogoList(){
    return (
        <div className="session-login-oauth">
            <div className="session-login__oschina">
                <a
                    href="https://gitee.com/auth/oschina">
                    <i
                        className="icon-osc iconfont osc"></i>
                    <span>使用 OSChina 帐号登录</span>
                </a></div>
            <div className="session-login-oauth__container">
                <div className="qita">

                    <span className="text-muted">  其他方式登录 </span>

                </div>
                <div className="icon_list">
                    <div className="item">
                        <a
                            href="https://gitee.com/auth/aliyun">
                            <div className="git-other-login-icon">
                                <i className="aliyun icon-aliyun iconfont"
                                   title="使用阿里云帐号登录"></i>
                            </div>
                        </a></div>
                    <div className="item">
                        <a
                            href="https://gitee.com/auth/gitlab">
                            <div className="git-other-login-icon">
                                <i className="gitlab icon-gitlab iconfont"
                                   title="使用 GitLab 帐号登录"></i>
                            </div>
                        </a></div>
                    <div className="item">
                        <a
                            href="https://gitee.com/auth/huawei">
                            <div className="git-other-login-icon">
                                <i className="huawei icon-huawei iconfont"
                                   title="使用华为帐号登录"></i>
                            </div>
                        </a></div>
                    <div className="item">
                        <a
                            href="https://gitee.com/auth/github">
                            <div className="git-other-login-icon">
                                <i className="github icon-github iconfont"
                                   title="使用 GitHub 帐号登录"></i>
                            </div>
                        </a></div>
                    <div className="item">
<span className="session-oauth__other-icon js-popup-default" data-popup-hoverable="true" data-position="left center">
<i className="iconfont icon-gengduo "></i>
</span>
                        <div className="ui flowing popup session-oauth__other">
                            <div className="session-oauth__other-list">
                                <a className="item"

                                   href="https://gitee.com/auth/weibo">
                                    <div className="git-other-login-icon">
                                        <i className="icon-logo-weibo iconfont weibo"
                                           title="使用 Weibo 帐号登录"></i>
                                    </div>
                                </a><a className="item"


                                       href="https://gitee.com/auth/qq_connect">
                                <div className="git-other-login-icon">
                                    <i className="icon-logo-qq iconfont qq"
                                       title="使用 QQ 帐号登录"></i>
                                </div>
                            </a><a className="item"


                                   href="https://gitee.com/auth/windowslive">
                                <div className="git-other-login-icon">
                                    <i className="icon-logo-windows iconfont windows"
                                       title="使用 WindowsLive 帐号登录"></i>
                                </div>
                            </a><a className="item"


                                   href="https://gitee.com/auth/wechat">
                                <div className="git-other-login-icon">
                                    <i className="icon-logo_wechat iconfont wechat"
                                       title="使用微信帐号登录"></i>
                                </div>
                            </a><a className="item"


                                   href="https://gitee.com/auth/dingding">
                                <div className="git-other-login-icon">
                                    <i className="dingding icon-logo-dingding iconfont"
                                       title="使用钉钉帐号登录"></i>
                                </div>
                            </a><a className="item"


                                   href="https://gitee.com/auth/trustie">
                                <div className="git-other-login-icon">
                                    <i className="icon-logo_trustie iconfont trustie"
                                       title="使用 Trustie 帐号登录"></i>
                                </div>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export  default LogoList