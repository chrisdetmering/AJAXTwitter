class FollowToggle { 

  constructor($el) { 
    this.$el = $el;
    this.userId = $el.attr('user-id');
    this.followState = $el.attr('follow-state');
  }

  render() { 
    if (this.followState === 'true') { 
      this.$el.html('Unfollow')
    } else { 
      this.$el.html('Follow')
    }

  }

  handleClick() { 
    this.$el.on('click', (event) => { 
      
      if (this.followState === 'false') { 
        event.preventDefault();
        var $button = this; 
        
        $.ajax({ 
          type: 'POST',
          url: `/users/${this.userId}/follow`, 
          dataType: 'json',
          success(data) { 
            $button.followState = 'true'; 
            $button.render();
          }
        }); 

      } else { 
        event.preventDefault();
        var $button = this;

        $.ajax({
          type: 'DELETE',
          url: `/users/${this.userId}/follow`,
          dataType: 'json',
          success(data) {
            $button.followState = 'false';
            $button.render();
          }
        }); 

      }
    }); 
  }


}

module.exports = FollowToggle; 