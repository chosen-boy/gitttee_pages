import * as React from "react";

import '../Login/login.less'
import '../../icon/iconfont.css'

import {Link} from "react-router-dom";
import LeftValue from "@/component/LeftValue";
import LogoList from "@/component/LogoList";
import { useState, useCallback } from 'react';
// @ts-ignore
import  './register.less'


// function RegisterForm  () {
//
//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [showCaptcha, setShowCaptcha] = useState(false);
//     const [existingNames, setExistingNames] = useState(['Alice', 'Bob']); // 已有的名称列表
//
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//         // 自动填充个人空间地址
//         // 比对显示已有名称的字号
//     };
//
//     const handlePhoneNumberChange = (e) => {
//         setPhoneNumber(e.target.value);
//         // 手机号格式校验
//         // 显示验证码输入框
//         if (e.target.value && isValidPhoneNumber(e.target.value)) {
//             setShowCaptcha(true);
//         } else {
//             setShowCaptcha(false);
//         }
//     };
//
//     const isValidPhoneNumber = (phoneNumber) => {
//         // 手机号格式校验逻辑
//         return /^\d{11}$/.test(phoneNumber);
//     };
//     const session = showCaptcha && <div className="field session-register__captcha-field">
//
//         <input type="text" name="captcha" id="captcha" required placeholder="请输入验证码" onChange={handleNameChange}/>
//         <button>发送验证码</button>
//
//     </div>
//
//     return (
//         <form className='form'>
//
//             <div className="field">
//                 <input className="session-register__name" required placeholder="姓名"
//                        type="text" value={name} onChange={handleNameChange}/>
//
//                 {!name && <span className="error">名字是必填项</span>}
//             </div>
//             <div className="field dizhi">
//
//                 <div className=" basic ">https://gitee.com/</div>
//                 <div className="namespace">
//                     <input className="session-register__username" required placeholder="个人空间地址"
//                            type="text" name="personalSpace" id="personalSpace" onChange={handleNameChange}/>
//                 </div>
//
//             </div>
//             <div className="field">
//                 <input className="session-register__account-input" required placeholder="请输入手机号码"
//                        type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber}
//                        onChange={handlePhoneNumberChange}/>
//             </div>
//             {session}
//             <div className="field error">
//                 <div className="psssword">
//                     <input required placeholder="密码不少于6位" type="password" name="password" id="password"
//                          />
//                 </div>
//             </div>
//             <div className="field">
//                 <input className="ui checkbox" type="checkbox" name="acceptTerm" id="acceptTerm"
//                       />
//                 我已阅读并同意
//                 <a target="_blank" href="/terms">使用条款</a>
//                 及
//                 <a target="_blank" href="/inactive_accounts">非活跃帐号处理规范</a>
//             </div>
//             <div className="field">
//                 <button name="button" type="submit"
//                         className="ui orange fluid submit button register-btn-submit large">
//                     立即注册
//                 </button>
//             </div>
//         </form>
//     )
//
// }




function RegisterForm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false);


    const handleNameChange = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        // 自动填充个人空间地址
        // 比对显示已有名称的字号
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

    const session = showCaptcha && (
        <div className="field session-register__captcha-field">
            <input type="text" name="captcha" id="captcha" required placeholder="请输入验证码" />
            <button>发送验证码</button>
        </div>
    );

    return (
        <form className='form'>
            <div className="field">
                <input className="session-register__name" required placeholder="姓名"
                       type="text" value={name}   onChange={handleNameChange}/>
                {!name && <span className="error">姓名是必填项</span>}
            </div>
            <div className="field dizhi">
                <div className=" basic ">https://gitee.com/</div>
                <div className="namespace">
                    <input className="session-register__username" required placeholder="个人空间地址"
                           type="text" name="personalSpace" id="personalSpace"  value={name} />
                </div>
            </div>
            <div className="field">
                <input className="session-register__account-input" required placeholder="请输入手机号码"
                       type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber}
                       onChange={handlePhoneNumberChange}/>
                {!showCaptcha && phoneNumber &&<span className="error">手机号格式错误</span>}
                {!phoneNumber && <span className="error">手机号为必填项</span>}
            </div>
            {session}
            <div className="field error">
                <div className="psssword">
                    <input required placeholder="密码不少于6位" type="password" name="password" id="password"/>
                </div>
            </div>
            <div className="field seceltSize">
                <input className="ui checkbox" type="checkbox" name="acceptTerm" id="acceptTerm"/>
                我已阅读并同意
                <a target="_blank" href="/terms">使用条款</a>
                及
                <a target="_blank" href="/inactive_accounts">非活跃帐号处理规范</a>
            </div>
            <div className="field">
                <button name="button" type="submit"
                        className="ui orange fluid submit button register-btn-submit large">
                    立即注册
                </button>
            </div>
        </form>

    );
}


// @ts-ignore


export default function Register() {


    return (
        <div className='box'>
            <div className='box_warp'>
                <div className="ui container container1">
                    <div className="session__body session__body1">
                        <div className="session-sidebox session-sidebox1">
                            <LeftValue></LeftValue>

                        </div>
                        <div className="session-form">
                            <div className="session-form__container session-form__container1">
                                <header className="session-form__header">
                                    <h2 className="session-form__title">
                                        <span>注册</span>
                                    </h2>
                                    <span className="pull-right">已有帐号？<Link to='/'> <a
                                    >点击登录</a></Link></span>
                                </header>

                                <RegisterForm></RegisterForm>
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
