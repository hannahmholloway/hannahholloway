var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//FADE-OUT SCROLL
$(window).scroll(function(){
    $(".fadeOutScroll").css("opacity", 1 - $(window).scrollTop() / 800);
  });
//SMOOTH SCROLL
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                const $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                };
            });
        }
    }
});

//THREE.JS
var camera, scene, renderer, composer;
var object, light;
var glitchPass;
glitchyIcosahedron();
animate();
function glitchyIcosahedron() {
	renderer = new THREE.WebGLRenderer({canvas: document.getElementById('headerCanvas'), alpha: true});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;
	scene = new THREE.Scene();
	
	const icosahedronMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    icosahedron = new THREE.Mesh(new THREE.IcosahedronGeometry(100,0), icosahedronMaterial);
    icosahedron.rotation.z = 0.5;
    scene.add(icosahedron);
    camera.lookAt(icosahedron.position);
	
	scene.add( new THREE.AmbientLight( 0x222222 ) );
	light = new THREE.DirectionalLight( 0x777777 );
	light.position.set( 1, 1, 1 );
	scene.add( light );
    
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );
	glitchPass = new THREE.GlitchPass();
	glitchPass.renderToScreen = true;
	composer.addPass(glitchPass);
    
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	composer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
    icosahedron.rotation.x+=.2/100;
    icosahedron.rotation.y+=.1/100;
	composer.render();
}
//REDUCAE ANIMATIONS
//$('#reduceAnimation').click(function(){
//    glitchPass.renderToScreen = false;
//    $('#reduceAnimation').html('Restore Animations');
//});
$('#reduceAnimation').click(function(){
    $("#reduceAnimation").fadeOut( 1600, "linear");
    glitchPass.renderToScreen = false;
});

//PARTICLES.JS
particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1000}},"color":{"value":"#00f428"},"shape":{"type":"star","stroke":{"width":0,"color":"#00f428"},"polygon":{"nb_sides":12},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.09620472365193136,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#00f428","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"bottom","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

}
/*
     FILE ARCHIVED ON 06:51:42 Aug 23, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:58:43 Apr 28, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 126.824
  exclusion.robots: 0.217
  exclusion.robots.policy: 0.2
  RedisCDXSource: 2.178
  esindex: 0.016
  LoadShardBlock: 98.983 (3)
  PetaboxLoader3.datanode: 101.766 (4)
  CDXLines.iter: 21.733 (3)
  load_resource: 116.856
  PetaboxLoader3.resolve: 55.843
*/