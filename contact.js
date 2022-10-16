function showData(){
    let Name = document.getElementById('input-name').value;
    let Email = document.getElementById('input-email').value;
    let Phone = document.getElementById('input-phone').value;
    let Subject = document.getElementById('input-subject').value;
    let Message = document.getElementById('input-message').value;

    console.log(Name);
    console.log(Email);
    console.log(Phone);
    console.log(Subject);
    console.log(Message);

    if(Name == ''){
        return alert("Nama Harus Diisi");
    }else if(Email == ''){
        return alert("Email Harus Diisi");
    }else if(Phone == ''){
        return alert("Nomor Telepon Harus Diisi");
    }else if(Subject == ''){
        return alert("Subject Harus Diisi");
    }else if(Subject == ''){
        return alert("Subject Harus Diisi");
    }

    let emailReceiver = 'kangizal24@gmail.com'

    let a = document.createElement('a');
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${Subject}&body=Hallo Kak Rizal, perkenalkan nama saya ${Name},%0d%0A${Message}`;

    a.click();
}