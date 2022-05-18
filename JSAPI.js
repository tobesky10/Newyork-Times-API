//NYTimes API KEY  ===> NkZOcxAggbP50g0GLs2tqggVAFVi2Zri
dataEl = document.getElementById('data-el')

function getNY(){
  let data = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NkZOcxAggbP50g0GLs2tqggVAFVi2Zri')
  .then(result=>result.json())
  .then(values=>{
    for( let i in values.results){
     
      if(values.results[i].multimedia){
        var str = ' '
        var div = document.createElement('div')
        var imgEl = document.createElement('img')
        var imgDiv = document.createElement('div')
        
        
        for( let j=0; j<values.results[i].multimedia.length; j++ ){
          var imageURL = ` ${ values.results[i].multimedia[j].url} `
          imgEl.src =  `${imageURL}`
          imgEl.setAttribute('style', 'width: auto; height: 100%; margin-right:1rem;')
          imgDiv.appendChild(imgEl)
          imgDiv.setAttribute('style', 'height: 100%; float: left;')
          div.appendChild(imgDiv)
          // var caption = ` ${ values.results[i].multimedia[j].caption} `
          
        
        }
        //str += `<h5> ${caption} </h5>`
      div.setAttribute(
        'style',
        'background-color: rgb(196, 187, 187); color: white; max-width: 50rem; height: 10rem; padding: 1rem; margin-bottom: 1rem; margin-left:4rem; margin-right:1rem; border-radius: 4px;',
      )
      str += `<h3> ${ values.results[i].title} </h3>`
      str += `<p>Abstract: ${ values.results[i].abstract} </p>`
      str += `<p style=" padding-top:1rem; "><a href ='${values.results[i].url}' target="_blank" style="color:black; text-decoration:none;"> Full story ></a></p>`
      str += `<hr>`
      div.innerHTML += str
      

      
      dataEl.appendChild(div)
      }
      else{
        console.log('Some media values are missing on the main post')
      }
      
      
      }
 
  }   
   
   )
}

getNY()


// https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json

function popular(){
  var sideContainer = document.querySelector('.sidebar-container')
  //var sideBar = document.querySelector('.sidebar-main')
  fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=NkZOcxAggbP50g0GLs2tqggVAFVi2Zri')
  .then(result => result.json())
  .then(values=>{
    
    for(let i in values.results){
      if( i%10 === 0 ){
        console.log(i)
      
        if( values.results[i].media.length !== 0){
          var div2 = document.createElement('sidebar-main')
          
          for(let j=0; j < values.results[i].media.length; j++ ){

            if(values.results[i].media[j]['media-metadata'] !==0){
              
              var str2 =' '
              
              var imgtag2 = document.createElement('img')
              var imgDiv2 = document.createElement('div')
              for(let k=0; k< values.results[i].media[j]['media-metadata'].length; k++) {
                
                imgtag2.src = `${values.results[i].media[j]['media-metadata'][k].url}`
                imgtag2.setAttribute('style',  'width: 7rem; height: 100%;')
                imgDiv2.appendChild(imgtag2)
                imgDiv2.setAttribute('style', ' height:100%; margin-right:1rem;')
                sideContainer.appendChild(imgDiv2)
                //var caption2 = ` ${ values.results[i].multimedia[j].caption} `


            }
              
          
            }
            
  
          }
            str2 +=`<h4> ${values.results[i].title} </h4>`
            str2 +=`<p> ${values.results[i].abstract} </p>`  
            str2 +=`<hr>`
            div2.innerHTML += str2
          
            div2.setAttribute('style', ' display: block; height: fit-content; padding-bottom: 1rem; max-width: 18rem; margin-right:3rem;text-overflow: ellipsis; ')
            sideContainer.appendChild(div2)
        }
        else{
          console.log('Some empty media exists and was skipped over!')
        }

        
      }
    
      //sideBar.appendChild(div2)

    }
    console.log(values.results)

  } )

} 


popular()




