const apigwUrl = 'https://8rufvf08rh.execute-api.ap-northeast-1.amazonaws.com/dev/translate?input_text='
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async () => {
    const textMessage = document.getElementById('message')
    console.log("textMessage:" + textMessage.value)

    // AjaxでAPIGWへGET
    const response = await fetch(apigwUrl + textMessage.value, {
        method: 'GET',
        mode: 'cors',
        // body: "param=" + paramVar,
        headers: {
          'Content-Type': 'application/json'
    }})
    const json = await response.json()
    console.log(json['output_text']);
})
