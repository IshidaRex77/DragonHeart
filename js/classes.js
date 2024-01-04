$(function () {
	var hreoData = {
		"Berserker": {
			"icon":"berserker",
			"text": "Coming Soon!<br/><br/>Difficulty : ???????",
			"img": "berserker",
			"videourl": "cs.mp4"
		},
		"Dragoon": {
			"icon":"dragoon",
			"text": "Coming Soon!<br/><br/>Difficulty : ???????",
			"img": "dragoon",
			"videourl": "cs.mp4"
		},
		"Ranger": {
			"icon":"ranger",
			"text": "Armed with the art of archery, they protect nature with agility and deadly precision. <br/>Elegant in their deadly skills, they are the guardians of the wild.<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Elves & Demon",
			"img": "ranger",
			"videourl": "ranger.mp4"
		},
		"Warden": {
			"icon":"warden",
			"text": "A class favored by the forces of Dark and Light! Armed with a Sword and Shield <br/>they create the perfect balance between Offense and Defence!<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Elf Males & Kindred Female",
			"img": "warden",
			"videourl": "warden.mp4"
		},
		"Tormentor": {
			"icon":"tormentor",
			"text": "Purging the world of sin, they strike fear into their enemies with the most sadistic of <br/>tortures. A force to be reckoned with, they show no mercy in their quest for justice.<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Demon",
			"img": "tormentor",
			"videourl": "tormentor.mp4"
		},
		"Reaper": {
			"icon":"br",
			"text": "Driven by hatred and destruction, Blood Raiders are fearless warriors. They embrace pain, <br/>sacrificing themselves for greater power to destroy their enemies<br/>Difficulty : ★★★★★ &nbsp&nbsp&nbsp Available Races : Lycans & Kindred",
			"img": "br",
			"videourl": "br.mp4"
		},
		"Assassin": {
			"icon":"sin",
			"text": "Agile and deadly, assassins are stealthy predators who love light weapons and the cover <br/>of darkness. Unseen and unpredictable, they strike from the shadows.<br/>Difficulty : ★★★★★ &nbsp&nbsp&nbsp Available Races : Lycans, Kindred & Humans",
			"img": "sin",
			"videourl": "sin.mp4"
		},
		"Priest": {
			"icon":"priest",
			"text": "Bringing healing and protection to the battlefield, they harness the divine power of the <br/>gods to support their allies and revive the wounded.<br/>Difficulty : ★★★☆☆ &nbsp&nbsp&nbsp Available Races : Lycans, Elves & Humans",
			"img": "priest",
			"videourl": "priest.mp4"
		},
		"Mage": {
			"icon":"mage",
			"text": "Mages are masters of devastating magic who were drawn to its power and now spread its chaos.<br/>Their mastery of the arcane arts makes them a devestating foe.<br/>Difficulty : ★★★☆☆ &nbsp&nbsp&nbsp Available Races : Kindred & Humans",
			"img": "mage",
			"videourl": "mage.mp4"
		},
		"Vampire": {
			"icon":"vamp",
			"text": "Vampires can deal massive damage instantly, heal themselves and shapeshift. They are more <br/>powerful than you can imagine.<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Kindred",
			"img": "vamp",
			"videourl": "vamp.mp4"
		},
		"Warrior": {
			"icon":"war",
			"text": "Powerful melee fighters who wield large swords on the battlefield. With their exceptional <br/>endurance and combat skills, they charge into battle, cutting down their enemies.<br/>Difficulty : ★★★★★ &nbsp&nbsp&nbsp Available Races : Elves & Humans",
			"img": "war",
			"videourl": "war.mp4"
		},
		"Bard": {
			"icon":"bard",
			"text": "Agile and graceful, they play melodious music to inspire allies and frighten foes.<br/>With their musical talents, they can turn the tide of any battle in their favor.<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Elves",
			"img": "bard",
			"videourl": "bard.mp4"
		},
		"Marksman": {
			"icon":"mm",
			"text": "A deadly long-range combatant, dealing devastating damage with hand-crafted rifles. <br/>With their keen eyesight and steady hand, they can take down enemies from afar<br/>Difficulty : ★★★★☆ &nbsp&nbsp&nbsp Available Races : Dwarves",
			"img": "mm",
			"videourl": "mm.mp4"
		},
		"Protector": {
			"icon":"prot",
			"text": "Towering beings of stone, wielding massive hammers with unparalleled might.In times of<br/>crisis, they rise to the challenge, standing firm against any obstacle that may arise.<br/>Difficulty : ★★★☆☆ &nbsp&nbsp&nbsp Available Races : Stonemen",
			"img": "prot",
			"videourl": "prot.mp4"
		}
	};
	function listhero(obj){
		$(".hreoText h3 strong").html(obj);
		$(".hreoText h3 span").html('<img src="template/DragonHeart/images/'+hreoData[obj].icon+'.png">');
		$(".hreoText p").html(hreoData[obj].text);
		$(".hreoText video").attr("src",);
		$(".videohreo").html('<video src="template/DragonHeart/images/'+hreoData[obj].videourl+'" id="videoPlay" muted="true" preload loop></video>');
		$(".hreoImg").html('<img src="template/DragonHeart/images/'+hreoData[obj].img+'.png">');
		document.getElementById("videoPlay").play();
	};
	listhero($(".mainThird .hd span").eq(0).html());
	$(".mainThird .hd span").hover(function(){
		var txt = $(this).html();
		$(this).addClass("on").siblings().removeClass("on");
		listhero(txt);
	});	
});