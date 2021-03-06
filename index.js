const apigwUrl = 'https://8rufvf08rh.execute-api.ap-northeast-1.amazonaws.com/dev/translate'
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async () => {
    const textMessage = document.getElementById('message')
    const response = await fetch(apigwUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({input_text: textMessage.value})
    })
    const json = await response.json()
    document.getElementById('translated-message').value = json['output_text']
})
