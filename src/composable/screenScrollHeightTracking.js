// useScrollToTop.js
import { ref, onMounted, onUnmounted } from 'vue';

export function goScrollToTop() {
  const 
      showButton = ref(false),
      buttonClass = ref('scroll_to_top_body'),
      footerHeight = 200;

  const handleScroll = () => {
    const scrollY = 
          window.scrollY,
          documentHeight = document.documentElement.scrollHeight,
          windowHeight = window.innerHeight;

    showButton.value = scrollY > 800;

    buttonClass.value =
      scrollY + windowHeight >= documentHeight - footerHeight
        ? 'scroll_to_top_footer'
        : 'scroll_to_top_body';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { showButton, buttonClass, scrollToTop };
}
