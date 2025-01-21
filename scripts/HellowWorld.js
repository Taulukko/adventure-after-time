let thumbMapNames =  null;

Hooks.on("ready",   () => {
 //start game
});
 
 
//gerando o mapa de scenes
(async () => {
    console.log("Generating scenes thumb nail"); 
	thumbMapNames = new Map([
  ["Laboratório", 'laboratorio.webp'],
  ['Main', 'main.webp'],
  ["O Beco Curto", 'beco-curto.webp'],
  ["White Capel 1888", 'white-capel-1888.webp'],
  ["White Capel 2024", 'white-capel-2024.webp'],
  ["Laboratório 2024", 'laboratorio-2024.webp'], 
  ["Windrush Square", 'windrush-square.webp'],
  ["Laboratório 1877", 'laboratorio-1877.webp'],
  ["Laboratório After 2024", 'laboratorio-after-2024.webp'], 
  ["O Laboratório Antes de 2024", 'laboratorio-before-2024.webp']
]);
})();


Hooks.on("importAdventure",  (adventure, formData, created, updated) => 
{
	  
	game.scenes.forEach(async(scene)=>
	{
		 
		try{ 
			
			if(!thumbMapNames.has(scene.name)){
				return;
			}
			console.log(`Start regenerated thumbnail for ${scene.name}`);
			await scene.update({thumb: "modules/after-time-fate/assets/scenes/"+thumbMapNames.get(scene.name)});
		}
		catch(e){
			console.error(e);
		}
	});
	console.log("Thumbnails regenrated with success!");
 
 });
