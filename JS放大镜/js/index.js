window.onload = function () {
    let box = document.getElementById('box'), // box
        smallPic = document.getElementsByClassName('small_pic')[0], // 左侧小图片
        slider = document.getElementsByClassName('slider')[0], // 滑块
        bigPic = document.getElementsByClassName('big_pic')[0];
    bigImg = bigPic.getElementsByTagName('img')[0]; // 打图片的位置

    // 移出
    smallPic.onmouseout = () => {
        slider.style.display = 'none';
        bigPic.style.display = 'none';
    }
    // 移入
    smallPic.onmousemove = (event) => {
        slider.style.display = 'block';
        bigPic.style.display = 'block';
        // event.clientX 当期移入点与X轴的距离  slider.offsetWidth / 2 滑块宽度的一半
        let left = event.clientX - slider.offsetWidth / 2;
        let top = event.clientY - slider.offsetHeight / 2;
        // 最大移动范围
        if (left < 0) {
            left = 0;
        } else if (left > (smallPic.offsetWidth - slider.offsetWidth)) {
            left = smallPic.offsetWidth - slider.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        } else if (top > (smallPic.offsetHeight - slider.offsetHeight)) {
            top = smallPic.offsetHeight - slider.offsetHeight;
        }
        slider.style.left = `${left}px`;
        slider.style.top = `${top}px`;
        bigImg.style.left = -(left * 2) + 'px';
        bigImg.style.top = -(top * 2) + 'px';
    }
}