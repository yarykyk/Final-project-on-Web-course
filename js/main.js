const freePlan = document.getElementById('freePlan'),
    standartPlan = document.getElementById('standartPlan'),
    premiumPlan = document.getElementById('premiumPlan'),
    cardBtn1 = document.querySelector('#Tpagebtn1'),
    cardBtn2 = document.querySelector('#Tpagebtn2'),
    cardBtn3 = document.querySelector('#Tpagebtn3');


cardBtn1.addEventListener('click', function(e){
    e.preventDefault();
    freePlan.classList.add('selected');
    standartPlan.classList.remove('selected');
    premiumPlan.classList.remove('selected');
})
cardBtn2.addEventListener('click', function(e){
    e.preventDefault();
    standartPlan.classList.add('selected'); 
    freePlan.classList.remove('selected');
    premiumPlan.classList.remove('selected');
})
cardBtn3.addEventListener('click', function(e){
    e.preventDefault();
    premiumPlan.classList.add('selected');
    freePlan.classList.remove('selected');
    standartPlan.classList.remove('selected');
})

const netflixDef = document.getElementById('netflix'),
    netflixColor = document.getElementById('netflixColor'),
    redditDef = document.getElementById('reddit'),
    redditColor = document.getElementById('redditColor'),
    discordDef = document.getElementById('discord'),
    discordColor = document.getElementById('discordColor'),
    spotifyDef = document.getElementById('spotify'),
    spotifyColor = document.getElementById('spotifyColor');


netflixDef.addEventListener('mouseover', overnetflix);
netflixDef.addEventListener('mouseout', outnetflix);

redditDef.addEventListener('mouseover', overreddit);
redditDef.addEventListener('mouseout', outreddit);

discordDef.addEventListener('mouseover', overdiscord);
discordDef.addEventListener('mouseout', outdiscord);

spotifyDef.addEventListener('mouseover', overspotify);
spotifyDef.addEventListener('mouseout', outspotify);


function overnetflix(){
    netflixDef.style.display = 'none';
    netflixColor.style.display = 'flex';
}
function outnetflix(){
    netflixColor.style.display = 'none';
    netflixDef.style.display = 'flex';
}

function overreddit(){
    redditDef.style.display = 'none';
    redditColor.style.display = 'flex';
}
function outreddit(){
    redditColor.style.display = 'none';
    redditDef.style.display = 'flex';
}

function overdiscord(){
    discordDef.style.display = 'none';
    discordColor.style.display = 'flex';
}
function outdiscord(){
    discordColor.style.display = 'none';
    discordDef.style.display = 'flex';
}

function overspotify(){
    spotifyDef.style.display = 'none';
    spotifyColor.style.display = 'flex';
}
function outspotify(){
    spotifyColor.style.display = 'none';
    spotifyDef.style.display = 'flex';
}


// slider 

