const followToggle = require('./follow_toggle.js'); 


$(() => { 
  const $el = $('button.follow-toggle');
  const followTog = new followToggle($el);

  followTog.render();
  followTog.handleClick();
});