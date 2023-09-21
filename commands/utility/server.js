const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		return interaction.reply(`Nombre del servidor: ${interaction.guild.name}\nMiembros totales: ${interaction.guild.memberCount}`);
	},
};
