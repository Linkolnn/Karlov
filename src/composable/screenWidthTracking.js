import { ref, onMounted, onBeforeUnmount, } from 'vue';

export function screenWidth(customWidth) {
  
  const 
    screenWidth = ref(window.innerWidth >= customWidth),
    windowWidthBtn = ref(window.innerWidth),
    windowWidth = ref(false);

  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
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

  return { screenWidth, windowWidthBtn, windowWidth };
}

