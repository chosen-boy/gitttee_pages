import  '../pages/Login/login.less'
import * as React from "react";

function  LeftValue() {







    const getDataByIndex = () => {
        const datalist = [
            {
                "name": "李铭健",
                "position": "骑鹅旅行 Head of PMO",
                "content": "Gitee 企业版不只是一个代码托管的工具，更是带着深深 Geek 文化的项目管理平台。在 Gitee 企业版上，iGola.com 的团队协作变得更加容易，整个流程管理变得更加透明流畅。"
            },
            {
                "name": "霍泰稳",
                "position": "极客邦科技创始人",
                "content": "类似 GitHub 这样的代码托管服务，是软件研发过程中不可缺少的一环，在国内目前还没有特别好的服务，Gitee 很好地填补了这个空白。一起努力，越来越好，为中国技术人群提供更多更贴心的服务。"
            },
            {
                "name": "阮一峰",
                "position": "知名技术博主",
                "content": "Gitee 是国内代码托管服务的领先者，很认真的产品。适合国内程序员习惯，访问速度极快。"
            },
            {
                "name": "贤心",
                "position": "layui",
                "content": "Gitee 已成为我工作的依赖，从个人私有库到企业版，每一项解决方案都直击痛点。而它更吸引人的，是开放的姿态和优质的本土化基因。告诉世界：我们在自豪地使用 Gitee！"
            }
        ];
        let currentIndex =Math.floor(Math.random() * datalist.length);
        currentIndex = (currentIndex + 1) % datalist.length;
        const data = datalist[currentIndex];

        return data;
    };


// 在页面登录或刷新时调用该函数获取随机数据
    const randomData = getDataByIndex();
    console.log(randomData);

    const valueItem = <div className="session-sidebox__content">
        <div className="session-sidebox-content__container">
            <div className="session-sidebox-comments__header">
                <span className="session-sidebox-comments__title">{randomData.name}</span> <span
                className="session-sidebox-comments__position">{randomData.position}</span>

            </div>
            <div className="session-sidebox-comments__content">
                {randomData.content}
            </div>
        </div>
    </div>
    return (
        <div className="session-sidebox__container ">
            <div className="session-sidebox__header">
                <div className="session-sidebox__logo">

                    <img alt="logo" src='../assets/logo.svg'/>
                </div>

                <h2 className="session-sidebox__subtitle">
                    企业级 DevOps 研发管理平台
                </h2>
            </div>
            {valueItem}
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
    )
}

export default LeftValue