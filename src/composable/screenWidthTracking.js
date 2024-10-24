import { ref, onMounted, onBeforeUnmount, } from 'vue';

export function screenWidth(customWidth) {
  
  const 
    screenWidth = ref(window.innerWidth >= customWidth),
    windowWidthBtn = ref(window.innerWidth),
    windowWidth = ref(false);

  const isDesktop = ref(false);  
  const isTablet = ref(false);   
  const isMobile = ref(false);

  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;

    isDesktop.value = screenWidth > 1050;
    isTablet.value = screenWidth <= 1050 && width >= 450;
    isMobile.value = screenWidth < 450;

    windowWidth.value = screenWidth.value >= customWidth;
    windowWidthBtn.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
  });

  return { screenWidth, windowWidthBtn, windowWidth, isDesktop, isTablet, isMobile };
}

