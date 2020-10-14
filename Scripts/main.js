require('events').EventEmitter.prototype._maxListeners = 100;

function msleep(n) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function sleep(n) {
	msleep(n * 1000);
}

let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
	console.log("");
	client.user.setActivity("Doki Doki Literature Club", {
		type: "WATCHING"
	});
});

function msToTime(ms) {
	days = Math.floor(ms / 86400000); // 24*60*60*1000
	daysms = ms % 86400000; // 24*60*60*1000
	hours = Math.floor(daysms / 3600000); // 60*60*1000
	hoursms = ms % 3600000; // 60*60*1000
	minutes = Math.floor(hoursms / 60000); // 60*1000
	minutesms = ms % 60000; // 60*1000
	sec = Math.floor(minutesms / 1000);

	let str = "";
	if (days) str = str + days + "d";
	if (hours) str = str + hours + "h";
	if (minutes) str = str + minutes + "m";
	if (sec) str = str + sec + "s";

	return str;
}

                        client.on("message", (message) => {
			if (message.content.startsWith("!channel")) {
				message.channel.send('https://www.youtube.com/channel/UCaKuilleAM3MnguSs4TCpag');
                        }
                                  })


			client.on("message", (message) => {
				if (message.content.startsWith("!ping")) {
					message.channel.send("PONG!");
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!ismymumgae")) {
					let replies = ["Yes", "No"]
					let random = Math.floor(Math.random() * 2)
					message.channel.send(replies[random]);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!joke")) {
					let replies = ["What do you call a pig that does karate? A porkchop", "Why did the bycicle collapse? It was two tired", "What do you call a fish without eYes? A Fsh.", "Why did the scarecrow win an award? Because he was outstanding in his field!"]
					let random = Math.floor(Math.random() * 4)
					message.channel.send(replies[random]);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!oniichan")) {
					message.channel.send("I have a dick!");
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!onii-chan")) {
					message.channel.send("I have a dick!");
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!morning")) {
					message.channel.send("Oh shoot it's morning, Bone ear arises.");
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!question")) {
					let replies = ["Yes", "No"];
					let random = Math.floor(Math.random() * 2);
					message.channel.send(replies[random]);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!botuptime")) {
					let roundedNum = msToTime(client.uptime);
					message.channel.send(roundedNum);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!lenny")) {
					let roundedNum = msToTime(client.uptime);
					message.channel.send("( ͡° ͜ʖ ͡°)");
				}
			});


			client.on("message", (message) => {
				if (message.content.startsWith("!girls")) {
					let replies = ["The DDLC girls are currently fighting over your P...", "The DDLC girls are fighting over melon sizes"];
					let random = Math.floor(Math.random() * 2);
					message.channel.send(replies[random]);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!ppsize")) {
					let replies = ["8==D", "8===D", "8====D", "8=====D", "8======D", "8============D", "8============================================================D"];
					let random = Math.floor(Math.random() * 7);
					message.channel.send(replies[random]);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!changebotstatus")) {
					let args = message.content.replace("!changebotstatus ", "");
					if (message.member.hasPermission("ADMINISTRATOR")) {
						client.message.channel.sendsetActivity(args.toString(), {
							type: "WATCHING"
						});
					}
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!nitrogive")) {
					const exampleEmbed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setTitle('Free Nitro')
						.setURL('https://discord.com')
						.setAuthor('Discord', 'https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png', 'https://discord.com')
						.setDescription('Free!')
						.setThumbnail('https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png')
						.addFields()
						.setImage('https://i.imgur.com/vPmKOlt.png')
						.setTimestamp();
					message.channel.send(exampleEmbed);
				}
			});

			client.on("message", (message) => {
				if (message.content.startsWith("!trumptweet")) {
					let args = message.content.replace("!trumptweet ", "");
					let replaced = args.split(' ').join('%20');
					const exampleEmbed = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setTitle('Tweet by Trump')
						.setURL('https://twitter.com')
						.setAuthor('Discord', 'https://i.imgur.com/n1LIixG.jpg', 'https://twitter.com')
						.setDescription('Tweet')
						.setThumbnail('https://i.imgur.com/n1LIixG.jpg')
						.addFields()
						.setImage('https://api.no-api-key.com/api/v2/trump?message=' + replaced.toString())
						.setTimestamp();
					message.channel.send(exampleEmbed);
				}
			});

                                               let embed1 = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setTitle('Your charizard wants to kill you.')
						.setURL('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97698f60-bc22-4e73-90ac-9c218eed4ef9/dbjydwb-7791e08c-4888-404f-9562-385d6b04ce51.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTc2OThmNjAtYmMyMi00ZTczLTkwYWMtOWMyMThlZWQ0ZWY5XC9kYmp5ZHdiLTc3OTFlMDhjLTQ4ODgtNDA0Zi05NTYyLTM4NWQ2YjA0Y2U1MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.exaDACGuXAUULh4mJNw8D_cb-bKV5u3rEeN5TdKCbcU')
						.setAuthor('Charizard', 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png', 'https://discord.com')
						.setDescription('Run!')
						.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5VJo8A-8MRAPBOioJwxsptR9_4SpVtkrRSg&usqp=CAU')
						.addFields()
						.setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43d744cc-5db1-4f9b-a803-d7f2e009ca3c/d3bqkt6-97dbfdb0-e654-438d-837e-fb98d69b0538.png/v1/fill/w_900,h_720,q_80,strp/charizard_by_turbocharge0_d3bqkt6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC80M2Q3NDRjYy01ZGIxLTRmOWItYTgwMy1kN2YyZTAwOWNhM2NcL2QzYnFrdDYtOTdkYmZkYjAtZTY1NC00MzhkLTgzN2UtZmI5OGQ2OWIwNTM4LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cIcTuRq0_SavFi_oV0SjQyl7OU5mKiRw2OdIYEHPh8Y')
						.setTimestamp();

                                               let embed2 = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setTitle('Your charizard is happy!')
						.setURL('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97698f60-bc22-4e73-90ac-9c218eed4ef9/dbjydwb-7791e08c-4888-404f-9562-385d6b04ce51.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTc2OThmNjAtYmMyMi00ZTczLTkwYWMtOWMyMThlZWQ0ZWY5XC9kYmp5ZHdiLTc3OTFlMDhjLTQ4ODgtNDA0Zi05NTYyLTM4NWQ2YjA0Y2U1MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.exaDACGuXAUULh4mJNw8D_cb-bKV5u3rEeN5TdKCbcU')
						.setAuthor('Charizard', 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png', 'https://discord.com')
						.setDescription('Happy :D')
						.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5VJo8A-8MRAPBOioJwxsptR9_4SpVtkrRSg&usqp=CAU')
						.addFields()
						.setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97698f60-bc22-4e73-90ac-9c218eed4ef9/dbjydwb-7791e08c-4888-404f-9562-385d6b04ce51.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTc2OThmNjAtYmMyMi00ZTczLTkwYWMtOWMyMThlZWQ0ZWY5XC9kYmp5ZHdiLTc3OTFlMDhjLTQ4ODgtNDA0Zi05NTYyLTM4NWQ2YjA0Y2U1MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.exaDACGuXAUULh4mJNw8D_cb-bKV5u3rEeN5TdKCbcU')
						.setTimestamp();

			client.on("message", (message) => {
				if (message.content.startsWith("!charizard")) {
					let embeds = [embed1, embed2]
                                        let random = Math.floor(Math.random() * 2)
					message.channel.send(embeds[random]);
				}
			});

			client.on("message", (message) => {
        if (message.content.startsWith("!commands")) {
							message.channel.send("List:");
							message.channel.send("1. !ismymumgae");
							message.channel.send("2. !ping");
							message.channel.send("3. !joke");
							message.channel.send("4. !oniichan");
							message.channel.send("5. !morning");
							message.channel.send("6. !question");
							message.channel.send("7. !botuptime");
							message.channel.send("8. !lenny");
							message.channel.send("9. !girls");
							message.channel.send("10. !ppsize");
							message.channel.send("11. !changebotstatus");
							message.channel.send("12. !nitrogive");
                                                        message.channel.send("13. !trumptweet")
                                                        message.channel.send("14. !charizard")
      }
						});

client.on('guildMemberAdd', member => {
    let randommessage = ["We hope you brought pizza!", "Um, wheres the food that you were supposed to bring?"]
    let random = Math.floor(Math.random() * 3)
    client.channels.cache.get('765319571120062484').send("Welcome, @" + member.displayName + "!" + " " + randommessage[random]); 
});

client.on('guildMemberRemove', member => {
    let randommessage = ["Goodbye :("]
    client.channels.cache.get('765319604184416257').send("Bye, @" + member.displayName + "!"); 
});

client.login("token here");
