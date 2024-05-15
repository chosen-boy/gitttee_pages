import * as React from "react";

import  './login.less'



export  default  function  Login(){
    return(
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
                                    <h1 className="session-sidebox__title">
                                    </h1>
                                    <h2 className="session-sidebox__subtitle">
                                        企业级 DevOps 研发管理平台
                                    </h2>
                                </div>
                                <div className="session-sidebox__content">
                                    <div className="session-sidebox-content__container">
                                        <div className="session-sidebox-gitee__container">
                                            <div className="session-sidebox-gitee__item">
                                                <div className="session-sidebox-gitee__number"> 1200 万+</div>
                                                <div className="session-sidebox-gitee__title"> 开发者</div>
                                            </div>
                                            <div className="session-sidebox-gitee__item">
                                                <div className="session-sidebox-gitee__number"> 2800 万+</div>
                                                <div className="session-sidebox-gitee__title"> 代码仓库</div>
                                            </div>
                                            <div className="session-sidebox-gitee__item">
                                                <div className="session-sidebox-gitee__number"> 30 万+</div>
                                                <div className="session-sidebox-gitee__title"> 企业客户</div>
                                            </div>
                                            <div className="session-sidebox-gitee__item">
                                                <div className="session-sidebox-gitee__number"> 2000+</div>
                                                <div className="session-sidebox-gitee__title"> 高校</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="session-sidebox__footer">
                                    <a target="_blank"
                                       href="/enterprises?from=login"><strong className="session-sidebox__icon-hot">Gitee
                                        企业版</strong>
                                        <span className="session-sidebox__divider">-</span>
                                        企业级 DevOps 研发管理平台
                                        <i className="iconfont icon-arrow-circle-right "></i>
                                    </a></div>
                            </div>

                        </div>
                        <div className="session-form">
                            <div className="session-form__container is-login">
                                <header className="session-form__header">
                                    <h2 className="session-form__title">
                                        <span>登录</span>
                                    </h2>
                                    <span className="pull-right">没有帐号？<a  href="/signup#lang=zh-CN">点此注册</a></span>
                                </header>
                                <div className="session__flash-error">
                                    <div className="ui message error flash_error flash_error_box"></div>
                                </div>
                                <form
                                    className="ui custom form session__control session-login__form session-login__with-password "
                                    data-need-verify="false" data-control="password" data-encrypt="true"
                                    data-key="password" id="new_user" action="/login" accept-charset="UTF-8"
                                    method="post"><input type="hidden" name="encrypt_key" value="password"/><input
                                    name="utf8" type="hidden" value="✓"/><input type="hidden" name="authenticity_token"
                                                                                value="5xwvH6eihR8IoMiGhh0XLeGMUy0UpqfuJaRYcQ+GtHlPMR+LDEked035MVHX5e4TQPDa+jBgbgB9EWSZ+E2BSg=="/><input
                                    type="hidden" name="redirect_to_url" id="redirect_to_url"/>
                                    <div className="session-login__body">
                                        <div className="session-form__fields">
                                            <div className="git-login-form-fields">
                                                <div className="field" id="git-login">
                                                    <input placeholder="手机／邮箱／个人空间地址"
                                                           className="login-password__account-input" type="text"
                                                           name="user[login]" id="user_login"/>
                                                </div>
                                                <div className="field">
                                                    <input type="hidden" name="encrypt_data[user[password]]"/><input
                                                    placeholder="请输入密码" data-encrypt="true" type="password"
                                                    name="user[password]" id="user_password"/>
                                                </div>
                                                <div className="two fields">
                                                    <div className="field">
                                                        <div className="ui checkbox js-checkbox"
                                                             ><input
                                                            name="user[remember_me]" type="hidden" value="0"/><input
                                                            type="checkbox" value="1" name="user[remember_me]"
                                                            id="user_remember_me"
                                                            className="hidden"/><label>记住我</label></div>
                                                    </div>
                                                    <div className="field" >
                                                        <a className="session__toggle-button" data-control="phone"

                                                           href="">短信验证登录</a>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <input type="submit" name="commit" value="登 录"
                                                           className="ui fluid orange submit button large"
                                                          />
                                                </div>
                                                <div className="field text-center">
                                                    <a className="forget-password"

                                                       href="/password/new">已有帐号，忘记密码？</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form
                                    className="ui custom form session__control session-login__form session-login__with-phone hide"
                                    data-control="phone" id="new_user" action="/login" accept-charset="UTF-8"
                                    method="post"><input name="utf8" type="hidden" value="✓"/><input type="hidden"
                                                                                                     name="authenticity_token"
                                                                                                     value="5xwvH6eihR8IoMiGhh0XLeGMUy0UpqfuJaRYcQ+GtHlPMR+LDEked035MVHX5e4TQPDa+jBgbgB9EWSZ+E2BSg=="/><input
                                    value="sms" type="hidden" name="user[login_type]" id="user_login_type"/>
                                    <input type="hidden" name="redirect_to_url" id="redirect_to_url"/>
                                    <input className="placeholder__autofill-text"/>
                                    <div className="field">
                                        <input className="session-login__phone-input" placeholder="手机号码"
                                              type="text" name="user[login]"
                                               id="user_login"/>
                                    </div>
                                    <div className="field">
                                        <div className="ui right labeled input captcha-labeled">
                                            <input  className="session-login__captcha-input"
                                                   placeholder="手机验证码" type="text" name="user[account_captcha]"
                                                   id="user_account_captcha"/>
                                            <div className="ui basic orange button session-login__captcha-button"
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
                                    <div className="two fields">
                                        <div className="field">
                                            <div className="ui checkbox js-checkbox"><input name="user[remember_me]"
                                                                                            type="hidden"
                                                                                            value="0"/><input
                                                type="checkbox" value="1" name="user[remember_me]" id="user_remember_me"
                                                className="hidden"/><label>记住我</label></div>
                                        </div>
                                        <div className="field" >
                                            <a className="session__toggle-button" data-control="password"

                                               href="/login">用户名密码登录</a>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <input type="submit" name="commit" value="登 录"
                                               className="ui fluid orange submit button large"
                                              />
                                    </div>
                                    <div className="field text-center">
                                        <a className="forget-password" href="/password/new">已有帐号，忘记密码？</a>
                                    </div>
                                </form>

                                <div className="session-login-oauth">
                                    <div className="session-login__oschina">
                                        <a
                                           href="https://gitee.com/auth/oschina"><i
                                            className="icon-logo-osc iconfont osc"></i>
                                            <span>使用 OSChina 帐号登录</span>
                                        </a></div>
                                    <div className="session-login-oauth__container">
                                        <div className="field">
                                            <div className="ui horizontal divider session-login__oauth-title">
                                                <span className="text-muted">  其他方式登录 </span>


                                            </div>
                                        </div>
                                        <div className="ui horizontal list session-oauth__list">
                                            <div className="item">
                                                <a
                                                    href="https://gitee.com/auth/aliyun">
                                                    <div className="git-other-login-icon">
                                                        <i className="aliyun icon-logo_aliyun iconfont"
                                                           title="使用阿里云帐号登录"></i>
                                                    </div>
                                                </a></div>
                                            <div className="item">
                                                <a
                                                    href="https://gitee.com/auth/gitlab">
                                                    <div className="git-other-login-icon">
                                                        <i className="gitlab icon-logo-gitlab iconfont"
                                                           title="使用 GitLab 帐号登录"></i>
                                                    </div>
                                                </a></div>
                                            <div className="item">
                                                <a
                                                   href="https://gitee.com/auth/huawei">
                                                    <div className="git-other-login-icon">
                                                        <i className="huawei icon-logo_huawei iconfont"
                                                           title="使用华为帐号登录"></i>
                                                    </div>
                                                </a></div>
                                            <div className="item">
                                                <a
                                                    href="https://gitee.com/auth/github">
                                                    <div className="git-other-login-icon">
                                                        <i className="github icon-logo-github iconfont"
                                                           title="使用 GitHub 帐号登录"></i>
                                                    </div>
                                                </a></div>
                                            <div className="item">
<span className="session-oauth__other-icon js-popup-default" data-popup-hoverable="true" data-position="left center">
<i className="iconfont icon-ic-action-more "></i>
</span>
                                                <div className="ui flowing popup session-oauth__other">
                                                    <div className="session-oauth__other-list">
                                                        <a className="item"

                                                           href="https://gitee.com/auth/weibo">
                                                            <div className="git-other-login-icon">
                                                                <i className="icon-logo-weibo iconfont weibo"
                                                                   title="使用 Weibo 帐号登录"></i>
                                                            </div></a><a className="item"


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
                                <img alt="udesk" width="40" height="40"
                                     src="../assets/img_1.png"/>
                            </a>



                            {/*<style>*/}
                            {/*    #udeskBtn {*/}
                            {/*    right: 14px;*/}
                            {/*    bottom: 14px;*/}
                            {/*    position: fixed;}*/}
                            {/*</style>*/}


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
<a  href="/terms">使用条款</a>
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
