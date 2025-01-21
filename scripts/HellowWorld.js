

//este rodou ao instalar
Hooks.on("ready",   () => {
  console.log("Hello world2"); 
	  
 });
 
let thumbMapNames =  null;
 
//gerando o mapa de scenes
(async () => {
    console.log("Generating scenes thumb nail"); 
	thumbMapNames = new Map([
  ["Laboratório", 'laboratorio.webp'],
  ['Main', 'main.webp'],
  ["O Beco Curto", 'beco-curto.webp'],
  ["White Capel 1888", 'white-capel.webp'],
]);
})();




Hooks.on("importAdventure",  (adventure, formData, created, updated) => 
{
	  
	game.scenes.forEach(async(scene)=>
	{
		 
		try{ 
			console.log(`Start regenerated thumbnail for ${scene.name}`);
			if(!thumbMapNames.has(scene.name)){
				return;
			}
			await scene.update({thumb: "modules/after-time-fate/assets/scenes/"+thumbMapNames.get(scene.name)});
			console.log("Thumbnail regenrated with success!");
			
		}
		catch(e){
			console.log(e);
		}
	});
 
 });
