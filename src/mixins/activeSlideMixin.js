const activeSlideMixin = {
  computed: {
    activeSlides() {
      const currentSlideIndex = this.sliderItems.findIndex(
        (slide) => slide.id === this.currentSlide
      );
      if (currentSlideIndex === 0) {
        return [this.sliderItems[0], this.sliderItems[1]];
      } else if (currentSlideIndex === this.sliderItems.length - 1) {
        return [
          this.sliderItems[this.sliderItems.length - 2],
          this.sliderItems[this.sliderItems.length - 1],
        ];
      } else {
        return [
          this.sliderItems[currentSlideIndex - 1],
          this.sliderItems[currentSlideIndex],
          this.sliderItems[currentSlideIndex + 1],
        ];
      }
    },
  },
};

export default activeSlideMixin;
