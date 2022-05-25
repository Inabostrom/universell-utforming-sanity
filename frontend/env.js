let PROJECT_ID = "pkjw0jgx";
    let DATASET = "production";

    let QUERY = encodeURIComponent('*[_type == "post"] | order(numberOfOrder asc)'); //sorter på rekkefølge på nummer

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;


    fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {

      console.log(result);
      // get the list element, and the first item
      let list = document.querySelector("ul");
    
      //let firstListItem = document.querySelector("ul li");

      if (result.length > 0) {
        // remove the placeholder content
        console.log(list);
        result.forEach((post) => {
        // create a list element for each pet
        let listItem = document.createElement("li");
        let contentBox = document.createElement("div");
     
        let colorCode = post.colorCode;
        if(colorCode == null || !colorCode.startsWith("#")){
          colorCode = "transparent";
          contentBox.classList.add("no-shadow-box");
        }else{
          contentBox.classList.add("simpleBox");
        }
        contentBox.style.backgroundColor = colorCode;
        // if(post.colorCode == "blue"){
        //   contentBox.classList.add("blue");
        // }else if(post.colorCode == "red"){
        //   contentBox.classList.add("red");
        // }else{
        //   contentBox.classList.add("transparent");
        // }

        if(post.showHeader){
          let header = document.createElement(post.headerType);
          header.textContent = post.headerText;
          contentBox.appendChild(header);
        }

        

        //style teksten iini boksene
        //style margin/padding--simple box
        if(post.body != null){

          post.body.forEach((bodyElement) => {
            let contentPElement = document.createElement("p");
            contentPElement.classList.add("styleForP");
           
            bodyElement.children.forEach((child) => {
              
              if(child.marks.includes("strong")){
                let strongElement = document.createElement("b")
                strongElement.textContent = child.text;
                contentPElement.appendChild(strongElement);
              }else {
                let spanElement = document.createElement("span");
                spanElement.textContent += child.text;
                contentPElement.appendChild(spanElement);
              }

            });

            contentBox.appendChild(contentPElement);
          });
  
        }
        listItem.appendChild(contentBox);

          // add the pet name as the text content
          //listItem.textContent = post?.title;

          // add the item to the list
          list.appendChild(listItem);
        });
      }
    })
    .catch((err) => console.error(err));

// import React from 'react'
// import myConfiguredSanityClient from './sanityClient'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(myConfiguredSanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }