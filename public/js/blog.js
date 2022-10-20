let dataBlog = []

function addProject(event){
    event.preventDefault();
    
    let project = document.getElementById("input-project").value
    let startDate = document.getElementById("input-start-date").value
    let endDate = document.getElementById("input-end-date").value
    let checkbox = document.getElementsByName("inputCheck").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-blog-image").files[0]

    // membuat url gambar nantinya tampil
    image = URL.createObjectURL(image)

    console.log(image)

    let blog= {
        project,
        startDate,
        endDate,
        checkbox,
        description,
        image,
        postAt: new Date(),
        author: "Muhammad Fakhrur Rizal"

    }


    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}">
            </div>
            <div class="blog-content">
                <h1 class="title">
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].project}
                    </a>
                </h1>
                <div class="detail-blog-content">
                    Durasi : ${getDistanceTime(dataBlog[index].postAt)}
                </div>
                <p>
                    ${dataBlog[index].description}
                </p>
            </div>
            <div class="icon-download">
                    <img src="./assets/playstore.png" alt="Playstore">
                    <img src="./assets/android.png" alt="Android">
                    <img src="./assets/java.png" alt="Java">
            </div>
            <div class="btn-edit">
                    <button>update</button>
                    <button>delete</button>
               </div>
        </div>
        `
    }
}



function getFullTime(time) {

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let date = time.getDate()
    console.log(date)

    let monthIndex = time.getMonth()
    console.log(monthIndex)

    let year = time.getFullYear()
    console.log(year)

    let hours = time.getHours()
    let minutes = time.getMinutes()

    console.log(hours)

    if (hours <= 9) {
        hours = "0" + hours
    } 
    
    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    // 14 Oct 2022 09:07 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {
    let timeNow = new Date()
    let timePost = time

    let distance = timeNow - timePost //milisecond
    console.log(distance)

    let milisecond = 1000 
    let secondInHours = 3600 
    let hoursInDay = 24 

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `${distanceDay} hari yang lalu`
    } else if (distanceHours > 0) {
        return `${distanceHours} jam yang lalu`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} menit yang lalu`
    } else {
        return `${distanceSecond} detik yang lalu`
    }
}


setInterval(function() {
    renderBlog()
}, 3000)
