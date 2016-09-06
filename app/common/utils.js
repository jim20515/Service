/**
 * Created by ljunb on 16/5/27.
 */
let Util = {
    /*
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     *
     * */
    get: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            }).done();
    },

    //post请求
    post: function (url, data, callback) {
      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
        // callback(responseText);
      }).done();
    },

    log:function (obj){
      var description = "";
       for(var i in obj){
          var property=obj[i];
          description+=i+" = "+property+"\n";
       }
       alert(description);
    },
}

export default Util;
