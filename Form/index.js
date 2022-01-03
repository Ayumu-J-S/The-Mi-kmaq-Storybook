var result_resp = document.getElementById("img");

axios
  .get("/get")
  .then(resp => {
    
    result_resp.innerHTML += `<p><br>Hellos${JSON.stringify(resp)}</p><br>`;
    // var getChapter = response.data[1].chapter
    // var getFiles = response.data[1].pages
  //   var pageLength = response.data.length;
  //   result_resp.innerHTML += `<p><br>Hello s${pageLength}</p><br>`;
  //   for (let i = 1; i < pageLength; i++) {
  //     for (let j = 0; j < 12; j++) {
  //       // var file_names = JSON.stringify(response.data.filenames[i][j]).replace(/"/g,"");
  //       var file_names = response.data[i].filenames[j];
  //       console.log("files are" + file_names);
  //       //             if (j == 1 || j == 2) {
  //       //                 result_resp.innerHTML += `<iframe src= "UPLOADS/${file_names}"" width="500" height="200">
  //       // </iframe>`;
  //       //             }
  //       if (j < 4) {
  //         result_resp.innerHTML += `<img src ="UPLOADS/${file_names}" width="900px"><br>`;
  //       } else if (j < 7) {
  //         result_resp.innerHTML += `<audio controls autoplay muted>
  //   <source src="UPLOADS/${file_names}"" type="audio/mp3"></audio>`;
  //       } else {
  //           result_resp.innerHTML+=file_names;
  //       }

  //     }
  //   }
  // })
  // .catch((error) => {
  //   result_resp.innerHTML += error;
  // });
  });