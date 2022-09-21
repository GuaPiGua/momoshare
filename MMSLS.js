/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24149251&pid=ad15b3bde58196ac7fc7f906b1a4d46d&tid=8ca15c5cfe922b06286219ce7f35f56c",
    "https://www.maimemo.com/share/page?uid=24149251&pid=ad15b3bde58196ac7fc7f906b1a4d46d&tid=8ca15c5cfe922b06286219ce7f35f56c",
    "https://www.maimemo.com/share/page?uid=24149251&pid=ad15b3bde58196ac7fc7f906b1a4d46d&tid=8ca15c5cfe922b06286219ce7f35f56c",
    "https://www.maimemo.com/share/page?uid=24149251&pid=ad15b3bde58196ac7fc7f906b1a4d46d&tid=8ca15c5cfe922b06286219ce7f35f56c",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
