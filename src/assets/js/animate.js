function animate(obj, target, callback) {
  clearInterval(obj.timer);

  obj.timer = setInterval(function() {
    //(目标位置 - 对象距左侧距离 ) 除以 10
    var step = (target - obj.offsetLeft) / 10;
    // 正数向上取整,负数向下取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      callback && callback();
    } else {

      obj.style.left = obj.offsetLeft + step + 'px';
    }
  }, 15)
}
