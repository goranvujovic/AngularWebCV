function animate(){
	alert('Pre Animaition');
	var animation = bodymovin.loadAnimation({
    container:document.getElementById('button'),
    render:'svg',
    loop:true,
    autoplay:true,
    path:'assets/json/data.json',
 })
	alert('Post Animaition');
}
alert('Animaition');

