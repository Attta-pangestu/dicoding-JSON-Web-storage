


const storageKey = 'LOCAL_USER_DATA';
const submitButton = document.getElementById('form-data-user');


// Event Window First Load
window.addEventListener('load', function(){
  renderUserList() ;
}) ; 

// Event Mengklik Tombol Submit
submitButton.addEventListener('submit', function(event) {
  const inNama = document.getElementById('nama').value;
  const inUmur = document.getElementById('umur').value;
  const inDomisili = document.getElementById('domisili').value;

  const newData = {
    nama: inNama,
    umur: inUmur,
    domisili: inDomisili
  };
  // Memasukkan data input ke local Storage
  putUserList(newData);
  renderUserList();

  event.preventDefault();
});




// Memeriksa fungsionalitas CheckStorage

function checkStorage() {
  return typeof (Storage) !== 'undefined';
}

// Fungsi untuk menaruh data ke storage 

function putUserList(data) {
  if (checkStorage) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      // Mengambil data dari local storage sebelumnya dari format string ke format array object
      userData = JSON.parse(localStorage.getItem(storageKey));
      // console.log(data);
    }

    userData.unshift(data);
   

    localStorage.setItem(storageKey, JSON.stringify(userData));
    console.log(localStorage.getItem(storageKey))
  }
}

function getUserList () {
  return JSON.parse(localStorage.getItem(storageKey)) ; 
}



// Fungsi Render Data User 

function renderUserList() {
   const userData = getUserList() ; 
   const userDataField = document.getElementById('user-list-detail') ;
   userDataField.innerHTML = '' ; 

  // Memanggil 5 data terakhir 
  for(let i = 0 ; i < 5 ; i++) {
    let row = document.createElement('tr') ; 
    row.innerHTML = `<td> ${userData[i].nama} </td>`;
    row.innerHTML += `<td> ${userData[i].umur} </td>`;
    row.innerHTML += `<td> ${userData[i].domisili} </td>`;
    userDataField.appendChild(row) ;    
  }

}
