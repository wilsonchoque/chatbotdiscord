const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('puno')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply('Puno es una ciudad del sur de Perú ubicada junto al lago Titicaca,  uno de los lagos más grandes de Sudamérica y el cuerpo de agua navegable más alto del mundo. La ciudad es un núcleo comercial regional y también se considera la "capital folclórica" de Perú, por sus festivales tradicionales con animados espectáculos de música y danza. Los sitios icónicos incluyen la Catedral de Puno, una construcción');
	},
};
