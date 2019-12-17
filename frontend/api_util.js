const APIUtil = {
  followUser: id => {
    $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json',
    }); 
  },

  unfollowUser: id => {
    $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json',
    }); 
  }
};

module.exports = APIUtil;