import * as React from "react";

import './login.less'
import '../../icon/iconfont.css'
import {Link} from "react-router-dom";


// @ts-ignore
function  Phone_load(){
    return (

        <>
            <form className="ui custom form session__control session-register__form " data-control="register"
                  id="new_user" action="/" acceptCharset="UTF-8" method="post">
                <div className="session-login__body">
                    <input value="register" type="hidden" name="user[from]" id="user_from"/>
                    <input className="placeholder__autofill-text"/>
                    <div className="session-register-form-fields">

                        <div className="field error">
                            <input className="session-register__name"  placeholder="姓名"
                                   type="text" name="user[name]" id="user_name"/>
                            <div className="ui small error text message">姓名为必填项</div>
                            <i className="icon remove semantic-status" ></i></div>
                        <div className="field" id="register-host">
                            <div className="ui left labeled input">
                                <div className="ui basic label background-grey">https://gitee.com/</div>
                                <div className="ui icon input">
                                    <input className="session-register__username"
                                           placeholder="个人空间地址" type="text" name="user[username]"
                                           id="user_username"/>
                                    <i className="icon iconfont icon-help-circle text-green js-popup-default session-form__username-help"
                                       data-position="top right"></i>
                                    <div className="ui popup dark" style={{display:'none'}}>
                                        <div className="ui list text-white">
                                            <div className="item">这是您注册帐号主页的地址，可用作推拉代码或登录 Gitee
                                                的用户名
                                            </div>
                                            <div className="item">个人空间地址 是用户在 Gitee 上的唯一标识，在开通 Gitee
                                                帐号时填写
                                            </div>
                                            <div className="item">您可以将个人空间地址分享给朋友，让他们通过您的个人空间地址访问您的
                                                Gitee 主页
                                            </div>
                                            <div
                                                className="item">每个帐号只能对应一个个人空间地址，建议您在注册时为您的帐号精心起一个好名字
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <input className="session-register__account-input"
                                   placeholder="请输入手机号码"
                                   type="text" name="user[account]" id="user_account"/>
                        </div>
                        <div className="field hide session-register__captcha-field"
                           >
                            <div className="ui right labeled input captcha-labeled">
                                <input type="text" name="account_captcha" id="account_captcha" value=""
                                       placeholder="请输入验证码"
                                       className="session-register__captcha-input"/>
                                <div className="ui basic orange button session-register__captcha-button"
                                     data-sensors-click="" data-title="发送验证码"
                                     >
                                    发送验证码
                                </div>

                                <div className="ui danger popup captcha-popup">
                                    <p >
                                        收不到验证码？
                                        <a href="/self_services">获取帮助</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="field">
                            <div className="ui icon input js-show-password session-form__password-input">
                                <input  autoComplete="new-password" placeholder="密码不少于6位"
                                       data-password-regx="^(?=.*[0-9])(?=.*[a-zA-Z!@_#$%^&amp;*()\-+=,.?]).{6,32}$"
                                       type="password" name="user[password]" id="user_password"/>
                                <i className="eye icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox js-checkbox git-checkbox-accept-term">
                                <input type="checkbox" name="accept_term" id="accept_term" value="0"
                                       className="hidden"/>
                                <label>我已阅读并同意</label>
                            </div>
                            <span className="register case">
<a target="_blank" href="/terms">使用条款</a>
及
<a target="_blank"  href="/inactive_accounts">非活跃帐号处理规范</a>
</span>
                        </div>
                        <div className="field">
                            <button name="button" type="submit" id="btn-submit"
                                    className="ui orange fluid submit button register-btn-submit large"
                                    >立即注册
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}


// @ts-ignore


export default function Register() {


    return (
        <div className='box'>
            <div className='box_warp'>
                <div className="ui container">
                    <div className="session__body">
                        <div className="session-sidebox">
                            <div className="session-sidebox__container">
                                <div className="session-sidebox__header">
                                    <div className="session-sidebox__logo">

                                        <img alt="logo" src='../assets/logo.svg'/>
                                    </div>

                                    <h2 className="session-sidebox__subtitle">
                                        企业级 DevOps 研发管理平台
                                    </h2>
                                </div>
                                <div className="session-sidebox__content">
                                    <div className="session-sidebox-content__container">
                                        <div className="session-sidebox-comments__header">
                                            <span className="session-sidebox-comments__title">李铭健</span> <span
                                            className="session-sidebox-comments__position">骑鹅旅行 Head of PMO</span>

                                        </div>
                                        <div className="session-sidebox-comments__content">
                                            Gitee 企业版不只是一个代码托管的工具，更是带着深深
                                            Geek 文化的项目管理平台。在 Gitee 企业版上，iGola.com
                                            的团队协作变得更加容易，整个流程管理变得更加透明流畅。
                                        </div>
                                    </div>
                                </div>
                                <div className="session-sidebox__footer">
                                    <a target="_blank"
                                    ><
                                        strong className="session-sidebox__icon-hot">Gitee 企业版</strong>
                                        <span className="session-sidebox__divider">- </span>
                                        企业级 DevOps 研发管理平台
                                        <i className="iconfont icon-circle-right arrow "></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="session-form">
                            <div className="session-form__container is-login">
                                <header className="session-form__header">
                                    <h2 className="session-form__title">
                                        <span>注册</span>
                                    </h2>
                                    <span className="pull-right">已有帐号？<Link to='/'> <a
                                    >点击登录</a></Link></span>
                                </header>

                                {/*<Phone_load></Phone_load>*/}
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


                            </div>

                            <a id="udeskBtn">
                                <img alt="udesk" width="40" height="40" src="../assets/img_1.png"/>
                            </a>


                        </div>
                    </div>
                    <div className="session__footer container">
<span className="session__footer-item">
<a target="_blank"
   href="https://gitee.com/">© Gitee.com</a>
</span>
                        <span className="session__footer-item">
<a href="/about_us">关于我们</a>
</span>
                        <span className="session__footer-item">
<a href="/terms">使用条款</a>
</span>
                        <span className="session__footer-item">
<a
    href="https://help.gitee.com">帮助文档</a>
</span>
                        <span className="session__footer-item">
<a
    href="/self_services">在线自助服务</a>
</span>
                        <span className="session__footer-item">
<a
    href="/user/activate">重发激活邮件</a>
</span>
                    </div>

                </div>
            </div>

        </div>
    )
}
