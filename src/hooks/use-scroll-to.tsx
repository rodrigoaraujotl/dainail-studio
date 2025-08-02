const scrollTo = (goToItem, external = false) => {
    const element = document.getElementById(goToItem);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      if (external && goToItem == 'whatsapp') {
        window.open(`https://wa.me/5511949976751?text=%20Ol%C3%A1!%20Tenho%20interesse%20em%20Cursos`, '_blank');
      }
    }
};

export default scrollTo;