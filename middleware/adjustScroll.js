export default function({ from }) { 
    const scrollPos = from?.meta[0].scrollPos
    console.log('middleware',scrollPos);
    
    if (scrollPos && Object.keys(scrollPos).length > 0) {
      scrollPos.y = window.scrollY || 0
      scrollPos.x = window.scrollX || 0
    }
  }