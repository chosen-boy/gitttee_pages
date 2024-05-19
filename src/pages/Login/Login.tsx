import * as React from "react";

import './login.less'
import '../../icon/iconfont.css'
import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import LeftValue from "@/component/LeftValue";
import LogoList from "@/component/LogoList";

 // @ts-ignore
function  Phone_load({stus,setStus}){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [yanzma, setyanzma] = useState('');

    const [showCaptcha, setShowCaptcha] = useState(false);
    const x = <i className="iconfont icon-x x"></i>

    const handyanzma = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {

        setyanzma(e.target.value);

    }, []);

    const handlePhoneNumberChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPhoneNumber(e.target.value);
        // 手机号格式校验
        // 显示验证码输入框
        if (e.target.value && isValidPhoneNumber(e.target.value)) {
            setShowCaptcha(true);
        } else {
            setShowCaptcha(false);
        }
    }, []);
    // @ts-ignore
    const isValidPhoneNumber = useCallback((phoneNumber) => {
        // 手机号格式校验逻辑
        return /^\d{11}$/.test(phoneNumber);
    }, []);
    return (

     <form className="ui custom form session__control session-login__form session-login__with-password "
           id="new_user" action="/login" acceptCharset="UTF-8" method="post">
         <div className="session-login__body">
             <div className="session-form__fields">
                 <div className="git-login-form-fields">
                     <div className="field">
                         <input className={`session-login__phone-input ${!phoneNumber ? 'errorstyle': ''}`} placeholder="手机号码"
                                type="text" name="user[login]"
                                id="user_login"  value={phoneNumber} onChange={handlePhoneNumberChange}/>
                         {!showCaptcha && phoneNumber &&<span className="error">手机号格式错误</span>}
                         {!phoneNumber && <span className="error">手机号为必填项</span>}
                         {!phoneNumber && x}
                     </div>
                     <div className="field">
                         <div className="phone_code">
                             <div className='get_code'>
                                 <input className={`session-login__captcha-input ${!yanzma ? 'errorstyle': ''}`}
                                         placeholder="手机验证码" type="text" name="user[account_captcha]"
                                         id="user_account_captcha" value={yanzma} onChange={handyanzma}/>

                             </div>

                             <div className="sent_code">

                                 发送验证码
                             </div>



                         </div>
                         {!yanzma && <span className="error">验证码为必填项</span>}
                         {!yanzma && x}
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
                         <input type="submit"  value="登 录"
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
    const [name, setName] = useState('');
    const [Password1, setPassword] = useState('');
    const handleNameChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        // 自动填充个人空间地址
        // 比对显示已有名称的字号
    }, []);
    const x = <i className="iconfont icon-x x"></i>
    const handpassoord1 = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        // 自动填充个人空间地址
        // 比对显示已有名称的字号
    }, []);

    // @ts-ignore
    const isValidPhoneNumber = useCallback((phoneNumber) => {
        // 手机号格式校验逻辑
        return /^\d{11}$/.test(phoneNumber);
    }, []);

    return (
        <form className="ui custom form session__control session-login__form session-login__with-password "
              id="new_user" action="/login" acceptCharset="UTF-8" method="post">
            <div className="session-login__body">
                <div className="session-form__fields">
                    <div className="git-login-form-fields">
                        <div className="field" id="git-login">
                            <input placeholder="手机／邮箱／个人空间地址"
                                   className={`login-password__account-input ${!name ? 'errorstyle': ''}`} type="text"
                                   name="user[login]" id="user_login" value={name} onChange={handleNameChange}/>
                            {!name && <span className="error">用户名为必填项</span>}
                            {!name && x}
                        </div>
                        <div className="field">
                            <input type="hidden" name="encrypt_data[user[password]]"/>
                            <input
                                className={`${!Password1 ? 'errorstyle': ''}`}
                            placeholder="请输入密码" data-encrypt="true" type="password"
                            name="user[password]" id="user_password" value={Password1}  onChange={handpassoord1}/>
                            {!Password1 && <span className="error">密码为必填项</span>}
                            {!Password1 && x}
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
                            <input type="submit"  value="登 录"
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
                           <LeftValue></LeftValue>

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
                               <LogoList></LogoList>


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
