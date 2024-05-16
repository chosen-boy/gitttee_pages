import * as React from "react";

import './login.less'
import '../../icon/iconfont.css'
import {useState} from "react";
import {Link} from "react-router-dom";


 // @ts-ignore
function  Phone_load({stus,setStus}){
    return (

     <form className="ui custom form session__control session-login__form session-login__with-password "
           id="new_user" action="/login" acceptCharset="UTF-8" method="post">
         <div className="session-login__body">
             <div className="session-form__fields">
                 <div className="git-login-form-fields">
                     <div className="field">
                         <input className="session-login__phone-input" placeholder="手机号码"
                                type="text" name="user[login]"
                                id="user_login"/>
                     </div>
                     <div className="field">
                         <div className="phone_code">
                             <div className='get_code'><input className="session-login__captcha-input"
                                         placeholder="手机验证码" type="text" name="user[account_captcha]"
                                         id="user_account_captcha"/></div>

                             <div className="sent_code">

                                 发送验证码
                             </div>



                         </div>
                     </div>
                     <div className="two fields">
                         <div className="field">
                             <div className="ui checkbox js-checkbox">
                                 <input
                                     type="checkbox" value="1" name="user[remember_me]"

                                     className="hidden"/>
                                 <label>记住我</label></div>
                         </div>
                         <div className="field">
                             <a className="session__toggle-button" data-control="phone"

                                onClick={()=>{setStus(!stus)}} >用户名登录</a>
                         </div>
                     </div>
                     <div className="field">
                         <input type="submit" name="commit" value="登 录"
                                className="orange"
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

    )
 }

// @ts-ignore
function Use_password({stus,setStus}) {

    return (
        <form className="ui custom form session__control session-login__form session-login__with-password "
              id="new_user" action="/login" acceptCharset="UTF-8" method="post">
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
                                <div className="ui checkbox js-checkbox">
                                    <input
                                        type="checkbox" value="1" name="user[remember_me]"

                                        className="hidden"/>
                                    <label>记住我</label></div>
                            </div>
                            <div className="field">

                                <a className="session__toggle-button" data-control="phone"

                                     onClick={()=>{setStus(!stus)}}>短信验证登录</a>
                            </div>
                        </div>
                        <div className="field">
                            <input type="submit" name="commit" value="登 录"
                                   className="orange"
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

    )
 }

export default function Login() {

    const [stus ,setStus] = useState(false)

    const form_value=stus ? <Phone_load stus={stus} setStus={setStus}></Phone_load>:<Use_password stus={stus} setStus={setStus}></Use_password>

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
                                        <span>登录</span>
                                    </h2>
                                    <span className="pull-right">没有帐号？ <Link to='/register'> <a
                                       >点此注册</a></Link>
                                       </span>
                                </header>

                                {form_value}
                                <div className="session-login-oauth">
                                    <div className="session-login__oschina">
                                    <a
                                            href="https://gitee.com/auth/oschina">
                                            <i
                                            className="icon-osc iconfont osc"></i>
                                            <span  >使用 OSChina 帐号登录</span>
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
