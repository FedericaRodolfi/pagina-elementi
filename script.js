function avanti() {
	if ( $("#foto").hasClass("first") ) {
		$("#foto").removeClass("first")
		$("#foto").addClass("second")
	}
	else if( $("#foto").hasClass("second") ) {
		$("#foto").removeClass("second")
		$("#foto").addClass("third")
	}
	else if( $("#foto").hasClass("third") ) {
		$("#foto").removeClass("third")
		$("#foto").addClass("fourth")
	}
	else {
		$("#foto").removeClass("fourth")
		$("#foto").addClass("first")
	}
}

function indietro() {
	if ( $("#foto").hasClass("first") ) {
		$("#foto").removeClass("first")
		$("#foto").addClass("fourth")
	}
	else if( $("#foto").hasClass("second") ) {
		$("#foto").removeClass("second")
		$("#foto").addClass("first")
	}
	else if( $("#foto").hasClass("third") ) {
		$("#foto").removeClass("third")
		$("#foto").addClass("second")
	}
	else {
		$("#foto").removeClass("fourth")
		$("#foto").addClass("third")
	}
}

function compareslideshow() {
		$("#slidebox").removeClass("hide")
		$("#slidebox").addClass("show")
		$("#spinnerbox").removeClass("show")
		$("#spinnerbox").addClass("hide")
		$("#bookbox").removeClass("show")
		$("#bookbox").addClass("hide")
}

function comparespinner() {
		$("#spinnerbox").removeClass("hide")
		$("#spinnerbox").addClass("show")
		$("#slidebox").removeClass("show")
		$("#slidebox").addClass("hide")
		$("#bookbox").removeClass("show")
		$("#bookbox").addClass("hide")
}

function comparealtri() {
		$("#bookbox").removeClass("hide")
		$("#bookbox").addClass("show")
		$("#spinnerbox").removeClass("show")
		$("#spinnerbox").addClass("hide")
		$("#slidebox").removeClass("show")
		$("#slidebox").addClass("hide")
}

function comparepaste() {
		$("#drawbox").removeClass("show")
		$("#drawbox").addClass("hide")
		$("#pastebox").removeClass("show")
		$("#pastebox").addClass("hide")
}

function comparedisegni() {
		$("#pastebox").removeClass("show")
		$("#pastebox").addClass("hide")
		$("#drawbox").removeClass("show")
		$("#drawbox").addClass("hide")
}

function forward() {
	if ( $("#pagina").hasClass("first") ) {
		$("#pagina").removeClass("first")
		$("#foto").addClass("second")
	}
	else if( $("#pagina").hasClass("second") ) {
		$("#pagina").removeClass("second")
		$("#pagina").addClass("third")
	}
	else if( $("#pagina").hasClass("third") ) {
		$("#pagina").removeClass("third")
		$("#pagina").addClass("fourth")
	}
	else {
		$("#pagina").removeClass("fourth")
		$("#pagina").addClass("first")
	}
}

function back() {
	if ( $("#pagina").hasClass("first") ) {
		$("#pagina").removeClass("first")
		$("#pagina").addClass("fourth")
	}
	else if( $("#pagina").hasClass("second") ) {
		$("#pagina").removeClass("second")
		$("#pagina").addClass("first")
	}
	else if( $("#pagina").hasClass("third") ) {
		$("#pagina").removeClass("third")
		$("#pagina").addClass("second")
	}
	else {
		$("#pagina").removeClass("fourth")
		$("#pagina").addClass("third")
	}
}