var getAPI = function(link){
  var api_data;
  $.ajax({
    type: 'GET',
    url: link,
    dataType: 'json',
    async: false,
    success: function(data){
      api_data = data;
    }
  });
  return api_data;
};
