window.onload = () => {
    // 封装选择器
    let $ = (selector) => {
        return document.querySelector(selector);
    }

    let box = $('.box'),
        btn = $('.btn'),
        text = $('text'),
        bg = $('.bg'),
        flag = false; // 验证是否通过

    // 时间处理
    btn.onmousedown = function(e) {
        var e = e || window.event; // 兼容处理
        let downX = e.clientX; // 按下后与X轴的间距
        btn.onmousedown = function(event) {
            var moveX = event.clientX - downX; // 移动的距离
            if (moveX > 0) {
                this.style.left = `${moveX}px`; // 滑块与左边的间距 
                bg.style.width = `${moveX}px`; // 绿色背景的宽度
                // 验证通过
                if (moveX >= (box.offsetWidth - btn.offsetWidth)) { // 最大移动范围
                    flag = true;
                    text.innerHTML = '通过验证';
                    text.style.color = `#fff`;
                    btn.onmousemove = null; // 清除事件
                    btn.onmousedown = null;
                }
            }
        }
    };

    btn.onmouseup = function(e) {
        btn.onmousemove = null; // 清除事件
        if (flag) return; // 跳出函数体
        this.style.left = 0; // 滑块与左边的间距
        bg.style.width = 0; // 绿色背景的宽度
    }
}