let slides = document.querySelectorAll('.slide'),
    sliderContent = document.querySelectorAll('.slider-content'),
    point = document.querySelectorAll('.point'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0,
    order = 0,
    whiteLeft = document.querySelector('.arrow-white-left'),
    whiteRight = document.querySelector('.arrow-white-right'),
    redLeft = document.querySelector('.arrow-red-left'),
    redRight = document.querySelector('.arrow-red-right');

    console.log(sliderContent);

function reset(){
    for(let i = 0; i < slides.length; i++){
        sliderContent[i].style.border = '3px solid #ddd';
        point[i].style.width = '15px';
        point[i].style.background = '#dde0e4';
    }
}

function startSlider(){
    reset();
    sliderContent[current].style.border = '3px solid #f53838';
    point[current].style.width = '35px';
    point[current].style.background = '#f53838';
}
startSlider();

arrowRight.addEventListener('click', goRight);
arrowRight.addEventListener('mouseover', overRight);
arrowRight.addEventListener('mouseout', outRight);

function overRight(){
    arrowRight.style.background = '#f53838';
    whiteRight.style.display = 'block';
    redRight.style.display = 'none';
}
function outRight(){
    arrowRight.style.background = '#fff';
    redRight.style.display = 'block';
    whiteRight.style.display = 'none';
}
function goRight(){
    reset();
    // console.log(current);
    let tmp = order + 1,
        tmpC = tmp.toString();
    // slides[current].style.order = tmpC;
    if(current == (slides.length-1)){
        for(let i=0;i<slides.length-1;i++){
            slides[i].style.order = -1;
        }
        slides[slides.length-1].style.order = 0;
        current = 0;
        sliderContent[current].style.border = '3px solid #f53838';
        point[current].style.width = '35px';
        point[current].style.background = '#f53838';
    } else{
        slides[slides.length-1].style.order = 0;
        current++;
        sliderContent[current].style.border = '3px solid #f53838';
        point[current].style.width = '35px';
        point[current].style.background = '#f53838';
    }   
    console.log('right', current)
}

arrowLeft.addEventListener('click', goLeft);
arrowLeft.addEventListener('mouseover', overLeft);
arrowLeft.addEventListener('mouseout', outLeft);

function overLeft(){
    arrowLeft.style.background = '#f53838';
    whiteLeft.style.display = 'block';
    redLeft.style.display = 'none';
}
function outLeft(){
    arrowLeft.style.background = '#fff';
    redLeft.style.display = 'block';
    whiteLeft.style.display = 'none';
}
function goLeft(){
    reset();
    let tmp = order - 1,
        tmpC = tmp.toString();
        if(current!=0){
            slides[current-1].style.order = tmpC;
        }
    
    // console.log(current);
    if(current === 0){
        for(let i=0;i<slides.length;i++){
            slides[i].style.order = -1;
        }
        slides[slides.length - 1].style.order = -1;
        current = slides.length - 1;
        sliderContent[current].style.border = '3px solid #f53838';
        point[current].style.width = '35px';
        point[current].style.background = '#f53838';
    } else{
            slides[slides.length - 1].style.order = 1;
            current--;
            sliderContent[current].style.border = '3px solid #f53838';
            point[current].style.width = '35px';
            point[current].style.background = '#f53838';
        }   
    console.log('left', current)
}

point[0].addEventListener('click', point_1);
point[1].addEventListener('click', point_2);
point[2].addEventListener('click', point_3);

function point_1(){
    reset();
    current = 0;
    point[0].style.width = '35px';
    point[0].style.background = '#f53838';
    for(let i = 0; i < slides.length; i++){
        if(i == 0){
            sliderContent[i].style.border = '3px solid #f53838';
            let tmp = order;
            let tmpC = tmp.toString();
        }else{
            let tmp = order + 1;
            let tmpC = tmp.toString();
        }
    }
    console.log('one', current)
}
function point_2(){
    reset();
    current = 1;
    point[1].style.width = '35px';
    point[1].style.background = '#f53838';
    for(let i = 0; i < slides.length; i++){
        if(i == 1){
            sliderContent[i].style.border = '3px solid #f53838';
            let tmp = order;
            let tmpC = tmp.toString();
        }else{
            let tmp = order + 1;
            let tmpC = tmp.toString();
        }
    }
    console.log('two', current)
}
function point_3(){
    reset();
    current = 2;
    point[2].style.width = '35px';
    point[2].style.background = '#f53838';
    for(let i = 0; i < slides.length; i++){
        if(i == 2){
            sliderContent[i].style.border = '3px solid #f53838';
            let tmp = order;
            let tmpC = tmp.toString();
        }else{
            let tmp = order + 1;
            let tmpC = tmp.toString();
        }
    }
    console.log('three', current)

}


// Grafic

const x_array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    y_array = [1000,2000,2000,5000,4000,6000,7000,7000,8000,11000,10000,12000];

const data = [{
    x: x_array,
    y:y_array,
    // mode: 'markers'
    mode: 'lines'
}];


// xaxis:{title: {text: 'Mounth', font: {color: 'white', size:20}}, tickfont:{color: 'green'}},

const layout = {
    xaxis: {
        title: {    
          text: 'Mounth',
          font: {
            color: 'black', 
            size: 25
          }
        },
        tickfont:{
            color: '#4F5665'
        }
    },
    yaxis: {
        title: {
          text: 'number of users',
          font: {
            color: 'black', 
            size: 25
          }
        },
        tickfont:{
            color: '#4F5665'
        }
    },
    title: {
        text: 'rating of happy customers over the past year',
        font: {
          color: 'black',
          size: 35
        }
    },
    plot_bgcolor: "white",
    paper_bgcolor: "white"
};

Plotly.newPlot('GraficOfHappyWhite', data, layout)


// -------------------------------------\

// dark mode
body = document.querySelector('body');
GraficOfHappyWhite = document.querySelector('#GraficOfHappyWhite');
GraficOfHappyBlack = document.querySelector('#GraficOfHappyBlack')
darkmodeButton = document.querySelector('#darkStyleButton');

function darSyleChange() {
    body.classList.toggle('dark');
    if (layout.plot_bgcolor === "white") {
        layout.plot_bgcolor = "rgb(26, 26, 27)";
        layout.paper_bgcolor = "rgb(35, 35, 39)";
        layout.xaxis.title.font.color = 'white'
        layout.yaxis.title.font.color = 'white'
        layout.title.font.color = 'white'
        layout.xaxis.tickfont.color = 'white'
        layout.yaxis.tickfont.color = 'white'
    } else {
        layout.plot_bgcolor = "white";
        layout.paper_bgcolor = "white";
        layout.xaxis.title.font.color = 'black'
        layout.yaxis.title.font.color = 'black'
        layout.title.font.color = 'black'
        layout.xaxis.tickfont.color = '4F5665'
        layout.yaxis.tickfont.color = '4F5665'
    }
    Plotly.relayout("GraficOfHappyWhite", layout);
}


darkmodeButton.addEventListener('click', darSyleChange);

// registration

sign_up = document.querySelector('#sign_Up');
registration = document.querySelector('#registrated');
closeRegister = document.querySelector('#CloseRegist');
form = document.querySelector('#registForm');

const SubmitRegister = document.querySelector('#SubmitRegister');

sign_up.addEventListener('click', function(e){
    e.preventDefault();
    registration.style.display = 'flex';
});


SubmitRegister.addEventListener('click', function(e){
    e.preventDefault();
    let password1 = document.querySelector('input[name="password"]').value,
        password2 = document.querySelector('input[name="password2"]').value,
        namee = document.querySelector('input[name="name"]').value,
        tel = document.querySelector('input[name="tel"]').value,
        email = document.querySelector('input[name="email"]').value,
        erorrPassword = document.querySelector('#erorrPassword'),
        errorField = document.querySelector('#errorField'),
        correct = document.querySelector('#correct');

    console.log(namee)
    function clearFields(){
        document.querySelector('input[name="password"]').value = '';
        document.querySelector('input[name="password2"]').value = '';
        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="tel"]').value = '+380';
        document.querySelector('input[name="email"]').value = '';
    }
    if(password1 != password2 && registration.offsetHeight !== 1050){
        erorrPassword.style.display = 'block';
        registration.style.height = '650px';
        document.querySelector('input[name="password2"]').value = '';
        setTimeout(() => {
            erorrPassword.style.display = 'none';
            registration.style.height = '590px';
          }, 1500);

    }else if(namee == '' || tel == '+380' || email == '' || password1 == ' ' || password2 == ''  && registration.offsetHeight !== 1050){
        errorField.style.display = 'block';
        registration.style.height = '650px';
        setTimeout(() => {
            errorField.style.display = 'none';
            registration.style.height = '590px';
          }, 1500);
    }else if(registration.offsetHeight !== 1050){
        correct.style.display = 'block';
        registration.style.height = '650px';
        setTimeout(() => {
            correct.style.display = 'none';
            registration.style.height = '590px';
            registration.style.display = 'none';
          }, 2500);
        clearFields();
    }
    // mobile if
    if(registration.offsetHeight === 1050 && password1 != password2){
        erorrPassword.style.display = 'block';
        registration.style.height = '1200px';
        document.querySelector('input[name="password2"]').value = '';
        setTimeout(() => {
            erorrPassword.style.display = 'none';
            registration.style.height = '1050px';
          }, 1500);
    }else if(registration.offsetHeight === 1050 && namee == '' || tel == '+380' || email == '' || password1 == ' ' || password2 == ''){
        errorField.style.display = 'block';
        registration.style.height = '1150px';
        setTimeout(() => {
            errorField.style.display = 'none';
            registration.style.height = '1050px';
        }, 1500);
    }else if (registration.offsetHeight === 1050){
        correct.style.display = 'block';
        registration.style.height = '1150px';
        setTimeout(() => {
            registration.style.height = '1050px';
            correct.style.display = 'none';
            registration.style.display = 'none';
          }, 2500);
        clearFields();
        }
    });

closeRegister.addEventListener('click', function(e){
    e.preventDefault();
    registration.style.display = 'none';
});