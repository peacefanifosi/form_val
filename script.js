let form = document.getElementById('form')
let named = document.getElementById('name')
let title = document.getElementById('title')
let email = document.getElementById('email')
let pnumber = document.getElementById('pnumber')
let errormessage = document.getElementById('errormessage')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const error =[]
    if(named.value == '' || named.value.length > 35){
        error[0] = 'Your name is required'
        document.getElementById('nam').style.display = 'none'        
    }
    if(title.value == ''){
            error[1] = 'Provide a valid title'
            document.getElementById('tit').style.display = 'none'        

          }
          if(email.value.includes('@') && email.value.includes('.')){

          }
          else{
            error[2] = 'Enter a valid email'
            document.getElementById('ema').style.display = 'none'        

          }
          if(pnumber.value.startsWith('081') 
            || pnumber.value.startsWith('070')
            || pnumber.value.startsWith('080')
            || pnumber.value.startsWith('091')
            || pnumber.value.length <11
                                       ){

    }else{
        error[3] = 'Enter a valid Phone Number'
        document.getElementById('pnum').style.display = 'none'        

    }
    if(upload.value == ''){
      error[4] = 'choose a file'
    }
          let err =''
          for(let i in error){
            err += error[i] + '<br>'
          }
          errormessage.innerHTML = err
          errormessage.style.color = 'red'
          errormessage.style.fontSize = '20px'
          
          
    const result =[named.value , title.value , email.value , pnumber.value , upload.value]
    let res = ''
    for(let i in result){
      res += result[i] + '<br>'
    }
    document.getElementById('nam').innerHTML = '' + result[0]
    document.getElementById('tit').innerHTML = result[1]
    document.getElementById('ema').innerHTML = result[2]
    document.getElementById('pnum').innerHTML = result[3]
    document.getElementById('upl').innerHTML = result[4]
})

function filedetails(){
  let upload = document.getElementById('upload').files[0]
  let size = ((upload.size)/1024).toFixed(2)
  let lastmodified = upload.lastModifiedDate
  let imagenmae = upload.name
  document.getElementById('imagedetails').innerHTML = `
Name: ${imagenmae} <br> Size: ${size} MB <br> 
  Last Modified Date: ${lastmodified} <br>`
  // console.log(upload)  
}