import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['top', 'about', 'services', 'work', 'contact'];
    
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = window.scrollY + viewportHeight / 2;
      
      let closestSection = 'top';
      let closestDistance = Infinity;
      
      // 检查每个section，找到距离屏幕中心最近的那个
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionCenter = sectionTop + sectionHeight / 2;
          
          // 计算section中心点到视口中心的距离
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          // 如果这个section距离更近，则更新
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = sectionId;
          }
        }
      });
      
      setActiveSection(closestSection);
    };

    // check once when initializing
    handleScroll();

    // add scroll listener with throttling for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // clean up function
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
