export const disableAnim = () => {
  $('#disableAnim').click(function () {
    $('body').toggleClass('disableAnimation');
    if (this.innerText === 'Disable Animations') {
      console.log('yes');
      $(this).text('Enable Animations');
    } else {
      $(this).text('Disable Animations');
    }
  });
};
