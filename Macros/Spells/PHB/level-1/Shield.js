({
	name: "Shield",
	id: "w9xmvz697vd201vi",
	spellType: "aefx"
});
// @endmeta

// @include getTokenDae.js

if(args[0] === "on"){
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.opacity(0.3)
		.filter("Glow", { color: 0xffffff })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.blue")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.shield.01.intro.blue")
		.attachTo(casterToken)
		.scale(0.5)
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.shield.01.loop.blue")
		.attachTo(casterToken)
		.scale(0.5)
		.persist()
		.name(`Shield-${casterToken.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800);
	await sequence.play();
}

if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `Shield-${casterToken.id}`, object: casterToken });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.01.outro_explode.blue")
		.scale(0.5)
		.attachTo(casterToken);
	await sequence.play();
}
