var currentDay = 4
var taco = document.querySelector('.day-modal')
var numOfDays = document.querySelectorAll('.calendar-item')
var totalDays = numOfDays.length - 1
console.log(PT)

document.querySelector('.collecticons-xmark').addEventListener('click', function(){
	killModal()
})

document.querySelector('.full-mask-exit').addEventListener('click', function(){
	killModal()
})

document.querySelector('.oh-the-days').addEventListener('click', function(){
	console.log(currentDay)
})

numOfDays.forEach(link => {
	link.addEventListener('click', function(event) {
		var classes = String(event.srcElement.className).replace( /^\D+/g, '')
		makeModalsGreatAgain(classes)
	})
})

function makeModalsGreatAgain(value) {
  taco.className = 'day-modal fadeIn'
  currentDay = value - 1
  sunrise()
}

function killModal() {
  taco.className = 'day-modal fadeOut'
}

function sunrise() {
	var newTitle = PT.when[currentDay]
	var newLink = '<a href="' + PT.link[currentDay] + '">' + PT.linkname[currentDay] + '</a>'
	var newNotes = PT.notes[currentDay]

	if(PT.more[currentDay]) {
		var newImage = '<img src="./assets/graphics/full/' + PT.month[currentDay] + '/f-' + PT.day[currentDay] + 'a.' + PT.imageType[currentDay] + '"></img><img src="./assets/graphics/full/' + PT.month[currentDay] + '/f-' + PT.day[currentDay] + 'b.' + PT.imageType[currentDay] + '"></img>'
	} else {
		var newImage = '<img src="./assets/graphics/full/' + PT.month[currentDay] + '/f-' + PT.day[currentDay] + '.' + PT.imageType[currentDay] + '"></img>'
	}

	document.querySelector('.day-content__link').innerHTML = newLink
	document.querySelector('.day-content__date').innerHTML = newTitle
	document.querySelector('.day-content__image').innerHTML = newImage
	document.querySelector('.day-content__notes').innerHTML = newNotes
}

document.querySelector('.day-content__next').addEventListener('click', function(){
	tomorrow()
})

document.querySelector('.day-content__prev').addEventListener('click', function(){
	yesterday()
})

var prevElem = document.querySelector('.day-content__prev')
var nextElem = document.querySelector('.day-content__next')

// .css('color', '#e5c53e').css('margin-top', '')


document.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
  	killModal()
  } else if (event.keyCode == 37) {
  	prevElem.style.color = '#e5c53e'
  	prevElem.style.margin = '0.1rem 0 0 2rem'
  	yesterday()

    setTimeout(leftreturncss, 300)
  } else if (event.keyCode == 39) {
  	nextElem.style.color = '#e5c53e'
  	nextElem.style.margin = '0.1rem 4rem 0 0'
  	tomorrow()

    setTimeout(rightreturncss, 300)
  }
});

function leftreturncss() {
	prevElem.style.color = 'black'
	prevElem.style.margin = '0 0 0 2rem'
}

function rightreturncss() {
	nextElem.style.color = 'black'
	nextElem.style.margin = '0 4rem 0 0'
}


function tomorrow() {
	console.log(currentDay)
	if(currentDay < totalDays) {
		currentDay++		
	} else {
		console.log('who knows what the future holds!')
	}
	sunrise()
}

function yesterday() {
	if(currentDay != 0) {
		currentDay--		
	} else {
		console.log('dont wanna get bogged down in the past')
	}
	sunrise()
}
