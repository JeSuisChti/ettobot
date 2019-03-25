const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("*")

bot.on('ready', function () {
    bot.user.setGame('se programmer |' + prefix + 'help')
    console.log("Youpi ça fonctionne ! Je suis connectée !")

})

bot.login('NTU2MTYyNzAzMzc1MzM1NDI0.D25DAA.oBCKftVLcLV7gFO77es6Pein99Y')


bot.on('message', message=> {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes :\n ")+(prefix + "help");
    }
    if(message.content === "Salut"){
        message.reply("Bonjour ! :nerd:");
        console.log("Commande Salut exécuté");
    }
});


bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le serveur DelTTAriA ' + member.displayName)
    }).catch(console.error)
})
