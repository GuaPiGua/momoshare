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
    
    "https://www.maimemo.com/share/page?uid=24149251&pid=341c6fcd3702d9c50d2bd979c2765a13&tid=10b7959ac41a37fa7ea026a0b4ab4a4e",
    "https://www.maimemo.com/share/page?uid=24149251&pid=341c6fcd3702d9c50d2bd979c2765a13&tid=10b7959ac41a37fa7ea026a0b4ab4a4e",
    "https://www.maimemo.com/share/page?uid=24149251&pid=341c6fcd3702d9c50d2bd979c2765a13&tid=10b7959ac41a37fa7ea026a0b4ab4a4e",
    "https://www.maimemo.com/share/page?uid=24149251&pid=341c6fcd3702d9c50d2bd979c2765a13&tid=10b7959ac41a37fa7ea026a0b4ab4a4e",
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
